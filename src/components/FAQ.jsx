'use client';
import { FaPlus } from 'react-icons/fa';

const faqData = [
  "Is it really unlimited?",
  "Why wouldn't I just hire a freelancer?",
  "Why wouldn't I just hire a full-time designer?",
  "Can I pause, renew or cancel at any time?",
  "Are there any contracts?",
  "How do we communicate?",
  "What if I only have one design task?",
  "What is an active task?",
  "Who are the designers?",
  "How many designs can be done in a single month?",
  "Are there any refunds if I don't like the designs?",
];

const FAQ = () => {

  return (
    <section className="bg-black text-white px-8 md:px-36 text-center md:py-20">
      <div className="mb-8 md:mb-16 max-w-4xl mx-auto">
        <span className="inline-block border border-[#363804] bg-[#171802] text-[#ffb30d] px-5 py-2 rounded-full text-sm mb-6">
          Insights
        </span>
        <h2 className="text-4xl md:text-5xl font-light leading-normal">
          Frequently asked <br /> questions
        </h2>
      </div>

      <div className="max-w-5xl mx-auto space-y-3 text-left">
        {faqData.map((question, index) => (
          <div
            key={index}
            className="bg-[#141414] p-8 border border-[#313131] rounded-lg px-6 py-5 cursor-pointer flex justify-between items-center hover:bg-[#2a2a2a] transition-colors duration-200"
          >
            <span className="text-sm md:text-lg">{question}</span>
            <span className="text-white text-xl md:text-5xl font-light">+</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
