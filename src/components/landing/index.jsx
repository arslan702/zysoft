import Image from "next/image";
import DevCards from "./devcards";
import IndexPage from "./sllidingcards";
import ItemContainer from "./itemContainer";
import CardsSection from "./servicecards";
import Team from "./team";
import Customer from "./customerPage";
import Technologies from "./technologies";
import blueplus from "../../../public/images/blue-plus.png";
import BlogCard from "../Blogs/blogCards";

import React from "react";

function HomeHeader() {
  return (
    <>
      <div className="bg-[url('https://www.linkpicture.com/q/headerOne.png')] bg-[#F7F7FF] grid grid-cols-2 h-[550px]">
        <div className="">
          {/* <div className="bg-[url('/images/homeHeader.png')]" style={{height: '400px'}}></div> 
       <Image src={'/images/homeHeader.png'} height={300} width={300} style={{height: '500px'}}/>
    */}

          <div className="grid text-left items-left pl-32 pt-28 ">
            <div className=" font-bold   text-purple-800 ">
              Creative Digital Agency{" "}
            </div>
            <div className="text-6xl font-bold  text-[#3C1B65]  line-throu decoration-[#FB1D87]">
              {" "}
              We Build Creative{" "}
            </div>
            <div className="text-6xl font-bold  text-[#FB1D87]">
              {" "}
              Website & Apps
            </div>
            <div className="pt-4 pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.
            </div>
            <div className="w-auto ">
              <a
                className="inline-block px-10 py-3 text-white font-semibold tracking-tight bg-gradient-to-r from-[#9F37F0] to-[#3C1B65]  rounded-3xl focus:ring-4  focus:ring-indigo-400 transition duration-200"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[url('https://www.linkpicture.com/q/headerOne.png' )]">
          <div classname="">
            <img
              src="https://www.linkpicture.com/q/ccccccccccccccccccccccccccc-1_3.png"
              className="h-[550px] ml-32 pt-6"
              alt=""
            />
          </div>
        </div>
      </div>
      <CardsSection />

      <div className="columns-2 mt-20">
        <div className="col-span-1">
          <img
            src="https://www.linkpicture.com/q/about-shape-7-2_1-removebg-preview-1_1.png"
            className="h-[350px] my-5 pl-28"
            alt=""
            srcset=""
          />
        </div>

        <div className="column-span-1 py-8 pl-3 pr-14">
          <div className="flex gap-4">
            <div className="h-1 w-10 mt-3 bg-[#FB1D87]"></div>
            <div className="font-semibold text-xl  flex"> About Us</div>
          </div>
          <div className="text-3xl font-bold  ">
            <div className="text-[#3C1B65] ">Empowering Innovations</div>
            <div className="flex">
              <div className="flex text-[#3C1B65]"> for a </div>
              <div className="px-3 text-[#FB1D87]"> Connected Future</div>
            </div>
          </div>
          <div className=" mt-4">
            <div className="text-sm leading-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>

          <div className="w-auto mt-10">
            <a
              className="inline-block px-10 py-3 text-sm text-white font-semibold tracking-tight bg-gradient-to-r from-[#9F37F0] to-[#3C1B65]  rounded-3xl focus:ring-4  focus:ring-indigo-400 transition duration-200"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      <Technologies />

      <div>
        <div className="grid justify-center text-center w-[50%] ml-[25%] my-12 font-semibold ">
          <div className="flex text-4xl text-center justify-center">
            <div className="text-[#3C1B65] ">Our Impressive </div>
            <div className="px-2  text-[#FB1D87]">Portfolio</div>
          </div>
          <div className="mt-4">
            <span className="font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt.sit amet, consectetu dolor sit ame
            </span>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6 px-10 ">
          <div>
            {" "}
            <img
              className="h-[285px] w-[300px]"
              src="https://www.linkpicture.com/q/Rectangle-23.png"
              alt=""
            />
          </div>
          <div className="bg-blue-50 rounded-xl">
            <img
              className="h-[210px] w-[300px]"
              src="https://www.linkpicture.com/q/Rectangle-27_1.png"
              alt=""
            />
            <div className="flex justify-around pt-6">
              <div className=" text-xl pl-2 font-semibold">Web Development</div>
              <Image className="ml-3 h-10 w-10" src={blueplus} alt="" />
            </div>
          </div>
          <div>
            <img
              className="h-[285px] w-[300px]"
              src="https://www.linkpicture.com/q/Rectangle-25.png"
              alt=""
            />
          </div>
          <div className="">
            <img
              className="h-[285px] w-[300px]"
              src="https://www.linkpicture.com/q/Rectangle-26_1.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <DevCards />
      <div className="ml-[25%] w-[50%] font-bold text-4xl py-20 flex justify-center text-center ">
        <span className=" text-black">
          Meet <span className="px-2 text-pink-500 ">Our Experts Team </span>
          Works For Your Buisness
        </span>
      </div>

      <Team />

      <div className="h-96 m-32  border-solid border-2 border-[#D9D9D9]  bg-white flex ">
        <div className="mx-20">
          <span className="font-bold pt-14 my-2 text-[#3C1B65]  text-4xl flex ">
            MEET THE <span className="text-[#FB1D87] px-2"> FOUNDER</span>{" "}
          </span>

          <div className="w-96 text-sm font-medium text-gray-700 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            suscipit nostrum, recusandae, rerum illum libero est delectus odio
            quasi non quo molestiae temporibus? Alias veniam, in facilis est
            accusamus consectetur.
          </div>
          <div className="  py-5 ">
            <img
              src="https://www.linkpicture.com/q/Group-344_1.png"
              className="w-[300px]"
              alt=""
            />
          </div>
        </div>

        <div className="bg-[url('https://www.linkpicture.com/q/Vector-25.png')]  px-3">
          <img
            src="https://www.linkpicture.com/q/KHAN-BHAIII-1-no-bg_1.png"
            className=" mx-20 h-[380px] w-[380px] "
            alt=""
          />
        </div>
      </div>

      <Customer />

      <div className="grid justify-center items-center   bg-gray-100 my-20 pb-10">
        <div className="text-center  font-bold text-4xl text-[#3C1B65] mt-20">
          Our Latest <span className="text-[#FB1D87]">Blogs</span>
        </div>
        <span className="flex justify-center mt-4 font-medium text-sm text-center w-[50%] ml-[25%] pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.sit amet, consectetu dolor sit ame
        </span>
        <BlogCard />
      </div>

      <div className=" bg-[#3C1B65] px-56 flex object-center bg-[url('https://www.linkpicture.com/q/Ellipse-59.png')] bg-no-repeat bg-right-top ">
        <div className=" ">
          <img
            src="https://www.linkpicture.com/q/Ellipse-59.png"
            className="p-3"
            alt=""
          />
        </div>
        <div className="py-6">
          <img
            src="https://www.linkpicture.com/q/trustfffffffff-1.png"
            className="px-20"
            alt=""
          />
        </div>
        <div>
          <div className="text-4xl font-semibold pt-14 pb-5 text-white">
            Colaboration with
          </div>
          <img src="https://www.linkpicture.com/q/newlog-2.png" alt="" />
        </div>
      </div>
      <ItemContainer />
    </>
  );
}

export default HomeHeader;
