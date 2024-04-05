const Title = ({ id, text }) => {
  return (
    <>
      {/* Title */}
      <section
        id={id}
        className="flex w-full items-center justify-between py-16"
      >
        <h2 className="text-center text-3xl text-LightSky  ">{text} </h2>
        <div className="ml-5 h-[1px] w-auto grow bg-DarkGray opacity-85"></div>
      </section>
    </>
  );
};

export default Title;
