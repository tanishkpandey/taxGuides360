import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface Slideshow {
  _id: string;
  imageLinks: string[];
  createdAt: string;
}

const SlideshowUpload: React.FC = () => {
  const [imageLinks, setImageLinks] = useState<string[]>(['', '', '', '']);
  const [message, setMessage] = useState<string>('');
  const [slideshows, setSlideshows] = useState<Slideshow[]>([]);

  useEffect(() => {
    const fetchSlideshows = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/slideshows');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: Slideshow[] = await response.json();
        setSlideshows(data);
      } catch (error) {
        console.error('Error fetching slideshows:', error);
      }
    };

    fetchSlideshows();
  }, []);

  const handleLinkChange = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const newImageLinks = [...imageLinks];
    newImageLinks[index] = event.target.value;
    setImageLinks(newImageLinks);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/slideshow', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ imageLinks }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newSlideshow = await response.json();
      setSlideshows([newSlideshow.slideshow, ...slideshows]);
      setMessage('Slideshow uploaded successfully!');
      setImageLinks(['', '', '', '']);
    } catch (error) {
      console.error('Error uploading slideshow:', error);
      setMessage('Failed to upload slideshow.');
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`http://localhost:5000/api/slideshow/${id}`, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      setSlideshows(slideshows.filter(slideshow => slideshow._id !== id));
      setMessage('Slideshow deleted successfully!');
    } catch (error) {
      console.error('Error deleting slideshow:', error);
      setMessage('Failed to delete slideshow.');
    }
  };

  return (
    <section className="bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-3xl font-bold text-white mb-8">
          Enter Image Links for Slideshow
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className="sm:col-span-2">
                <label
                  htmlFor={`link-${index}`}
                  className="block mb-2 text-sm font-medium text-white"
                >
                  Image Link {index + 1}
                </label>
                <input
                  type="text"
                  name={`link-${index}`}
                  id={`link-${index}`}
                  value={imageLinks[index]}
                  onChange={handleLinkChange(index)}
                  className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                  placeholder={`Enter link for Image ${index + 1}`}
                />
              </div>
            ))}

            <div className="sm:col-span-2">
              {imageLinks.some(link => link) && (
                <div>
                  <h3 className="text-lg font-medium text-white">
                    Entered Image Links
                  </h3>
                  <ul className="list-disc list-inside text-white">
                    {imageLinks.map((link, index) => (
                      link && <li key={index}>{link}</li>
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
            Submit Slideshow
          </button>
          {message && (
            <div className="mt-4 text-sm font-medium text-center text-white">
              {message}
            </div>
          )}
        </form>
      </div>

      <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 className="mb-4 text-3xl font-bold text-white mb-8">
          Uploaded Slideshows
        </h2>
        {slideshows.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
            {slideshows.map((slideshow) => (
              <div key={slideshow._id} className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-medium text-white mb-2">
                  Slideshow {new Date(slideshow.createdAt).toLocaleDateString()}
                </h3>
                <ul className="list-disc list-inside text-white mb-2">
                  {slideshow.imageLinks.map((link, index) => (
                    <li key={index}>
                      <a href={link} target="_blank" rel="noopener noreferrer" className="underline">
                        Image {index + 1}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleDelete(slideshow._id)}
                    className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white">No slideshows uploaded yet.</p>
        )}
      </div>
    </section>
  );
};

export default SlideshowUpload;
