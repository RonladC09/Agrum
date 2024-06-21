import { useContext, useEffect, useState } from "react";
import { BatchContext } from "../../sections/batchs";
import { Reveal } from "../reveal";
import { StreetFlat } from "./street-flat.batchs";
import { usePayment } from "../../hooks/usePayment";
import {
  AcueductService,
  CleanlinesService,
  ElectricService,
  SewerageService,
  SurveillancePrivate,
} from ".";
const publicKey = import.meta.env.VITE_WOMPI_PUBLIC_KEY;

export const InfoCard = () => {
  const { batchSelected, streetSelected } = useContext(BatchContext);
  const [dues, setDues] = useState(0);
  const [checkout, setCheckout] = useState();
  const duesHandler = () => {
    const singleDue = totalAmount() / dues;
    if (singleDue === Infinity) return 0;
    return Math.floor(singleDue);
  };

  const totalAmount = () => {
    let completeIntervals = Math.floor(dues / 6);
    const totalAmount = batchSelected?.price + completeIntervals * 4000000;
    return Math.floor(totalAmount);
  };

  useEffect(() => {
    if (dues === 0) return;
    setAmountInCents(Number(`${totalAmount() + "00"}`));
  }, [dues]);

  const {
    currency,
    integrity,
    reference,
    setCurrency,
    amountInCents,
    setAmountInCents,
  } = usePayment();

  useEffect(() => {
    if (!batchSelected) return;
    setCurrency("COP");
    setAmountInCents(Number(`${batchSelected?.price + "00"}`));
  }, [batchSelected]);

  useEffect(() => {
    if ((currency, amountInCents, reference, publicKey, integrity)) {
      const checkout = new WidgetCheckout({
        currency,
        amountInCents,
        reference,
        publicKey,
        signature: { integrity },
      });
      setCheckout(checkout);
    }
  }, [currency, amountInCents, reference, publicKey, integrity]);

  return (
    <figure className="w-full h-full p-5 grid text-left place-content-center relative ">
      {batchSelected && (
        <Reveal>
          <h2 className="font-bold text-xl text-[--main-green]">
            Lote {batchSelected.reference}
          </h2>
          <p>
            Area: {batchSelected.area}{" "}
            <sub>
              m<sup>2</sup>
            </sub>
          </p>
          <div className="grid grid-cols-2 gap-2"></div>
          <div className="m-2 col-span-1 grid">
            <span>
              <b> Frente: </b> {batchSelected?.lengths[0].front_part}{" "}
              <sub>m</sub>
            </span>
            <span>
              <b> Posterior: </b> {batchSelected?.lengths[0].back_part}{" "}
              <sub>m</sub>
            </span>
          </div>
          <div className="m-2 col-span-1 grid">
            <span>
              <b> L. Derecho:</b> {batchSelected?.lengths[0].right_part}{" "}
              <sub>m</sub>
            </span>
            <span>
              <b> L. Izquierdo:</b> {batchSelected?.lengths[0].left_part}{" "}
              <sub>m</sub>
            </span>
          </div>
          <Reveal>
            <div className=" bg-white left-0 right-0 px-10 text-center text-[--main-green] border w-full gap-1 rounded-xl py-1 grid place-content-center ">
              <p className="truncate text-sm">Número de cuotas</p>
              <input
                type="range"
                disabled={batchSelected.reference === "vendido"}
                min={0}
                max={24}
                value={dues}
                onChange={(evt) => setDues(evt.target.value)}
              />
              <span className="font-bold">{dues} cuotas</span>
            </div>
          </Reveal>

          <div className="my-5 text-[--main-green]">
            <div>
              Cuota:{" "}
              <b className="text-black">
                {" "}
                {batchSelected?.price === 1
                  ? 0
                  : duesHandler().toLocaleString("es", {
                      style: "currency",
                      currency: "cop",
                    })}{" "}
              </b>
            </div>
            <div>
              Valor del lote:{" "}
              <b className="text-black">
                {batchSelected?.price === 1
                  ? 0
                  : totalAmount().toLocaleString("es", {
                      style: "currency",
                      currency: "cop",
                    })}
              </b>
            </div>
          </div>
          {batchSelected?.reference !== "vendido" && (
            <Reveal width="full">
              <button
                onClick={() => checkout.open((result) => console.log(result))}
                className="mx-auto font-bold hover:shadow-xl my-5 hover:-translate-y-1 grid place-content-center px-5 py-3 hover:text-white rounded transition-all hover:bg-[--main-green] shadow"
              >
                Comprar
              </button>
            </Reveal>
          )}
        </Reveal>
      )}
      {!batchSelected &&
        !streetSelected &&
        " Seleccione un lote para mayor información"}
      {streetSelected && (
        <Reveal>
          <StreetFlat />
        </Reveal>
      )}
      
    </figure>
  );
};
