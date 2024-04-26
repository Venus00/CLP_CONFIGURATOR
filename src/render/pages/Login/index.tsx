import React from 'react'
import LoginForm from './components/LoginForm'
function Login() {
  return (
    <div className="relative flex items-center justify-center h-screen bg-black  overflow-hidden">
      <div
        className="relative z-30 text-2xl text-white w-1/3 max-w-[400px] "
      >
        <div className="">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}

export default Login