import React from 'react';

const cardsData = [

  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-24-1_1.png',
    title: 'Lorem ipsum dolor sit amet, consectetur ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-26-1.png',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-28_2.png',
    title: 'Lorem ipsum dolor sit amet, consectetur',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },



];

const IndexPage = () => {
  return (
    <>
    
    <div className="grid justify-center items-center   bg-gray-100">
    
        <div className="text-center  font-bold text-4xl text-[#3C1B65] mt-20">Our Latest <span className="text-[#FB1D87]">Blogs</span></div> 
          <span className="flex justify-center mt-4 font-medium text-sm text-center w-[50%] ml-[25%]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.sit amet, consectetu dolor sit ame 
          </span>
      <div className="grid grid-cols-3 space-x-5  m-10 py-10">
      
        {cardsData.map((card, index) => (
            
          <div
            key={index}
            className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white"
          >
        
            <img
              src={card.imageSrc}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
 <div className='flex'>
            <div className="px-4  py-5">
            <button className='rounded-xl w-40 h-10 text-white bg-[#9732D4]'> Web Development</button>
            <span className='mx-20'>12 May 2023</span>
              <div className="font-semibold text-xl mb-3 my-5">{card.title}</div>
              <p className="text-gray-700 text-base">{card.description}</p>

              </div>
              
            </div>
           <div className='flex px-8' >
           <span className=''>2 Comments</span>
              <span className='px-20 m-2'> 2K likes</span>
           </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default IndexPage;
