import React from "react";
import { Reveal } from "../components";
export const HeroSection = () => {
  return (
    <>

      <section id="inicio" className="relative lg:block hidden h-screen isolate pt-14 overflow-hidden">
        <video
          src="src/assets/videos/animales .mp4"
          className="absolute w-full -top-[120%]"
          autoPlay
          muted
          loop
        ></video>
      </section>

      <section id="inicio" className="relative isolate pt-14 overflow-hidden">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <div className="flex">
              <div className="relative flex items-center gap-x-4 rounded-full px-4 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                <span className="font-semibold text-[--main-green]">
                  Agrum Propiedades
                </span>
                <span className="h-4 w-px bg-gray-900/10" aria-hidden="true" />
                <div className="flex items-center gap-x-1">
                  <Reveal>
                    <span className="absolute inset-0" aria-hidden="true" />
                    Estamos contigo
                  </Reveal>
                </div>
              </div>
            </div>
            <Reveal>
              <h1 className="mt-10 max-w-lg text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Bosques de country
              </h1>
            </Reveal>
            <Reveal>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                No pierdas la oportunidad de formar parte de esta comunidad exclusiva, donde la naturaleza se fusiona
                con la inversión inteligente. Bosques de Country es más que un proyecto; es la oportunidad de asegurar
                tu futuro mientras disfrutan de la tranquilidad del campo.
              </p>
            </Reveal>
            <Reveal>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-[--main-green] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[--dark-green] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--main-green]"
                >
                  Botón
                </a>
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Sobre el proyecto <span aria-hidden="true">→</span>
                </a>
              </div>
            </Reveal>
          </div>
          <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <div className=" mx-auto w-[22.875rem] max-w-full drop-shadow-xl rounded-xl overflow-hidden">
              <Reveal>
                <foreignObject
                  width={316}
                  height={684}
                  transform="translate(24 24)"
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                >
                  <img
                    className="h-full hidden lg:block"
                    src="src/assets/poster3.jpg"
                    alt=""
                  />
                </foreignObject>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
