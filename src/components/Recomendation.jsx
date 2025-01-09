import React, { useState, useEffect } from "react";

// Hook
import useNewsFetcher from "../hooks/useNewsFetcher";

// Components
import { ClipLoader } from "react-spinners";
import { NewsCard } from ".";

const Recommendation = () => {
  const { news, loading, fetchAllNews } = useNewsFetcher();
  const [recommendedNews, setRecommendedNews] = useState([]);

  useEffect(() => {
    fetchAllNews();
  }, []);

  useEffect(() => {
    if (news.length) {
      const recommendedNews = news.slice(0, 3);
      setRecommendedNews(recommendedNews);
    }
  }, [news]);

  return (
    <section className="max-w-6xl mx-auto w-full min-h-screen px-8 sm:px-4 md:px-6 lg:px-8">
      <div className="flex flex-col gap-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 lg:gap-8">
          <span className="w-5 h-10 rounded-lg bg-blue-500 hidden lg:block"></span>
          <h2 className="flex flex-col text-2xl sm:text-3xl md:text-4xl font-bold w-full text-center md:text-start">
            Rekomendasi <span>Berita</span>
          </h2>
          <p className="text-center text-xs sm:text-sm md:text-justify">
            Temukan berita pilihan terbaik yang telah kami kurasi khusus untuk
            Anda! Dari informasi terkini hingga topik menarik, nikmati
            pengalaman membaca yang relevan dan bermanfaat hanya dalam satu
            klik.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center items-center min-h-screen">
            <ClipLoader color="#000000" loading={loading} size={50} />
          </div>
        ) : !recommendedNews.length ? (
          <div className="flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-lg sm:text-xl font-bold">Berita Tidak Tersedia</h1>
            <p className="font-thin text-xs sm:text-sm">
              Silakan telusuri kategori lain untuk menemukan berita yang
              menarik.
            </p>
          </div>
        ) : (
          <NewsCard news={recommendedNews} />
        )}
      </div>
    </section>
  );
};

export default Recommendation;
