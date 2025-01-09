import { useState } from "react";

// Utils
import { shuffleArray } from "../utils";

const useNewsFetcher = () => {
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAllNews = async () => {
    setLoading(true);

    try {
      const response = await fetch(apiBaseUrl);
      const data = await response.json();
      const endpoints = data.endpoints || [];

      const categoryPaths = endpoints
        .flatMap((endpoint) => endpoint.paths)
        .map((path) => path.path);

      const fetchPromises = categoryPaths.map(async (path) => {
        try {
          const res = await fetch(path);
          const data = await res.json();
          return data.data || {};
        } catch (err) {
          console.error(`Error fetching data from ${path}:`, err);
          return {};
        }
      });

      const results = await Promise.all(fetchPromises);
      const allPosts = results.flatMap((data) => data.posts || []);
      const shuffledPosts = shuffleArray(allPosts);

      setNews(shuffledPosts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchNewsBySearch = async (keyword) => {
    setLoading(true);

    try {
      const response = await fetch(apiBaseUrl);
      const data = await response.json();
      const endpoints = data.endpoints || [];

      const categoryPaths = endpoints
        .flatMap((endpoint) => endpoint.paths)
        .map((path) => path.path);

      const fetchPromises = categoryPaths.map(async (path) => {
        try {
          const res = await fetch(path);
          const data = await res.json();
          return data.data || {};
        } catch (err) {
          console.error(`Error fetching data from ${path}:`, err);
          return {};
        }
      });

      const results = await Promise.all(fetchPromises);
      const allPosts = results.flatMap((data) => data.posts || []);

      const filteredPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(keyword.toLowerCase())
      );

      const shuffledPosts = shuffleArray(filteredPosts);

      setNews(shuffledPosts);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    news,
    loading,
    fetchAllNews,
    fetchNewsBySearch,
  };
};

export default useNewsFetcher;
