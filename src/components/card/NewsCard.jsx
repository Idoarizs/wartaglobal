// Icon
import { RxArrowTopRight } from "react-icons/rx";

// Utils
import { formatDate } from "../../utils";

const NewsCard = ({ news }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {news.map((item) => (
        <div key={item.id} className="border rounded-lg overflow-hidden">
          <img src={item.thumbnail} alt={item.title} className="w-full h-52" />

          <div className="p-6">
            <span className="text-xs text-gray-500 mt-2">
              {formatDate(item.pubDate)}
            </span>
            <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
            <p className="text-sm text-gray-600">
              {item.description.slice(0, 128)}
              {"..."}
            </p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center text-blue-500 mt-2 block"
            >
              Read more <RxArrowTopRight />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsCard;
