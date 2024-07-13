import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface NewsArticle {
  _id: string;
  title: string;
  link: string;
  createdAt: string;
}

const News: React.FC = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/news/allNews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: NewsArticle[] = await response.json();
        const latestNews = data.slice(0, 5); // Get the latest 5 news articles
        setNews(latestNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

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
            {news.map((item) => (
              <div key={item._id} className="relative h-56 overflow-hidden rounded-lg md:h-96">
                <img
                  src="https://via.placeholder.com/800x400?text=News"
                  className="absolute block h-full w-full object-cover"
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </Carousel>

          <div className="mt-8">
            <section className="bg-white">
              <div className="mx-auto max-w-screen-xl px-4 py-8 border-3 lg:px-6 lg:py-16">
                <div className="mx-auto mb-8 max-w-screen-sm text-center lg:mb-16">
                  <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 lg:text-4xl text-typography-dark">
                    Latest Updates
                  </h2>
                  <p className="font-light text-gray-500 sm:text-xl">
                    Stay informed with our latest news and updates. <br /> Here’s what’s happening now:
                  </p>
                </div>

                <div className="grid gap-8 lg:grid-cols-2">
                  {news.map((item) => (
                    <article key={item._id} className="rounded-lg border border-gray-200 bg-white p-6 shadow-md text-typography-dark">
                      <div className="mb-5 flex items-center justify-between text-gray-500">
                        <span className="text-sm bg-[#DBF6E7] font-bold text-[#2DA653] py-1 px-2 rounded">{new Date(item.createdAt).toLocaleDateString()}</span>
                      </div>
                      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                          {item.title.length > 30 ? `${item.title.substring(0, 30)}...` : item.title}
                        </a>
                      </h2>
                      <p className="mb-5 font-light text-gray-500">
                        Click the link to read more...
                      </p>
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
      </section>
    </>
  );
};

export default News;
