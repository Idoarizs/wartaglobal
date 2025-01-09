// Utils
import { formatDate } from "../../utils";

// Icons
import { RxArrowTopRight } from "react-icons/rx";
import { BsCalendar2Event } from "react-icons/bs";

const CarouselCard = ({ title, description, pubDate, link, thumbnail }) => (
  <div className="flex flex-col lg:flex-row gap-16 justify-center items-center h-full">
    <div className="flex flex-col flex-1 gap-8">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">
          {title.slice(0, 150)}
          {"..."}
        </h1>
        <p className="font-thin text-justify">{description}</p>
        <div className="flex gap-2 items-center">
          <BsCalendar2Event />
          <span className="font-thin">{formatDate(pubDate)}</span>
        </div>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex gap-2 items-center text-blue-500"
      >
        Baca Selengkapnya <RxArrowTopRight />
      </a>
    </div>
    <div className="flex-1 rounded-xl overflow-hidden">
      <img
        src={thumbnail}
        className="w-full h-80 object-cover"
        alt={title || "Carousel"}
      />
    </div>
  </div>
);

export default CarouselCard;
