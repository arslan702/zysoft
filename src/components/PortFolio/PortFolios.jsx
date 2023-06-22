import Image from "next/image";
import React from "react";

function PortFolios({ image }) {
  return (
    <>
      <div
        className="w-[360px] h-[300px] sm:h-[400px] mx-4 my-4 bg-white shadow-md rounded-md cursor-pointer"
      >
        <div className="h-2/5">
          <Image
            src={image}
            style={{ height: "400px" }}
            alt="Image"
            width={500}
            height={500}
            className="object-cover w-full h-[300px] sm:h-[400px] rounded-md"
          />
        </div>
      </div>
    </>
  );
}

export default PortFolios;
