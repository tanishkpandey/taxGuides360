import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface NewsArticle {
  _id: string;
  title: string;
  link: string;
  createdAt: string;
}

const NewsUpdates: React.FC = () => {
  const [title, setTitle] = useState<string>('');
  const [link, setLink] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

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

  const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/news/addNews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, link }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const newNews = await response.json();
      setNews([newNews.news, ...news].slice(0, 5)); // Add new news and keep only latest 5
      setMessage('News added successfully!');
      setTitle('');
      setLink('');
    } catch (error) {
      console.error('Error adding news:', error);
      setMessage('Failed to add news.');
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white mb-8">Add a NEWS Update</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
              <div className="sm:col-span-2">
                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  News Heading
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={handleTitleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter News Heading here..."
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="link" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Enter URL
                </label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  value={link}
                  onChange={handleLinkChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Enter News URL here..."
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800 bg-[#0787FB]"
            >
              Add NEWS
            </button>
            {message && (
              <div className="mt-4 text-sm font-medium text-center text-white">
                {message}
              </div>
            )}
          </form>
        </div>

        <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Latest News
          </h2>
          <ul className="list-disc list-inside text-gray-900 dark:text-white">
            {news.map((item) => (
              <li key={item._id} className="mb-2">
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline">
                  {item.title}
                </a>
                <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">
                  ({new Date(item.createdAt).toLocaleDateString()})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NewsUpdates;
