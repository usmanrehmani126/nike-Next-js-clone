import React from "react";
import Wrapper from "./Wrapper";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { GiStorkDelivery } from "react-icons/gi";

const DescriptionsSection = () => {
  const serviceData = [
    {
      icon: "ri-truck-line",
      title: "Free Shipping",
      subtitle: "Get Products,No Delivery Charges.",
      bg: "#fdefe6",
    },
    {
      icon: "ri-refresh-line",
      title: "Easy Returns",
      subtitle: "Return Products Easily.Never Disheart",
      bg: "#ceebe9",
    },
    {
      icon: "ri-secure-payment-line",
      title: "Secure Payment",
      subtitle: "Always Keep your Account Secure.",
      bg: "#e2f2b2",
    },
    {
      icon: "ri-exchange-dollar-line",
      title: " Back Guarantee",
      subtitle: "Money Back Gurrantee.Stay Tuned",
      bg: "#d6e5fb",
    },
  ];
  return (
    <Wrapper>
      <div className="bg-gray-50 py-2 my-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-14 px-5 md:px-2 gap-3 ">
          {serviceData.map((data) => {
            return (
              <div className="bg-[#FFF2CC] p-8 flex items-center gap-3">
                <i class={data.icon}></i>
                <p className="text-base">{data.title}</p>
              </div>
            );
          })}
          {/*          
          <div className="bg-[#FFBFA9] p-8 flex items-center gap-3">
            <AiOutlineSafetyCertificate className="bg-black text-white p-5" />
            <p className="text-base">Free Shipping</p>
          </div>
          <div className="bg-[#FFF1DC] p-8 flex items-center gap-3">
            <AiOutlineSafetyCertificate
              className="bg-black text-white p-5 rounded-full "
              color="white"
            />
            <p className="text-base">Secure Payment</p>
          </div>
          <div className="bg-[#FBFFB1] p-8 flex items-center gap-3">
            <p>Hello</p>
            <p className="text-base">Money Back Gurrantee</p>
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
};

export default DescriptionsSection;
