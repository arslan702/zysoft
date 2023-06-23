import React from 'react';
import profile1 from '../../../public/images/peter.png'
import profile2 from '../../../public/images/avatar.png'

import Image from 'next/image';

const cardsData = [

  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-12.png',
    title: 'Web Devalopment ',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    profile: profile2,
    name: 'James Williams',
    rating: '4.7'

  },
  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-14_5.png',
    title: 'UI UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    profile: profile1,
    name: 'James Williams',
    rating: '4.7'

  },
  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-16_3.png',
    title: 'Wordpress',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    profile: profile2,
    name: 'James Williams',
    rating: '4.7'

  },

  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-20.png',
    title: 'Web Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    profile: profile1,
    name: 'James Williams',
    rating: '4.7'

  },
  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-21_1.png',
    title: 'UI UX Design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    profile: profile2,
    name: 'James Williams',
    rating: '4.7'

  },
  {
    imageSrc: 'https://www.linkpicture.com/q/Rectangle-22.png',
    title: 'Wordpress',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    profile: profile1,
    name: 'James Williams',
    rating: '4.7'

  },
  

];

const DevCards = () => {
  return (
    <>
   
    <div className="grid justify-center items-center   bg-gray-100 mt-28">
    <div className='grid justify-center text-center w-[50%] ml-[25%] mr-[25%] mt-20 font-semibold  '>
            
            <div className="flex text-4xl text-center justify-center">
            <div className="text-[#3C1B65] ">Cources </div>
            <div className="px-2  text-[#FB1D87]">We Offer</div>
            </div>
            <div className="mt-4">
            <span className="font-normal text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.sit amet, consectetu dolor sit ame</span>
            </div>
          
            </div>

      <div className="grid col-1 sm:grid-cols-2 lg:grid-cols-3 space-x-5 space-y-8  m-10  px-16">
      
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
            <div className='grid pt-8 px-8'>
            <div className='flex justify-between'>
              <button className='rounded-3xl  py-2 px-6 text-white text-sm  bg-gradient-to-r from-[#9F37F0] to-[#3C1B65]'> Web Development</button>
              <span className='mt-1 font-medium text-lg text-purple-800'>$ 130.00</span>
            </div>
              <div className="font-semibold text-xl mb-2 mt-5">{card.title}</div>
              <div className="text-gray-800 text-base font-medium text-sm">{card.description}</div>
              <div>

              </div>
              
            </div>
           <div className='flex justify-between px-8 mt-4 pb-6' >
           <div className='flex gap-4'>
              <Image className='h-12 w-12 rounded-full'  src={card.profile} alt='profile'/>
              <div className='grid font-medium'>
                <span className='text-sm text-gray-500'>Instructor:</span>
                <span className='text-lg text-gray-'>{card.name}</span>

              </div>
            </div>
            <div className='grid'>
              <div class="flex items-center">
                <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                <svg aria-hidden="true" class="w-4 h-4 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
              </div>
              <span className=' text-gray-500'>{card.rating} Rating: </span>
            </div>
           </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default DevCards;
