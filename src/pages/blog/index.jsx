import Image from "next/image";
import React from "react";

function NewPage() {
  return (
    <>
      <div
        className="text-center text-4xl font-bold my-8"
        style={{
          width: "100%",
          fontStyle: "normal",
          fontWeight: 700,
          fontSize: "40px",
          lineHeight: "73.9%",
          color: "#000000",
        }}
      >
        Blogs
      </div>

      <div className="flex justify-center mx-31 mb-8">
        <div
          className="w-816px"
          style={{ width: "816px", marginRight: "31px" }}
        >
          <div className="flex flex-col">
            <Image
              src={"/images/blog.png"}
              width={700}
              height={700}
              style={{ borderRadius: "10px", width: "816px", height: "632px" }}
            />
            <div className="flex mt-10">
              <div
                className="mr-16"
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "73.9%",
                  color: "#FB1D87",
                }}
              >
                12 May 2023
              </div>
              <div
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "73.9%",
                  color: "#FB1D87",
                }}
              >
                Web Development
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "73.9%",
                  color: "#000000",
                }}
              >
                Website – The quickest way to take your business online
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "73.9%",
                  color: "#000000",
                }}
              >
                So, what is a website?
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </div>
            </div>
            <div className="flex flex-col mt-10">
              <div
                style={{
                  fontStyle: "normal",
                  fontWeight: 500,
                  fontSize: "18px",
                  lineHeight: "73.9%",
                  color: "#000000",
                }}
              >
                Essential Features of a Good Website
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
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry’s standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic
              </div>
            </div>
            {/* <div
              className="flex justify-between mt-12"
              style={{ width: "816px" }}
            >
              <div className="flex flex-row">
                <div
                  style={{
                    width: "106px",
                    height: "50px",
                    background: "rgba(229, 225, 250, 0.52)",
                    borderRadius: "33px 33px 33px 10px",
                  }}
                >
                  <center className="mt-3">Tech</center>
                </div>
                <div
                  className="ml-6"
                  style={{
                    width: "106px",
                    height: "50px",
                    background: "rgba(229, 225, 250, 0.52)",
                    borderRadius: "33px 33px 33px 10px",
                  }}
                >
                  <center className="mt-3">Design</center>
                </div>
                <div
                  className="ml-6"
                  style={{
                    width: "106px",
                    height: "50px",
                    background: "rgba(229, 225, 250, 0.52)",
                    borderRadius: "33px 33px 33px 10px",
                  }}
                >
                  <center className="mt-3">Web</center>
                </div>
              </div>
              <div
                style={{
                  width: "55px",
                  height: "50px",
                  background: "rgba(229, 225, 250, 0.52)",
                  borderRadius: "33px 33px 33px 10px",
                }}
              >
                <center className="mt-4">
                  <Image
                    src={"/images/share.png"}
                    alt="img"
                    width={200}
                    height={200}
                    style={{ width: "18px", height: "20px" }}
                  />
                </center>
              </div>
            </div>
            <div
              className="mt-11"
              style={{
                width: "816px",
                height: "182px",
                background: "#F1EFFC",
                borderRadius: "10px",
              }}
            >
              <div className="flex items-center px-8 py-7">
                <div className="w-81 h-81 pb-20 rounded-full mr-4">
                  <Image
                    src={"/images/avatar.png"}
                    alt="img"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="mb-8">
                  <div className="text-lg font-semibold">James Williams</div>
                  <div className="font-normal font-medium text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-5">
              <div className="flex">
                <Image
                  src={"/images/left.png"}
                  alt="img"
                  width={200}
                  height={200}
                  style={{
                    width: "14px",
                    height: "9px",
                    marginTop: "8px",
                    marginRight: "5px",
                  }}
                />
                Previous Post
              </div>
              <div className="flex">
                Go to next
                <Image
                  src={"/images/right.png"}
                  alt="img"
                  width={200}
                  height={200}
                  style={{
                    width: "14px",
                    height: "9px",
                    marginTop: "8px",
                    marginLeft: "5px",
                  }}
                />
              </div>
            </div>
            <div className="mt-12 font-normal font-bold text-4xl leading-[157.4%]">
              Comments
            </div>
            <div>
              <div className="flex items-center pt-7">
                <div className="w-54 h-54 pb-12 rounded-full mr-4">
                  <Image
                    src={"/images/peter.png"}
                    alt="img"
                    width={200}
                    height={200}
                    style={{ width: "54px" }}
                  />
                </div>
                <div className="mb-8">
                  <div className="flex justify-between">
                    <div className="text-lg font-semibold">Peter Cruiser</div>
                    <div className="flex text-lg font-semibold">
                      May 9, 2023
                      <Image
                        src={"/images/forward.png"}
                        alt="img"
                        width={200}
                        height={200}
                        style={{
                          width: "18px",
                          height: "15px",
                          marginTop: "8px",
                          marginLeft: "5px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="font-normal font-medium text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard
                  </div>
                </div>
              </div>
              <div
                className="flex items-center pt-7"
                style={{ paddingLeft: "60px" }}
              >
                <div className="w-54 h-54 pb-12 rounded-full mr-4">
                  <Image
                    src={"/images/peter.png"}
                    alt="img"
                    width={200}
                    height={200}
                    style={{ width: "54px" }}
                  />
                </div>
                <div className="mb-8">
                  <div className="flex justify-between">
                    <div className="text-lg font-semibold">Peter Cruiser</div>
                    <div className="flex text-lg font-semibold">
                      May 9, 2023
                      <Image
                        src={"/images/forward.png"}
                        alt="img"
                        width={200}
                        height={200}
                        style={{
                          width: "18px",
                          height: "15px",
                          marginTop: "8px",
                          marginLeft: "5px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="font-normal font-medium text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard
                  </div>
                </div>
              </div>
              <div className="flex items-center pt-7">
                <div className="w-54 h-54 pb-12 rounded-full mr-4">
                  <Image
                    src={"/images/peter.png"}
                    alt="img"
                    width={200}
                    height={200}
                    style={{ width: "54px" }}
                  />
                </div>
                <div className="mb-8">
                  <div className="flex justify-between">
                    <div className="text-lg font-semibold">Peter Cruiser</div>
                    <div className="flex text-lg font-semibold">
                      May 9, 2023
                      <Image
                        src={"/images/forward.png"}
                        alt="img"
                        width={200}
                        height={200}
                        style={{
                          width: "18px",
                          height: "15px",
                          marginTop: "8px",
                          marginLeft: "5px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="font-normal font-medium text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard
                  </div>
                </div>
              </div>
              <div
                className="flex items-center pt-7"
                style={{ paddingLeft: "60px" }}
              >
                <div className="w-54 h-54 pb-12 rounded-full mr-4">
                  <Image
                    src={"/images/peter.png"}
                    alt="img"
                    width={200}
                    height={200}
                    style={{ width: "54px" }}
                  />
                </div>
                <div className="mb-8">
                  <div className="flex justify-between">
                    <div className="text-lg font-semibold">Peter Cruiser</div>
                    <div className="flex text-lg font-semibold">
                      May 9, 2023
                      <Image
                        src={"/images/forward.png"}
                        alt="img"
                        width={200}
                        height={200}
                        style={{
                          width: "18px",
                          height: "15px",
                          marginTop: "8px",
                          marginLeft: "5px",
                        }}
                      />
                    </div>
                  </div>
                  <div className="font-normal font-medium text-base">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col mt-5">
              <div className="font-normal font-bold text-2xl leading-[157%]">
                Leave a Comment
              </div>
              <div className="font-normal font-normal text-base leading-[157%]">
                Your email address will not be publishes.
              </div>
              <div className="flex flex-col items-center justify-center mt-7">
                <div className="flex mb-6">
                  <input
                    type="text"
                    className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Name"
                    style={{ width: "408px" }}
                  />
                  <input
                    type="email"
                    className="h-12 px-4 ml-4 border border-gray-300 rounded-lg focus:outline-none"
                    placeholder="Email"
                    style={{ width: "390px" }}
                  />
                </div>
                <input
                  type="text"
                  className="w-full h-12 px-4 mb-6 border border-gray-300 rounded-lg focus:outline-none"
                  placeholder="Website"
                />
                <textarea
                  className="w-full h-40 px-4 mb-4 border border-gray-300 rounded-lg focus:outline-none resize-none"
                  placeholder="Comment"
                ></textarea>
                <button className="w-full h-12 bg-gradient-to-r from-purple-800 to-purple-600 shadow-lg rounded-full text-white text-lg font-semibold mt-9 mb-4">
                  Send Message
                </button>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="w-392px" style={{ width: "392px" }}>
          <div className="flex flex-col">
            <div
              className="w-392 h-116 bg-white shadow-lg rounded-lg"
              style={{ width: "392px", height: "116px" }}
            >
              <div className="flex items-center justify-between p-8">
                <div className="relative w-333 h-50">
                  <input
                    type="text"
                    className="w-full h-full border border-gray-300 rounded-full pl-4 pr-12 placeholder-gray-400"
                    placeholder="Type your search"
                    style={{ width: "333px", height: "50px" }}
                  />
                  <button
                    className="absolute right-0 top-0 rounded-full flex items-center justify-center"
                    style={{ top: "15px", right: "15px" }}
                  >
                    <Image
                      src={"/images/search.png"}
                      width={200}
                      height={200}
                      alt="img"
                      style={{ width: "18px", height: "18px" }}
                    />
                  </button>
                </div>
              </div>
            </div>
            <div
              className="w-392 h-498 bg-white shadow-lg rounded-lg mt-12"
              style={{ width: "392px", height: "498px" }}
            >
              <h1 className="w-158 h-30 font-semibold text-2xl text-black mb-8 mt-8 px-6">
                Blog Category
              </h1>
              <div>
                <h2 className="w-102 h-23 font-semibold text-lg text-black mb-4 mt-4 px-8">
                  Web Design
                </h2>
                <hr className="border-gray-300 mb-2 ml-6 mr-6" />
                <h2 className="w-102 h-23 font-semibold text-lg text-black mb-4 mt-4 px-8">
                  UI UX Design
                </h2>
                <hr className="border-gray-300 mb-2 ml-6 mr-6" />
                <h2 className="w-102 h-23 font-semibold text-lg text-black mb-4 mt-4 px-8">
                  Graphic Design
                </h2>
                <hr className="border-gray-300 mb-2 ml-6 mr-6" />
                <h2 className="w-102 h-23 font-semibold text-lg text-black mb-4 mt-4 px-8">
                  Wordpress
                </h2>
                <hr className="border-gray-300 mb-2 ml-6 mr-6" />
                <h2 className="w-102 h-23 font-semibold text-lg text-black mb-4 mt-4 px-8">
                  Video Editing
                </h2>
                <hr className="border-gray-300 mb-2 ml-6 mr-6" />
                <h2 className="w-102 h-23 font-semibold text-lg text-black mb-4 mt-4 px-8">
                  Wix
                </h2>
                <hr className="border-gray-300 mb-2 ml-6 mr-6" />
              </div>
            </div>
            <div
              className="w-392 h-498 bg-white shadow-lg rounded-lg mt-2"
              style={{ width: "392px", height: "464px" }}
            >
              <h1 className="w-158 h-30 font-semibold text-2xl text-black mb-8 mt-8 px-6">
                Latest Blogs
              </h1>
              <div className="flex flex-col">
                <div className="flex items-center px-6">
                  <div className="w-20 h-20 rounded-full mr-4">
                    <Image
                      src={"/images/latestfour.png"}
                      alt="img"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mb-8">
                    <div className="text-gray-500">May 9,2023</div>
                    <h2 className="text-lg font-semibold">
                      How websites work properly?
                    </h2>
                  </div>
                </div>
                <div className="flex items-center px-6">
                  <div className="w-20 h-20 rounded-full mr-4">
                    <Image
                      src={"/images/latestthree.png"}
                      alt="img"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mb-8">
                    <div className="text-gray-500">May 9,2023</div>
                    <h2 className="text-lg font-semibold">
                      How websites work properly?
                    </h2>
                  </div>
                </div>
                <div className="flex items-center px-6">
                  <div className="w-20 h-20 rounded-full mr-4">
                    <Image
                      src={"/images/latesttwo.png"}
                      alt="img"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mb-8">
                    <div className="text-gray-500">May 9,2023</div>
                    <h2 className="text-lg font-semibold">
                      How websites work properly?
                    </h2>
                  </div>
                </div>
                <div className="flex items-center px-6">
                  <div className="w-20 h-20 rounded-full mr-4">
                    <Image
                      src={"/images/latestone.png"}
                      alt="img"
                      width={200}
                      height={200}
                    />
                  </div>
                  <div className="mb-8">
                    <div className="text-gray-500">May 9,2023</div>
                    <h2 className="text-lg font-semibold">
                      How websites work properly?
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="w-392 h-498 bg-white shadow-lg rounded-lg mt-12"
              style={{ width: "392px", height: "330px" }}
            >
              <h1 className="w-158 h-30 font-semibold text-2xl text-black mb-8 mt-8 px-6">
                Popular Tags
              </h1>
              <div className="flex flex-row flex-wrap">
                <div
                  className="bg-purple-200 bg-opacity-50 ml-6"
                  style={{
                    width: "106px",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                >
                  <center style={{ marginTop: "10px" }}>Tech</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-3"
                  style={{ width: "37px", height: "50px", borderRadius: "5px" }}
                >
                  <center style={{ marginTop: "10px" }}>UI</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-3"
                  style={{ width: "58px", height: "50px", borderRadius: "5px" }}
                >
                  <center style={{ marginTop: "10px" }}>Web</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-3"
                  style={{ width: "92px", height: "50px", borderRadius: "5px" }}
                >
                  <center style={{ marginTop: "10px" }}>Business</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-6 mt-3"
                  style={{ width: "37px", height: "50px", borderRadius: "5px" }}
                >
                  <center style={{ marginTop: "10px" }}>UX</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-3 mt-3"
                  style={{ width: "92px", height: "50px", borderRadius: "5px" }}
                >
                  <center style={{ marginTop: "10px" }}>Creativity</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-3 mt-3"
                  style={{ width: "58px", height: "50px", borderRadius: "5px" }}
                >
                  <center style={{ marginTop: "10px" }}>App</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-3 mt-3"
                  style={{
                    width: "105px",
                    height: "50px",
                    borderRadius: "5px",
                  }}
                >
                  <center style={{ marginTop: "10px" }}>Modern Art</center>
                </div>
                <div
                  className="bg-purple-200 bg-opacity-50 ml-6 mt-3"
                  style={{ width: "92px", height: "50px", borderRadius: "5px" }}
                >
                  <center style={{ marginTop: "10px" }}>UX</center>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default NewPage;
