import React from "react";
import Item from "./item";
import { Account, Discover, Icons } from "./menu";

function ItemContainer() {
  return (
    <>
      <div className="grid grid-cols-1 sm: bg-[#F6F6FF] grid-cols-3 lg:grid-cols-4 gap-5 sm:px-8 px-5 py-10">
        <div className="bg-[url(https://www.linkpicture.com/q/Ellipse-34-1.png)] bg-no-repeat">
          <p className="px-10 w-80">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            aspernatur eius quis dolores beatae velit rerum provident numquam
            tenetur iusto ea, iste reiciendis. Similique non, eveniet eligendi
            necessitatibus harum impedit?
          </p>
        </div>

        <Item Links={Account} title="Link" />
        <Item Links={Discover} title="Contact Us" />
        <div className="text-teal-500">
          {Icons.map((icon) => (
            <span
              key={icon.name}
              className="p-3 cursor-pointer inline-flex items-center mb-20
                    rounded-full bg-gray-700 mx-2 text-xl hover: text-gray-100 hover: bg-[#FB1D878F]
                    duration-300
                    "
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default ItemContainer;
