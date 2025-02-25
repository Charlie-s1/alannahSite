import { useState } from "react";
import {
  rydeImg1,
  rydeImg10,
  rydeImg11,
  rydeImg2,
  rydeImg3,
  rydeImg4,
  rydeImg5,
  rydeImg6,
  rydeImg7,
  rydeImg9,
} from "../../assets/img/workshops/theRyde/theRyde";
import {
  img1,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
} from "../../assets/img/workshops/workshopImages";

const Workshops = () => {
  const [imgToShow, setImgToShow] = useState<string | null>(null);
  return (
    <div className="flex flex-col h-screen max-w-[1000px] w-full m-auto gap-8 font-mono">
      {imgToShow && (
        <div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm cursor-zoom-out"
          onClick={() => setImgToShow(null)}
        >
          <img src={imgToShow} className="h-full w-full object-contain" alt="" />
        </div>
      )}
      <div className="flex flex-col gap-4 py-8">
        <h1 className="font-bold text-3xl text-center">Talking Tiles</h1>
        <p className="text-center">Studio KT1 (December 2024)</p>
        <div className="grid grid-cols-2 items-center justify-center m-auto w-fit gap-2">
          {[
            img1,
            img2,
            img3,
            img4,
            img5,
            img6,
            img7,
            img8,
            img10,
            img11,
            img12,
            img13,
            img14,
            img15,
            img16,
            img17,
            img18,
          ].map((n) => (
            <div
              onClick={() => setImgToShow(n)}
              className="w-full flex items-center justify-center cursor-zoom-in"
            >
              <img src={n} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-3xl text-center">What will we be</h1>
        <p className="text-center">The Ryde School Primary (Feburary 2023)</p>
        <div className="grid grid-cols-2 items-center justify-center m-auto w-fit gap-2">
          {[
            rydeImg1,
            rydeImg10,
            rydeImg2,
            rydeImg3,
            rydeImg4,
            rydeImg5,
            rydeImg6,
            rydeImg7,
            rydeImg9,
            rydeImg11,
          ].map((n) => (
            <div
              onClick={() => setImgToShow(n)}
              className="w-full flex items-center justify-center cursor-zoom-in"
            >
              <img src={n} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Workshops };
