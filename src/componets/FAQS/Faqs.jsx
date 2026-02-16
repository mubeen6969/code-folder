
import React, { useState } from 'react';

const FAQ_DATA = [
  {
    question: "What types of trips does Triply offer?",
    answer: "Triply specializes in immersive desert expeditions, ranging from luxury glamping in the Sahara to rugged 4x4 off-road adventures and guided camel treks across ancient trade routes."
  },
  {
    question: "What is your cancellation or refund policy?",
    answer: "We offer a flexible cancellation policy. Cancellations made more than 30 days prior to departure receive a full refund minus a small processing fee. Within 30 days, we offer credit for future journeys."
  },
  {
    question: "Are Triply's trips safe and well-guided?",
    answer: "Safety is our top priority. All our guides are certified wilderness experts with deep knowledge of local terrain and culture. Every group is equipped with satellite communication and emergency kits."
  },
  {
    question: "Can I customize my travel itinerary?",
    answer: "Absolutely! While we have pre-designed routes, we love creating bespoke experiences. You can contact our travel consultants to tailor every detail of your journey to your preferences."
  },
  {
    question: "How do I book a trip?",
    answer: "Booking is simple. Select your preferred adventure on our website, choose your dates, and complete the secure checkout. Our team will reach out within 24 hours to confirm all details."
  }
];

const ArrowDownIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={2} 
    stroke="currentColor" 
    className={className}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
    console.log(openIndex)
  };

  return (
    <section className=" rounded-3xl p-8 md:p-6 shadow-sm border border-neutral-100">
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 gap-6">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold tracking-widest text-neutral-400 uppercase mb-4 block">FAQ</span>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-900 leading-tight">
            All You Should Know Before Embarking on Your Desert Journey
          </h2>
        </div>
        <div className="max-w-xs md:mt-10">
          <h4 className="font-semibold text-neutral-900 mb-2">Didn't see your question?</h4>
          <p className="text-neutral-500 text-sm leading-relaxed">
            Our team is here to help — just reach <br /> out and we'll reply shortly.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12">
        {/* Image */}
        <div className="lg:col-span-4 h-full min-h-[400px]">
          <div className="relative h-full w-full rounded-2xl overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1509114397022-ed747cca3f65?auto=format&fit=crop&q=80&w=1200&h=1600"
              alt="Desert"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-600 group-hover:scale-110  "
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div> */}
          </div>
        </div>

        {/* Accordion */}
        <div className="lg:col-span-6 flex flex-col gap-4 justify-between  bg-white rounded-2xl ">
          {FAQ_DATA.map((item, index) => (
            <div
              key={index}
              className={`border-b border-neutral-100 last:border-0 transition-all duration-300 ${
                openIndex === index ? 'bg-neutral-50/50 rounded-xl' : ''
              }`}
            >
              <button
                onClick={() => toggleAccordion(index) }
                
                className="w-full py-6 flex justify-between items-center text-left hover:bg-neutral-50/80 px-4 rounded-xl"
              >
                <span className="text-lg font-medium text-neutral-800 pr-4">
                  {item.question}
                </span>
                <ArrowDownIcon
                  className={`w-5 h-5 text-neutral-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-60 opacity-100 mb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-4 text-neutral-600 leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faqs;
