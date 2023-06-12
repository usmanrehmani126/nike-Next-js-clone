import React, { useEffect, useState } from "react";
import Menu from "./Menu";
import Wrapper from "./Wrapper";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCart } from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscChromeClose } from "react-icons/vsc";
import MenuMobile from "./MenuMobile";
import Link from "next/link";
const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]");
      } else {
        setShow("shadow-sm");
      }
    } else {
      setShow("translate-y-0");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}
    >
      <Wrapper className="h-[60px] flex items-center justify-between">
        <Link href="/">
          <img
            src="/logo.svg"
            className="w-[40px] md:w-[60px] cursor-pointer"
          />
        </Link>
        <Menu showCatMenu={showCatMenu} setShowCatMenu={setShowCatMenu} />
        {mobileMenu && (
          <MenuMobile
            showCatMenu={showCatMenu}
            setShowCatMenu={setShowCatMenu}
            setMobileMenu={setMobileMenu}
          />
        )}

        <div className="flex items-center gap-2 text-black">
          <div className="w-8 md:w-11 h-8 md:h-11 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative ">
            <IoMdHeartEmpty className="text=[15px] md:text-[20px]" />
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 text-white absolute top-1 left-5 flex items-center justify-center md:left-7 text-[10px] md:text-[12px] px-[2px] md:px-[5px]">
              20
            </div>
          </div>
          <div className="w-8 md:w-11 h-8 md:h-11 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative ">
            <Link href="/Cart">
              <BsCart className="text=[15px] md:text-[20px]" />
            </Link>
            <div className="h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] rounded-full bg-red-600 text-white absolute top-1 left-5 flex items-center justify-center md:left-7 text-[10px] md:text-[12px] px-[2px] md:px-[5px]">
              5
            </div>
          </div>
          <div className="w-8 md:w-11 h-8 md:h-11 rounded-full flex items-center justify-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <>
                <VscChromeClose
                  className="text-[20px]"
                  onClick={() => setMobileMenu(false)}
                />{" "}
              </>
            ) : (
              <>
                <BiMenuAltRight
                  className="text-[20px] block md:hidden"
                  onClick={() => setMobileMenu(true)}
                />{" "}
              </>
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;