export default function ProjectCard({
  title,
  description,
  image,
  stack,
  gitHub,
  demo,
  isLeft,
}) {
  return (
    <>
      {/* Project Card*/}
      <section className="relative flex h-[350px]  w-full flex-col items-center justify-center gap-5 md:flex-row xl:h-[400px]">
        {/* Image */}
        <div
          className={` ${isLeft ? " md:left-0 " : "md:right-0"} h-full md:absolute md:h-3/5 lg:h-4/5`}
        >
          {/* <div className="absolute z-10 h-full w-full bg-DarkBlue bg-cover opacity-[90%] transition-all duration-300  md:bg-Green md:opacity-50 md:hover:bg-transparent"></div> */}
          <img
            className="h-full object-cover p-1  md:object-contain md:p-0 md:opacity-100 opacity-15 blur-sm md:blur-0"
            src={image}
            alt=""
          />
        </div>
        {/* Content */}
        <section
          className={
            isLeft
              ? "absolute right-0 z-10 flex h-full w-full flex-col justify-center gap-5 px-5 md:max-w-[400px] md:items-end md:px-0 md:text-right lg:max-w-[500px] text-LightSky"
              : "absolute left-0 z-10 flex h-full w-full flex-col justify-center gap-5 px-5 md:max-w-[400px] md:px-0 lg:max-w-[500px] text-LightSky"
          }
        >
          <h3 className="text-2xl font-bold text-Green">{title}</h3>
          <p className="w-full shadow-xl md:relative md:bg-LightNavy md:p-5">
            {description}
          </p>
          <ul className="flex flex-wrap gap-5">
            {stack.map((item, index) => (
              <li key={index} className="text-LightSky shadow-xl">
                {item}
              </li>
            ))}
          </ul>
          <div className="flex gap-5 text-2xl">
            {gitHub && (
              <a
                href={gitHub}
                target="_blank"
                className="fa-brands fa-github iconHover"
              ></a>
            )}
            {demo && (
              <a
                href={demo}
                target="_blank"
                className="fa-solid fa-up-right-from-square iconHover"
              ></a>
            )}
          </div>
        </section>
      </section>
    </>
  );
}
