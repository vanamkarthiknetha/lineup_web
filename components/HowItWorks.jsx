import React from 'react';

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Create Your Event",
      description: "Name your event, choose a date and time, and decide on its visibility—public, invitation-only, or private."
    },
    {
      number: 2,
      title: "Set Entries",
      description: "List one or more entry types by adding a name, quantity, price, and a brief description."
    },
    {
      number: 3,
      title: "Book a Venue & Performers",
      description: "Use your projected ticket revenue to book venues and performers directly via the app—or opt for upfront payments. LineUp manages contracts, insurance, and ensures seamless payouts."
    },
    {
      number: 4,
      title: "Customize Your Event",
      description: "Set a clear refund policy, establish affiliate rewards for referrals, or simply take full control—organize your event without booking a venue or performer by adding your own venue details or uploading a custom playlist."
    },
    {
      number: 5,
      title: "Publish & Check-In",
      description: "Publish your event and start selling entries. On the day, use our built-in ticket scanner (or delegate to trusted helpers) to verify attendance. "
    },
    {
      number: 6,
      title: "Get Paid, Engage with the community, and Wrap Up",
      description: "Dive into AI’s long-term impact, attend expert-led workshops, and watch the startup pitch competition. The event closes with a visionary keynote and final networking sessions."
    }
  ];

  return (
    <div className="mx-auto mt-40 mb-56">
      <h1 className="text-[50px] font-semibold text-center mb-16">How it Works?</h1>
      
      <div className="relative">
        {/* Vertical line - adjusted to perfectly align with circles */}
        <div className="absolute left-72 top-0 bottom-0 w-px bg-step"></div>
        
        {steps.map((step, index) => (
          <div key={step.number} className="relative mb-24 last:mb-0">
            <div className="flex ">
              <div className="pr-18 w-72 flex-shrink-0">
                <h2 className="text-[40px] font-bold text-desc">Step {step.number}</h2>
              </div>
              
              <div className="relative">
                {/* Circle marker - positioned to overlay the vertical line */}
                <div className="absolute -left-2  w-4 h-4 rounded-full bg-step"></div>
                
                <div className='pl-20 pb-12' >
                  <h3 className="text-[40px] font-bold  mb-5 max-w-xl">{step.title}</h3>
                  <p className="text-[20px] leading-[30px] text-desc max-w-xl ">{step.description}</p>
                </div>
              </div>
            </div>
            
            {/* Horizontal divider line after each step (except last) */}
            {index < steps.length - 1 && (
              <div className="mt-12 ml-[19rem] border-t border-step w-full max-w-2xl"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}