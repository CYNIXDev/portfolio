// import profile2 from '../assets/profile2.png'
import profile1 from "../assets/profile1.jpg";

export default function Main() {
  return (
    <>

      <section className="relative flex h-screen justify-start items-center">
        {/* Hero */}
        <section className="flex max-h-fit items-center gap-7 md:justify-center">
          {/* Image */}
          <div className="relative mr-12 hidden lg:block">
            <div className="absolute h-full w-full  justify-items-end justify-self-end bg-Green  mix-blend-color transition-all duration-300 hover:opacity-0"></div>
            <img
              src={profile1}
              alt=""
              className="max-h-[400px] justify-items-end justify-self-end "
            />
          </div>
          {/* Content */}
          <article className="ju</article>stify-center flex flex-col">
            <p className="pb-5 text-xl">Hi my name is</p>
            <h1 className="text-4xl   font-extrabold  text-LightSky sm:pb-6 sm:text-6xl">
              Nopparit Salasri
            </h1>
            <h2 className="pb-6 text-3xl font-extrabold sm:text-5xl">
              Frontend Developer
            </h2>
            {/* <p className="text-2xl italic py-8">“ Your design is possible on my frontend. ”</p> */}
            <p className="pb-10 text-xl">
              I enjoy collaborating with designers and backend developers
              <br />
              to deliver seamless frontend solutions.
            </p>
            <a
              href="#about"
              className="max-w-fit rounded-md border-2 border-Green px-5 py-2"
            >
              More about me
            </a>
          </article>
        </section>
      </section>
    </>
  );
}
