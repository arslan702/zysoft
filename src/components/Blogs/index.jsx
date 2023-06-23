import Image from "next/image";
import React from "react";
import forward from '../../../public/images/right.png'
import backward from '../../../public/images/left.png'
import BlogCard from "./blogCards";

function Boxes() {
  
  return (
    <div className="bg-F5F5F5 py-4 mt-4  px-6 md:px-16">
    <h1 className="text-center text-2xl md:text-4xl font-bold mb-6 md:mb-10 mt-8 md:mt-16">Blogs</h1>
      <div className="flex flex-wrap justify-center">
        <BlogCard />
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
  );
}

export default Boxes;
