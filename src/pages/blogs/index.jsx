import Boxes from '@/components/Blogs'
import Header from '@/components/Header'
import React from 'react'

function Blogs({blogs}) {
  return (
    <>
      <Header heading="Blogs" subHeading="Home > Blogs list"/>
      <Boxes blogs={blogs}/>
    </>
  )
}

export default Blogs