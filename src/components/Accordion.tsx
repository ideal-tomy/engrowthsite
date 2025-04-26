import React, { useState } from 'react';
import './Accordion.css';

interface AccordionItem {
  title: string;
  content: string | React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpen = -1 }) => {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div 
          key={index} 
          className={`accordion-item ${openIndex === index ? 'open' : ''}`}
        >
          <button
            className="accordion-header"
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.title}</span>
            <span className="accordion-icon">
              {openIndex === index ? '−' : '＋'}
            </span>
          </button>
          <div className="accordion-content">
            {typeof item.content === 'string' ? (
              <p>{item.content}</p>
            ) : (
              item.content
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion; 