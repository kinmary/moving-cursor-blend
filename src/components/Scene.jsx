import {Cursor} from "./Cursor";

export const Scene = () => {
  return (
    <div className="h-full flex items-center justify-center">
      <h1 className="text-[7vw] max-w-{90vw} text-center font-bold text-white p-20">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum
      </h1>
      <Cursor />
    </div>
  );
};
