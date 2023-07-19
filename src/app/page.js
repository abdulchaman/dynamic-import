import React from 'react'
import dynamic from 'next/dynamic';

const DynamicComponet = dynamic(()=> import("../../component/Dynamic"),{
  ssr:false
})

const page = () => {
  return (
    
    <>
      <div>page</div>
      <DynamicComponet></DynamicComponet>
    </>
  )
}

export default page