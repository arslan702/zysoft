
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import parse from 'html-react-parser';

function BlogCard({data}) {
  const router = useRouter()

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
  const handleClick = (e, id) => {
    e.preventDefault();
    router.push(`/blogDetail/${id}`)
  }
    return ( 
    <div className="flex flex-wrap justify-center">
    {data && data?.map((item, index) => (
      <div
        key={index}
        className="w-[370px] h-[400px] md:h-[480px] mx-4 my-4 bg-white shadow-md rounded-md cursor-pointer"
        onClick={(e) => handleClick(e, item?.id)}
      >
        <div className="h-2/5">
          <Image
            src={item?.images[0]?.url}           
            alt="Image"
            width={200}
            height={200}
            className="object-cover w-full h-[190px] md:h-[230px] rounded-t-md"
          />
        </div>
        <div className="p-6  pt-10 md:pt-14">
          <div className="flex items-center justify-between">
            <button className="py-2 px-8 bg-purple-700 rounded-md text-xs text-white">
              Web Development
            </button>
            <div className="text-gray-700 text-sm">{formatDate(item?.createdAt)}</div>
          </div>
          <div className="text-black text-base md:text-lg font-medium mt-4">
            {item?.title}
          </div>
          <div className="text-black text-xs md:text-sm mt-2">
            {parse(item?.description)}
          </div>
          <div className="flex items-center justify-between mt-4 md:mt-8">
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
    </div>
    )
}
export default BlogCard;