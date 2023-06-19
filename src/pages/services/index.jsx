import Header from "@/components/Header";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

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
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
  },
  {
    id: 2,
    heading: "App Development",
    content:
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
  },
  {
    id: 3,
    heading: "UI UX Design",
    content:
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
  },
  {
    id: 4,
    heading: "Graphic Design",
    content:
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
  },
  {
    id: 5,
    heading: "Video Editing",
    content:
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
  },
  {
    id: 6,
    heading: "Digital Marketing",
    content:
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
  },
  {
    id: 7,
    heading: "Seo",
    content:
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
  },
  {
    id: 8,
    heading: "Game Development",
    content:
      "We&apos;re not always in the position that we want to be at. We&apos;re constantly growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express ourselves",
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
  const [open, setOpen] = useState(1);
  const [questOpen, setQuestOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleQuestOpen = (value) => {
    setQuestOpen(questOpen === value ? 0 : value);
  }
  return (
    <div>
      <Header heading="Service" subHeading="Home > Service Details" />
      <>
        <div
          className="flex justify-center mx-31 mb-8"
          style={{ marginTop: "100px" }}
        >
          <div className="w-392px" style={{ width: "392px" }}>
            <div className="flex flex-col">
              <Fragment>
                {data?.map((acc) => (
                  <Accordion
                    key={acc?.id}
                    open={open === acc?.id}
                    className={`border px-4 rounded-lg mb-4 ${
                      open === acc?.id ? "text-black" : "text-black"
                    }`}
                    style={{
                      backgroundColor: open === acc?.id ? "#3C1B65" : "#F6F6FF",
                      color: open === acc?.id ? "white" : "black",
                    }}
                    icon={<Icon id={acc?.id} open={open} />}
                  >
                    <AccordionHeader
                      onClick={() => handleOpen(acc?.id)}
                      className={`border-b-0 transition-colors ${
                        open === acc?.id ? "text-black-500" : ""
                      }`}
                    >
                      {acc?.heading}
                    </AccordionHeader>
                    <AccordionBody
                      className={`${
                        open !== acc?.id ? "hidden" : ""
                      } text-base font-normal pt-0`}
                      style={{ color: open === acc?.id ? "white" : "black" }}
                    >
                      {acc?.content}
                    </AccordionBody>
                  </Accordion>
                ))}
              </Fragment>
              <div
                className="mt-11"
                style={{
                  width: "392px",
                  height: "408px",
                  backgroundColor: "#3C1B65",
                  borderRadius: "10px",
                  backgroundImage: `url('/images/helpCurve.png')`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  className="flex flex-col justify-center mt-10"
                  style={{ marginLeft: "100px" }}
                >
                  <Image
                    src={"/images/help.png"}
                    alt="img"
                    style={{
                      width: "115px",
                      height: "92px",
                      marginLeft: "40px",
                    }}
                    height={300}
                    width={300}
                  />
                  <div
                    className="mt-8 ml-2"
                    style={{
                      fontStyle: "normal",
                      fontWeight: "700",
                      fontSize: "24px",
                      lineHeight: "125.9%",
                      color: "#ffffff",
                    }}
                  >
                    Need Any Help?
                  </div>
                  <p className="font-normal font-normal text-base leading-[125.9%] text-white mt-8 ml-9">
                    +91 445677788
                  </p>
                  <p className="font-normal font-normal text-base leading-[125.9%] text-white mt-1 ml-6">
                    emailcompany.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="w-816px"
            style={{ width: "816px", marginLeft: "31px" }}
          >
            <div className="flex flex-col">
              <Image
                src={"/images/service.png"}
                width={700}
                height={700}
                style={{
                  borderRadius: "10px",
                  width: "816px",
                  height: "632px",
                }}
              />
              <div className="flex flex-col mt-10">
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "73.9%",
                    color: "#000000",
                  }}
                >
                  Service Overview
                </div>
                <div
                  className="mt-5"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "157.4%",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
              </div>
              <div className="flex flex-col">
                <div
                  className="mt-5"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "157.4%",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </div>
              </div>
              <div className="flex flex-col mt-10">
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "73.9%",
                    color: "#000000",
                  }}
                >
                  Service Center
                </div>
                <div
                  className="mt-5"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "157.4%",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry’s
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic
                </div>
              </div>
              <div className="flex flex-row items-center mt-5" style={{height: '104px', backgroundColor: '#F6F6FF'}}>
                <div className="" style={{height: '58px', width:'5px', backgroundColor: '#FB1D87'}}></div>
                <div className="ml-6 mr-2">When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also </div>
              </div>
              <div className="flex flex-col mt-10">
                <div
                  style={{
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "24px",
                    lineHeight: "73.9%",
                    color: "#000000",
                  }}
                >
                  Frequently Ask Questions
                </div>
                <div
                  className="mt-5"
                  style={{
                    fontStyle: "normal",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "157.4%",
                  }}
                >
                  When an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also 
                </div>
              </div>
              <div className="mt-8">
                {questions?.map((acc) => (
                  <Accordion
                    key={acc?.id}
                    open={questOpen === acc?.id}
                    className={`border px-4 rounded-lg mb-4 ${
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
                      className={`border-b-0 transition-colors ${
                        questOpen === acc?.id ? "text-black-500" : ""
                      }`}
                    >
                      {acc?.heading}
                    </AccordionHeader>
                    <AccordionBody
                      className={`${
                        questOpen !== acc?.id ? "hidden" : ""
                      } text-base font-normal pt-0`}
                      style={{ color: "black" }}
                    ><hr/>
                      {acc?.content}
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
