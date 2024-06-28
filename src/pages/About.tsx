const About = () => {
  return (
    <section className="text-gray-600 body-font bg-[#ffffff]">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">

            <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-typography-dark border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700  mb-4">
              About us
            </a>

              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-typography-dark">
              Your Trusted Partner in Tax Advisory and Compliance
              </h1>
              <p className="mb-5 leading-6 max-w-[500px] text-typography-lightDark">
              
At TaxGuides360, we pride ourselves on being your trusted partner in tax advisory and compliance. Our team of experienced professionals is dedicated to providing personalized and comprehensive tax solutions tailored to meet the unique needs of individuals and businesses. With a commitment to accuracy, integrity, and exceptional service, we guide you through the complexities of tax regulations, ensuring compliance and optimizing your financial outcomes. 
              </p>

              <p className="mb-8 leading-6 max-w-[500px] text-typography-lightDark">
              Whether you need assistance with tax planning, preparation, or audits, TaxGuides360 is here to support you every step of the way. Trust us to navigate the intricate tax landscape and deliver peace of mind with our expert guidance and unwavering dedication to your financial success.
              </p>
            </div>
          </div>

          <section className="text-gray-400 bg-gray-100 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-col text-center w-full mb-20">
                <h1 className="sm:text-3xl text-2xl title-font mb-4 font-bold text-typography-dark">Master Cleanse Reliac Heirloom</h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-typography-lightDark">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
              </div>
              <div className="flex flex-wrap -m-4 text-center">
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border border-gray-500 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M8 17l4 4 4-4m-4-5v9"></path>
                      <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-typography-dark">2.7K</h2>
                    <p className="leading-relaxed text-typography-dark">Downloads</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border border-gray-500 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-typography-dark">1.3K</h2>
                    <p className="leading-relaxed text-typography-dark">Users</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border border-gray-500 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                      <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-typography-dark">74</h2>
                    <p className="leading-relaxed text-typography-dark">Files</p>
                  </div>
                </div>
                <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
                  <div className="border border-gray-500 px-4 py-6 rounded-lg">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="text-blue-400 w-12 h-12 mb-3 inline-block" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                    <h2 className="title-font font-medium text-3xl text-typography-dark">46</h2>
                    <p className="leading-relaxed text-typography-dark">Places</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
  );
};

export default About;
