import Image from "next/image";
import React from "react";

function Header({heading, subHeading}) {
  return (
    <div className="h-[180px] md:h-[230px]" style={{ backgroundColor: "#F7F7FF" }}>
      <div className="flex justify-around">
        <div className="lg:ml-100 pt-10" >
          <Image className="lg:w-[447px] lg:h-[131px]" src={'/images/group9.png'} alt="img" width={92} height={92}/>
        </div>
        <div className="pt-4 md:pt-10  mt-[20px] grid justidy-center text-center">
          <div className=" font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight">
            {heading}
          </div>
          <div className="-mt-4 sm:-mt-0 lg:-mt-6 text-xs sm:text-sm whitespace-nowrap font-medium">{subHeading}</div>
        </div>
        <div className="pt-5 lg:ml-[400px]" >
          <Image src={'/images/group13.png'} alt="img" width={300} height={300} style={{height: '91px', width: '91px'}}/>
        </div>
      </div>
    </div>
  );
}

export default Header;
