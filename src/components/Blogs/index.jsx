import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const data = [
  {
    image: "/images/blogone.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blogtwo.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blogthree.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blogfour.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blogfive.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blogsix.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blogseven.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blogeight.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
  {
    image: "/images/blognine.png",
    title: "Lorem ipsum dolor sit amet, consectetur",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
  },
];


function Boxes() {
  const router = useRouter()

  const handleClick = () => {
    router.push("/blog")
  }
  return (
    <div className="bg-F5F5F5 py-4 mt-4">
    <h1 className="text-center text-2xl font-bold mb-4" style={{fontSize: '2.5rem'}}>Blogs</h1>
      <div className="flex flex-wrap justify-center">
        {data.map((item, index) => (
          <div
            key={index}
            style={{ width: "392px", height: "508px", cursor: 'pointer' }}
            className="w-64 h-80 mx-4 my-4 bg-white shadow-md rounded-md"
            onClick={handleClick}
          >
            <div className="h-2/5">
              <Image
                src={item?.image}
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
                <div className="text-gray-700">2 May 2023</div>
              </div>
              <h2 className="text-black text-lg md:text-xl font-medium mt-2">
                {item?.title}
              </h2>
              <p className="text-black text-sm md:text-base mt-2">
                {item?.description}
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
