import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Loader
import { ClipLoader } from "react-spinners";

// Component
import { NewsCard, Pagination } from "../components";

// Hook
import useNewsFetcher from "../hooks/useNewsFetcher";

const Search = () => {
  const { search } = useLocation();
  const { news, loading, fetchNewsBySearch } = useNewsFetcher();
  const query = new URLSearchParams(search).get("q");
  const [currentPage, setCurrentPage] = useState(1);
  const itemPerPage = 9;

  const paginatedNews = news.slice(
    (currentPage - 1) * itemPerPage,
    currentPage * itemPerPage
  );

  useEffect(() => {
    if (query) {
      setCurrentPage(1);
      fetchNewsBySearch(query);
    }
  }, [query]);

  return (
    <main className="max-w-6xl min-h-screen m-auto w-full flex flex-col justify-center items-center">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <ClipLoader color="#000000" loading={loading} size={50} />
        </div>
      ) : (
        <div className="flex flex-col gap-8 py-16 my-16">
          {!news.length ? (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-xl font-bold">Berita Tidak Tersedia</h1>
              <p className="font-thin">
                Silakan telusuri kategori lain untuk menemukan berita yang
                menarik.
              </p>
            </div>
          ) : (
            <>
              {" "}
              <NewsCard news={paginatedNews} />
              <Pagination
                currentPage={currentPage}
                itemSize={itemPerPage}
                onPageChange={setCurrentPage}
                totalItems={news.length}
              />
            </>
          )}
        </div>
      )}
    </main>
  );
};

export default Search;
