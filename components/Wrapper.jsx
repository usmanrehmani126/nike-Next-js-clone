import React from "react";

const Wrapper = ({ className, children }) => {
  return (
    <div
      className={`w-full max-w-[1240px] px-5 md:px-10 mx-auto ${className || ""}
    `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
