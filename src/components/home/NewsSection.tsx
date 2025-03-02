import { useEffect, useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news from an API (replace with actual API)
    fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=344b1092b98f49beb48e140f9920e304")
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Latest News</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((article, index) => (
            <div key={index} className="bg-white shadow-md p-4 rounded-lg">
              <img src={article.urlToImage} alt={article.title} className="w-full h-40 object-cover rounded-md mb-3"/>
              <h3 className="text-lg font-semibold">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
              <a href={article.url} target="_blank" className="text-blue-500 mt-2 inline-block">Read more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
