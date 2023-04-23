import { logoDark, payments } from '../assets';
import { ImGithub } from 'react-icons/im';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaHome } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import { BsPersonFill, BsPaypal } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont ">
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 ">
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoDark} alt="" />
          <p className="text-white text-sm tracking-wide">@ ReactDB.com</p>
          <img className="w-40" src={payments} alt="payments" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hovet:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hovet:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hovet:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hovet:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hovet:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white ">locate us</h2>
          <div className="text-base flex flex-col gap-2">
            <p>Ptolemaida,Eordaia,Greece</p>
            <p>Mobile:0003345697443</p>
            <p>Phone:2463012345</p>
            <p>Email:bazaar@gmail.com</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white ">profile</h2>
          <div className="flex flex-col gap-2 text-base">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>{' '}
              my account
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPaypal />
              </span>
              checkout
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <FaHome />
              </span>{' '}
              order tracking
            </p>
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdLocationOn />
              </span>{' '}
              help & support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center ">
          <input className="bg-transparent border px-4 py-2 text-sm" placeholder="email" type="text" />
          <button className="text-sm  border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Suscribe
          </button>
        </div>
      </div>
    </div>
  );
};
export default Footer;
