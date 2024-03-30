// import React from 'react';
import Box1 from '../../src/components/Shadcn/Box1'; // Assuming Box1 is a component you've defined elsewhere

const Feature = () => {
  return (
    <div className="w-[1286px] flex flex-col gap-8 mt-20 mx-auto">
      <div className="font-bold text-5xl ml-14">Features</div>
      <div className="flex flex-row gap-16 mt-2 ml-12 mr-12 font font-light text-s">
        <Box1
          title="Lawyer Profiles and Specializations"
          body=" The platform hosts profiles of lawyers, including their areas ofexpery and reviews from previous clients."
          // className="hover:color=#FFFF000 "
       />
        <Box1
          title="Search and Filter Functionality"
          body="Users can search for lawyers based on various criteria such as practice area, availability, and fee structure."
          className="hover:color=#FFFF000 "
        />
        <Box1
          title="Video Conferencing"
          body="Video Conferencing boosts remote consultations, ensuring swift access to legal expertise, streamlining legal consulting efficiency."
          className="hover:color=#FFFF000 "

        />
        <Box1
          title="Security"
          body="Implementing strong security measures and confidentiality safeguards is crucial to protect sensitive client information and maintain trust."
          className="hover:color=#FFFF000 "
       />
      </div>
    </div>
  );
}

export default Feature;
