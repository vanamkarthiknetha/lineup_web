import connectToDb from '@/db/middleware/mongoose';
import Waitlist from '@/db/models/Waitlist';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';
import * as XLSX from 'xlsx';


export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get('token');

  if (token !== process.env.DOWNLOAD_TOKEN) {
    return new Response('Unauthorized', { status: 401 });
  }

  await connectToDb();

  try {
    const rawData = await Waitlist.find().lean();
    const data = rawData.map((item) => ({
        name: item.name,
        surname: item.surname,
        email: item.email,
        phone: item.phone,
        "What do you plan to use LineUp for?": item.purpose,
        "Who are you?": item.userType,
        "Who are you?(Others)": item.userTypeDescription,
        "Want to be part of our beta test?": item.betaTest?"Yes":"No",
        "Date": new Date(item.createdAt).toISOString().split('T')[0], // Format createdAt date
      }));
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    return new Response(buffer, {
      headers: {
        'Content-Disposition': 'attachment; filename="client-data.xlsx"',
        'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      },
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to generate Excel file' }, { status: 500 });
  }
}
