import Header from "@/components/Header";
import Designs from "@/components/PortFolio/Designs";
import PortFolios from "@/components/PortFolio/PortFolios";
import projectApi from "@/lib/project";
import { useQuery } from "@tanstack/react-query";
import forward from '../../../public/images/right.png'
import backward from '../../../public/images/left.png'
import React from "react";
import Image from "next/image";
import { useState } from "react";

function PortFolio({projects}) {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const { data, isLoading, isError } = useQuery(
    ["projects"],
    async () => {
      const data = await projectApi.getProjects();
      return data;
    },
    {
      initialData: projects,
    }
  );

  console.log({data})

  if(isLoading) {
    return 'Loading...'
  }
  return (
    <>
    <Header heading="Portfolio" subHeading="Home > Portfolio"/>
    <div className="bg-F5F5F5 py-4 mt-10 lg:mt-16">
      <div className="flex flex-col items-center">
        <div className="text-center text-base lg:text-xl font-semibold">OurWork</div>
        <div>
          <div
            className="text-center text-xl sm:text-2xl lg:text-4xl font-bold mb-4"
          >
            PortFolio
          </div>
        </div>
      </div>
      <div className="flex justify-center text-[10px] sm:text-xs md:text-base font-medium mt-8 gap-x-2 px-6">
      <div
        className={`flex flex-row items-center justify-center cursor-pointer w-[140px] md:w-[80px] ${
          activeTab === "all" ? "bg-[#FB1D87] text-white" : "bg-[#FED2E7] text-black"
        }`}
        style={{
          height: "65px",
          borderRadius: "35.5px 35.5px 35.5px 10px",
        }}
        onClick={() => handleTabClick("all")}
      >
        All
      </div>
      <div
        className={`flex items-center justify-center cursor-pointer ${
          activeTab === "website" ? "bg-[#FB1D87] text-white" : "bg-[#FED2E7] text-black"
        }`}
        style={{
          width: "140px",
          height: "65px",
          borderRadius: "33px 33px 33px 10px",
        }}
        onClick={() => handleTabClick("website")}
      >
        Website
      </div>
      <div
        className={`flex items-center justify-center cursor-pointer ${
          activeTab === "mobileApp" ? "bg-[#FB1D87] text-white" : "bg-[#FED2E7] text-black"
        }`}
        style={{
          width: "140px",
          height: "65px",
          borderRadius: "33px 33px 33px 10px",
        }}
        onClick={() => handleTabClick("mobileApp")}
      >
        Mobile App
      </div>
      <div
        className={`flex items-center justify-center cursor-pointer ${
          activeTab === "graphic" ? "bg-[#FB1D87] text-white" : "bg-[#FED2E7] text-black"
        }`}
        style={{
          width: "140px",
          height: "65px",
          borderRadius: "33px 33px 33px 10px",
        }}
        onClick={() => handleTabClick("graphic")}
      >
        Graphic
      </div>
      <div
        className={`flex items-center justify-center cursor-pointer ${
          activeTab === "uiux" ? "bg-[#FB1D87] text-white" : "bg-[#FED2E7] text-black"
        }`}
        style={{
          width: "140px",
          height: "65px",
          borderRadius: "33px 33px 33px 10px",
        }}
        onClick={() => handleTabClick("uiux")}
      >
        UI UX
      </div>
    </div>
      <div className="flex flex-wrap justify-center mt-12 px-6 lg:px-16">
        {data?.map((item) => (
        <PortFolios image={item?.images[0]?.url} />
        ))}
        <div className="w-full flex justify-center items-center my-16">
          <nav className="pagination">
            <ul className="flex items-center justify-center">
              {" "}
              {/* Updated line */}
              <li className="mr-2">
                <button
                  className="px-3 py-1 rounded-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(251, 29, 135, 0.2)",
                    borderRadius: "5px",
                  }}
                >
                  <Image src={backward} alt=""/>
                </button>
              </li>
              <li className="mr-2">
                <button
                  className="px-3 py-1 rounded-lg bg-gray-200"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(251, 29, 135, 0.2)",
                    borderRadius: "5px",
                  }}
                >
                  1
                </button>
              </li>
              <li className="mr-2">
                <button
                  className="px-3 py-1 rounded-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(251, 29, 135, 0.2)",
                    borderRadius: "5px",
                  }}
                >
                  2
                </button>
              </li>
              <li className="mr-2">
                <button
                  className="px-3 py-1 rounded-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(251, 29, 135, 0.2)",
                    borderRadius: "5px",
                  }}
                >
                  3
                </button>
              </li>
              <li className="mr-2">
                <button
                  className="px-3 py-1 rounded-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(251, 29, 135, 0.2)",
                    borderRadius: "5px",
                  }}
                >
                  <Image src={forward} alt=""/>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    </>
  );
}

export default PortFolio;
