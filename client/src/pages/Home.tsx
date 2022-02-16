import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const images = [
  "At9zbDGHJq9k2dM21TIr.3",
  "FEKRc52b003ruio6WdQK.1",
  "5.1",
  "16.1",
];

export const Home = () => {
  const [image, setImage] = useState(images[0]);
  const [spanOpacity, setSpanOpacity] = useState("opacity-100");
  const [moveImage, setMoveImage] = useState("translate-x-0");

  useEffect(() => {
    setTimeout(() => {
      setMoveImage("translate-x-full");
      setSpanOpacity("opacity-0");
    }, 5000);
    setTimeout(() => {
      setMoveImage("-translate-x-full");
    }, 5150);
    setTimeout(() => {
      if (images.indexOf(image) === 3) return setImage(images[0]);
      return setImage(images[images.indexOf(image) + 1]);
    }, 5200);
    setTimeout(() => {
      setSpanOpacity("opacity-100");
      setMoveImage("translate-x-0");
    }, 5250);
  }, [image]);

  return (
    <section className="flex flex-col justify-center items-center h-full overflow-hidden">
      <img src="/resources/main_logo.webp" alt="RaggyGirlVintage Logo" className="md:h-1/2"/>
      <p className="w-3/4 mt-4 mx-auto text-center uppercase font-extralight font-amatic text-xl">
        modern farmhouse style | handmade designs
      </p>
      <div className="relative h-1/2 w-full mt-4">
        <span
          className={`h-full w-full bg-white/30 absolute top-0 left-0 transition-all ease-in-out duration-500 z-20`}
        ></span>
        <Link to="/shop">
          <button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-white drop-shadow-lg text-slate-800 uppercase font-light z-30">
            Shop now
          </button>
        </Link>
        <img
          src={`/resources/${image}.jpg`}
          alt="quilt"
          className={`object-fill transition-all ease-in-out duration-150 ${moveImage} ${spanOpacity} md:h-full`}
        />
      </div>
    </section>
  );
};
