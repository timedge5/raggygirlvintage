import { headerButton } from "../common/styles";

export const Header = () => {
  return (
    <div className="w-full h-12 p-2 flex justify-between items-center bg-white drop-shadow-lg fixed">
      <img src="/resources/main_logo.webp" className="h-8" />
      <span className={headerButton}>menu</span>
      <div className="relative">
        <span className={headerButton}>shopping_cart</span>
        <div className="absolute cursor-pointer flex justify-center items-center bottom-0 right-0 text-white text-xs bg-red-400 h-4 w-4 rounded-full">
          1
        </div>
      </div>
    </div>
  );
};
