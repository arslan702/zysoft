import support from "../../../public/images/support.png";
import community from "../../../public/images/community.png";
import question from "../../../public/images/questions.png";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

import Image from "next/image";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-90" : ""
      } h-5 w-5 transition-transform`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 18l6-6-6-6" />
    </svg>
  );
}

function Team() {
  const questions = [
    {
      id: 1,
      heading: "What services do you offer under web development?",
      content:
        "We offer a comprehensive range of web development services, including custom website development, responsive design, e-commerce solutions, content management systems (CMS), web application development, search engine optimization (SEO), and ongoing support and maintenance.",
    },
    {
      id: 2,
      heading: "How long does it take to develop a website?",
      content:
        "The time required to develop a website depends on various factors, such as its complexity, features, and design requirements. Simple websites may take a few weeks, while more complex projects may take several months. We work closely with our clients to establish realistic timelines and ensure timely delivery.",
    },
    {
      id: 3,
      heading: "Can you redesign my existing website?",
      content:
        "Absolutely! We provide website redesign services to give your existing website a fresh look, improved functionality, and enhanced user experience. We analyze your current website, understand your goals, and create a redesign plan that aligns with your vision.",
    },
    {
      id: 4,
      heading: "Do you offer e-commerce solutions?",
      content:
        "Yes, we specialize in developing e-commerce solutions. We can create a secure and user-friendly online store for you, complete with product catalogs, shopping carts, secure payment gateways, and inventory management systems.",
    },
    {
      id: 5,
      heading: "Can you optimize my website for search engines?",
      content:
        "Yes, we incorporate SEO best practices into our web development process. We ensure that your website is designed and developed with clean code, proper meta tags, optimized page load speeds, and mobile-friendliness, to enhance its visibility and ranking on search engine results pages.",
    },
    {
      id: 6,
      heading: "How do I get started with your web development service?",
      content:
        "Getting started is easy! Simply contact us through our website or give us a call, and our team will be happy to discuss your project requirements, provide consultation, and guide you through the web development process.\n\nIf you have any other questions or need further information, please don't hesitate to reach out to our team. We're here to help you achieve your web development goals.",
    },
  ];

  const [questOpen, setQuestOpen] = useState(1);
  const handleQuestOpen = (value) => {
    setQuestOpen(questOpen === value ? 0 : value);
  };

  return (
    <div>
      <div className="grid grid-cols-4  px-20">
        <div className=" ">
          <img
            src="https://www.linkpicture.com/q/Rectangle-7_2.png"
            className="bg-[url('https://www.linkpicture.com/q/Rectangle-6-1_1.png')] p-3"
            alt=""
          />

          <div className=" py-3 grid justify-center text-center">
            <div className="text-2xl font-semibold">Shanemadar Khan</div>
            <span className=" font-medium text-gray-800">Co-Founder</span>
          </div>
        </div>

        <div className=" ">
          <img
            src="https://www.linkpicture.com/q/Rectangle-8.png"
            className="bg-[url('https://www.linkpicture.com/q/Rectangle-6-2.png')] p-3"
            alt=""
          />

          <div className=" py-3 grid justify-center text-center">
            <div className="text-2xl font-semibold px-5">Zill E Huma</div>
            <span className="font-medium text-gray-800">
              Technical lead developer
            </span>
          </div>
        </div>

        <div className=" px-">
          <img
            src="https://www.linkpicture.com/q/Rectangle-8.png"
            className="bg-[url('https://www.linkpicture.com/q/Rectangle-6-1_1.png')] bg-no-repeat   p-3"
            alt=""
          />

          <div className=" py-3 grid justify-center text-center">
            <div className="text-2xl font-semibold  px-4">Sahim Khan</div>
            <span className="font-medium text-gray-800">
              Digital Marketing Expert
            </span>
          </div>
        </div>

        <div className=" ">
          <img
            src="https://www.linkpicture.com/q/Rectangle-7_2.png"
            className="bg-[url('https://www.linkpicture.com/q/Rectangle-6-2.png')] p-3"
            alt=""
          />

          <div className="grid justify-center text-center py-3">
            <div className="text-2xl font-semibold"> Poonam Kushwaha</div>
            <span className="font-medium text-gray-800">Graphic Designer</span>
          </div>
        </div>
      </div>

      {/* Q/A Section */}

      <div className="my-20   flex">
        <div>
          <div className="text-3xl px-24 font-bold text-[#3C1B65] flex">
            <div className="">Frequently Asked</div>
            <div className=" px-2 text-[#FB1D87]">Questions</div>
          </div>

          <div className=" pl-24 flex">
            <div className="py-20 space-y-6">
              <div className="flex pl-6 pr-10 gap-4 py-2 bg-[#E5E1FA] rounded-3xl">
                <Image className="h-6 w-6 " src={question} alt="" />
                <span className=" text-lg text-black  font-semibold whitespace-nowrap ">
                  General Questions
                </span>
              </div>

              <div className="flex pl-6 pr-10 gap-4 py-2 bg-[#9F37F0] rounded-3xl">
                <Image className="h-6 w-6 " src={community} alt="" />
                <span className=" text-lg text-white  font-semibold ">
                  Community
                </span>
              </div>

              <div className="flex pl-6 pr-10 gap-4 py-2 bg-[#E5E1FA] rounded-3xl">
                <Image className="h-6 w-6 " src={support} alt="" />
                <span className=" text-lg text-black  font-semibold ">
                  Support
                </span>
              </div>
            </div>

            <div className="w-72 px-8">
              <img
                src="https://www.linkpicture.com/q/businesswoman-standing-thinking-near-big-question-mark-isolated-white-background-removebg-preview-1-1.png"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="mt-8 mr-20">
          {questions?.map((acc) => (
            <Accordion
              key={acc?.id}
              open={questOpen === acc?.id}
              className={`border px-4 rounded-lg mb-4 w-[600px] shadow-lg  ${
                questOpen === acc?.id ? "text-black" : "text-black"
              }`}
              style={{
                backgroundColor: "#FFFFFF",
                color: questOpen === acc?.id ? "#FB1D87" : "black",
              }}
              icon={<Icon id={acc?.id} open={questOpen} />}
            >
              <AccordionHeader
                onClick={() => handleQuestOpen(acc?.id)}
                className={`border-b-0 transition-colors text-base sm:text-lg  ${
                  questOpen === acc?.id ? "text-black-500" : ""
                }`}
              >
                {acc?.heading}
              </AccordionHeader>
              <AccordionBody
                className={`${
                  questOpen !== acc?.id ? "hidden" : ""
                } text-sm px-4  font-normal `}
                style={{ color: "black" }}
              >
                <hr />
                {acc?.content}
              </AccordionBody>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Team;
