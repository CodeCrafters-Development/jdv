import UpComing from "../components/up-coming";

const Women = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-around  px-5 md:p-10 gap-y-5">
      <UpComing
        title={
          <>
            Women’s Collection will <br /> be released soon
          </>
        }
        description="Lorem ipsum dolor sit amet consectetur. Blandit fermentum posuere volutpat in lorem purus rhoncus laoreet sapien. Placerat at turpis."
        link="/"
      />
    </main>
  );
};

export default Women;
