// import React from 'react'
import { Button } from "./Shadcn/button"
import { MdArrowOutward } from "react-icons/md"
const Login = () => {
  const handleClick=()=>{
    
  }
  return (
    <div>
      <Button className="rounded flex flex-row gap-2" onClick={handleClick}>
            <div>Log in</div>{" "}
            <div>
              <MdArrowOutward />
            </div>
          </Button>
    </div>
  )
}

export default Login