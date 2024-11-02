/* eslint-disable @next/next/no-img-element */
"use client";

import Partner from "@/components/partners";
import SwiperCustom from "@/components/swiper";
import Body_ from "@/constants/body/body2";
import Layout from "@/constants/layout/layout";
import { setPosts } from "@/lib/features/posts";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { findPostByLink, getData } from "@/services";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

export default function Page() {
  const { link } = useParams();

  const [post, setPost] = React.useState({});

  useEffect(() => {
    findPostByLink("news", link)
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, [link]);

  const posts = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  const [filteredPosts, setFilteredPosts] = React.useState([]);

  useEffect(() => {
    if (posts === null) {
      getData("/news").then((data) => {
        dispatch(setPosts(Object.values(data).reverse()));
      });
    }

    if (posts) {
      setFilteredPosts(posts.filter((post) => post.link !== link).slice(0, 4));
    }
  }, [dispatch, link, posts]);
  return (
    <Layout>
      <SwiperCustom />
      <Body_>
        <div className="default">
          <h1>{post?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post?.content }} />
        </div>
      </Body_>
      <div className="container mx-auto xl:px-28 py-16 px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {filteredPosts.map((post, index) => (
          <Link
            href={`/news/${post.link}`}
            key={post.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full md:h-48 h-32 object-cover"
              loading="lazy"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2 sm:line-clamp-3">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{post.summary}</p>
            </div>
          </Link>
        ))}
      </div>
      <Partner partner={true} />
    </Layout>
  );
}
