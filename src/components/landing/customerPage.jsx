import Image from "next/image";
import profile from "../../../public/images/avatar.png" 
import { avatar } from "@material-tailwind/react";


function Customer() {
    return (

        <div className="bg-[#F6F6FF]  py-5 ">
            <div className="py-10 grid">
              
                <div className="text-center  font-bold text-4xl text-[#3C1B65]">What Our <span className="text-[#FB1D87]">Costumer</span> Says About Us</div> 
                <span className="flex justify-center mt-4 font-medium text-sm text-center w-[50%] ml-[25%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.sit amet, consectetu dolor sit ame 
                </span>
             
           <div className="flex space-x-8 ">
           <div className="bg-[#FFFFFF] h-[200px] w-96 ml-28 mt-20  shadow-2xl rounded-xl">
            <div className="px-12 py-6 text-[#00000077] text-sm ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Qui, atque! Quas animi consequuntur vel distinctio eos dolorum. 
              Recusandae, repellendus corrupti iste placeat architecto officia 
              id laborum animi 

              <div className="py-1 text-base font-medium text-[#9732D4]">James Williams</div>
              <span className=" text-gray-400">Web Designer</span>
            </div>

            </div>     

            <div>
              <img src="https://www.linkpicture.com/q/Rectangle-37_2.png" className=" py-16 h-[350px] " alt="" />
            </div>



            <div className="bg-[#FFFFFF] h-[200px] w-96 ml-20 mt-20  shadow-2xl rounded-xl">
            <div className="px-12 py-6 text-[#00000077] text-sm ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Qui, atque! Quas animi consequuntur vel distinctio eos dolorum. 
              Recusandae, repellendus corrupti iste placeat architecto officia 
              id laborum animi 

              <div className="py-1 text-base font-medium text-[#9732D4]">James Williams</div>
              <span className=" text-gray-400">Web Designer</span>
            </div>

            </div>     

            <div>
              <img src="https://www.linkpicture.com/q/Rectangle-39_1.png" className=" py-16 h-[350px] " alt="" />
            </div>
     
          </div>
          

            </div>
         </div>

         
    );
};


export default Customer;