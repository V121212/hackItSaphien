"use client";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { useState } from "react";
import { Button } from "../components/Shadcn/button";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/Shadcn/card'
import {Input} from '../components/Shadcn/input'
import {Label} from '../components/Shadcn/label'
// import { Label } from "@/components/ui/label";
// import { handler } from "tailwindcss-animate";

export default function Feedback() {
  //this is for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    feedback: "",
  });

  function changeHandler(event) {
    // console.log(event.target.value);
    const { name, value, email, number, feedback } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: value,
        [email]: email,
        [number]: number,
        [feedback]: feedback,
      };
    });
  }

  function submitHandler1(event) {
    event.preventDefault();
    // console.log("your default behaiour is etoped");
    // console.log(formData.password);
    // console.log(formData.confirmpassword);

    if (formData.number.length === 10 && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email) ) {
      console.log(formData);
      alert("Thanks for feedback !");
      // const { name, email, number, feedback } = event.target;
      setFormData({
        name: "",
        email: "",
        number: "",
        feedback: "",
      });
    } else {
      alert("Pleas enter valid data");
    }
  }

  return (
    <form onSubmit={submitHandler1}>
      <div className=" min-h-screen bg-black flex flex-row w-full items-start justify-start mx-auto">
        <div className=" w-7/12 ">
          <Card className="w-11/12  ml-36 mt-20 max-sm:ml-2 max-sm:w-screen">
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">Feedback For Us </CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">
                  <MdDriveFileRenameOutline size={25} />
                </Label>
                <Input
                  id="name"
                  type="name"
                  placeholder="xyz-xyz"
                  onChange={changeHandler}
                  name="name"
                  value={formData.name}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">
                  <MdEmail size={25} />
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={changeHandler}
                  name="email"
                  value={formData.email}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="number">
                  {" "}
                  <BsFillTelephoneFill size={25} />
                </Label>
                <Input
                  id="number"
                  type="number"
                  pattern="[0-9]*"
                  placeholder="123*****"
                  onChange={changeHandler}
                  name="number"
                  value={formData.number}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="bio">
                  {" "}
                  <FaUser size={25} />
                </Label>
                <Input
                  type="text"
                  name="feedback"
                  onChange={changeHandler}
                  placeholder="Enter feedback for our team"
                  value={formData.feedback}
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col">
              <Button className=" flex flex-row justify-center gap-1 w-1/5 max-md:flex-col max-md:gap-0" type="submit">
                <div className="max-md:size-6 justify-start" >Submit</div>
                <div> Feedback</div>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </form>
  );
}
