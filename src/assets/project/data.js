import project1 from "./project1.png";
import project2 from "./project2.png";
import project3 from "./project3.png";

const projectsData = [
  {
    title: "IP Address Tracker",
    description:
      "เว็บติดตามที่อยู่ IP ช่วยให้คุณสามารถตรวจสอบและติดตามที่อยู่ได้จาก IP และ Domain Name โดยแสดงข้อมูลเชิงลึกเกี่ยวกับที่อยู่ IP เช่น ประเทศ พื้นที่ ผู้ให้บริการอินเทอร์เน็ต และอื่น ๆ",
    image: project2,
    stack: ["React", "Tailwind", "AXIOS", "Leaflet.js", "IP Geolocation API"],
    gitHub: "https://github.com/CYNIXDev/IP-Address-Tracker",
    demo: "https://ip-address-tracker-weld-mu.vercel.app/",
  },
  {
    title: "Off-Site Backup",
    description:
      "ถูกพัฒนาขึ้นเพื่อสำรองข้อมูล Database SQL และ PorsgreSQL โดยจะเขียนเชื่อมกับ Microsoft Graph API เพื่อซิงค์ไฟล์ Backup ไปยัง OneDrive ของผู้ใช้งาน",
    image: project1,
    stack: ["Python", "Microsoft Graph API", "SQL", "PostgreSQL"],
  },
  {
    title: "Porfolio Website",
    description:
      "เว็บสำหรับรวบรวมผลงานและข้อมูลส่วนตัว โดยใช้ React ในการพัฒนา และใช้ Tailwind CSS ในการออกแบบ",
    image: project3,
    stack: ["React", "Tailwind", "Responsive Design"],
  },
  // Add more project objects as needed
];

export default projectsData;
