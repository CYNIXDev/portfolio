import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import projectsData from "./assets/project/data";
import About from "./component/About";
import Header from "./component/Header";
import Title from "./component/Title";
import Hero from "./component/Hero";
import ProjectCard from "./component/ProjectCard";
import Contact from "./component/Contact";
import CircleBackground from "./component/CircleBackground";
import Footer from "./component/Footer";
import NavSocial from "./component/NavSocial";

function App() {
  //use for check left right project card
  let isLeft = true;

  const templateId = import.meta.env.VITE_TEMPLATE_ID
  const serviceId = import.meta.env.VITE_SERVICE_ID
  const pbKey = import.meta.env.VITE_PUBLIC_KEY

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
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("useEffect ทำงาน; navCheck=", navCheck);
    // handle mouse move cursor
    window.addEventListener("mousemove", (e) =>
      setMouse({ x: e.clientX, y: e.clientY }),
    );

    // // handle windows resize
    // window.addEventListener(
    //   "resize",
    //   () => window.innerWidth > 768 && setNavCheck(false),
    // );

    let prevScrollpos = window.scrollY;
    window.onscroll = function () {
      const currentScrollPos = window.scrollY;
      const navBar = document.getElementById("navbar");
      if (prevScrollpos > currentScrollPos) {
        console.log('check nav: ', navCheck);
        navBar.style.top = "0";
        navBar.style.backgroundColor = "#0a192f";
        if (currentScrollPos === 0) {
          navBar.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
      } else if (!navCheck) {
        console.log('check nav: ', navCheck);
        navBar.style.top = "-150px";
      }
      prevScrollpos = currentScrollPos;
    };

    return () => {
      window.removeEventListener("mousemove", (e) =>
        setMouse({ x: e.clientX, y: e.clientY }),
      );
      // window.removeEventListener("resize", () => {
      //   return window.innerWidth > 768 && setNavCheck(false);
      // });
    };
  }, [navCheck]);

  return (
    <>
      <CircleBackground {...mouse} />

      {/* Navbar */}
      <header
        id="navbar"
        className="fixed top-0 z-50 h-[100px] w-[100%] px-5 text-sm opacity-95 backdrop-blur-sm transition-all duration-500 sm:px-16 lg:px-28"
      >
        <Header navCheck={navCheck} handleNav={handleNav} />
      </header>

      {/* left right Nav Social */}
      <NavSocial />

      {/* Main Content */}
      <main
        className={
          navCheck
            ? "container pointer-events-none relative mx-auto h-fit flex-col items-center px-5 blur-sm md:px-20 xl:px-40"
            : " container relative mx-auto h-fit flex-col items-center px-5 md:px-20 xl:px-40"
        }
        onClick={navCheck ? () => handleNav() : null}
      >
        <Hero />
        {/* About */}
        <Title key={uuidv4()} id="about" text="About Me" />
        <section className="mb-32">
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
          className="flex h-screen w-full flex-col items-center  justify-center pt-20"
        >
          <Contact templateId={templateId} serviceId={serviceId}
            pbKey={pbKey} />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
