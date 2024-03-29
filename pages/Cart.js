import CartItem from "@/components/CartItem";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const Cart = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        {/* <div className="text-center max-w-[800px] mx-auto mt-8 md:mt-0">
          <div className="text-2xl font-bold md:text-[34px] text-[24px] leading-tight">
            Shopping Cart
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 py-10">
          <div className="flex-[2]">
            <div className="font-bold text-lg">
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </div>
          </div>
          <di v className="flex-[1]">
            <div className="font-bold text-lg">Summary</div>
            <div className="p-5 my-5 bg-black/[0.05] rounded-xl">
              <div className="flex items-center justify-between">
                <div className="font-bold">SUBTOTAL</div>
                <div className="font-semibold">$ 2500.00</div>
              </div>
              <div className="text-sm md:text-md py-5 border-t mt-5">
                The subtotal reflects the total price of your order, including
                duties and taxes, before any applicable discounts. It does not
                include delivery costs and international transaction fees.
              </div>
            </div>
            <button className="w-full bg-black py-2 px-4 rounded-full text-white transition-transform active:scale-95 ">
              Proceed to Checkout
            </button>
          </di>
        </div> */}

        <div className="flex-[2] flex flex-col items-center pb-[50px] md:-mt-14">
          <Image
            src="/empty-cart.jpg"
            width={300}
            height={300}
            className="w-[300px] md:w-[400px]"
          />
          <span className="text-xl font-bold">Your cart is empty</span>
          <span className="text-center mt-4">
            Looks like you have not added anything in your cart.
            <br />
            Go ahead and explore top categories.
          </span>
          <Link
            href="/"
            className="py-4 px-8 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75 mt-8"
          >
            Continue Shopping
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Cart;
