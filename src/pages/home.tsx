const Home = () => {
  return (
    <main className="">
      <section className="h-screen px-20">
        <div className="h-[100px]"></div>
        <div className="bg-primary w-full h-[80%] flex">
          <div className="h-full flex-1 flex items-start justify-center flex-col gap-y-4">
            <div className="mx-auto w-[500px] h-[50%] flex flex-col items-start justify-evenly">
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
                  <span className="bg-secondary text-primary px-10 py-3">
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
    </main>
  );
};

export default Home;
