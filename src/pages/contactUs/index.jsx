import Header from "@/components/Header";
import contactApi from "@/lib/contact";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import classNames from "classnames";

function App() {
  const queryClient = useQueryClient();
  const [showDropdown, setShowDropdown] = useState(true);
  const [showOptions, setShowOptions] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [service, setService] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [showPop, setShowPop] = useState(false);

  const showMessagePop = () => {
    setShowPop(true);
    setTimeout(() => {
      setShowPop(false);
    }, 5000);
  }

  const popUpClasses = classNames("fixed", "bottom-0", "right-0", "m-8", "p-4", "bg-purple-500", "text-white", "rounded-md", {
    "opacity-100": showPop,
    "opacity-0": !showPop,
  });

  const handleContinue1 = () => {
    setShowDropdown(false);
    setShowOptions(true);
  };

  const handleContinue2 = () => {
    setShowOptions(false);
    setShowForm(true);
  };

  const handleGoBack = () => {
    if (showForm) {
      setShowForm(false);
      setShowOptions(true);
    } else if (showOptions) {
      setShowOptions(false);
      setShowDropdown(true);
    }
  };

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleService = (e) => {
    setService(e.target.value);
  };

  const addMutation = useMutation(
    ["contacts"],
    async (data) => {
      await contactApi.addQoutation(data);
    },
    {
      onError: (data) => {},
      onSuccess: () => {
        // showMessagePop()
        setShowPop(true)
        setService("")
        setType("")
        setName("")
        setCountry("")
        setEmail("")
        setMobileNo("")
        setTimeout(() => {
          setShowPop(false);
        }, 5000);      
        // notification.open({
        //   type: "success",
        //   message: "Blog saved successfully",
        //   placement: "top",
        // });
        queryClient.invalidateQueries(["contacts"]);
        props.close();
      },
    }
  );
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
    addMutation.mutate({
      service, type, name, email, country, mobileNo
    })
  };

  return (
    <>
      <Header heading="Contact Us" subHeading="Home > Contact Us" />
      {showPop ? 
      <div className={popUpClasses}>
        <p>Your message has been submitted! We will contact you soon.</p>
      </div>
      : ''}
      <div className="flex justify-center h-screen">
        <div className="w-full max-w-sm p-4 mt-12 rounded">
          {showDropdown && (
            <div>
              <center className="font-semibold mb-5">Choose a service.</center>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="web development"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white text-grey-500 font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "web development"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>Web Development</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="app development"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "app development"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>App Development</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="ui/ux design"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "ui/ux design"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>UI/UX Design</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="graphics design"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white text-grey-500 font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "graphics design"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>Graphics Design</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="video editing"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "video editing"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>Video Editing</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="digital marketing"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "digital marketing"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>Digital Marketing</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="seo"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "seo"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>SEO</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="game development"
                  className="hidden"
                  onChange={handleService}
                />
                <div
                  style={{ marginBottom: "15px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    service === "game development"
                      ? "border-pink-500 text-pink"
                      : ""
                  }`}
                >
                  <center>Game Development</center>
                </div>
              </label>
              <button
                  className="w-full bg-pink-500 text-white font-semibold py-2 px-2 rounded"
                  onClick={handleContinue1}
                >
                  Continue
                </button>
            </div>
          )}

          {showOptions && (
            <div>
              <center className="font-semibold mb-5">How do you want to work?</center>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="project"
                  className="hidden"
                  onChange={handleTypeChange}
                />
                <div
                  style={{ marginBottom: "20px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    type === "project"
                      ? "border-pink-500"
                      : ""
                  }`}
                >
                  <center>Project</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="rotainer"
                  className="hidden"
                  onChange={handleTypeChange}
                />
                <div
                  style={{ marginBottom: "20px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    type === "rotainer"
                      ? "border-pink-500"
                      : ""
                  }`}
                >
                  <center>Rotainer</center>
                </div>
              </label>
              <label className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
                <input
                  type="radio"
                  name="option"
                  value="hourly"
                  className="hidden"
                  onChange={handleTypeChange}
                />
                <div
                  style={{ marginBottom: "20px" }}
                  className={`bg-white font-bold py-2 px-4 rounded border border-black-500 ${
                    type === "hourly"
                      ? "border-pink-500"
                      : ""
                  }`}
                >
                  <center>Hourly</center>
                </div>
              </label>
              <div className="flex justify-between">
                <button
                  className="w-1/4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-2 rounded"
                  onClick={handleGoBack}
                >
                  Go Back
                </button>
                <button
                  className="w-1/4 bg-pink-500 hover:bg-purple-600 text-white font-semibold py-2 px-2 rounded"
                  onClick={handleContinue2}
                >
                  Continue
                </button>
              </div>
            </div>
          )}

          {showForm && (
            <form onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center">
                <label className="mr-2 text-gray-700 font-bold">Hi! I am</label>
                <div className="relative flex-1">
                  <input
                    className="px-3 py-2 bg-transparent outline-none w-full text-gray-800 placeholder-gray-400 focus:placeholder-gray-600"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g khan"
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <label className="mr-2 text-gray-700 font-bold">
                  Reach me at
                </label>
                <div className="relative flex-1">
                  <input
                    className="px-3 py-2 bg-transparent outline-none w-full text-gray-800 placeholder-gray-400 focus:placeholder-gray-600"
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hello@gmail.com"
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <label className="mr-2 text-gray-700 font-bold">
                  Country Name.
                </label>
                <div className="relative flex-1">
                  <input
                    className="px-3 py-2 bg-transparent outline-none w-full text-gray-800 placeholder-gray-400 focus:placeholder-gray-600"
                    type="text"
                    name="country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    placeholder="e.g india"
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <label className="mr-2 text-gray-700 font-bold">
                  Mobile No.
                </label>
                <div className="relative flex-1">
                  <input
                    className="px-3 py-2 bg-transparent outline-none w-full text-gray-800 placeholder-gray-400 focus:placeholder-gray-600"
                    type="text"
                    name="mobileNo"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    placeholder="+913652983848"
                  />
                </div>
              </div>
              <div className="flex justify-between">
                <button
                  className="w-1/4 bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-2 rounded"
                  onClick={handleGoBack}
                >
                  Go Back
                </button>
                <button
                  className="w-1/4 bg-pink-500 hover:bg-purple-600 text-white font-semibold py-2 px-2 rounded"
                  type="submit"
                >
                  Send
                </button>
                </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
