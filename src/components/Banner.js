import React, { useState } from 'react';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    'https://img.freepik.com/free-vector/new-season-banner-template_1361-1221.jpg?w=1800&t=st=1682147298~exp=1682147898~hmac=c835e96a3351484c2a052273678882b12fc7d2deb0c6920b5f0bddec96dddfb9',
    'https://img.freepik.com/free-vector/promotion-fashion-banner_1188-213.jpg?w=2000&t=st=1682147768~exp=1682148368~hmac=95919fccc851abb2ebcdcafd0aefb6b316dad8a72c5bc939f4c25c65568b8626',
    'https://img.freepik.com/free-psd/cool-fashion-banner-template_23-2148869866.jpg?w=2000&t=st=1682147848~exp=1682148448~hmac=32815c20465841aeb97dc70a9fbd9d25bdd799f1f1d919d6eaf0dbc0643d45c0',
    'https://img.freepik.com/premium-psd/new-season-fashion-sale-new-collection-promo-social-media-post-website-banner-template_485905-450.jpg?w=2000',
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
          <img
            className="w-screen h-screen max-sm:object-fill object-cover"
            src={data[0]}
            alt="Img0ne"
            loading="priority"
          />
          <img
            className="w-screen h-screen  max-sm:object-fil object-cover"
            src={data[1]}
            alt="ImgTwo"
            loading="priority"
          />
          <img className="w-screen h-screen max-sm:object-fil object-cover" src={data[2]} alt="ImgThree" loading="priority" />
          <img className="w-screen h-screen max-sm:object-fil object-cover" src={data[3]} alt="ImgFour" loading="priority" />
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
