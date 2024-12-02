import React, { useState } from 'react';

// State to track which panel is open
const Accordion = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(null); 

  // Toggle the accordion
  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Open/close
  };

  return (
    <div id="accordion-nested-parent">
      {data.map((item, index) => (
        <div key={index} className="accordion-item">
          <h2 id={`accordion-collapse-heading-${index}`}>
            <button
              type="button"
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between w-full p-2 font-small rtl:text-right focus:ring-4"
              aria-expanded={openIndex === index ? "true" : "false"}
              aria-controls={`accordion-collapse-body-${index}`}
            >
              <span>{item.title}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 transform ${openIndex === index ? "rotate-180" : ""} shrink-0`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5 5 1 1 5"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-collapse-body-${index}`}
            className={`accordion-content ${openIndex === index ? "block" : "hidden"}`}
            aria-labelledby={`accordion-collapse-heading-${index}`}
          >
            <div className="p-5">
              <p className="text-gray-500 dark:text-gray-400">{item.content}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
