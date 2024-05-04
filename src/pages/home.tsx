import Footer from "../components/footer";
import Header from "../components/header";

const Home = () => {
  return (
    <main className="">
      <Header />
      <section className="h-screen px-20">
        <div className="h-[100px]"></div>
        <div className="bg-primary w-full h-[80%]">
          <div className="h-full w-[40%] flex items-start justify-center flex-col gap-y-4">
            <h1 className=" mx-auto font-PlayfairDisplay text-7xl font-medium">
              Joy of Living .
            </h1>
            <p className="w-[80%] mx-auto">
              Lorem ipsum dolor sit amet consectetur. Blandit fermentum posuere
              volutpat in lorem purus rhoncus laoreet sapien. Placerat at
              turpis.
            </p>
            <div className="w-[80%] mx-auto mt-3">
              <a href="/">
                <span className="bg-secondary text-primary px-10 py-3">
                  View Collection
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
