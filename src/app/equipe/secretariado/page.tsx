"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Secretariado() {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    fetchTeam();
  }, []);

  const fetchTeam = async () => {
    try {
      const res = await fetch("/api/team");
      const data = await res.json();
      const filteredData = data.filter((team: any) => team.role === "sec");
      setTeam(filteredData);
    } catch (error) {
      console.error("Erro ao obter equipe:", error);
    }
  };

  return (
    <section className="h-fit bg-gray-100 flex justify-center items-center py-20 px-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {team.map((member: any, index: number) => (
          <article
            key={index}
            className="flex flex-col justify-center items-center"
          >
            <div className="flex justify-center">
              <Image
                src={member.image}
                className="object-cover"
                alt="Foto do Secretário"
                width={250}
                height={300}
              />
            </div>
            <div className="mt-2 text-nowrap">
              <h2 className="text-center text-xl tracking-wider font-semibold text-light-blue-custom">
                {member.nome}
              </h2>
              <p className="text-center text-lg">{member.cargo}</p>
            </div>
          </article>
        ))}
        {/* Adiciona divs vazias para preencher o espaço restante da última linha */}
        {Array(3 - (team.length % 3))
          .fill("")
          .map((_, i) => (
            <div key={`empty-${i}`} className="hidden lg:block"></div>
          ))}
      </div>
    </section>
  );
}
