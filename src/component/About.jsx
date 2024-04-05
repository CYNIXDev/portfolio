import profile2 from "../assets/profile2.jpg";

export default function About() {
  return (
    <>
      <article className=" w-full leading-loose">
        {/* Content */}
        <section className="flex flex-col items-center justify-center gap-5 lg:flex-row">
          <section>
            <p>
              สวัสดีครับ ผมชื่อนายนพฤทธิ์ สละศรี ชื่อเล่น ปาย อายุ 27 ปีครับ
              <br />
              จุดเริ่มต้นในการเป็น Frontend Developer
              ของผมเริ่มต้นจากการที่ได้ทำงานในตำแหน่ง Technical Support
              ควบคู่กับตำแหน่ง Graphic Design และ Web Admin.
              ทำให้มีการทำงานร่วมกับหลายๆส่วน ไม่ว่าจะเป็น
            </p>

            <ul className="list-inside list-disc pl-5 ps-3 pt-2">
              <li>
                Fontend ดูแล Support ลูกค้าที่ติดปัญหาทางด้าน Technical ต่างๆ
                ที่ส่งผลกระทบให้ไม่สามารถใช้งาน Software ของบริษัทได้
              </li>
              <li>
                Backend ดูแลระบบหลังบ้านอาทิเช่น Server On-Premise&On-Cloud,
                Database Server, Firewall
              </li>
              <li>
                ทำงานร่วมกับทีม Designer เพื่อออกแบบและจัดทำสื่อ Info graphic,
                Vdo ประชาสัมพันธ์ลูกค้า
              </li>
              <li>
                ทำงานร่วมกับทีม Marketing ดูแลและอัพเดทข้อมูลบริษัท
                ในส่วนของสินค้าและบริการบน Web Site สำเร็จรูปของบริษัท
              </li>
            </ul>
            <br />
            <p>
              และงานด้านสุดท้ายนี่แหละครับที่ทำให้ผมรู้จักกับ Frontend Developer
              ซึ่งต้องใช้ทักษะทั้งด้านเทคนิคคอลและความคิดสร้างสรรค์
              เพื่อเขียนเว็บออกมาให้สวยงาม
              จากลักษณะนิสัยที่ชอบเรียนรู้สิ่งใหม่ๆอยู่เสมอ
              ผมจึงเริ่มศึกษาและเรียนรู้ด้วยตัวเองจากช่องทางออนไลน์ต่างๆ
              เพื่อที่จะได้เป็น Frontend Developer ตามที่หวังไว้ครับ
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
