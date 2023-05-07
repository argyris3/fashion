import { cartImg, shopping, logoDark, login } from '../assets';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

function Header() {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  console.log(userInfo);

  return (
    <div className="w-full h-20 max-sm:h-16  bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50 ">
      <div className="max-w-screen-xl h-full mx-auto flex sm:mr-5 max-sm:flex gap-2 max-sm:text-xs max-sm:mr-6  items-center justify-between max-sm:justify-around">
        <Link to="/">
          <div>
            <img className="w-20 max-sm:w-16 " src={logoDark} alt="" />
          </div>
        </Link>

        <div className="flex items-center gap-8 max-sm:gap-7 ">
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>

            {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li> */}
            {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li> */}
            {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li> */}
            {/* <li className="text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li> */}
          </ul>
          <Link to="/cart">
            <div className="relative">
              <img className="w-12 max-sm:max-w-fit" src={shopping} alt="" />
              <span className="absolute  w-8 top-2 left-2 bottom-1 text-xl flex items-center justify-center font-semibold  ">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            <img
              className="w-8 h-8 rounded-full max-sm:max-w-fit"
              src={userInfo ? userInfo.image : login}
              alt="userLogo"
            />
          </Link>
          {userInfo && <p className="text-base font-titleFont font-semibold ">{userInfo.name.split('', 7)}</p>}
        </div>
      </div>
    </div>
  );
}
export default Header;
