import blogApi from "@/lib/blogApi";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/router";
import parse from 'html-react-parser';
import React from "react";

// const data = [
//   {
//     image: "/images/blogone.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blogtwo.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blogthree.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blogfour.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blogfive.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blogsix.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blogseven.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blogeight.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
//   {
//     image: "/images/blognine.png",
//     title: "Lorem ipsum dolor sit amet, consectetur",
//     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
//   },
// ];


function Boxes({blogs}) {
  const router = useRouter()
  const { data, isLoading, isError } = useQuery(
    ["blogs"],
    async () => {
      const data = await blogApi.getBlogs();
      return data;
    },
    {
      initialData: blogs,
    }
  );

  console.log({data})

  function formatDate(timestamp) {
    const dateArray = timestamp.split(" ");
    const day = dateArray[2];
    const month = dateArray[1];
    const year = dateArray[3];
    const formattedDate = day + " " + month + " " + year;
    return formattedDate;
  }
  
  function extractFirst100Words(paragraph) {
    const regex = /\{parse\((.*?)\)\}/; // Regular expression to extract the parsed content
    const matches = regex.exec(paragraph);
    
    if (matches && matches[1]) {
      const parsedContent = matches[1];
      const words = parsedContent.split(" ");
      const first100Words = words.slice(0, 30);
      const trimmedParagraph = first100Words.join(" ");
      return parse(trimmedParagraph);
    } else {
      return ""; // Return empty string if no valid parsed content is found
    }
  }
    console.log({data})
  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/blogDetail/${id}`)
  }
  return (
    <div className="bg-F5F5F5 py-4 mt-4">
    <h1 className="text-center text-2xl font-bold mb-4" style={{fontSize: '2.5rem'}}>Blogs</h1>
      <div className="flex flex-wrap justify-center">
        {data?.map((item, index) => (
          <div
            key={index}
            style={{ width: "392px", height: "508px", cursor: 'pointer' }}
            className="w-64 h-80 mx-4 my-4 bg-white shadow-md rounded-md"
            onClick={(e) => handleClick(e, item?.id)}
          >
            <div className="h-2/5">
              <Image
                src={item?.images[0]?.url}
                style={{ height: "232px" }}
                alt="Image"
                width={200}
                height={200}
                className="object-cover w-full h-full rounded-t-md"
              />
            </div>
            <div className="p-4 pt-12">
              <div className="flex items-center justify-between">
                <button className="w-48 md:w-173 h-10 md:h-36.29 bg-purple-700 rounded-md text-white">
                  Web Development
                </button>
                <div className="text-gray-700">{formatDate(item?.createdAt)}</div>
              </div>
              <h2 className="text-black text-lg md:text-xl font-medium mt-2">
                {item?.name}
              </h2>
              <p className="text-black text-sm md:text-base mt-2">
                {parse(item?.description)}
              </p>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <div className="w-4 h-4">
                    <Image
                      alt="img"
                      src="/images/comment.png"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="text-gray-400 ml-2">2 comments</div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 ml-4">
                    <Image
                      alt="img"
                      src="/images/heart.png"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="text-gray-400 ml-2">2k likes</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="w-full flex justify-center mt-4">
          <nav className="pagination">
            <ul className="flex items-center">
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
                  4
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
