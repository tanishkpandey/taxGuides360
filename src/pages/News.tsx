import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const News: React.FC = () => {
  return (
    <>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-screen-lg px-4 2xl:px-0">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={3000}
            className="relative w-full"
          >
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <img
                src="https://via.placeholder.com/800x400?text=Slide+1"
                className="absolute block h-full w-full object-cover"
                alt="Slide 1"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <img
                src="https://via.placeholder.com/800x400?text=Slide+2"
                className="absolute block h-full w-full object-cover"
                alt="Slide 2"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <img
                src="https://via.placeholder.com/800x400?text=Slide+3"
                className="absolute block h-full w-full object-cover"
                alt="Slide 3"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <img
                src="https://via.placeholder.com/800x400?text=Slide+4"
                className="absolute block h-full w-full object-cover"
                alt="Slide 4"
              />
            </div>
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              <img
                src="https://via.placeholder.com/800x400?text=Slide+5"
                className="absolute block h-full w-full object-cover"
                alt="Slide 5"
              />
            </div>
          </Carousel>

          <div className="mt-8">
            <section className="bg-white">
              <div className="mx-auto max-w-screen-xl px-4 py-8 border-3 lg:px-6 lg:py-16">

                <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
                  <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl text-typography-dark ">
                    Latest Updates
                  </h2>
                  <p className="font-light text-gray-500 sm:text-xl ">
                  Stay informed with our latest news and updates. <br />Here’s what’s happening now:
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-md text-typography-dark">
                    <div className="mb-5 flex items-center justify-between text-gray-500">
                      <span className="text-sm">Date here</span>
                    </div>
                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                      <a href="#">How to quickly deploy a static website</a>
                    </h2>
                    <p className="mb-5 font-light text-gray-500 ">
                      Static websites are now used to bootstrap lots of websites
                      and are becoming the basis...
                    </p>
                    <div className="flex items-center justify-between">
                      <a
                        href="#"
                        className="text-primary-600 inline-flex items-center font-medium hover:underline"
                      >
                        Read more
                        <svg
                          className="ml-2 h-4 w-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </a>
                    </div>
                  </article>
                </div>

              </div>
            </section>
          </div>
        </div>
      </section>

      <div
        id="question-modal"
        tabIndex="-1"
        aria-hidden="true"
        className="fixed left-0 right-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden antialiased antialiased md:inset-0"
      >
        <div className="relative max-h-full w-full max-w-xl p-4">
          <div className="relative rounded-lg bg-white shadow ">
            <div className="flex items-center justify-between rounded-t border-b border-gray-200 p-4  md:p-5">
              <h3 className="text-lg font-semibold text-gray-900 ">
                Ask a question
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 "
                data-modal-toggle="question-modal"
              >
                <svg
                  className="h-3 w-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <form className="p-4 md:p-5">
              <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="col-span-2">
                  <label
                    htmlFor="question"
                    className="mb-2 block text-sm font-medium text-gray-900 "
                  >
                    Your question{" "}
                    <span className="text-gray-500 ">
                      (150-1000 characters)
                    </span>
                  </label>
                  <textarea
                    id="question"
                    rows="6"
                    className="focus:border-primary-500 focus:ring-primary-500 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900"
                    required
                  ></textarea>
                </div>
                <div className="col-span-2 grid gap-4 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="question-type"
                      className="mb-2 flex items-center text-sm font-medium text-gray-900 "
                    >
                      <span className="me-1">Question type</span>
                      <button
                        type="button"
                        data-tooltip-target="tooltip-dark"
                        data-tooltip-style="dark"
                        className="ml-1"
                      >
                        <svg
                          aria-hidden="true"
                          className="h-4 w-4 cursor-pointer text-gray-400 hover:text-gray-900"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        <span className="sr-only">Details</span>
                      </button>
                      <div
                        id="tooltip-dark"
                        role="tooltip"
                        className="tooltip invisible absolute z-10 inline-block max-w-sm rounded-lg bg-gray-900 px-3 py-2 text-xs font-normal text-white opacity-0 shadow-sm"
                      >
                        Choose your question type to get a faster answer.
                        <div className="tooltip-arrow" data-popper-arrow></div>
                      </div>
                    </label>
                    <select
                      id="question-type"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 "
                    >
                      <option value="technical">Technical Question</option>
                      <option value="shipment">Shipment Question</option>
                      <option value="payment">Payment Issue</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                <div className="col-span-2">
                  <p className="mb-2 block text-sm font-medium text-gray-900">
                    Upload files{" "}
                    <span className="text-gray-500">(Optional)</span>
                  </p>
                  <div className="flex w-full items-center justify-center">
                    <label
                      htmlFor="dropzone-file"
                      className="flex h-48 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <input
                        id="dropzone-file"
                        type="file"
                        className="hidden"
                      />
                    </label>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center">
                    <input
                      id="link-checkbox"
                      type="checkbox"
                      value=""
                      className="text-primary-600 focus:ring-primary-500 h-4 w-4 rounded border-gray-300 bg-gray-100 focus:ring-2"
                    />
                    <label
                      htmlFor="link-checkbox"
                      className="ms-2 text-sm font-medium text-gray-500"
                    >
                      I have read and agree with the{" "}
                      <a
                        href="#"
                        className="text-primary-600  hover:underline"
                      >
                        terms and conditions
                      </a>
                      .
                    </label>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 md:pt-5">
                <button
                  type="submit"
                  className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 me-2 inline-flex items-center rounded-lg px-5 py-2.5 text-center text-sm font-medium text-white focus:outline-none focus:ring-4"
                >
                  Submit question
                </button>
                <button
                  type="button"
                  data-modal-toggle="question-modal"
                  className="hover:text-primary-700 me-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default News;
