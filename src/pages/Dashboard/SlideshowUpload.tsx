import React, { useState, ChangeEvent } from 'react';

const SlideshowUpload: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<(File | null)[]>([null, null, null, null]);

  const handleFileChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files[0]) {
      const newSelectedFiles = [...selectedFiles];
      newSelectedFiles[index] = files[0];
      setSelectedFiles(newSelectedFiles);
    }
  };

  return (
    <section className=" bg-gray-900 h-screen">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-3xl font-bold text-white mb-8">
          Upload Images for Slideshow
        </h2>
        <form action="#">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div className="sm:col-span-2">
              <label
                htmlFor="title"
                className="block mb-2 text-sm font-medium text-white"
              >
                Slideshow Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                placeholder="Enter Slideshow Title..."
              />
            </div>

            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="sm:col-span-2">
                <label
                  htmlFor={`image-${index}`}
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Upload Image {index + 1}
                </label>
                <input
                  type="file"
                  name={`image-${index}`}
                  id={`image-${index}`}
                  onChange={handleFileChange(index)}
                  className="block w-full text-sm bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none bg-gray-700 border-gray-600 placeholder-gray-400"
                />
              </div>
            ))}

            <div className="sm:col-span-2">
              {selectedFiles.some(file => file !== null) && (
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Selected Files
                  </h3>
                  <ul className="list-disc list-inside text-white">
                    {selectedFiles.map((file, index) => (
                      file && <li key={index}>{file.name}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 focus:ring-primary-900 hover:bg-primary-800 bg-[#0787FB]"
          >
            Upload Slideshow
          </button>
          <button
            className="inline-flex items-center px-5 mx-2 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 focus:ring-primary-900 hover:bg-red-800 bg-[#0787FB]"
          >
            Reset Slideshow
          </button>
        </form>
      </div>
    </section>
  );
};

export default SlideshowUpload;
