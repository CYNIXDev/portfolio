import React from "react";

export default function NavSocial() {
  return (
    <nav className=" h-2/2 absolute left-0 top-0 z-50 hidden w-screen justify-between md:flex">
      <div className="fixed bottom-0 left-3 flex w-[50px] flex-col justify-between gap-12">
        <ul className="flex flex-col items-center justify-center gap-8 text-2xl">
          <a
            href="https://github.com/CYNIXDev/"
            target="_blank"
            className="fa-brands fa-github iconHover"
          ></a>
          <a
            href="https://www.facebook.com/pai.nopparit"
            target="_blank"
            className="fa-brands fa-facebook iconHover"
          ></a>
          <a
            href="http://line.me/ti/p/~plai.20"
            target="_blank"
            className="fa-brands fa-line iconHover"
          ></a>
        </ul>
        <div className="h-[100px] w-1/2 border-r-[1px] border-DarkGray"></div>
      </div>
      <div className="fixed bottom-0 right-3 flex w-[50px] flex-col justify-between gap-12">
        <a
          href="mailto: nopparit.dev@outlook.com"
          className="navHover relative bottom-44 rotate-90"
        >
          nopparit.dev@outlook.com
        </a>
        <div className="h-[100px] w-1/2 border-r-[1px] border-DarkGray"></div>
      </div>
    </nav>
  );
}
