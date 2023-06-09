import { BsArrowRight } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToCart } from '../redux/bazaarSlice';
import { toast, ToastContainer } from 'react-toastify';

const ProductsCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;

  const idString = (_id) => {
    return String(_id).toLowerCase().split(' ').join('');
  };
  const rootId = idString(_id);
  const handleDetails = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product,
      },
    });
  };
  return (
    <div className="group relative">
      <div onClick={handleDetails} className="w-full cursor-pointer overflow-hidden">
        <img src={product.image} alt="productImg" />
      </div>
      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-titleFont max-lg:text-sm max-md:text-xs text-base font-bold">
              {product.title.substring(0, 15)}
            </h2>
          </div>
          <div className="flex justify-end gap-2 relative overflow-hidden w-28 tex-sm">
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500 max-lg:text-sm max-md:text-xs">{product.oldPrice}</p>
              <p className="font-semibold max-lg:text-sm max-md:text-xs">{product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                ) & toast.success(`${product.title} is added`)
              }
              className="absolute z-20 w-[100px] text-gray-500   hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500 max-lg:text-sm max-sm:text-xs"
            >
              add to cart{' '}
              <span>
                <BsArrowRight />
              </span>
            </p>
          </div>
        </div>
        <p className="max-lg:text-sm max-sm:text-xs">{product.category}</p>
      </div>
      <div className="absolute top-4 right-0 ">
        {product.isNew && (
          <p className="bg-black text-white max-sm:text-sm max-sm:px-1 max-sm:py-0 max-md:px-2 max-md:py-0 max-lg:px-2 max-md:text-sm font-semibold font-titleFont px-6 py-1">
            Sale
          </p>
        )}
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
export default ProductsCard;
