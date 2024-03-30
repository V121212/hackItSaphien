import  { useState } from "react";
import './index.css'
const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq" >
      <h3 onClick={() => setIsOpen(!isOpen)}>{question}</h3>
      {isOpen && <p>{answer}</p>}
    </div>
  );
};
