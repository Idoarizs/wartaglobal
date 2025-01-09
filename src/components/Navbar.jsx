import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Asset
import wartaglobal from "/vite.svg";

// Icon
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [search, setSearch] = useState("");

  const techCategories = [
    { name: "Hiburan", path: "/berita/hiburan" },
    { name: "Gaya Hidup", path: "/berita/gayahidup" },
    { name: "Olahraga", path: "/berita/olahraga" },
    { name: "Ekonomi", path: "/berita/ekonomi" },
    { name: "Nasional", path: "/berita/nasional" },
    { name: "Internasional", path: "/berita/internasional" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 transition-all duration-300 z-20 ${
        isScrolled ? "bg-blue-500 text-white" : "shadow-sm"
      }`}
    >
      <div className="flex max-w-6xl m-auto w-full py-4 justify-between items-center">
        <Link className="flex gap-2 justify-center items-center" to="/">
          <div className="p-2 bg-white rounded-full">
            <img
              src={wartaglobal}
              alt="Logo Warta Global"
              className={`duration-300 transition-all ${
                isScrolled ? "h-6" : "h-8"
              }`}
            />
          </div>
          <span className="font-semibold">WartaGlobal</span>
        </Link>

        <div className="flex gap-8 text-sm font-thin">
          {techCategories.map((category) => (
            <Link
              key={category.name}
              className={`relative ${isScrolled ? "" : "hover:text-blue-500"}`}
              to={`/berita/pencarian?q=${encodeURIComponent(category.name.toLowerCase())}`}
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className="flex gap-2">
          <input
            className="px-4 py-2 border rounded-full text-xs text-black"
            type="search"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <Link
            className={`p-2 rounded-full transition-all duration-300 ${
              isScrolled ? "bg-white text-blue-500" : "bg-blue-500 text-white"
            }`}
            to={`/berita/pencarian?q=${encodeURIComponent(search)}`}
          >
            <FiSearch />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
