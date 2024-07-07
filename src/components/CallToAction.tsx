import { Link } from 'react-router-dom';
const CallToAction = () => {
    return(
      <div>
          <section className="text-gray-600 body-font bg-[#0787FB]">
            <div className="container px-5 py-5">
              <div className=" flex flex-col justify-between sm:justify-between sm:flex-row sm:items-center items-start">
                <h1 className="flex-grow sm:pr-16 text-xl font-medium title-font text-gray-900 text-typography-light">Register now for exclusive updates and special offers!</h1>
                <Link to='/contactus' className="flex-shrink-0 text-[#0787FB] border-0 py-2 px-8 focus:outline-none hover:opacity-95 rounded-xl text-lg mt-10 sm:mt-0 bg-typography-light">Register</Link>
              </div>
            </div>
          </section>
      </div>
    )
}

export default CallToAction;