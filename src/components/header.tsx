import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

const Header = () => {
  return (
    <div className="relative flex flex-row items-center h-screen ">
      <Image
        src="/images/hero.png"
        alt="banner"
        objectFit="cover"
        className="absolute top-0 z-0"
        layout="fill"
      />
      <div className="absolute top-0 z-50 w-full">
        <div className="flex justify-between w-full px-20 py-5">
          <span className="text-xl font-bold md:text-8xl font-caveat text-gray">Logo</span>
          <div className="flex gap-2">
            <Link href="/">
              <a className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-blue text-blue">
                <FaFacebookF />
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-red text-red">
                <FaInstagram />
              </a>
            </Link>
            <Link href="/">
              <a className="flex items-center justify-center w-10 h-10 p-2 border-2 rounded-full border-yellow text-yellow">
                <FaYoutube />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="z-50">
        <h1 className="font-bold md:pl-20 text-7xl text-gray">
          El secreto <br /> de tu cocina
        </h1>
        <div className="-mt-6 md:-mt-6 md:-m-24">
          <Image src="/images/BRUSH.png" alt="brush" width="300" height="100" />
        </div>
      </div>
    </div>
  );
};

export default Header;
