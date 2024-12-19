import React from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: "Who are the main characters in DuckTales?",
      answer: "The main characters include Scrooge McDuck, Huey, Dewey, Louie, Webby, and Launchpad McQuack, among others!"
    },
    {
      question: "Is this based on the original series or the reboot?",
      answer: "Our adventure draws inspiration from both the classic series and the modern reboot, offering a perfect blend of nostalgia and fresh excitement!"
    },
    {
      question: "Do I need to know DuckTales to enjoy this adventure?",
      answer: "Not at all! While fans will appreciate the references, our adventure is designed for everyone to jump in and have a quack-tastic time!"
    }
  ];

  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-full w-full bg-gray-50 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center p-4 max-w-full">
        <div className="text-center mb-6 w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">%#PLACEHOLDER FAQ_HEADER_TEXT</h2>
          <p className="text-gray-600">%#PLACEHOLDER FAQ_SUBHEADER_TEXT</p>
        </div>

        <div className="w-full max-w-3xl space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm">
              <button
                className="w-full px-4 py-3 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-medium text-gray-800 pr-4">{faq.question}</span>
                <svg
                  className={`w-4 h-4 text-gray-500 transform transition-transform duration-200 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-3">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { FAQ as component };