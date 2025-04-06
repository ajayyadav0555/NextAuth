import { Metadata } from 'next'
// import dynamic from 'next/dynamic'
import React from 'react'



export const generateMetadata=async({params}:{params:Promise<{dynamic:string}>}):Promise<Metadata>=>{
  const {dynamic}=await params
  return {
    title:`blog ${dynamic}`
  }
}
const page = async({params}:{params:Promise<{dynamic:string}>}) => {
    const {dynamic}=await params
  return (
    <div className='text-red-500'> dynamic page id {dynamic}</div>
  )
}

export default page