import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-black text-white pb-10 pt-15">
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 mx-auto p-14">
        <div className="md:mb-3 mb-5">
          <h4 className="font-bold text-sm mb-3 ">FIND A STORE</h4>
          <h4 className="font-bold text-sm mb-3 cursor-pointer">
            BECOME A PARTNER
          </h4>
          <h4 className="font-bold text-sm mb-3 cursor-pointer">
            SIGN UP FOR EMAIL
          </h4>
          <h4 className="font-bold text-sm mb-3 cursor-pointer">
            SEND US FEEDBACK
          </h4>
          <h4 className="font-bold text-sm mb-3 cursor-pointer">
            STUDENT DISCOUNT
          </h4>
        </div>
        <div className="md:mb-3 mb-5">
          <h3 className="font-bold text-base mb-3 ">GET HELP</h3>
          <h6 className=" text-sm mb-3 cursor-pointer">Order Status</h6>
          <h6 className=" text-sm mb-3 cursor-pointer">Delivery</h6>
          <h6 className=" text-sm mb-3 cursor-pointer">Returns</h6>
          <h6 className=" text-sm mb-3 cursor-pointer">Payment Options</h6>
          <h6 className=" text-sm mb-3 cursor-pointer">Contact Us</h6>
        </div>
        <div className="md:mb-3 mb-5">
          <h3 className="font-bold text-base mb-3 ">ABOUT NIKE</h3>
          <p className=" text-sm mb-3 cursor-pointer">News</p>
          <p className=" text-sm mb-3 cursor-pointer">Careers</p>
          <p className=" text-sm mb-3 cursor-pointer">Investors</p>
          <p className=" text-sm mb-3 cursor-pointer">Sustainability</p>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-gray-800 rounded-full w-12 h-12 cursor-pointer hover:bg-gray-700 transition-all ease-in duration-200  flex items-center  justify-center">
            {" "}
            <FaFacebookF size={24} />
          </div>
          <div className="bg-gray-800 rounded-full w-12 h-12 cursor-pointer hover:bg-gray-700 transition-all ease-in duration-200  flex items-center  justify-center">
            {" "}
            <FaTwitter size={24} />
          </div>
          <div className="bg-gray-800 rounded-full w-12 h-12 cursor-pointer hover:bg-gray-700 transition-all ease-in duration-200  flex items-center  justify-center">
            {" "}
            <FaYoutube size={24} />
          </div>
          <div className="bg-gray-800 rounded-full w-12 h-12 cursor-pointer hover:bg-gray-700 transition-all ease-in duration-200  flex items-center  justify-center text-white">
            {" "}
            <FaInstagram size={24} />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center mt-10 flex-col md:flex-row gap-[10px] md:gap-0">
        <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer text-center md:text-left">
          © 2023 Nike, Inc. All Rights Reserved
        </div>
        <div className="flex gap-2 md:gap-5 text-center md:text-left flex-wrap justify-center">
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Guides
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Sale
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Terms of Use
          </div>
          <div className="text-[12px] text-white/[0.5] hover:text-white cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
