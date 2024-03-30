import img from "../Images/manImg.png";
import Cards from "./Cards";

const TeamDetails = () => {
  const imageData = [
    {
      id: "0",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: "A exprienced lawyer. ",
    },
    {
      id: "1",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: "A exprienced lawyer.",
    },
    {
      id: "2",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: "A exprienced lawyer.",
    },
    {
      id: "3",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: " A exprienced lawyer. ",
    },
    {
      id: "4",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: " A exprienced lawyer. ",
    },
    {
      id: "5",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: " A exprienced lawyer. ",
    },
    {
      id: "6",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: " A exprienced lawyer. ",
    },
    {
      id: "7",
      image: img,
      name: "Adv. Sunil Sharma",
      tittle: "A exprienced lawyer. ",
    },
    // {
    //   id: "8",
    //   image: img,
    //   name: "Prajapati Vijay",
    //   tittle: " Android Developer/Pyhton Developer ",
    // },
  ];

  return (
    <div className="bg-slate-100 min-h-screen">
      <div className="w-full mt-5 ">
        <div className="w-11/12 mx-auto p-5 border border-slate-800 rounded-md text-slate-50 ">

          {/* image sec */}

          <Cards imageData={imageData} />
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
