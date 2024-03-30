import { useState } from "react";

import { FaArrowDown } from "react-icons/fa6";
import { FaArrowUp } from "react-icons/fa";

// import './index.css'
const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-8 text-base font-general-sans font-normal  " >
      <h3  onClick={() => setIsOpen(!isOpen)}> <p className="text-2xl mt-4"><div className="flex flex-row gap-2"> <div><FaArrowDown size={20} /></div> <div>{question}</div> </div></p></h3>
      {isOpen && <p className="text-sm p-2"> <p className="flex flex-row gap-2"> {answer}</p> </p>}
    </div>
  );
};

const FaqList = ({ faqs }) => {
  return (
    <div className="faq-list ">
      {faqs.map((faq) => (
        <Faq  key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );  
};

export default function Fnq() {
  const faqs = [
    {
      id: 1,
      question: "Why to use online LawerConsultancy?",
      answer: "Online consultancy platforms for legal advice offer convenient, accessible, and cost-effective access to legal professionals. They enable users to schedule consultations from anywhere, saving time and eliminating the need for travel. With a wide range of legal services available, users can find specialized expertise tailored to their needs.",
    },
    {
      id: 2,
      question: "Are the lawers we are hiring are qualified?",
      answer: " Your online legal consultancy platform verifies lawyers' qualifications, registrations, and certifications manually They enable users to schedule consultations from anywhere, saving time and eliminating the need for travel. These platforms offer fast response times and flexible communication methods, making legal advice more accessible to a broader audience."
    },
    {
      id: 3,
      question: "What should I do if I don't receive a reply from a lawyer?",
      answer: "If you haven't received a response from a lawyer, you may need to follow up with them by sending another message or trying to contact them through alternative means such as phone or email. If you still don't get a response, you may consider reaching out to the platform's customer support for assistance or exploring other options for legal consultation."
    },
    {
      id: 4,
      question: "Is online Lawer Consultancy safe and secured?",
      answer: "Your privacy is our priority. We adhere to industry standards for privacy and confidentiality, ensuring that your online consultations with lawyers are completely secure. Your information is protected using advanced 256-bit encryption, offering you peace of mind during your legal discussions."
    }
  ];

  return (
    <div  className=" min-h-screen app cursor-pointer flex flex-col gap-8 bg-slate-200 pt-20 ">
      <h1 className="  ml-20 justify-center text-uppercase font-general-sans-medium font-semibold text-center text-2xl" >Frequently Asked Questions</h1>
      <FaqList faqs={faqs}  />
    </div>
  );
};

