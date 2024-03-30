import img from "../Images/newImg.png";

function Feedback_Feature() {
  return (

    <div className="w-[1286px] mx-auto flex flex-row items-center justify-center mt-32 gap-3">
        <div className="w-32 flex items-center justify-center" style={{ width: "50%" }}>
        <img src={img} alt="img" style={{ width: "100%", height: "auto", maxWidth: "400px", maxHeight: "500px" }} />
      </div>
    
      <div className="w-full flex flex-col p-8 " style={{ width: "50%", paddingLeft: "20px" }}>
        <form style={{ width: "100%", display: "flex", flexDirection: "column" }} className="space-y-2">
          <label className="text-xl">Enter email :</label>
          <input type="email" placeholder="md@vsvfdc.com" className="w-full px-[10px] py-2 text-xl border mb-4" />
          <label className="text-xl">Enter message :</label>
          <input type="Message" placeholder="Enter message" className="w-full px-[10px] py-2 text-xl border" />
        </form>
        <div className="w-24 px-4 py-2 text-xl bg-black text-white rounded-md mt-8">
        submit
      </div>
      </div>
      
    </div>
  );
}

export default Feedback_Feature;
