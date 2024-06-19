import React from "react";
import Card from "./Card";
import { BiWorld } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import { LiaCalendarMinusSolid } from "react-icons/lia";
import { MdLeaderboard } from "react-icons/md";
import { FaMapMarkedAlt } from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";

export default function CarsSection() {
  return (
    <div className="container mx-auto">
      <hr className="border-yellow-custom py-2" />
      <div className="text-center mt-10 tracking-wider">
        <h1 className="text-yellow-custom font-medium xl:text-3xl lg:text-3xl md:text-3xl sm:text-3xl text-xl">
          Para mais detalhes importantes
        </h1>
        <p className="xl:text-xl lg:text-xl md:text-xl sm:text-xl text-lg text-light-blue-custom">
          Consulte o que deseja saber
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center mx-6 my-12">
        <Card title="Comitês" href="teste" icon={<BiWorld />} />
        <Card title="Equipe" href="equipe" icon={<FaPeopleGroup />} />
        <Card
          title="Cronograma"
          href="teste"
          icon={<LiaCalendarMinusSolid />}
        />
        <Card title="Recursos" href="teste" icon={<MdLeaderboard />} />
        <Card title="Mapa" href="teste" icon={<FaMapMarkedAlt />} />
        <Card
          title="Orientação"
          href="teste"
          icon={<HiOutlineSpeakerphone />}
        />
      </div>
    </div>
  );
}
