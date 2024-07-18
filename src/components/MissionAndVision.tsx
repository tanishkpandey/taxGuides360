const MissionAndVision = () => {
    return (
      <>
        <section className="text-gray-600 body-font bg-[#ffffff]">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

            <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-typography-dark border border-gray-200 rounded-lg hover:bg-[#F2FFF7] hover:text-[#197E37]  focus:z-10  focus:text-[#197E37] cursor-pointer mb-4">
              Mission & Vision
            </span>

              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-typography-dark">
              Our Dedication to Excellence
              </h1>
              <p className="mb-8 leading-6 max-w-[500px]">
              Our mission is to provide unparalleled auditing services that empower businesses to achieve financial transparency and operational efficiency. We strive to foster trust and confidence by delivering precise, insightful, and actionable audit reports, enabling our clients to make informed decisions and thrive in a competitive marketplace.
              </p>

              <p className="mb-8 leading-6 max-w-[500px]">
              Our vision is to be the most trusted auditing firm globally, recognized for our expertise, integrity, and innovative solutions. We aim to set the industry standard for excellence and reliability, continuously evolving to meet the changing needs of our clients and the dynamic business environment.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  };
  
  export default MissionAndVision;
  