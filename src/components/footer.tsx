import { LuFacebook, LuInstagram, LuMail, LuPhone } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white flex flex-col py-10 gap-y-10">
      <div className="w-full">
        <div className="w-[50%] md:w-[25%] mx-auto flex items-center justify-center flex-col gap-y-4 ">
          <h3 className="font-PlayfairDisplay text-4xl">Joie De Vire</h3>
          <hr className="bg-white/20 w-full h-[1px]" />
          <div className="w-full flex items-center justify-center gap-x-4">
            <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
              <LuPhone className="text-white" />
            </span>
            <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
              <LuMail />
            </span>
            <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
              <LuFacebook />
            </span>
            <span className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center">
              <LuInstagram />
            </span>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-between flex-col md:flex-row gap-y-2 px-5 md:px-20 text-sm">
        <p className="text-xs">© 2024 All Rights Reserved</p>
        <ul className="flex items-start justify-center gap-x-1">
          <li>
            <a href="/">
              <span className="hover:underline">Privacy Policy</span> •
            </a>
          </li>
          <li>
            <a href="/">
              <span className="hover:underline">Terms of Use</span> •
            </a>
          </li>
          <li>
            <a href="/">
              <span className="hover:underline">Sales and Refunds</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
