import { LuChevronDown } from "react-icons/lu";
import { navlinks } from "../lib/data";

const Header = () => {
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
            <a key={index} href={item.href}>
              <span
                className={`flex items-center justify-center ${
                  item.hasSub && "gap-y-[3px]"
                }`}
              >
                {item.name}
                {item.hasSub && <LuChevronDown />}
              </span>
            </a>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
