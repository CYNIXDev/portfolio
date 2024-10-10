import profile2 from "../assets/profile2.jpg";

export default function About() {
  return (
    <>
      <article className=" w-full leading-loose">
        {/* Content */}
        <section className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          <section>
            <p>
              Hello, my name is Nopparit Salasri, nickname Pai, and I am 27 years old.
              <br />
              My journey to becoming a Frontend Developer started when I worked in the positions of Technical Support, Graphic Design, and Web Admin. These roles allowed me to collaborate with various departments, such as:
            </p>

            <ul className="list-inside list-disc pl-5 ps-3 pt-2">
              <li>
                Frontend: Providing technical support to customers facing issues that affected their ability to use the company's software.
              </li>
              <li>
                Backend: Managing backend systems such as On-Premise & On-Cloud Servers, Database Servers, and Firewalls.
                Database Server, Firewall
              </li>
              <li>
                Collaborating with the Design Team to create and design promotional media such as infographics and videos for customer outreach.
              </li>
              <li>
                Working with the Marketing Team to maintain and update information about the company's products and services on the website.
              </li>
            </ul>
            <br />
            <p>
              My involvement in website management introduced me to Frontend Development, a role that requires both technical skills and creativity to design visually appealing websites. With my natural curiosity and love for learning new things, I began self-studying through various online resources to become the Frontend Developer I aspire to be
            </p>

            <br />
            <p className="font-bold text-Green">
              STACK:{" "}
              <span className="text-LightSky">
                React.js, Tailwind CSS, Node.js, Express.js, EJS, jQuery,
                PostgreSQL, JavaScript, Python, CSS, HTML,
              </span>
            </p>
            <p className="font-bold text-Green">
              TOOL:{" "}
              <span className="text-LightSky">
                VS Code, git/github, Figma, illustrator, Photoshop
              </span>
            </p>
            <p className="font-bold text-Green opacity-50">
              INCOMING:{" "}
              <span className="text-LightSky">TypeScript, Next.js, Docker</span>
            </p>
          </section>
          <div className="relative w-fit lg:self-start ">
            <div className="absolute h-full w-full  justify-items-end justify-self-end bg-Green  mix-blend-color transition-all duration-300 hover:opacity-0"></div>
            <img src={profile2} alt="" className="max-w-[250px]" />
          </div>
        </section>
      </article>
    </>
  );
}
