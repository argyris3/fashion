import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import CartItem from '../components/CartItem';
import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);
  const [totalAmt, setTotalAmnt] = useState('');
  const [payNow, setPayNow] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
    });
    setTotalAmnt(price.toFixed(2));
  }, [productData]);
  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error('Please sign in to checkout..');
    }
  };

  const payment = async (token) => {
    await axios.post('http://localhost:8001/pay', {
      amount: totalAmt * 100,
      token: token,
    });
  };

  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress"
        alt="cartImg"
      />
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart Totals</h2>
            <p className="flex items-center gap-4 text-base">
              {' '}
              Subtotal <span className="font-titleFont font-bold text-lg">${totalAmt}</span>
            </p>
            <p
              className="flex items-start gap-4 text-base
          "
            >
              Shipping <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</span>
            </p>
          </div>
          <p className="font-titleFont font-semibold flex justify-between mt-6">
            Total <span className="text-xl font-bold"></span>${totalAmt}
          </p>
          <button
            onClick={handleCheckOut}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            Proceed to Checkout
          </button>
          {payNow && (
            <div className="w-full mt-6 flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51Mp3jDFS9onrEABqbvi79tAQlmxt7UCG9QdDqkc699RyYdOHgjzCtauaZSNG3Csk8JE9aQ4hmEp5D6fB9zkjsgrm00pj1GU294"
                name="Bazaar Online Shopping"
                amount={totalAmt * 100}
                label="Pay to Bazaar"
                description={`Your Payment is $${totalAmt}`}
                token={payment}
                email={userInfo.email}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
