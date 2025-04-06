"use client"
import React from 'react'

const error = ({error}:{error:Error}) => {
  return (
    <div className='text-center'>{error.message}</div>
  )
}

export default error