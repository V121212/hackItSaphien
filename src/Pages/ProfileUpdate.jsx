"use client";


import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";


import { useState } from "react";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { handler } from "tailwindcss-animate";

export default function Account() {


  //this is for form data
  const [formData, setFormData] = useState({
    name:"",
    email: "",
    number: "",
    bio: "",
  });

  function changeHandler(event) {
    // console.log(event.target.value);
    const { name, value ,email ,number , bio } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
        [email]:email,
        [number]:number,
        [bio]:bio,
      };
    });
  } 

  function submitHandler1(event) {
    // event.preventDefault();
    // console.log("your default behaiour is etoped");
    // console.log(formData.password);
    // console.log(formData.confirmpassword);

   if(formData.name.length == 0) alert("Enter proper name") 
   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email))   alert("Enter valid email id");
   else if(formData.number.length != 10) alert("Enter valid mobile number");
   else  {
    console.log(formData);
    alert("Profile updated success");

    setFormData({
      name:"",
      email: "",
      number:"",
      bio:""
    });

   }

   

  }


  return (
    <div className=" min-h-screen bg-black flex flex-row w-full items-start justify-start mx-auto">
      <div className=" w-7/12 ">
        <Card className="w-11/12  ml-36 mt-20 max-sm:ml-2 max-sm:w-screen">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl">Update your account</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
          <div className="grid gap-2">
              <Label htmlFor="name"><MdDriveFileRenameOutline size={25} /></Label>
              <Input
                id="name"
                type="name"
                placeholder="xyz-xyz"
                onChange={changeHandler}
                name="name"
                value={formData.name}
              />
            </div>
           
            <div className="grid gap-2">
              <Label htmlFor="email"><MdEmail size={25} /></Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                onChange={changeHandler}
                name="email"
                value={formData.email}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="number"> < BsFillTelephoneFill size={25} /></Label>
              <Input
                id="number"
                type="number"
                 pattern="[0-9]*" 
               
                placeholder="123*****"
                onChange={changeHandler}
                name="number"
                value={formData.number}
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="bio"> <FaUser size={25} /></Label>
              <Input 
              type="text"
              name="bio" 
              onChange={changeHandler}
              placeholder="Enter about your self"    
              value={formData.bio} 
              />
            </div>

          </CardContent>

          <CardFooter className="flex flex-col">
            <Button className="w-full" onClick={submitHandler1}>
              Update
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
