import UpComing from "../components/up-coming";

const Women = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-evenly  px-5 md:p-10">
      <UpComing
        title={
          <>
            Women’s Collection will <br /> be released soon
          </>
        }
        description="A new era of elegance is on its way. Our upcoming Women’s Collection features exquisite designs tailored to inspire confidence and sophistication. Stay tuned for the grand reveal."
        link="/"
      />
    </main>
  );
};

export default Women;
