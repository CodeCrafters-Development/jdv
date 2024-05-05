import { products } from "../lib/data";

const Home = () => {
  const getRoundedNumber = (price: number): number => {
    const installmentPrice = price / 3;
    const rounded = Math.round(installmentPrice * 100) / 100;

    return rounded;
  };

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
            <div key={index} className="flex flex-col w-[382px] gap-y-[19px]">
              <img
                src={item.images[0].imgUri}
                className="w-[382px] h-[326px] object-cover"
              />
              <div className="flex flex-col">
                <span className="text-xs font-bold">{item.id}</span>
                <span className="text-[20px] font-medium font-NeueMontreal">
                  {item.productName}
                </span>
                <div className="flex items-center gap-x-[10px]">
                  <span className="text-[18px] font-normal">
                    LKR {item.price}
                  </span>
                  <span className="text-xs font-normal">
                    or LKR {getRoundedNumber(item.price)} with
                  </span>
                  <img
                    src={item.installment[0].brandImg}
                    className="h-[18px]"
                  />
                </div>
              </div>
            </div>
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
