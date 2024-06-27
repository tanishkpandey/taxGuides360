
const HeroSection = () => {
  return (
    <div>
      <section className="hero flex flex-col justify-center gap-6 h-[500px] p-4">
        <div className="wrap-content flex flex-col items-center gap-6">
          <h1 className="main-title text-4xl md:text-5xl font-bold text-center text-surface-100 m-0 text-typography-dark">
          India’s Growing Tax & Financial Services Platform
          </h1>
          <p className="description-hero max-w-[700px] text-[17px] md:text-md text-center text-surface-300 m-0 leading-6 text-typography-lightDark">
          Our platform offers comprehensive tax and financial services designed to meet the diverse needs of individuals and businesses across the country. 
          </p>
          <button className="btn-primary flex justify-center items-center text-surface-50 bg-gradient-to-r from-primary-200 to-primary-300 rounded-xl py-3 px-8  font-bold text-lg hover:scale-95 transition-transform duration-500 ease-in-out bg-[#1678fb] text-typography-offLight">
            Explore More
            <svg className="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
              </svg>
          </button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
