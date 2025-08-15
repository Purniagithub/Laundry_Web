import React, { useState } from "react";

const faqs = [
  {
    question: "What services do you provide?",
    answer: "We offer laundry, shoe cleaning, car cleaning, and house cleaning services with pickup and delivery options.",
  },
  {
    question: "How can I book a service?",
    answer: "Click on the 'Book Now' button, fill out the form, and we’ll handle the rest.",
  },
  {
    question: "Do you offer same-day delivery?",
    answer: "Yes, same-day delivery is available for laundry services depending on location and time of booking.",
  },
  {
    question: "What are your service hours?",
    answer: "We operate from 8 AM to 8 PM, Monday through Saturday.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 bg-white">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none"
            >
              <span className="font-medium text-lg text-gray-800">{faq.question}</span>
              <span className="text-xl text-orange-500">{openIndex === index ? "−" : "+"}</span>
            </button>
            {openIndex === index && (
              <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
