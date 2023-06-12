import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";
const CartItem = () => {
  return (
    <div className="flex py-5 gap-3 md:gap-5 border-b">
      <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
        <img src="product-1.webp" alt="" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex justify-between">
          <div>
            <h3 className="text-sm md:text-lg">Product Name</h3>
            <p className="text-sm text-black/[0.5]">Men's Golf Shoez</p>
          </div>
          <div className="text-[12px]  text-black/[0.5]">MRP : $ 250.00</div>
        </div>

        <div className="flex items-center justify-between my-3">
          <div className="text-[14px] text-black/[0.5] flex gap-6">
            <div className="flex items-center gap-2">
              <div className="font-semibold"> Size:</div>
              <select className="hover:text-black focus:outline-none">
                <option value="1">UK 6</option>
                <option value="2">UK 7</option>
                <option value="3">UK 8</option>
                <option value="4">UK8.5</option>
                <option value="5">UK 9</option>
                <option value="6">UK 9.5</option>
                <option value="7">UK 10</option>
                <option value="8">UK 10.5</option>
                <option value="9">UK 11</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <div className="font-semibold"> Quantity:</div>
              <select className="hover:text-black focus:outline-none">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <RiDeleteBin5Line
            className="cursor-pointer transition-transform active:scale-95 "
            size={20}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
