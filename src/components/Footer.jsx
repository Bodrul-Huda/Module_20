"use client";

import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Link from "next/link";
import { useEffect, useState } from "react";

const Footer = () => {
  const [Year, setYear] = useState();
  useEffect(() => {
    const getYear = () => setYear(new Date().getFullYear());
    getYear();
  }, []);

  return (
    <footer className="bg-teal-950">
      <div className="container mx-auto flex justify-center py-12 text-slate-300">
        <div className="py-5">
          <div className="flex gap-6 justify-center ">
            <Link href="http://facebook.com">
              <p className=" text-2xl m-2 hover:text-slate-100">
                <BsFacebook />
              </p>
            </Link>
            <Link href="http://instagram.com">
              <p className=" text-2xl m-2 hover:text-slate-100">
                <BsInstagram />
              </p>
            </Link>
            <Link href="http://youtube.com">
              <p className=" text-2xl m-2 hover:text-slate-100">
                <BsYoutube />
              </p>
            </Link>
          </div>
          <p className="py-5 text-slate-300 text-center">
            Copyright © {Year} all rights apply
          </p>
          <p className="py-5 text-center"> Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
