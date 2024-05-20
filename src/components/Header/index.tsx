"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FiChevronDown } from "react-icons/fi";
import IconHeader from "./icon-header.svg";

interface NavItem {
  id: number;
  text: string;
  href: string;
  submenu?: SubItem[];
}

interface SubItem {
  text: string;
  href: string;
}

function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center gap-4 opacity-95 hover:scale-105 transition-all duration-400">
        <Image
          className="image hover:rotate-6 hover:scale-105 transition-transform duration-300"
          src={IconHeader}
          alt="Icone do Header"
          width={45}
        />
        <p className="text-white font-medium text-xl tracking-widest text-center position">
          S E N A M U N
        </p>
      </div>
    </Link>
  );
}

const Header: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState<number | null>(null);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleSubmenu = (itemId: number) => {
    setShowSubmenu(showSubmenu === itemId ? null : itemId);
  };

  const navItems: NavItem[] = [
    {
      id: 1,
      text: "Sobre Nós",
      href: "sobre-nos",
      submenu: [
        { text: "Quem somos", href: "/quem-somos" },
        { text: "Secretariado", href: "/secretariado" },
      ],
    },
    {
      id: 2,
      text: "SenaMUN 2024",
      href: "simulação",
      submenu: [
        { text: "Comitês", href: "/comites" },
        { text: "Equipe", href: "/secretariado" },
        { text: "Cronograma", href: "/cronograma" },
        { text: "Recursos", href: "/recursos" },
        { text: "Mapa", href: "/mapa" },
        { text: "Notícias", href: "/noticias" },
      ],
    },
    { id: 3, text: "Fale conosco", href: "/fale-conosco" },
  ];

  const handleMouseEnter = (itemId: number) => {
    setHoveredItem(itemId);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  return (
    <div className="bg-blue-custom flex justify-between items-center h-20 mx-auto xl:px-32 px-4 text-white">
      <div className="flex items-center xl:w-auto w-full justify-center">
        <Logo />
      </div>

      <div className="hidden xl:flex list-none">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative px-8 hover:text-yellow-custom transition-colors duration-300 tracking-widest"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            {item.submenu ? (
              <div
                onMouseEnter={() => toggleSubmenu(item.id)}
                onMouseLeave={() => setShowSubmenu(null)}
              >
                {item.text}
                {showSubmenu === item.id && (
                  <ul className="absolute left-0 top-full bg-white shadow-md py-2 rounded-lg transition-transform duration-300">
                    {item.submenu?.map((subitem, index) => (
                      <li key={index} className="py-3 px-8">
                        <Link href={subitem.href} className="text-nowrap">
                          {subitem.text}
                        </Link>
                        <hr className="border-yellow-custom" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link href={item.href}>{item.text}</Link>
            )}
          </li>
        ))}
      </div>

      <div onClick={handleNav} className="block xl:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <ul
        className={
          nav
            ? "fixed xl:hidden left-0 top-0 w-[65%] h-full bg-sky-900 ease-in-out duration-500"
            : "ease-in-out w-[65%] duration-500 fixed top-0 bottom-0 left-[-100%]"
        }
      >
        <div className="w-full text-3xl font-bold flex justify-center my-4">
          <Logo />
        </div>

        <hr className="mx-3" />

        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 border-b rounded-xl text-white hover:text-yellow-custom items-center justify-between"
          >
            {item.submenu ? (
              <div
                className="items-center flex justify-between"
                onClick={() => toggleSubmenu(item.id)}
              >
                <span>{item.text}</span>
                <FiChevronDown className="text-xl" />
              </div>
            ) : (
              <Link href={item.href}>{item.text}</Link>
            )}
            {showSubmenu === item.id && (
              <div className="">
                <ul className="bg-sky-800 white mt-2 rounded-md">
                  {item.submenu?.map((subitem, index) => (
                    <li key={index} className="p-3">
                      <Link
                        href={subitem.href}
                        className="text-white hover:text-yellow-custom"
                      >
                        {subitem.text}
                        <hr className="border-white" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
