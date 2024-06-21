import { Input, TextArea } from ".";
import { Reveal } from "../reveal";

export const ContactUsForm = () => {
  return (
    <form className="mx-auto mt-10 grid max-w-md gap-y-4">
      <Input
        htmlFor="name"
        type="text"
        placeholder="Ingresa tu nombre"
        id="name"
        name="name"
        required
      />

      <Input
        htmlFor="email-address"
        type="email"
        placeholder="Ingresa tu correo electronico"
        id="email-address"
        name="email"
        autoComplete="email"
        required
      />
      <TextArea placeholder="Ingresa tu mensaje" />
      <button
        type="submit"
        className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        <Reveal width="full">Enviar</Reveal>
      </button>
    </form>
  );
};
