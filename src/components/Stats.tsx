const Stats = () => {
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto flex flex-wrap">
            <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
              <div className="w-full sm:p-4 px-4 mb-6">
              <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-typography-dark border border-gray-200 rounded-lg hover:bg-[#ffffff] hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700  mb-4">
              Performance
            </a>
                <h1 className="title-font sm:text-4xl text-3xl mb-6 font-bold text-typography-dark">
                Achievements & Milestones
                </h1>
                <div className="leading-relaxed">
                These milestones are a testament to our dedication to quality, integrity, and continuous improvement. We look forward to achieving even greater milestones with you, our valued clients and partners.                </div>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">2.7K</h2>
                <p className="leading-relaxed">Users</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
                <p className="leading-relaxed">Subscribes</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">35</h2>
                <p className="leading-relaxed">Downloads</p>
              </div>
              <div className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                <h2 className="title-font font-medium text-3xl text-gray-900">4</h2>
                <p className="leading-relaxed">Products</p>
              </div>
            </div>
            <div className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
              <img className="object-cover object-center w-full h-full" src="https://dummyimage.com/600x300" alt="stats" />
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Stats;
  