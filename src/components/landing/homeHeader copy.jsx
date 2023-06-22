import Image from "next/image";
import React from "react";

function HomeHeader() {
  return (
    <div
      className="bg-[url('https://www.linkpicture.com/q/headerOne.png')] bg-[#F7F7FF] grid grid-cols-2 "
      style={{ height: "969px" }}
    >
      <div className="px-">
        {/* <div className="bg-[url('/images/homeHeader.png')]" style={{height: '400px'}}></div> 
       <Image src={'/images/homeHeader.png'} height={300} width={300} style={{height: '500px'}}/>
    */}
        <div className="flex">
          <div>
            <h1 className=" font-semibold px-44 py-5 text-[#3C1B65] ">
              Creative Digital Agency{" "}
            </h1>
            <h1 className="text-6xl font-semibold px-24 text-[#3C1B65]  line-throu decoration-[#FB1D87]">
              {" "}
              We Build Creative{" "}
            </h1>
            <h1 className="text-6xl font-semibold px-24 text-[#FB1D87]">
              {" "}
              Website & Apps
            </h1>
            <h1 className="px-28 py-10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </h1>
            <div className="w-auto px-14">
              <a
                className="inline-block px-10 py-3 text-white font-semibold tracking-tight bg-gradient-to-r from-[#9F37F0] to-[#3C1B65]  rounded-3xl focus:ring-4 mx-28 focus:ring-indigo-400 transition duration-200"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[url('https://www.linkpicture.com/q/headerOne.png')]">
        <img
          src="https://www.linkpicture.com/q/ccccccccccccccccccccccccccc-1_3.png"
          className=""
          alt=""
        />
      </div>
    </div>
  );
}

export default HomeHeader;
