import React from "react";

type UpComingProps = {
  title?: React.ReactNode;
  description?: string;
  link?: string;
};

const UpComing = ({ title, description, link }: UpComingProps) => {
  return (
    <>
      <img src="/assets/images/jdv-logo.png" alt="JDV" height={70} width={70} />
      <div className="relative z-10 bg-primary w-[95%] py-16 overflow-hidden">
        <h1 className="font-PlayfairDisplay z-10 tracking-[-5px] md:tracking-[-8px] text-h1Mobile md:text-h1Desktop text-center">
          {title}
        </h1>
        <img
          src="/assets/images/hero-backdrop.png"
          className="absolute z-20 w-full h-full left-0 bottom-0 object-cover mix-blend-color-dodge"
        />
      </div>
      <p className="text-xs text-center">{description}</p>
      <div>
        <a href={link}>
          <span className="bg-secondary text-primary font-NeueMontrealMedium px-10 py-3">
            Browse other collections
          </span>
        </a>
      </div>
    </>
  );
};

export default UpComing;
