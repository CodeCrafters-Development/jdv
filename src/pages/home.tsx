import React from "react";
import ProductCard from "../components/product-card";
import { products } from "../lib/data";

const Home = () => {
  return (
    <main className="">
      <section className="h-screen px-20">
        <div className="h-[100px]"></div>
        <div className="bg-primary w-full h-[80%] flex">
          <div className="h-full flex-1 flex items-start justify-center flex-col gap-y-4">
            <div className="mx-auto w-[500px] h-[50%] flex flex-col items-start justify-evenly bg-hero-backdrop">
              <h1 className="font-PlayfairDisplay text-7xl font-medium">
                Joy of Living .
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur. Blandit fermentum
                posuere volutpat in lorem purus rhoncus laoreet sapien. Placerat
                at turpis.
              </p>
              <div>
                <a href="/">
                  <span className="bg-secondary text-primary font-NeueMontrealMedium px-10 py-3">
                    View Collection
                  </span>
                </a>
              </div>
            </div>
          </div>
          <video autoPlay muted loop className="grayscale">
            <source src="/assets/videos/left.mp4" />
          </video>
          <video autoPlay muted loop className="grayscale">
            <source src="/assets/videos/right.mp4" />
          </video>
        </div>
      </section>
      <section className="h-[100vh] px-20 py-10 flex items-center justify-start flex-col gap-y-10">
        <h2 className="font-PlayfairDisplay text-5xl">Recently Released</h2>
        <div className="w-full flex items-center justify-center gap-x-[34px]">
          {products.map((item, index) => (
            <React.Fragment key={index}>
              <ProductCard {...item} />
            </React.Fragment>
          ))}
        </div>
        <div>
          <a href="/">
            <span className="bg-primary text-secondary font-NeueMontrealMedium px-10 py-3">
              View Collection
            </span>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;
