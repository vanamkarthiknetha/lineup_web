import { useState } from "react";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});


export default function WhoIsItFor() {
  const [activeCategory, setActiveCategory] = useState(1);

  const categories = [
    {
      id: "01",
      title: "Performers",
      subtitle: "DJs, Collective and Labels",
      image: "/who/Performers.png",
    },
    {
      id: "02",
      title: "Venues",
      subtitle: "Nightclubs, bars, restaurants, hotels, art galleries, cafés",
      image: "/who/Venues.png",
    },
    {
      id: "03",
      title: "Organizers",
      subtitle: "Event Mgmt, Ticket Distribution",
      image: "/who/Organizers.png",
    },
    {
      id: "04",
      title: "Members",
      subtitle: "Join our Community",
      image: "/who/Members.png",
    },
  ];

  return (
    <div className="w-full ">
      <div className="container mx-auto px-24 pb-24">
        <h1 className="text-[50px] font-bold mb-16 text-center">
          Who Is It For?
        </h1>

        <div className={`flex flex-row ${inter.className}`}>
          {/* Left side - numbered menu */}
          <div className="w-full md:w-1/2 space-y-12">
            {categories.map((category, index) => (
              <div
                key={category.id}
                className="flex items-start gap-6 cursor-pointer"
                onClick={() => setActiveCategory(index + 1)}
              >
                <span
                  className={`text-[80px] font-bold ${
                    activeCategory === index + 1
                      ? "text-white"
                      : "text-[#929292]"
                  }`}
                >
                  {category.id}
                </span>
                <div className="flex flex-col mt-3">
                  <span
                    className={`text-[50px] font-bold  ${
                      activeCategory === index + 1
                        ? "text-white"
                        : "text-[#929292]"
                    }`}
                  >
                    {category.title}
                  </span>
                  <span
                    className={`text-[20px]  ${
                      activeCategory === index + 1
                        ? "text-[#929292]"
                        : "text-gray-700"
                    } leading-[150%]`}
                  >
                    {activeCategory === index + 1 ? category.subtitle : ""}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Right side - changing images */}
          <div className="w-1/2 mt-0">
            <div className="relative w-full h-full overflow-hidden rounded">
              {/* First image (DJ equipment with phone) - shown when activeCategory is 1 */}
              {activeCategory === 1 && (
                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                  <img
                    src={categories[0].image}
                    alt="DJ equipment with smartphone"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Second image (Phone with red interface) - shown when activeCategory is 2 */}
              {activeCategory === 2 && (
                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                  <img
                    src={categories[1].image}
                    alt="Smartphone with venue app interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Third image - shown when activeCategory is 3 */}
              {activeCategory === 3 && (
                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                  <img
                    src={categories[2].image}
                    alt="Organizers app interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              {/* Fourth image - shown when activeCategory is 4 */}
              {activeCategory === 4 && (
                <div className="absolute inset-0 transition-opacity duration-500 ease-in-out">
                  <img
                    src={categories[3].image}
                    alt="Members app interface"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
