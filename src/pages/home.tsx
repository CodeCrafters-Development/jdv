import ProductArray from "../components/product-array";
import { productsWomen, productsMen, cargoPants } from "../lib/data";
import { getRoundedNumber } from "../lib/utils";

const Home = () => {
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
      <section className="px-2 md:px-15 lg:px-20 flex flex-col md:flex-row items-center justify-center py-10 gap-y-4 md:gap-x-4">
        <div className="relative w-full md:w-[75%] h-[230px] sm:h-[290px] md:h-[320px] lg:h-[500px] bg-primary rounded-3xl md:rounded-xl overflow-hidden">
          <img
            src="/assets/images/latestCard.png"
            className="absolute z-10 right-0 md object-cover h-[230px] sm:h-[290px] md:h-[320px] lg:h-[500px]"
          />
          <div className="absolute left-6 z-20 h-full w-[80%] flex items-start justify-center flex-col gap-y-4">
            <h2 className="h2-text text-secondary">Our Latest Collection</h2>
            <p className="p-text w-[90%] lg:w-[80%] lg:text-[20px] mb-3 font-NeueMontrealLight font-bold text-secondary">
              Lorem ipsum dolor sit amet consectetur. Cras diam massa venenatis
              donec ut ut elementum leo et.
            </p>
            <div>
              <a href="/">
                <span className="px-5 py-2 sm:px-10 sm:py-2 md:px-14 lg:py-3 bg-secondary text-primary font-NeueMontrealMedium">
                  View Collection
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative w-full md:w-[40%] h-[230px] sm:h-[290px] md:h-[320px] lg:h-[500px] bg-secondary rounded-3xl md:rounded-xl overflow-hidden">
          <img
            src="/assets/images/bestSeller.png"
            className="absolute z-10 -left-10 md:left-20 lg:hidden object-cover h-[230px] sm:h-[290px] md:h-[320px] lg:h-[500px]"
          />
          <img
            src="/assets/images/bestSeller.png"
            className="hidden lg:block absolute z-10 lg:-right-14 lg:h-[500px]"
          />
          <div className="absolute z-20 right-0 md:left-0 w-[60%] md:w-[90%] md:pl-2 lg:pl-5 pt-5 h-full ">
            <h2 className="h2-text lg:text-[45.9px] !font-NeueMontrealLight text-primary  md:my-[30%] flex flex-col">
              BEST SELLER OF
              <span className="font-NeueMontrealMedium">THE MONTH</span>
            </h2>
            <div className="absolute bottom-5 lg:bottom-10 text-primary gap-y-6 mt-4">
              <p className="font-NeueMontrealMedium text-sm lg:text-base">
                Black Leather with Chrome Handles
              </p>
              <p className="font-NeueMontrealLight text-sm sm:text-base flex items-center gap-x-1 mb-3">
                LKR {new Intl.NumberFormat().format(4000)}
                <span className="text-xs ml-1">
                  or 3 x LKR{" "}
                  {new Intl.NumberFormat().format(getRoundedNumber(4000))}
                </span>
                <span className="flex items-center text-xs sm:text-sm gap-x-1">
                  with
                  <img
                    src="/assets/images/koko.png"
                    className="w-[20px] sm:w-[26px]"
                  />
                </span>
              </p>
              <div>
                <a href="/">
                  <span className="px-5 py-2 sm:px-10 sm:py-2 md:px-10 bg-primary text-secondary font-NeueMontrealMedium">
                    Buy Now
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="px-10 xl:px-20 flex flex-col items-center justify-center py-10 gap-y-[19px]">
        <h2 className="text-h2Mobile xl:text-h2Desktop font-PlayfairDisplay">
          JDV Premium Collection
        </h2>
        <ProductArray productsList={productsWomen} link="/women" />
      </section> */}
      <section className="px-10 xl:px-20 flex flex-col items-center justify-center py-10 gap-y-[19px]">
        <h2 className="text-h2Mobile xl:text-h2Desktop font-PlayfairDisplay">
          JDV Pants Collection
        </h2>
        <ProductArray productsList={cargoPants} link="/women" />
      </section>
    </main>
  );
};

export default Home;
