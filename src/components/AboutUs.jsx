// import React from 'react'

import img from "../Images/aboutUsImg.png";

function AboutUs() {
  return (
    <div className="flex flex-row">
     <div className=" ml-16 mt-10 ">
        <div className=" text-center font-bold text-3xl ">About Us</div>
      <div>
        <div><p className="text-2xl font-bold">Aim :-</p>
            <p className=" p-1">To democratize legal access by providing affordable, on-demand legal advice to individuals and businesses,
               irrespective of their location or financial status, thereby empowering them to make informed decisions
              and navigate legal complexities with confidence.</p>
        </div>
      

       {/* <div><p className="text-2xl font-bold">Working</p></div> */}
       {/* Screen shots  */}
 
       {/* <div>
          <div>
             <div> <p className="text-2xl font-bold">Future Planes</p></div>
             <div>
                 <div><p className=" text-lg"> Global Reach:</p> Expand the reach of the platform to serve clients internationally, potentially by partnering with legal professionals from different jurisdictions or adapting services to comply with various legal systems.   </div>
                 <div><p className=" text-lg">Community Engagement:</p> Foster a sense of community among users by creating forums, discussion boards, or online groups where individuals can share experiences, seek advice from peers, and access additional resources related to legal matters.</div>
                 <div><p className=" text-lg">Partnerships and Collaborations:</p> Forge partnerships with other legal service providers, government agencies, or non-profit organizations to broaden the range of support services available to users and facilitate referrals for specialized legal assistance when needed.</div>
                 <div><p className=" text-lg">Continuous Improvement:</p> Implement feedback mechanisms to gather input from users and stakeholders, allowing for continuous improvement of the platform in terms of functionality, user experience, and service quality.</div>
             </div>
          </div> */}
        
        {/* </div> */}


      </div>
     </div>

      <div> <div className=" w-96"> <img src={img} alt="img"  /> </div></div>


      
    </div>
  );
}

export default AboutUs;
