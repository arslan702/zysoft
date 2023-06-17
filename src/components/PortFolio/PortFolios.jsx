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

function PortFolios({ image }) {
  return (
    <>
      <div
        style={{ width: "392px", height: "400px", cursor: "pointer" }}
        className="w-64 h-80 mx-4 my-4 bg-white shadow-md rounded-md"
      >
        <div className="h-2/5">
          <Image
            src={image}
            style={{ height: "400px" }}
            alt="Image"
            width={500}
            height={500}
            className="object-cover w-full h-full rounded-t-md"
          />
        </div>
      </div>
    </>
  );
}

export default PortFolios;
