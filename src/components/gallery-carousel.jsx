import { images } from "../lib";

export const GalleryCarousel = () => {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {images.map((image) => (
        <li key={image.source} className="relative">
          <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100">
            <img
              src={image.source}
              alt={image.description}
              className="pointer-events-none object-cover"
            />
          </div>
        </li>
      ))}
    </ul>
  );
};
