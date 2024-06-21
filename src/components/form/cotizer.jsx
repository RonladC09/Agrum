import { Input, TextArea } from ".";

export const CotizerForm = ({ setCotizerIsOpen }) => {
  return (
    <form className="mx-auto mt-10 grid max-w-md gap-y-4">
      <div className="flex gap-2">
        <div className="w-1/2 grid gap-2 col-span-1">
          <button className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            de contado
          </button>
          <button className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            6 meses
          </button>
          <button className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            12 meses
          </button>
          <button className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            18 meses
          </button>
          <button className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            18 meses
          </button>
        </div>
        <div className="w-1/2 grid place-content-center relative">
          <span className="top-0 left-0 absolute">$ 87.000.000</span>
          <span className="flex items-end gap-1">
            Total a pagar:
            <h2 className="font-bold text-2xl"> 88.000.000 </h2>
          </span>
          <p>
            cuotas de: 
            <b>8.000.000</b>
          </p>
        </div>
      </div>

      <button
        onClick={() => setCotizerIsOpen(false)}
        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Información del lote
      </button>
    </form>
  );
};
