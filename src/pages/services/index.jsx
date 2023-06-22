import Header from "@/components/Header";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { serviceData } from "@/components/data/serviceData";

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

const data = [
  {
    id: 1,
    heading: "Web Development",
    content:
      "Content for Web development",
  },
  {
    id: 2,
    heading: "App Development",
    content:
      "Content for APP development",
  },
  {
    id: 3,
    heading: "UI UX Design",
    content:
      "Content for UI UX development",
  },
  {
    id: 4,
    heading: "Graphic Design",
    content:
      "Content for Web Graphic Design",
  },
  {
    id: 5,
    heading: "Video Editing",
    content:
      "Content for Video Editing",
  },
  {
    id: 6,
    heading: "Digital Marketing",
    content:
      "Content for Digital Marketing",
  },
  {
    id: 7,
    heading: "Seo",
    content:
      "Content for SEO",
  },
  {
    id: 8,
    heading: "Game Development",
    content:
      "Game Development",
  },
];

const questions = [
  {
    id: 1,
    heading: "Is my technology allowed on tech?",
    content:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also  unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 2,
    heading: "Is my technology allowed on tech?",
    content:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also  unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 3,
    heading: "Is my technology allowed on tech?",
    content:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also  unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 4,
    heading: "Is my technology allowed on tech?",
    content:
      "When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also  unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

function Services() {
  const [activeTab, setActiveTab] = useState(1);
  const [questOpen, setQuestOpen] = useState(1);

  const handleTabClick = (value) => {
    setActiveTab(value);
  };

  const handleQuestOpen = (value) => {
    setQuestOpen(questOpen === value ? 0 : value);
  };

  return (
    <div>
      <Header heading="Service" subHeading="Home > Service Details" />
      <>
        <div className="grid grid-cols-1 lg:flex justify-center gap-10 px-8 sm:px-14 lg:px-20 mb-8 mt-10 md:mt-20">
          <div className="lg:w-392px order-1 lg:order-1">
            <div className="flex flex-col">
              {serviceData?.map((acc) => (
                <div
                  key={acc?.id}
                  className={`border rounded-lg mb-4 cursor-pointer ${
                    activeTab === acc?.id ? "text-black" : "text-black"
                  }`}
                  style={{
                    height: '60px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    backgroundColor: activeTab === acc?.id ? "#3C1B65" : "#F6F6FF",
                    color: activeTab === acc?.id ? "white" : "black",
                  }}
                  onClick={() => handleTabClick(acc?.id)}
                >
                  <div
                    className={`border-b-0 transition-colors text-base px-4 hover:rounded-lg mt-4 ${
                      activeTab === acc?.id ? "text-black-500" : ""
                    }`}
                  >
                    {acc?.heading}
                  </div>
                  <div className="mt-5 mr-4">
                  <Icon id={acc?.id} open={open} />
                  </div>
                </div>
              ))}
              <div
                className="mt-11 lg:w-[392px] lg:h-[408px]"
                style={{
                  backgroundColor: "#3C1B65",
                  borderRadius: "10px",
                  backgroundImage: `url('/images/helpCurve.png')`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  className="grid  justify-center text-center mt-10 mb-10 lg:mb-0"
                 
                >
                  <Image
                    className="h-[65px] lg:h-[92px] w-[80px] lg:w-[115px] mr-10"
                    src={"/images/help.png"}
                    alt="img"
                    style={{
                      marginLeft: "40px",
                    }}
                    height={300}
                    width={300}
                  />
                  <div
                    className="mt-8 ml-2  text-base sm:text-lg lg:text-xl"
                    style={{
                      fontStyle: "normal",
                      fontWeight: "700",
                  
                      lineHeight: "125.9%",
                      color: "#ffffff",
                    }}
                  >
                    Need Any Help?
                  </div>
                  <p className="font-normal font-normal text-sm sm:text-base leading-[125.9%] text-white mt-8 ">
                    +91 445677788
                  </p>
                  <p className="font-normal font-normal text-sm sm:text-base leading-[125.9%] text-white mt-1">
                    emailcompany.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-816px order-2 lg:order-2">
            <div className="flex flex-col">
              <Image
                src={"/images/service.png"}
                className="lg:h-[632px] w-[816px] rounded-[10px]"
                width={700}
                height={700}
              />
              <div className="flex flex-col mt-10">
                {/* Service Overview */}
                <div
                  className="text-lg sm:text-xl lg:text-2xl"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "73.9%",
                    color: "#000000",
                  }}
                >
                  Service Overview
                </div>
                <div
                  className="mt-5 text-sm sm:text-base"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "157.4%",
                  }}
                >
                  {serviceData?.find((acc) => acc.id === activeTab)?.overview}
                </div>
              </div>
              <div className="flex flex-col mt-10">
                <div
                  className="text-lg sm:text-xl lg:text-2xl"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                   
                    lineHeight: "73.9%",
                    color: "#000000",
                  }}
                >
                  Service Center
                </div>
                <div
                 className="mt-5 text-sm sm:text-base"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    
                    lineHeight: "157.4%",
                  }}
                >
                  {serviceData?.find((acc) => acc.id === activeTab)?.center}
                </div>
              </div>
              <div className="flex flex-row items-center mt-5" style={{ height: '104px', backgroundColor: '#F6F6FF' }}>
                <div className="" style={{ height: '58px', width: '5px', backgroundColor: '#FB1D87' }}></div>
                <div className="ml-6 mr-2 text-xs sm:text-sm lg:text-base">When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also </div>
              </div>
              <div className="flex flex-col mt-10">
                {/* Frequently Asked Questions */}
                <div
                  className="text-lg sm:text-xl lg:text-2xl"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "73.9%",
                    color: "#000000",
                  }}
                >
                  Frequently Asked Questions
                </div>
                <div
                  className="mt-5 text-sm sm:text-base"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "157.4%",
                  }}
                >
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also
                </div>
              </div>
              <div className="mt-8">
              {serviceData?.find((acc) => acc.id === activeTab)?.faqs?.map((faq) => (
                // {questions?.map((acc) => (
                  <Accordion
                    key={faq?.id}
                    open={questOpen === faq?.id}
                    className={`border px-4 rounded-lg mb-4   ${
                      questOpen === faq?.id ? "text-black" : "text-black"
                    }`}
                    style={{
                      backgroundColor: "#FFFFFF",
                      color: questOpen === faq?.id ? "#FB1D87" : "black",
                    }}
                    icon={<Icon open={questOpen} id={faq?.id} />}
                  >
                    <AccordionHeader
                      onClick={() => handleQuestOpen(faq?.id)}
                      className={`border-b-0 transition-colors text-base sm:text-lg ${
                        questOpen === faq?.id ? "text-black-500" : ""
                      }`}
                    >
                      {faq?.question}
                    </AccordionHeader>
                    <AccordionBody
                      className={`${
                        questOpen !== faq?.id ? "hidden" : ""
                      } text-sm px-4  font-normal `}
                      style={{ color: "black" }}
                    >
                      <hr />
                      {faq?.answer}
                    </AccordionBody>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default Services;
