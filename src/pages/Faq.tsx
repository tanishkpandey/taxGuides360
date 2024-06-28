import React, { useState } from 'react';

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index: any) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <>
      <section className="text-gray-600 body-font bg-[#ffffff]">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-typography-dark border border-gray-400 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10  focus:outline-none focus:ring-gray-100 focus:text-blue-700 mb-4">
              FAQ
            </a>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-typography-dark">
              Frequently Asked Questions
            </h1>
            <p className="mb-5 leading-6 max-w-[500px] text-typography-lightDark">
              Find answers to common tax questions. Learn about our services, tax deadlines, and preparation procedures to make your tax experience smooth and stress-free. Contact us for further assistance.
            </p>
          </div>
        </div>
      </section>

      <div className='max-w-[1200px] mx-auto bg-white py-12'>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-400 rounded-t-xl  focus:ring-gray-200 hover:bg-gray-100 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded={openAccordion === 1}
            aria-controls="accordion-collapse-body-1"
            onClick={() => toggleAccordion(1)}
          >
            <span>What is Flowbite?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${openAccordion === 1 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-1" className={`${openAccordion === 1 ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-1">
          <div className="p-5 border border-b-0 border-gray-400  ">
            <p className="mb-2 text-gray-500 ">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
            <p className="text-gray-500 ">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600  hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
          </div>
        </div>
        
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-400  focus:ring-gray-200 hover:bg-gray-100  gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded={openAccordion === 2}
            aria-controls="accordion-collapse-body-2"
            onClick={() => toggleAccordion(2)}
          >
            <span>Is there a Figma file available?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${openAccordion === 2 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-2" className={`${openAccordion === 2 ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-2">
          <div className="p-5 border border-b-0 border-gray-400 ">
            <p className="mb-2 text-gray-500 ">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
            <p className="text-gray-500 ">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600  hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
          </div>
        </div>

        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-400  focus:ring-gray-200    hover:bg-gray-100  gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded={openAccordion === 3}
            aria-controls="accordion-collapse-body-3"
            onClick={() => toggleAccordion(3)}
          >
            <span>What are the differences between Flowbite and Tailwind UI?</span>
            <svg
              data-accordion-icon
              className={`w-3 h-3 ${openAccordion === 3 ? 'rotate-180' : ''} shrink-0`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <div id="accordion-collapse-body-3" className={`${openAccordion === 3 ? '' : 'hidden'}`} aria-labelledby="accordion-collapse-heading-3">
          <div className="p-5 border border-t-0 border-gray-400 ">
            <p className="mb-2 text-gray-500 ">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
            <p className="mb-2 text-gray-500 ">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
            <p className="mb-2 text-gray-500 ">Learn more about these technologies:</p>
            <ul className="ps-5 text-gray-500 list-disc ">
              <li><a href="https://flowbite.com/pro/" className="text-blue-600  hover:underline">Flowbite Pro</a></li>
              <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600  hover:underline">Tailwind UI</a></li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Faq;
