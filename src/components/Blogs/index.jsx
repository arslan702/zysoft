import Image from "next/image";
import React, { useState } from "react";
import forward from "../../../public/images/right.png";
import backward from "../../../public/images/left.png";
import BlogCard from "./blogCards";
import { useQuery } from "@tanstack/react-query";
import blogApi from "@/lib/blogApi";

function Boxes() {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 3;

  const { data, isLoading, isError } = useQuery(["blogs"], async () => {
    const data = await blogApi.getBlogs();
    return data;
  });

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = data ? data?.slice(startIndex, endIndex) : [];

  const totalPages = Math.ceil((data ? data?.length : 0) / pageSize);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (endIndex < (data ? data?.length : 0)) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className="bg-F5F5F5 py-4 mt-4  px-6 md:px-16">
      <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-10 mt-8 md:mt-16 lg:mr-10">Blogs</h1>
      <div className="flex flex-wrap justify-center">
        <BlogCard data={paginatedData} />
        <div className="w-full flex justify-center my-16">
          <nav className="pagination">
            <ul className="flex items-center">
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
                >
                  <Image src={backward} alt="" />
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
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
                    onClick={() => setCurrentPage(index + 1)}
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
                >
                  <Image src={forward} alt="" />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Boxes;
