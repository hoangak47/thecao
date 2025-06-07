/* eslint-disable @next/next/no-img-element */
"use client";

import { setPosts } from "@/lib/features/posts";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { getData } from "@/services";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { FiClock } from "react-icons/fi";

export const formatTimestamp = (timestamp) => {
  const date = new Date(timestamp);

  // Định dạng theo giờ Việt Nam
  const formattedDateVN = date.toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    weekday: "long",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  return formattedDateVN;
};

export default function Getdata() {
  const dispatch = useAppDispatch();
  const posts = useAppSelector((state) => state.posts);

  useEffect(() => {
    if (posts === null) {
      getData("/news").then((data) => {
        dispatch(setPosts(Object.values(data).reverse()));
      });
    }
  }, [dispatch, posts]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-8">
        {posts?.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
          >
            <div className="md:flex">
              <div className="md:w-1/3">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover md:h-full"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <FiClock className="mr-2" />
                  {formatTimestamp(post.id)}
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3">{post.summary}</p>
                <Link
                  href={`/news/${post.link}`}
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                  aria-label={`Read more about ${post.title}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
