import React, { createContext, useEffect, useState } from "react";
import { Reveal } from "../components";
import FlatComponentSVG from "../components/flat/flat.batchs";
import { useBatch } from "../hooks/useBatch";
import { InfoCard } from "../components/flat/card.batchs";
import { stringHasNumbers } from "../utils/utils";
import {
  AcueductService,
  CleanlinesService,
  ElectricService,
  SewerageService,
  SurveillancePrivate,
} from "../components/flat";

export const BatchContext = createContext({});
const { Provider } = BatchContext;

export const BatchSection = () => {
  const [batchSelected, setBatchSelected] = useState(null);
  const [preview, setPreview] = useState(null);
  const [cotizerIsOpen, setContizerIsOpen] = useState(false);
  const [streetSelected, setStreetSelected] = useState(false);

  const { batchs } = useBatch();

  return (
    <Provider
      value={{
        batchs,
        preview,
        batchSelected,
        cotizerIsOpen,
        streetSelected,

        setPreview,
        setBatchSelected,
        setStreetSelected,
        setContizerIsOpen,
      }}
    >
      <section id="lotes" className="relative isolate mt-32 sm:mt-56 sm:pt-32">
        <svg
          className="absolute inset-0 -z-10 hidden h-full w-full stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)] sm:block"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="55d3d46d-692e-45f2-becd-d8bdc9344f45"
              width={200}
              height={200}
              x="50%"
              y={0}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={0} className="overflow-visible fill-gray-50">
            <path
              d="M-200.5 0h201v201h-201Z M599.5 0h201v201h-201Z M399.5 400h201v201h-201Z M-400.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#55d3d46d-692e-45f2-becd-d8bdc9344f45)"
          />
        </svg>
        <div className="relative">
          <div
            className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
            aria-hidden="true"
          >
            <div
              className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-br from-gray-200 via-lime-100 to-rose-100"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 top-0 -z-10 flex transform-gpu overflow-hidden pt-8 opacity-25 blur-3xl xl:justify-end"
            aria-hidden="true"
          >
            <div
              className="ml-[-22rem] aspect-[1313/771] w-[82.0625rem] flex-none origin-top-right rotate-[30deg] bg-gradient-to-br from-gray-200 via-lime-100 to-rose-100 xl:ml-0 xl:mr-[calc(50%-12rem)]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-xl sm:text-center">
              <Reveal>
                <Reveal>
                  <h2 className="text-lg font-semibold leading-8 tracking-tight text-[--main-green]">
                    Lotes
                  </h2>
                </Reveal>
                <Reveal>
                  <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Estos son todos nuestros lotes disponibles
                  </p>
                </Reveal>
              </Reveal>
            </div>
            <div className="relative my-5 rounded-xl flex-col md:flex-row bg-white flex-1 shadow flex h-fit max-w-full">
              <div className="absolute top-10 left-10">
                <span className="font-bold text-[--main-green]">{preview}</span>
              </div>
              <div className="w-full md:w-2/3 scale-110 md:scale-100 justify-center">
                <FlatComponentSVG />
              </div>
              <div className="w-full md:w-1/3 min-h-full">
                <InfoCard />
              </div>
              {batchSelected && (
                <div className="flex gap-2 justify-center absolute bottom-4 left-0 right-0 mx-auto items-start w-full">
                  <AcueductService />
                  <CleanlinesService />
                  <ElectricService />
                  <SewerageService />
                  <SurveillancePrivate />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Provider>
  );
};
