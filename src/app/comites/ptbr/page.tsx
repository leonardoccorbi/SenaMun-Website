"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const headerHeight = 80;

interface Committee {
  _id: string;
  language: string;
  image?: string;
  title: string;
  subtitle: string;
  format: string;
  content: string;
  classroom: string;
}

export default function ComitesPortugueses() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Committee | null>(null);
  const [committees, setCommittees] = useState<Committee[]>([]);

  const fetchCommittees = async () => {
    try {
      const res = await fetch("/api/committees");
      const data: Committee[] = await res.json();
      const filteredData = data.filter(
        (committee) => committee.language === "ptbr"
      );
      setCommittees(filteredData);
    } catch (error) {
      console.error("Erro ao obter comitês:", error);
    }
  };

  useEffect(() => {
    fetchCommittees();
  }, []);

  const openModal = (item: Committee) => {
    setModalData(item);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
          <h1 className="text-yellow-custom xl:text-8xl md:text-7xl sm:text-6xl text-5xl text-center">
            Comitês -
          </h1>
          <p className="text-center">Em português</p>
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
      <div className="flex flex-col justify-center bg-gray-100 min-h-fit">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 p-4 md:p-6 lg:p-10 justify-center">
          {committees.map((committee) => (
            <div
              key={committee._id}
              className="bg-white rounded-lg shadow-xl h-auto"
            >
              <div className="justify-center flex h-44 w-full overflow-hidden">
                {committee.image && (
                  <div className="relative h-full w-full">
                    <Image
                      src={`/Comites/${committee.image}`}
                      alt="Imagem do Comite"
                      layout="responsive"
                      width={1000} // largura da imagem original
                      height={500} // altura da imagem original
                      className="w-full h-full"
                    />
                  </div>
                )}
              </div>
              <hr />
              <div className="px-4 py-3 flex flex-col lg:h-[230px] h-auto">
                <h2 className="font-bold text-xl">{committee.title}</h2>
                <p className="text-lg">{committee.subtitle}</p>
                <p className="text-lg">{committee.format}</p>
                <div className="mt-auto">
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={() => openModal(committee)}
                  >
                    Ver Mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isOpen && modalData && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 transition-opacity"
              aria-hidden="true"
            >
              <div className="inset-0 bg-gray-500 opacity-75"></div>
            </div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
            <div
              className={`${
                isOpen
                  ? "opacity-100 transition-opacity duration-200"
                  : "opacity-0 transition-opacity duration-300"
              } inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full`}
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-headline"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3
                      className="text-lg leading-6 font-medium text-gray-900"
                      id="modal-headline"
                    >
                      {modalData.title}
                    </h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {modalData.content}
                      </p>
                      <button
                        onClick={() => {
                          window.open(modalData.classroom, "_blank");
                        }}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                      >
                        Link para o Classroom
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={closeModal}
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
