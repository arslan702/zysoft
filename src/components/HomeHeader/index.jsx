import Image from 'next/image'
import React from 'react'

function HomeHeader() {
  return (
    <div className="bg-[url('/images/headerOne.png')]" style={{height: '969px'}}>
      {/* <div className="bg-[url('/images/homeHeader.png')]" style={{height: '400px'}}></div> */}
      {/* <Image src={'/images/homeHeader.png'} height={300} width={300} style={{height: '500px'}}/> */}
    </div>
  )
}

export default HomeHeader