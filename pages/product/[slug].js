import ProductDetailsCarsoul from "@/components/ProductDetailsCarsoul";
import RelatedProduct from "@/components/RelatedProduct";
import Wrapper from "@/components/Wrapper";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";

const ProductDetails = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetailsCarsoul />
          </div>
          <div className="flex-[1] py-3">
            <div>
              <h3 className="font-semibold text-[34px] mb-2">
                Jordan Retro 6 G
              </h3>
              <p className="font-bold text-sm">Men's Golf Shoes</p>
              <p className="mt-2 font-semibold">MRP:$2900</p>
              <small className="text-gray-400">inc of taxes</small>
              <br />
              <small className="text-gray-400">
                (also includes all applicable duties)
              </small>
              <div className="mb-10 mt-6">
                <div className="flex justify-between mb-2 cursor-pointer">
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-semibold">Select Guide</div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium hover:border-black cursor-pointer">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium  bg-black/[0.1] cursor-not-allowed opacity-50  ">
                  UK 6
                </div>
                <div className="border rounded-md text-center py-3 font-medium  bg-black/[0.1] cursor-not-allowed opacity-50  ">
                  UK 7
                </div>
                <div className="border rounded-md text-center py-3 font-medium  bg-black/[0.1] cursor-not-allowed opacity-50  ">
                  US 8{" "}
                </div>
              </div>
              <div className="text-red-600 my-2 text-sm">
                Size Selection is required
              </div>
            </div>
            <div className="flex flex-col mt-3">
              <button className="w-full bg-black py-2 px-4 rounded-full text-white transition-transform active:scale-95 ">
                Add to Cart
              </button>
              <button className="border border-black  text-black bg-gray-50  py-2 px-4 rounded-full mt-3 flex items-center justify-center gap-2 hover:bg-slate-100">
                Whishlist <AiOutlineHeart />
              </button>
              <div>
                <div className="text-lg font-bold mb-5 mt-5">
                  Product Details
                </div>
                <div className="text-md mb-4">
                  We've reimagined an icon of Air with bursts of high-energy
                  colors and layered leather overlays to bring you skillfully
                  crafted luxury. Plus, plush ankle padding mixes with
                  tried-and-true Air cushioning for comfort you have to feel to
                  believe. With a design that's playful, sporty and oh-so
                  comfortable, the Nike Air Max 90 Futura is all about stepping
                  into the future. Are you ready?
                </div>
                <div className="text-md mb-4">
                  We've reimagined an icon of Air with bursts of high-energy
                  colors and layered leather overlays to bring you skillfully
                  crafted luxury. Plus, plush ankle padding mixes with
                  tried-and-true Air cushioning for comfort you have to feel to
                  believe. With a design that's playful, sporty and oh-so
                  comfortable, the Nike Air Max 90 Futura is all about stepping
                  into the future. Are you ready?
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProduct />
      </Wrapper>
    </div>
  );
};

export default ProductDetails;

