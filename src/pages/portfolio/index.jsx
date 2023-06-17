import Designs from "@/components/PortFolio/Designs";
import PortFolios from "@/components/PortFolio/PortFolios";
import React from "react";

function PortFolio() {
  return (
    <div className="bg-F5F5F5 py-4 mt-10">
      <div className="flex flex-col items-center">
        <div className="text-center font-semibold">OurWork</div>
        <div>
          <div
            className="text-center text-2xl font-bold mb-4"
            style={{ fontSize: "40px" }}
          >
            PortFolio
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-8">
        <div
          className="flex flex-row items-center justify-center"
          style={{
            width: "74px",
            height: "71px",
            color: "white",
            background: "#FB1D87",
            borderRadius: "35.5px 35.5px 35.5px 10px",
          }}
        >
          All
        </div>
        <div
          className="ml-8 flex items-center justify-center"
          style={{
            width: "153px",
            height: "71px",
            background: "rgba(251, 29, 135, 0.2)",
            borderRadius: "33px 33px 33px 10px",
          }}
        >
          Website
        </div>
        <div
          className="ml-8 flex items-center justify-center"
          style={{
            width: "153px",
            height: "71px",
            background: "rgba(251, 29, 135, 0.2)",
            borderRadius: "33px 33px 33px 10px",
          }}
        >
          Mobile App
        </div>
        <div
          className="ml-8 flex items-center justify-center"
          style={{
            width: "153px",
            height: "71px",
            background: "rgba(251, 29, 135, 0.2)",
            borderRadius: "33px 33px 33px 10px",
          }}
        >
          Graphic
        </div>
        <div
          className="ml-8 flex items-center justify-center"
          style={{
            width: "153px",
            height: "71px",
            background: "rgba(251, 29, 135, 0.2)",
            borderRadius: "33px 33px 33px 10px",
          }}
        >
          UI UX
        </div>
      </div>
      <div className="flex flex-wrap justify-center mt-12">
        <PortFolios image="/images/portOne.png" />
        <Designs image="/images/portTwo.png" heading="Web Development" />
        <PortFolios image="/images/portThree.png" />
        <PortFolios image="/images/portFour.png" />
        <Designs image="/images/portFive.png" heading="App Development" />
        <PortFolios image="/images/portSix.png" />
        <PortFolios image="/images/portSeven.png" />
        <Designs image="/images/portEight.png" heading="Dashboard Design" />
        <PortFolios image="/images/portNine.png" />
        <div className="w-full flex justify-center items-center mt-4">
          <nav className="pagination">
            <ul className="flex items-center justify-center">
              {" "}
              {/* Updated line */}
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

export default PortFolio;
