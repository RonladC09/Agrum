import React from "react";
import { primaryFeatures, secondaryFeatures } from "../lib";
import { Reveal } from "../components";
export const PrimaryFeatures = () => {
  return (
    <section
      id="san-diego"
      className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8"
    >
      <div className="relative isolate overflow-hidden bg-gradient-to-br from-slate-100 via-lime-200 to-lime-500 px-6 py-20 sm:rounded-3xl sm:px-10 sm:py-24 lg:py-24 xl:px-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
          <div className="lg:row-start-2 lg:max-w-md">
            <Reveal>
              <h2 className="text-3xl font-bold tracking-tight text-[--main-green] sm:text-4xl">
                San Diego
                <br />
                <Reveal>
                  <i className="text-sm text-black">Cesar, Colombia</i>
                </Reveal>
              </h2>
            </Reveal>
            <Reveal>
              <p className="mt-6 text-lg leading-8 text-[--dark-green]">
                Bienvenido a San Diego, Cesar, un rincón lleno de encanto y tradición que se convierte en tu vecino
                cercano en Bosques de Country. Aquí, la esencia cultural se entrelaza con la vitalidad de una comunidad
                que celebra su historia y abraza el presente con entusiasmo.
              </p>
            </Reveal>
          </div>

          <video
            autoPlay
            muted
            loop
            src="src/assets/videos/RIO.mp4"
            className="relative rounded-xl shadow-xl hidden lg:block ring-white/10 lg:row-span-4"
          ></video>

          <div className="max-w-xl lg:row-start-3 lg:mt-10 lg:max-w-md lg:border-t lg:border-white/10 lg:pt-10">
            <dl className="max-w-xl space-y-8 text-base leading-7 text-gray-300 lg:max-w-none">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="relative">
                  <dt className="ml-9 inline-block font-semibold text-[--dark-green]">
                    <feature.icon
                      className="absolute left-1 top-1 h-5 w-5 text-[--main-green]"
                      aria-hidden="true"
                    />

                    {feature.name}
                  </dt>
                  <Reveal>
                    <dd className="inline text-black">{feature.description}</dd>
                  </Reveal>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[--main-green] to-[--dark-green] opacity-25"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export const SecondaryFeatures = () => {
  return (
    <section
      id="visitanos"
      className="mx-auto mt-32 max-w-7xl px-6 sm:mt-56 lg:px-8"
    >
      <div className="mx-auto max-w-2xl lg:text-center">
        <Reveal>
          <h2 className="text-base font-semibold leading-7 text-[--main-green]">
            Visitanos
          </h2>
          <Reveal>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Valoriza tu futuro, Invierte en tu patrimonio
            </p>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-lg leading-8 text-[--dark-green]">
              En Bosques de Country, te ofrecemos la oportunidad de invertir en tu patrimonio. No se trata solo de
              adquirir un terreno, sino de construir tu futuro en un entorno excepcional.
            </p>
          </Reveal>
        </Reveal>
      </div>
      <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
        <dl className="max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none grid">
          {secondaryFeatures.map((feature) => (
            <div key={feature.name} className="flex flex-col border px-4 py-2 rounded border-transparent hover:border-[--main-green] shadow transition-all hover:shadow-xl hover:-translate-y-1">
              <Reveal className="grid grid-cols-3">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100">
                    <img
                        src={feature.source}
                        alt={feature.description}
                        className="pointer-events-none object-cover align-middle"
                    />
                  </div>
                </dt>
                <dd className="mt-10 ml-4 flex flex-auto flex-col text-base leading-7 text-gray-600 col-span-2 justify-between">
                  <Reveal className="grid grid-row-2">
                    <p className="flex-auto text-2xl ">{feature.description}</p>
                  </Reveal>
                  <div className="flex items-center justify-end">
                    <feature.icon
                        className="h-5 w-5 flex-none text-[--main-green]"
                        aria-hidden="true"
                    />
                    <Reveal className="font-semibold">{feature.name}</Reveal>
                  </div>
                </dd>
              </Reveal>
            </div>
          ))}
        </dl>
      </div>

      <div className="mx-auto mt-32 max-w-7xl sm:mt-56 sm:px-6 lg:px-8">
        <div className="relative isolate overflow-hidden  px-6 py-24 shadow-2xl sm:rounded-3xl sm:px-24 xl:py-32">
          <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Mapa
          </h2>
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx={0}
                cy={0}
                r={1}
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#609407" stopOpacity={0} />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </section>
  );
};
