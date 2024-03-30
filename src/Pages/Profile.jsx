import profileImg from "../Images/profileImg.png";

import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import { Button } from "../components/Shadcn/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/Shadcn/card";
import { Label } from "../components/Shadcn/label";

export default function Profile() {
  function submitHandler() {}

  const firstName = "Vishal";
  const lastName = "Verma";
  const userEmail = "v.verma7271@gmail.com";
  const userNumber = "7803087585";
  const userBio =
    "Lorem ipsum dolor sit amet consecteturkbn cssh  f s sahfdjb asb k sdjfh sld  nkcxzncvds isi quia, voluptatibus nostrum voluptas?";

  return (
    <div className=" min-h-screen flex flex-row w-screen  items-start justify-start mx-auto my-auto bg-black ">
      <div className="w-1/3 flex justify-center max-md:hidden">
        <img src={profileImg} className=" w-9/12 mt-10" />
      </div>
      <div className=" w-7/12 max-md:w-screen max-md:ml-2">
        <Card className="w-11/12 justify-end mt-20  ">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl"> Hii ! {firstName}</CardTitle>
            <CardDescription>This is your profile section..</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
                <div className="flex flex-row gap-5">
                    <div> <MdDriveFileRenameOutline size={30} /> </div>
                    <div className=" font-bold" >{firstName} {lastName}</div>
                </div>
            </div>

            <div className="grid gap-2">
            <div className="flex flex-row gap-5  ">
                    <div className=""> <MdEmail size={30} /> </div>
                    <div className=" font-bold " >{userEmail} </div>
                </div>
            </div>

            <div className="grid gap-2">
            <div className="flex flex-row gap-5">
                    <div> <BsFillTelephoneFill size={30} /> </div>
                    <div className=" font-bold" >{userNumber} </div>
                </div>
            </div>

            <div className="grid gap-2">
            <div className="flex flex-row gap-5">
                    <div> <FaUser size={30} /> </div>
                    <div className=" font-bold" >{userBio}</div>
                </div>
            </div>

          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-1/4" onClick={submitHandler}>
              <div className=" flex flex-row max-md:text-xs max-md:flex-col" >
                <div>Update </div>
                <div>Profile</div>
              </div>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
