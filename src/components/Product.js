import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

import { MdOutlineStar } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/bazaarSlice';
const Product = () => {
  const dispatch = useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty] = useState(1);
  const location = useLocation();
  useEffect(() => {
    setDetails(location.state.item);
  }, [location.state.item]);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10 max-sm:gap-7">
        <div className="w-2/5  relative">
          <img className="w-full h-[550px]  object-cover" src={details.image} alt="productImg" />
          <div className="absolute top-4 right-0">
            {details.isNew && <p className="bg-black text-white font-semibold font-titleFont px-8 py-1 ">Sale</p>}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12 max-sm:w-3/5 max-sm:gap-8" >
          <div>
            <h2 className="text-4xl max-sm:text-lg font-semibold">{details.title}</h2>
            <div className="flex items-center gap-4 mt-3 max-sm:mt-2 max-sm:gap-3">
              <p className="line-through font-base text-gray-500">${details.oldPrice}</p>
              <p className="text-2xl max-sm:text-lg font-medium text-gray-900">${details.price}</p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-base">
            <div className="flex">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>
            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>

          <p className="text-base text-gray-500 mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 max-sm:w-36 flex items-center justify-between text-gray-500 gap-4 border p-3">
              <p className="text-sm max-sm:text-xs">Quantity</p>
              <div className="flex items-center gap-4 max-sm:gap-2 text-sm font-semibold">
                <button
                  onClick={() => setBaseQty(baseQty === 1 ? (baseQty = 1) : baseQty - 1)}
                  className="border h-5 max-sm:h-4 font-normal text-lg max-sm:text-sm flex items-center justify-center px-2 max-sm:px-1 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span className='max-sm:text-sm max-sm:text-orange-700'>{baseQty}</span>
                <button
                  onClick={() => setBaseQty(baseQty + 1)}
                  className="border h-5 max-sm:h-4 font-normal text-lg max-sm:text-sm flex items-center justify-center px-2 max-sm:px-1 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details._id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: baseQty,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added`)
              }
              className="bg-black text-white py-3 px-6 active:bg-gray-600 max-sm:text-sm max-sm:py-0 max-sm:px-0"
            >
              add to cart
            </button>
          </div>
          <p className="text-base text-gray-500">
            Category: <span className="font-medium capitalize">{details.category}</span>{' '}
          </p>
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoclose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};
export default Product;
