import { useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`ml-8 text-base font-sans rounded-md py-4 w-full mb-4 ${isOpen ? 'bg-white text-black' : 'bg-black text-white'}`} style={{ padding: "10px" }}>
      <h3 onClick={() => setIsOpen(!isOpen)} className="cursor-pointer text-2xl mt-2 mb-1 flex items-center">
        <span className="mr-2">{isOpen ? <FaArrowUp size={20} /> : <FaArrowDown size={20} />}</span>
        {question}
      </h3>
      {isOpen && (
        <p className="text-sm bg-gray-100 p-4 rounded-md mt-1 mb-2">{answer}</p>
      )}
    </div>
  );
};

const FaqList = ({ faqs }) => {
  return (
    <div className="faq-list py-4">
      {faqs.map((faq) => (
        <Faq key={faq.id} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default function Fnq() {
  const faqs = [
    {
      id: 1,
      question: "Why use online Lawer Consultancy?",
      answer: "Online consultancy platforms offer convenient access to legal professionals, saving time and eliminating travel needs. Users can find specialized expertise tailored to their needs.",
    },
    {
      id: 2,
      question: "Are the lawyers qualified?",
      answer: "Our platform verifies lawyers' qualifications, registrations, and certifications manually. Fast response times and flexible communication methods make legal advice accessible.",
    },
    {
      id: 3,
      question: "What if I don't receive a reply from a lawyer?",
      answer: "If you don't receive a response, follow up with them or contact customer support for assistance. Privacy and confidentiality are ensured during consultations.",
    },
    {
      id: 4,
      question: "Is online Lawer Consultancy safe and secure?",
      answer: "Privacy is our priority. We adhere to industry standards, ensuring secure consultations with advanced encryption.",
    }
  ];

  return (
    <div className="min-h-[500px] bg-gray-200 flex flex-col items-center justify-center">
      <h1 className="text-center text-3xl font-semibold my-6">Frequently Asked Questions</h1>
      <div className="w-[70%] mx-auto space-y-6">
        <FaqList faqs={faqs} />
      </div>
    </div>
  );
};
