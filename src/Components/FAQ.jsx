// FAQ.js
import React, { useState } from 'react';

function FAQ() {
  // Sample data for FAQs
  const faqData = [
    { question: "What is React?", answer: "React is a JavaScript library for building user interfaces." },
    { question: "What is Tailwind CSS?", answer: "Tailwind CSS is a utility-first CSS framework for rapidly building custom designs." },
    { question: "What is an accordion?", answer: "An accordion is a UI component that shows and hides content when clicked." },
  ];

  // State to keep track of open items
  const [openIndex, setOpenIndex] = useState(null);

  // Function to toggle open/close for each item
  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>

      {faqData.map((item, index) => (
        <div key={index} className="border border-gray-300 rounded-md mb-4">
          {/* Accordion Header */}
          <div
            className="flex justify-between items-center p-4 bg-gray-100 cursor-pointer"
            onClick={() => toggleAccordion(index)}
          >
            <h3 className="font-medium text-gray-800">{item.question}</h3>
            <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
          </div>

          {/* Accordion Content */}
          {openIndex === index && (
            <div className="p-4 bg-white text-gray-700">
              <p>{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;
