import Header from "@/components/Header";
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
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10; // Number of projects to fetch per page

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1); // Reset to the first page when changing tabs
  };

  const { data, isLoading, isError } = useQuery(
    ["projects", currentPage],
    async () => {
      const data = await projectApi.getProjects(projectsPerPage, currentPage);
      return data;
    },
    // {
    //   initialData: projects,
    // }
  );

  let filteredData = data;

  if (activeTab !== "all") {
    filteredData = data && data?.filter((item) => item?.category === activeTab);
  }

  const totalPages = Math.ceil(filteredData && filteredData?.length / projectsPerPage);

  if (isLoading) {
    return "Loading...";
  }

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  // Calculate the indices of the projects to display for the current page
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const visibleProjects = filteredData && filteredData?.slice(startIndex, endIndex);
  return (
    <>
    <Header heading="Portfolio" subHeading="Home > Portfolio"/>
    <div className="bg-F5F5F5 py-4 mt-10 lg:mt-16">
      <div className="flex flex-col items-center">
        <div className="text-center text-base lg:text-xl font-semibold">OurWork</div>
        <div>
          <div
            className="text-center text-xl sm:text-2xl lg:text-4xl font-bold mb-4 lg:mr-5"
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
          activeTab === "mobile" ? "bg-[#FB1D87] text-white" : "bg-[#FED2E7] text-black"
        }`}
        style={{
          width: "140px",
          height: "65px",
          borderRadius: "33px 33px 33px 10px",
        }}
        onClick={() => handleTabClick("mobile")}
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
        {visibleProjects && visibleProjects?.map((item) => (
          <PortFolios image={item?.images[0]?.url} />
        ))}
        <div className="w-full flex justify-center items-center my-16">
          <nav className="pagination">
            <ul className="flex items-center justify-center">
              <li className="mr-2">
                <button
                  className="px-3 py-1 rounded-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(251, 29, 135, 0.2)",
                    borderRadius: "5px",
                  }}
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                >
                  <Image src={backward} alt="" />
                </button>
              </li>
              {Array.from({ length: totalPages }).map((_, index) => (
                <li className="mr-2" key={index}>
                  <button
                    className={`px-3 py-1 rounded-lg ${
                      currentPage === index + 1 ? "bg-gray-200" : ""
                    }`}
                    style={{
                      width: "40px",
                      height: "40px",
                      backgroundColor: "rgba(251, 29, 135, 0.2)",
                      borderRadius: "5px",
                    }}
                    onClick={() => handlePageClick(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
              <li className="mr-2">
                <button
                  className="px-3 py-1 rounded-lg"
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "rgba(251, 29, 135, 0.2)",
                    borderRadius: "5px",
                  }}
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                >
                  <Image src={forward} alt="" />
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
