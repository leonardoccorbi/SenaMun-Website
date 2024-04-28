import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import React from "react";

export default function InformationsPart() {
  return (
    <section
      className="xl:h-screen h-screen xl:px-20 lg:px-16 md:px-12 sm:px-12 px-4 flex flex-col justify-center py-5"
      id="video"
    >
      <div className="flex xl:justify-between justify-center">
        <section className="flex flex-col justify-between gap-10">
          <div className="xl:text-4xl lg:text-4xl md:text-3xl text-2xl">
            <h1 className="text-yellow-custom font-semibold xl:text-left text-center">
              Tema da Conferência:
            </h1>
            <div className="text-light-blue-custom flex-col">
              <h2 className=" font-medium xl:text-left lg:text-left text-center">
                “O mundo é o que se vê de onde se está”
              </h2>
              <p className="text-end text-xl font-light xl:pr-4 lg:pr-4 md:pr-10">
                -Milton Santos
              </p>
            </div>
          </div>
          <div className="flex justify-center my-4 xl:my-0">
            <video
              width="600"
              height="300"
              controls
              className="xl:hidden block border-4 rounded-xl border-yellow-custom"
            >
              <source src="/teste.mp4" type="video/mp4" />
              Seu navegador não suporta o Video Player
            </video>
          </div>
          <div>
            <ul className="flex flex-col gap-6 xl:text-xl lg:text-xl md:text-xl sm:text-md text-sm">
              <li className="flex gap-3 items-center">
                <FaRegCalendarAlt className="text-3xl text-yellow-custom items-center" />{" "}
                31 de outubro à 01 de novembro
              </li>
              <li className="flex gap-3 items-center">
                <FaRegClock className="text-4xl text-yellow-custom items-center" />{" "}
                Das 00:00 até 00:00
              </li>
              <li className="flex gap-3 items-center">
                <FiMapPin className="text-4xl text-yellow-custom items-center mt-3" />{" "}
                31 Centro Universitário Senac - Santo Amaro <br />
                Av. Eng. Eusébio Stevaux 823, São Paulo, SP, 04696-000
              </li>
            </ul>
          </div>
        </section>
        <section>
          <video
            width="800"
            height="240"
            controls
            className="xl:block hidden border-4 rounded-xl border-yellow-custom ml-2"
          >
            <source src="/teste.mp4" type="video/mp4" />
            Seu navegador não suporta o Video Player
          </video>
        </section>
      </div>
    </section>
  );
}
