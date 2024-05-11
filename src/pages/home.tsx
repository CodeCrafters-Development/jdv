const Home = () => {
  return (
    <main>
      <section className="h-screen px-0">
        <div className="h-[60px]"></div>
        <div className="w-full h-full flex items-start justify-center z-0">
          <div className="group absolute z-10 h-full w-[80%] flex items-center justify-center flex-col gap-y-10">
            <h1 className="font-PlayfairDisplay text-h1Mobile md:text-h1Md font-semibold text-primary mix-blend-difference">
              Joy of Living
            </h1>
            <p className="font-semibold text-center text-primary">
              Lorem ipsum dolor sit amet consectetur. Blandit fermentum posuere
              volutpat in lorem purus rhoncus laoreet sapien. Placerat at
              turpis.
            </p>
            <div>
              <a href="/">
                <span className="bg-primary text-secondary font-NeueMontrealMedium px-10 py-3">
                  View Collection
                </span>
              </a>
            </div>
          </div>
          <video
            autoPlay
            muted
            loop
            className="group relative grayscale brightness-50 h-[85vh] rounded-md flex items-center justify-center"
          >
            <source src="/assets/videos/right.mp4" />
          </video>
        </div>
      </section>
    </main>
  );
};

export default Home;
