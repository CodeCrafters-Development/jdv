import ProductArray from "../components/product-array";
import { productsWomen, productsMen } from "../lib/data";

const Home = () => {
  const getRoundedNumber = (price: number): number => {
    const installmentPrice = price / 3;
    const rounded = Math.round(installmentPrice * 100) / 100;

    return rounded;
  };
  return (
    <main>
      <section className="h-screen px-0 lg:px-20">
        <div className="h-[60px] xl:h-[100px]"></div>
        <div className="w-full h-full flex max-xl:items-start max-xl:justify-center max-xl:z-0 xl:bg-primary xl:h-[80%]">
          <div className="max-xl:group max-xl:absolute max-xl:z-10 h-[80%] xl:h-full w-[80%] flex items-center xl:items-start justify-center flex-col gap-y-10 xl:gap-y-4">
            <div className="xl:mx-auto md:w-[50%] xl:w-[500px] h-fit xl:h-[50%] flex flex-col items-center gap-y-4 md:gap-y-5 xl:gap-y-[16px] xl:items-start xl:justify-evenly xl:bg-hero-backdrop">
              <h1 className="font-PlayfairDisplay -tracking-[5px] leading-[127.97px] text-h1Mobile xl:text-h1Desktop font-semibold text-primary xl:text-secondary">
                Joy of Living
              </h1>
              <p className="max-xl:font-semibold max-xl:text-center text-[18px] text-primary xl:text-secondary">
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
        <ProductArray productsList={productsMen} link="/mens" />
      </section>
      <section className="px-10 xl:px-20 flex items-center justify-center py-10 gap-x-[16px]">
        <div className="relative w-[70%] h-[500px] bg-primary rounded-3xl overflow-hidden">
          <img
            src="/assets/images/latestCard.png"
            className="absolute z-10 right-0 object-cover h-[500px]"
          />
          <img
            src="/assets/images/hero-backdrop.png"
            className="absolute -top-16 left-28 object-cover h-[750px] w-[400px] opacity-[50%] rotate-[34.32deg] mix-blend-color-dodge"
          />
          <div className="absolute left-6 z-20 h-full w-[80%] flex items-start justify-center flex-col gap-y-4">
            <h2 className="font-PlayfairDisplay text-h2Desktop font-medium">
              Our Latest Collection
            </h2>
            <p className="text-[20px] w-[70%] leading-6 font-NeueMontrealLight font-bold">
              Lorem ipsum dolor sit amet consectetur. Cras diam massa venenatis
              donec ut ut elementum leo et.
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
        <div className="relative z-0 w-[30%] h-[500px] bg-secondary rounded-3xl overflow-hidden">
          <img
            src="/assets/images/bestSeller.png"
            className="absolute z-10 -right-14 object-cover h-[500px]"
          />
          <div className="absolute z-20 h-full p-7">
            <h2 className="mt-[137px] uppercase text-[45.9px] leading-[55.08px] text-primary font-NeueMontrealLight flex flex-col">
              BEST SELLER OF
              <span className="font-NeueMontrealMedium">THE MONTH</span>
            </h2>
            <div className="absolute bottom-10 text-primary gap-y-6">
              <p className="font-NeueMontrealBold">
                Black Leather with Chrome Handles
              </p>
              <p className="flex gap-x-2">
                LKR {new Intl.NumberFormat().format(4000)}{" "}
                <span className="flex items-center gap-x-1">
                  or 3 x LKR{" "}
                  {Intl.NumberFormat().format(getRoundedNumber(4000))} with
                  <img
                    src="/assets/images/koko.png"
                    className="w-[35px] h-[16px]"
                  />
                </span>
              </p>
              <div className="mt-5">
                <a href="/">
                  <span className="bg-primary text-secondary font-NeueMontrealMedium px-10 py-3">
                    View Collection
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="px-10 xl:px-20 flex flex-col items-center justify-center py-10 gap-y-[19px]">
        <h2 className="text-h2Mobile xl:text-h2Desktop font-PlayfairDisplay">
          JDV Premium Collection
        </h2>
        <ProductArray productsList={productsWomen} link="/women" />
      </section>
    </main>
  );
};

export default Home;
