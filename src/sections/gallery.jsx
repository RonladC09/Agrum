import { GalleryCarousel } from "../components/gallery-carousel";

export const GallerySection = () => {
  return (
    <section id="galeria" className="bg-white lg:pt-20">
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-[--main-green]">
            Galería
          </h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-[--dark-green] sm:text-5xl">
            Conocenos un poco más
          </p>
        </div>

        <div className="mx-auto mt-10 grid gap-8">
          <GalleryCarousel />
        </div>
      </div>
      <div className="mx-auto my-24 "></div>
    </section>
  );
};
