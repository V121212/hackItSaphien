// import React from 'react'
import { Button } from "./Shadcn/button"
// import SignInButton from '@clerk/clerk-react'
import { MdArrowOutward } from "react-icons/md"
const Login = () => {
 
  return (
    <div>
      <Button className="rounded flex flex-row gap-2">
        Login
            {/* <SignInButton redirectUrl="/">Log in</SignInButton>{" "} */}
            <div>
              <MdArrowOutward />
            </div>
          </Button>
    </div>
  )
}

export default Login