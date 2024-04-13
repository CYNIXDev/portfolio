import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import projectsData from "./assets/project/data";

//Integate all component in one file on index.js and config vite component path
import {
  About,
  Header,
  Title,
  Hero,
  ProjectCard,
  Contact,
  CircleBackground,
  Footer,
  NavSocial,
} from "component";

function App() {
  //use for check left right project card
  let isLeft = true;

  const templateId = import.meta.env.VITE_TEMPLATE_ID;
  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const pbKey = import.meta.env.VITE_PUBLIC_KEY;

  const [navCheck, setNavCheck] = useState(false);

  function handleNav() {
    setNavCheck(!navCheck);
    if (!navCheck) {
      // Block scrolling
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling
      document.body.style.overflow = "auto";
    }
  }
  useEffect(() => {
    // handle windows resize
    window.addEventListener(
      "resize",
      () => window.innerWidth > 768 && setNavCheck(false),
    );
    return () => {
      window.removeEventListener("resize", () => {
        return window.innerWidth > 768 && setNavCheck(false);
      });
    };
  }, [navCheck]);

  return (
    <>
      <CircleBackground />

      {/* Header */}
      <Header navCheck={navCheck} handleNav={handleNav} />

      {/* left right Nav Social */}
      <NavSocial />

      {/* Main Content */}
      <main
        className={
          //if navCheck is true then add pointer-events-none and blur-sm class on main tag
          navCheck
            ? "container pointer-events-none relative mx-auto h-fit flex-col items-center px-5 blur-sm md:px-20 xl:px-40"
            : "container relative mx-auto h-fit flex-col items-center px-5 md:px-20 xl:px-40"
        }
        onClick={navCheck && handleNav}
      >
        <Hero />
        {/* About */}
        <section className="mb-32">
          <Title key={uuidv4()} id="about" text="About Me" />
          <About />
        </section>

        {/* Project */}
        <article className="z-50 grid grid-cols-1 justify-items-center">
          <section className="flex w-full flex-col-reverse items-center justify-center gap-2 md:w-[600px] lg:w-[790px] xl:w-[1000px]">
            <section className="order-1 w-full">
              <Title
                key={uuidv4()}
                id="project"
                text="Some Things I’ve Built"
              />
            </section>
            {projectsData.map((project) => {
              isLeft = !isLeft;
              return (
                <ProjectCard key={uuidv4()} isLeft={isLeft} {...project} />
              );
            })}
          </section>
        </article>

        {/* Contact */}
        <section
          id="contact-me"
          className="flex h-fit min-h-screen w-full flex-col items-center  justify-center pt-20"
        >
          <Contact
            templateId={templateId}
            serviceId={serviceId}
            pbKey={pbKey}
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
