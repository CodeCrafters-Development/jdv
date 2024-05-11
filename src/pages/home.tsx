import React from "react";
import { products } from "../lib/data";
import ProductCard from "../components/product-card";

const Home = () => {
  return (
    <main>
      <section className="h-screen px-0 lg:px-20">
        <div className="h-[60px] xl:h-[100px]"></div>
        <div className="w-full h-full flex max-xl:items-start max-xl:justify-center max-xl:z-0 xl:bg-primary xl:h-[80%]">
          <div className="max-xl:group max-xl:absolute max-xl:z-10 h-[80%] xl:h-full w-[80%] flex items-center xl:items-start justify-center flex-col gap-y-10 xl:gap-y-4">
            <div className="xl:mx-auto md:w-[50%] xl:w-[500px] h-fit xl:h-[50%] flex flex-col items-center gap-y-4 md:gap-y-5 xl:gap-y-0 xl:items-start xl:justify-evenly xl:bg-hero-backdrop">
              <h1 className="font-PlayfairDisplay text-h1Mobile xl:text-h1Desktop font-semibold text-primary xl:text-secondary">
                Joy of Living
              </h1>
              <p className="max-xl:font-semibold max-xl:text-center text-primary xl:text-secondary">
                Lorem ipsum dolor sit amet consectetur. Blandit fermentum
                posuere volutpat in lorem purus rhoncus laoreet sapien. Placerat
                at turpis.
              </p>
              <div>
                <a href="/">
                  <span className="bg-primary text-secondary xl:bg-secondary xl:text-primary font-NeueMontrealMedium px-10 py-3">
                    View Collection
                  </span>
                </a>
              </div>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            className="grayscale max-xl:h-[85vh] max-xl:brightness-50 max-md:hidden"
          >
            <source src="/assets/videos/left.mp4" />
          </video>
          <video
            autoPlay
            muted
            loop
            className="max-xl:group max-xl:relative grayscale max-xl:brightness-50 max-xl:h-[85vh] max-xl:rounded-md max-xl:flex max-xl:items-center max-xl:justify-center"
          >
            <source src="/assets/videos/right.mp4" />
          </video>
        </div>
      </section>
      <section className="px-10 xl:px-20 flex flex-col items-center justify-center py-10 gap-y-[19px]">
        <h2 className="text-h2Mobile xl:text-h2Desktop font-PlayfairDisplay">
          Recently Released
        </h2>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 gap-y-[34px] gap-x-[34px]">
          {products.map((item, index) => (
            <React.Fragment key={index}>
              <ProductCard {...item} />
            </React.Fragment>
          ))}
          <div className="lg:col-span-3 flex items-center justify-center ">
            <a
              href="/"
              className="bg-primary text-secondary font-NeueMontrealMedium w-full text-center py-4 lg:w-[282px]"
            >
              View Collection
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
