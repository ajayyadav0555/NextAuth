import React from 'react'

const page = async({params}:{params:Promise<{dynamicId:number}>}) => {
    const {dynamicId} =await params
    if(dynamicId==1){
      throw new Error("Error in dynamicId")
    }
  return (
    <div>page {dynamicId}</div>
  )
}

export default page