import React from "react";

const cardsData = [
  {
    imageSrc: "https://www.linkpicture.com/q/Rectangle-12.png",
    title: "Lorem ipsum dolor sit amet, consectetur ",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imageSrc: "https://www.linkpicture.com/q/Rectangle-14_5.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imageSrc: "https://www.linkpicture.com/q/Rectangle-16_3.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },

  {
    imageSrc: "https://www.linkpicture.com/q/Rectangle-20.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imageSrc: "https://www.linkpicture.com/q/Rectangle-21_1.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    imageSrc: "https://www.linkpicture.com/q/Rectangle-22.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

const DevCards = () => {
  return (
    <div className="flex justify-center items-center   bg-gray-100">
      <div className="grid grid-cols-3 space-x-5 space-y-8  m-10 py-10">
        {cardsData.map((card, index) => (
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="flex">
              <div className="px-4  py-5">
                <button className="rounded-xl w-40 h-10 text-white  bg-gradient-to-r from-[#9F37F0] to-[#3C1B65]">
                  {" "}
                  Web Development
                </button>
                <span className="mx-20">12 May 2023</span>
                <div className="font-semibold text-xl mb-3 my-5">
                  {card.title}
                </div>
                <p className="text-gray-700 text-base">{card.description}</p>
              </div>
            </div>
            <div className="flex px-8">
              <span className="">2 Comments</span>
              <span className="px-20 m-2"> 2K likes</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevCards;
