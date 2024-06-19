"use client";

import Image from "next/image";

export default function Campus() {
  const headerHeight = 80;

  return (
    <div>
      <section
        className="flex items-center xl:justify-between xl:px-32 md:px-32 px-12 justify-center text-nowrap"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
        <div className="text-light-blue-custom font-semibold text-center xl:text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl">
          <div className="flex xl:hidden justify-center">
            <Image
              className="mb-5 md:mb-2"
              src={"/logo-senamun.svg"}
              alt="Logo Senamun"
              width={350}
              height={350}
            />
          </div>
          <h1 className="text-yellow-custom xl:text-8xl md:text-7xl sm:text-6xl text-5xl">
            Mapa
          </h1>
          <p className="mt-3 mb-5">Se localize melhor</p>
        </div>
        <div className="hidden custom-xl:block">
          <Image
            src={"/logo-senamun.svg"}
            alt="Logo Senamun"
            width={550}
            height={550}
          />
        </div>
      </section>
      <section className="bg-blue-custom h-40 w-full text-center flex flex-col justify-center">
        <h1 className="text-4xl text-yellow-custom font-semibold">
          Mapa do Campus
        </h1>
        <p className="text-lg text-white">Observe abaixo</p>
      </section>
      <section className="bg-white flex justify-center">
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/Campus/campus.png"
            alt="Mapa Senamun"
            className="mt-10"
            width={1600}
            height={800}
            priority
          />
          <a
            href="/Campus/campus.png"
            download="Mapa_Senamun.png"
            className="mb-10 bg-yellow-custom text-white py-2 px-4 rounded"
          >
            Baixar Imagem
          </a>
        </div>
      </section>
    </div>
  );
}
