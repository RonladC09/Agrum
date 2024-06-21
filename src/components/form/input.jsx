import { Reveal } from "../reveal";

export const Input = ({ ...props }) => {
  return (
    <>
      <Reveal>
        <label htmlFor={props.htmlFor} className="sr-only">
          {props.label}
        </label>
      </Reveal>

      <Reveal>
        <input
          {...props}
          className="min-w-0  flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6"
        />
      </Reveal>
    </>
  );
};
