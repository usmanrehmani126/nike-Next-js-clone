import Link from "next/link";
import React from "react";

const ProductCard = () => {
  return (
    <Link href="/product/1" className="transform overflow-hidden bg-white duration-200 hover:scale-105">
      <img src="/product-1.webp" alt="" className="w-full" />
      <div className="p-4 text-black/[0.9]">
        <h3 className="text-lg font-medium">Product Name</h3>
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <p className="font-semibold">$20.00</p>
            <p className="line-through">$20.00</p>
          </div>
          <p className="text-lime-600 text-sm">20% Off</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
