// import React from 'react'
import Team from "./Team"
import shiv from "../Images/shivamImg.webp"
import maha from "../Images/mahakImg.avif"
import apur from "../Images/apurvImg.jpeg"
import vish from "../Images/vishalImg.avif"

function Team1() {
  return (
    <div>
         <Team name="Shivam Shah" special="FrontEnd & Backend Dev." img={shiv} />
          <Team name="Mahak Verma" special="FrontEnd & Backend Dev." img={maha} />
          <Team name="Apurv Nipane" special="FrontEnd Dev." img={apur} />
          <Team name="Vishal Verma" special="FrontEnd Dev." img={vish} />
    </div>
  )
}

export default Team1