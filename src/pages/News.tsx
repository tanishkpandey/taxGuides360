import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface NewsArticle {
  _id: string;
  title: string;
  link: string;
  createdAt: string;
}

interface Slideshow {
  _id: string;
  imageLinks: string[];
  createdAt: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [slideshows, setSlideshows] = useState<Slideshow[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/news/allNews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: NewsArticle[] = await response.json();
        const latestNews = data.slice(0, 5);
        setNews(latestNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

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

    fetchNews();
    fetchSlideshows();
  }, []);

  const allImageLinks = slideshows.flatMap(slideshow => slideshow.imageLinks);

  return (
    <>
      <section className="bg-white py-8 antialiased md:py-16">
        <div className="mx-auto max-w-[1200px] px-4 2xl:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5">
              {allImageLinks.length > 0 && (
                <Carousel
                  showArrows={true}
                  showThumbs={false}
                  showStatus={false}
                  infiniteLoop={true}
                  autoPlay={true}
                  interval={2000}
                  className="relative w-full"
                >
                  {allImageLinks.map((link, index) => (
                    <div key={index} className="relative h-auto overflow-hidden rounded-lg">
                      <img
                        src={link}
                        className="block h-full w-full object-cover"
                        alt={`Slide ${index + 1}`}
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                        <h3>Slide {index + 1}</h3>
                      </div>
                    </div>
                  ))}
                </Carousel>
              )}
            </div>

            <div className="lg:col-span-7">
              <section className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 py-8 border-3 lg:px-6 lg:py-16">

                  <div className="mx-auto max-w-screen-sm text-center lg:mb-16">
                    <h2 className=" text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl text-typography-dark">
                      Latest Updates
                    </h2>
                  </div>

                  <div className="grid gap-5 lg:grid-cols-2">
                    {news.map((item) => (
                      <article key={item._id} className="rounded-lg border border-gray-200 bg-white p-4 shadow-md text-typography-dark">
                        <div className="mb-5 flex items-center justify-between text-gray-500">
                          <span className="text-sm bg-[#DBF6E7] font-bold text-[#2DA653] py-1 px-2 rounded">{new Date(item.createdAt).toLocaleDateString()}</span>
                        </div>
                        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900">
                          <a href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.title.length > 70 ? `${item.title.substring(0, 70)}...` : item.title}
                          </a>
                        </h2>
                        <div className="flex items-center justify-between">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
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
                                fillRule="evenodd"
                                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                clipRule="evenodd"
                              ></path>
                            </svg>
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
