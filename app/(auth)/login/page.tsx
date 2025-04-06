import { cookies } from 'next/headers'
import React from 'react'

const Login = async() => {

  const cookie=await cookies();
  console.log(cookie.get("theme"))

  return (
    <div>Login</div>
  )
}

export default Login