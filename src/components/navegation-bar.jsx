import React from "react";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { navigation } from "../lib";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="fixed border z-40 md:h-fit backdrop-blur bg-white inset-x-0 bottom-0 md:inset-x-10 md:top-2 md:shadow-2xl md:rounded-3xl ">
      <nav
        className="flex items-center justify-between p-2 px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Agrum propiedades</span>
            <img
              className="h-10 w-auto"
              src="src/assets/logo.jpeg"
              alt="Logo de Agrum propiedades"
            />
          </a>
        </div>
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 items-center ">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-[--main-green]"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/* Pay buttons */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-2 mx-4 items-center">
          <a href="#lotes" className="text-sm font-semibold leading-6 text-gray-900">
            Cotizador
          </a>
          <a href="#lotes" className="text-sm font-semibold leading-6 truncate text-gray-900">
            Paga aquí
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Agrum propiedades</span>
              <img
                className="h-8 w-auto"
                src="src/assets/logo.jpeg"
                alt="Logo de Agrum propiedades"
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-[--main-green] hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6 flex gap-5">
                <a
                  href="#lotes"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Cotizador
                </a>
                <a
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Paga aquí
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};
