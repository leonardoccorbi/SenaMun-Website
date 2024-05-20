import React from "react";
import Image from "next/image";

const headerHeight = 80;

const data = [
  {
    titulo: "Titulo 1",
    tema: "Tema 1",
    imagem: "/foto1.jpg",
    descricao: "Descrição do primeiro card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  {
    titulo: "Titulo 2",
    tema: "Tema 2",
    imagem: "/foto1.jpg",
    descricao: "Descrição do segundo card.",
  },
  // Adicione mais objetos ao array 'data' conforme necessário
];

export default function ComitesEnglish() {
  return (
    <section>
      <section
        className="flex items-center xl:justify-between xl:px-32 md:px-32 px-12 justify-center text-nowrap"
        style={{ minHeight: `calc(100vh - ${headerHeight}px)` }}
      >
        <div className="text-light-blue-custom font-semibold text-center xl:text-left xl:text-4xl md:text-3xl sm:text-2xl text-xl p-10">
          <div className="flex xl:hidden justify-center">
            <Image
              className="mb-5 md:mb-2"
              src={"/logo-senamun.svg"}
              alt="Logo Senamun"
              width={350}
              height={350}
            />
          </div>
          <h1 className="text-yellow-custom xl:text-7xl md:text-6xl sm:text-5xl text-4xl">
            Comitês SenaMUN 2024
          </h1>
          <p className="">Inglês</p>
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
      <div className="h-fit flex flex-col justify-center bg-blue-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 p-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                className="w-full h-48 object-cover object-center"
                src={item.imagem}
                alt={item.titulo}
                width={300}
                height={300}
              />
              <div className="p-4">
                <h1 className="text-xl font-bold mb-2">{item.titulo}</h1>
                <h2 className="text-gray-600 text-sm mb-2">{item.tema}</h2>
                <p className="text-gray-700">{item.descricao}</p>
                <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Botão
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
