function About() {
  return (
    <>
      <div className="flex">
        <img
          src="https://www.linkpicture.com/q/about-shape-7-2_1-removebg-preview-1_1.png"
          className="h-96 my-5 px-36"
          alt=""
          srcset=""
        />

        <div>
          <h1 className="font-semibold text-xl px-52 flex">
            <h1 className="text-[]"></h1> About Us
          </h1>
          <div className="text-3xl font-semibold px-48 ">
            <h1 className="text-[#3C1B65] ">Empowering Innovations</h1>
            <h1 className="flex text-[#3C1B65]">
              {" "}
              for a <h1 className="px-3 text-[#FB1D87]"> Connected Future</h1>
            </h1>
          </div>
          <div className="m-8 px-32 mx-10">
            <p className="">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="w-auto px-14">
            <a
              className="inline-block px-10 py-3 text-white font-semibold tracking-tight bg-gradient-to-r from-[#9F37F0] to-[#3C1B65]  rounded-3xl focus:ring-4 mx-28 focus:ring-indigo-400 transition duration-200"
              href="#"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
