"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

// Define the NewsArticle type
type NewsArticle = {
  title: string;
  urlToImage: string;
  source: { name: string };
  publishedAt: string;
  url: string;
};

const NewsSection = () => {
  const [news, setNews] = useState<NewsArticle[]>([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?category=technology&language=en&apiKey=344b1092b98f49beb48e140f9920e304`
        );
        const data = await response.json();
        setNews(data.articles.slice(0, 3)); // ✅ Limit to 3 news articles
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="w-full max-w-6xl mx-auto px-8 md:px-16 py-12 bg-gray-100 rounded-2xl">
      <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Latest News</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {news.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
          >
            <div className="w-full h-72 relative"> {/* Increased height for better visibility */}
              <Image
                src={article.urlToImage || "https://via.placeholder.com/400x250.png?text=No+Image"}
                alt={article.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6">
              <p className="text-sm text-gray-500">
                {article.source.name} | {new Date(article.publishedAt).toDateString()}
              </p>
              <h3 className="text-lg font-semibold mt-3">{article.title}</h3>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-purple-600 hover:underline text-sm font-medium"
              >
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewsSection;
