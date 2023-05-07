import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    'https://img.freepik.com/free-photo/portrait-two-young-stylish-smiling-blond-women-holding-shopping-bags-women-dressed-summer-hipster-clothes-positive-models-posing-pink-blackground_158538-7594.jpg?w=1800&t=st=1683439286~exp=1683439886~hmac=4528dc6727911e5562bef3658e777736150941b4785a52e8b6f88b8f4cd54d2f',
    'https://img.freepik.com/premium-photo/female-autumn-clothes-hangers-white-room_176873-13067.jpg?w=1800',
    'https://img.freepik.com/free-psd/cool-fashion-banner-template_23-2148869866.jpg?w=2000&t=st=1682147848~exp=1682148448~hmac=32815c20465841aeb97dc70a9fbd9d25bdd799f1f1d919d6eaf0dbc0643d45c0',
    'https://img.freepik.com/premium-photo/pretty-young-fashion-model-black-pantsuit-white-shirt-posing-black_105609-4256.jpg?size=626&ext=jpg&ga=GA1.1.2107578697.1681838752&semt=sph',
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen-h-[650px] relative ">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000 "
        >
          <img className="w-screen h-screen  object-cover" src={data[0]} alt="Img0ne" loading="priority" />
          <img className="w-screen h-screen  object-cover" src={data[1]} alt="ImgTwo" loading="priority" />
          <img className="w-screen h-screen  object-cover" src={data[2]} alt="ImgThree" loading="priority" />
          <img className="w-screen h-screen object-cover" src={data[3]} alt="ImgFour" loading="priority" />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
