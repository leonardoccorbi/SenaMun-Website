"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import IconHeader from "./icon-header.svg";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  function Logo() {
    return (
      <Link
        href={"/"}
        className="flex items-center gap-4 opacity-95 hover:scale-105 transition-all duration-400"
      >
        <Image
          className="image hover:rotate-6 hover:scale-105 transition-transform duration-300"
          src={IconHeader}
          alt="Icone do Header"
          width={45}
        />
        <p className="text-white font-medium text-xl tracking-widest text-center position">
          S E N A M U N
        </p>
      </Link>
    );
  }

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Sobre Nós", href: "sobre-nos" },
    { id: 2, text: "SenaMUN 2024", href: "simulação" },
    { id: 3, text: "Fale conosco", href: "fale-conosco" },
  ];

  return (
    <div className="bg-blue-custom flex justify-between items-center h-20 mx-auto xl:px-32 px-4 text-white">
      {/* Logo */}
      <div className="flex items-center xl:w-auto w-full justify-center">
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden xl:flex">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-8 hover:text-yellow-custom transition-colors duration-300 tracking-widest hover:cursor-pointer"
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block xl:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? "fixed xl:hidden left-0 top-0 w-[65%] h-full bg-sky-900 ease-in-out duration-500"
            : "ease-in-out w-[65%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        {/* Mobile Logo */}
        <div className="w-full text-3xl font-bold flex justify-center my-4">
          <Logo />
        </div>

        <hr className="mx-3" />

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl text-white hover:text-yellow-custom"
          >
            <Link href={item.href}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
