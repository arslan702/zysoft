import Image from "next/image";
import React from "react";

const data = [
  {
    image: "/images/portOne.png",
  },
  {
    image: "/images/portThree.png",
  },
  {
    image: "/images/portFour.png",
  },
  {
    image: "/images/portSix.png",
  },
  {
    image: "/images/portSeven.png",
  },
  {
    image: "/images/portNine.png",
  },
];

function Designs({image, heading}) {
  return (
    <>
        <div
  style={{ width: "392px", height: "400px", cursor: "pointer" }}
  className="w-64 h-80 mx-4 my-4 bg-white shadow-md rounded-md"
>
  <div className="h-2/5">
    <Image
      src={image}
      style={{ height: "293px" }}
      alt="Image"
      width={500}
      height={500}
      className="object-cover w-full h-full rounded-t-md"
    />
  </div>
  <div className="p-4">
    <h2
      className="text-black text-lg md:text-xl font-medium ml-4"
      style={{
        fontStyle: "normal",
        width: '70px',
        fontWeight: 700,
        fontSize: "24px",
        lineHeight: "30px",
        marginTop: "140px",
      }}
    >
      {heading}
    </h2>
  </div>
</div>

    </>
  );
}

export default Designs;
