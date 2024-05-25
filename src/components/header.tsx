import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import { navlinks } from "../lib/data";
import React, { useState } from "react";
import { SubNavigationLinkTypes } from "../lib/types";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-[999] relative ">
      <nav className="fixed px-5 md:px-20 w-full h-[60px] md:h-[100px] flex items-center max-md:justify-between gap-x-10 bg-white">
        <img
          src="/assets/images/jdv-logo.png"
          alt="JDV"
          height={70}
          width={70}
        />
        <ul className="flex gap-3 text-base">
          {navlinks.map((item, index) => (
            <React.Fragment key={index}>
              {item.hasSub ? (
                <button
                  className="relative flex items-center justify-center"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  {item.name} {isOpen ? <LuChevronUp /> : <LuChevronDown />}
                  {isOpen && <SubMenu options={item.subLinks} />}
                </button>
              ) : (
                <a href={item.href}>{item.name}</a>
              )}
            </React.Fragment>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

type SubMenuProps = {
  options?: SubNavigationLinkTypes[];
};

const SubMenu = ({ options }: SubMenuProps) => {
  return (
    <div className="absolute bg-primary text-secondary border border-secondary rounded-lg w-[153px] h-[87px] right-0 md:left-0 -bottom-24">
      <ul className="h-full flex flex-col justify-around rounded-lg">
        {options?.map((item, index) => (
          <React.Fragment key={index}>
            <li className="text-left px-3 flex-1 flex items-center text-sm font-normal">
              <a href={item.href}>{item.name}</a>
            </li>
            <hr className="last:hidden bg-secondary w-[90%] h-[1.5px] self-center" />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
