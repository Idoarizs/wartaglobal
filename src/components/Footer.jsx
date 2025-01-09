import React from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const categories = [
    "Kesehatan",
    "Otomotif",
    "Politik",
    "Teknologi",
    "Sains",
    "Sejarah",
    "Pendidikan",
    "Kuliner",
    "Pariwisata",
    "Agama",
    "Film",
    "Musik",
    "Kesejahteraan",
    "Inovasi",
    "Startup",
    "Kreativitas",
    "Edukasi Anak",
    "Tren Fashion",
    "Kesehatan Mental",
    "Lingkungan",
    "Energi",
    "Transportasi",
    "Astronomi",
    "Fotografi",
    "Gaming",
    "Review Produk",
    "Keuangan",
    "Produktivitas",
  ];

  return (
    <footer className="bg-gray-800 text-white p-16">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 ">
          <div className="flex items-center gap-4">
            <img className="w-28 h-auto" src="/vite.svg" alt="WartaGlobal" />
            <h1 className="font-bold text-3xl">WartaGlobal</h1>
          </div>
          <p className="text-sm">
            &copy; 2025 WartaGlobal. All Rights Reserved.
          </p>
          <div className="flex gap-4 text-2xl">
            <a href="#" aria-label="YouTube" className="hover:text-blue-400">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-blue-400">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-blue-400">
              <FaFacebook />
            </a>
          </div>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-4">Telusuri</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-sm col-span-1">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={`/berita/pencarian?q=${category.toLowerCase()}`}
                className="hover:text-blue-400"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
