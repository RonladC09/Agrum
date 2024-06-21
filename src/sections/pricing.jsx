import { CheckIcon } from "@heroicons/react/20/solid";
import { classNames } from "../utils/utils";
import { Reveal } from "../components";

const pricing = {
  tiers: [
    {
      name: "Hobby",
      id: "tier-hobby",
      href: "#",
      price: { monthly: "$15", annually: "$144" },
      description: "The essentials to provide your best work for clients.",
      features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
      mostPopular: false,
    },
    {
      name: "Freelancer",
      id: "tier-freelancer",
      href: "#",
      price: { monthly: "$30", annually: "$288" },
      description: "The essentials to provide your best work for clients.",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
      mostPopular: false,
    },
    {
      name: "Startup",
      id: "tier-startup",
      href: "#",
      price: { monthly: "$60", annually: "$576" },
      description: "A plan that scales with your rapidly growing business.",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      mostPopular: true,
    },
    {
      name: "Enterprise",
      id: "tier-enterprise",
      href: "#",
      price: { monthly: "$90", annually: "$864" },
      description: "Dedicated support and infrastructure for your company.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      mostPopular: false,
    },
  ],
};

export const PricingSection = () => {
  return (
    <section id="planes-de-pago" className="bg-white">
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <h1 className="text-base font-semibold leading-7 text-[--main-green]">
              Precios
            </h1>
            <Reveal>
              <p className="mt-2 text-4xl font-bold tracking-tight text-[--dark-green] sm:text-5xl">
                Descubre todas nuestros planes de pago
              </p>
            </Reveal>
          </Reveal>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          <Reveal>
            In suscipit mi eget elit placerat, nec feugiat purus luctus. Etiam
            tempor tortor mauris,et elit placerat, nec feugiat purus luctus.
          </Reveal>
        </p>

        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {pricing.tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? "ring-2 ring-[--main-green]"
                  : "ring-1 ring-gray-200",
                "rounded-3xl p-8"
              )}
            >
              <Reveal>
                <Reveal>
                  <h2
                    id={tier.id}
                    className={classNames(
                      tier.mostPopular
                        ? "text-[--main-green]"
                        : "text-gray-900",
                      "text-lg font-semibold leading-8"
                    )}
                  >
                    {tier.name}
                  </h2>
                </Reveal>

                <Reveal>
                  <p className="mt-4 text-sm leading-6 text-gray-600">
                    {tier.description}
                  </p>
                </Reveal>
                <p className="mt-6 flex items-baseline gap-x-1"></p>

                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.mostPopular
                      ? "bg-[--main-green] text-white shadow-sm hover:bg-[--main-green]"
                      : "text-[--main-green] ring-1 ring-inset ring-[--main-green] hover:ring-[--main-green]",
                    "mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--main-green]"
                  )}
                >
                  Buy plan
                </a>

                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Reveal className='flex gap-1 items-center'>

                      <CheckIcon
                        className="h-6 w-5 flex-none text-[--main-green]"
                        aria-hidden="true"
                        />
                      {feature}
                        </Reveal>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto my-24 "></div>
    </section>
  );
};
