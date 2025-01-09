import React, { useState, useEffect } from "react";

// Component
import { ClipLoader } from "react-spinners";
import { CarouselCard } from ".";

// Utils
import { shuffleArray } from "../utils";

// Hook
import useNewsFetcher from "../hooks/useNewsFetcher";

// Icons
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Carousel = () => {
  const { news, loading, fetchAllNews } = useNewsFetcher();
  const [shuffledNews, setShuffledNews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      await fetchAllNews();
    };

    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length) {
      const selectedNews = shuffleArray(news).slice(0, 6);
      setShuffledNews(selectedNews);
      setCurrentIndex(0);
    }
  }, [news]);

  const nextSlide = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % shuffledNews.length);

  const prevSlide = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + shuffledNews.length) % shuffledNews.length
    );

  return (
    <section className="max-w-6xl m-auto w-full min-h-screen flex flex-col justify-center items-center">
      <div className="relative w-full h-[500px] overflow-hidden">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <ClipLoader color="#000000" loading={loading} size={50} />
          </div>
        ) : !shuffledNews.length ? (
          <div className="flex flex-col justify-center items-center h-[500px]">
            <h1 className="text-xl font-bold">Berita Tidak Tersedia</h1>
            <p className="font-thin">
              Silakan telusuri kategori lain untuk menemukan berita yang
              menarik.
            </p>
          </div>
        ) : (
          shuffledNews.map((item, index) => (
            <div
              key={item.id || index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                index === currentIndex
                  ? "translate-x-0 opacity-100"
                  : index < currentIndex
                  ? "-translate-x-full opacity-0"
                  : "translate-x-full opacity-0"
              }`}
            >
              <CarouselCard {...item} />
            </div>
          ))
        )}
      </div>

      <div className="flex justify-end items-center gap-4 mt-4 w-full">
        <button
          className="border border-black p-2 text-black rounded-full transition-all duration-500 hover:bg-black hover:text-white"
          onClick={prevSlide}
        >
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button
          className="border border-black p-2 text-black rounded-full transition-all duration-500 hover:bg-black hover:text-white"
          onClick={nextSlide}
        >
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>
    </section>
  );
};

export default Carousel;
