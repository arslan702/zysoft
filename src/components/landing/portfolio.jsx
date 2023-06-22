import React from "react";

function Portfolio() {
  return (
    <div>
      <div className="flex text-3xl mx-96 px-44 my-20 font-semibold ">
        <h1 className="text-[#3C1B65]text-3xl">Our Impressive </h1>
        <h1 className="px-2 text-3xl text-[#FB1D87]">Portfolio</h1>
      </div>

      <div className="grid grid-cols-4">
        <div>
          {" "}
          <img src="https://www.linkpicture.com/q/Rectangle-23.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://www.linkpicture.com/q/Rectangle-27_1.png" alt="" />
          <h1 className="py-6 text-xl font-bold">Web Development</h1>
        </div>
        <div>
          {" "}
          <img src="https://www.linkpicture.com/q/Rectangle-25.png" alt="" />
        </div>
        <div>
          {" "}
          <img src="https://www.linkpicture.com/q/Rectangle-26_1.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
