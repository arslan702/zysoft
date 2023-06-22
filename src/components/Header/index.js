import Image from "next/image";
import React from "react";

function Header({ heading, subHeading }) {
  return (
    <div style={{ height: "230px", backgroundColor: "#F7F7FF" }}>
      <div className="flex flex-row">
        <div className="ml-100 pt-10" style={{ marginLeft: "70px" }}>
          <Image
            src={"/images/group9.png"}
            alt="img"
            width={300}
            height={300}
            style={{ height: "131px", width: "447px" }}
          />
        </div>
        <div
          className="pt-10 mt-5 flex flex-col items-center"
          style={{ paddingLeft: "90px" }}
        >
          <div
            className="font-normal font-bold text-4xl leading-tight"
            style={{ fontWeight: "700" }}
          >
            {heading}
          </div>
          <div>{subHeading}</div>
        </div>

        <div className="pt-5" style={{ marginLeft: "400px" }}>
          <Image
            src={"/images/group13.png"}
            alt="img"
            width={300}
            height={300}
            style={{ height: "91px", width: "91px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
