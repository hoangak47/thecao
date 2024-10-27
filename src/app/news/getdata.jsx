/* eslint-disable @next/next/no-img-element */
"use client";

import { getData } from "@/services";
import React, { useEffect, useState } from "react";

import { FiClock } from "react-icons/fi";

export default function Getdata() {
  const [articles] = useState([
    {
      id: 1,
      title:
        "The Future of Artificial Intelligence: Transforming Industries and Society",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
      content:
        "Artificial Intelligence continues to evolve at an unprecedented pace, reshaping how we work, live, and interact. From healthcare to transportation, AI's impact is becoming increasingly prevalent in our daily lives.",
      timestamp: new Date(2024, 0, 15, 14, 30),
    },
    {
      id: 2,
      title: "Sustainable Living: Simple Steps Towards a Greener Future",
      image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09",
      content:
        "As environmental concerns grow, more people are adopting sustainable lifestyle practices. Discover how small changes in daily routines can contribute to a healthier planet.",
      timestamp: new Date(2024, 0, 15, 10, 15),
    },
    {
      id: 3,
      title:
        "The Rise of Remote Work: Navigating the New Normal in Professional Life",
      image: "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a",
      content:
        "Remote work has become a permanent fixture in the modern workplace. Learn about the challenges and opportunities this shift presents for both employees and organizations.",
      timestamp: new Date(2024, 0, 14, 16, 45),
    },
  ]);

  const [getData_, setData] = useState([]);

  useEffect(() => {
    getData("/blogs").then((data) => {
      setData(Object.values(data).reverse());
      console.log(data);
    });
  }, []);

  const formatTimestamp = (timestamp) => {
    const now = new Date();
    const diff = now - timestamp;
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (hours < 24) {
      return `${hours} hours ago`;
    } else if (days === 1) {
      return "Yesterday";
    } else {
      return timestamp.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    }
  };
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-48 w-full object-cover md:h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FiClock className="mr-2" />
                  <time dateTime={article.timestamp.toISOString()}>
                    {formatTimestamp(article.timestamp)}
                  </time>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{article.content}</p>
                <button
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  aria-label={`Read more about ${article.title}`}
                >
                  Read More
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
