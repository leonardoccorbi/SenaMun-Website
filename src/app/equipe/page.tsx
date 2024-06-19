import Image from "next/image";
import Card from "@/components/CardsSection/Card";
import { RiTeamLine } from "react-icons/ri";

export default function Equipe() {
  return (
    <section className="h-fit">
      <article className="flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 py-10">
        <div>
          <Image
            className="border-4 border-blue-custom rounded"
            src={"/Time/time.jpg"}
            alt="Time Senamun"
            width={800}
            height={400}
          />
        </div>
        <div className="text-blue-custom mt-10 lg:mt-0 lg:ml-10">
          <h1 className="text-4xl text-yellow-custom font-semibold">
            Nós somos o time SenaMUN 2024,
          </h1>
          <p className="text-2xl">no total 27 pessoas!</p>

          <div className="mt-10 text-lg">
            <p className="text-xl">Subdivididos em 6 grupos: </p>
            <ul className="pl-10 list-disc">
              <li>Secretariado</li>
              <li>Diretoria de Logística</li>
              <li>Diretoria de Comunicação</li>
              <li>Diretoria de Crises</li>
              <li>Diretoria Internacional</li>
              <li>Orientadores</li>
            </ul>
          </div>
        </div>
      </article>
      <hr className="border-yellow-custom mx-40" />
      <div className="">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center mx-6 my-12">
          <Card
            title="Secretariado"
            href="/equipe/secretariado"
            icon={<RiTeamLine />}
          />
          <Card
            title="Equipe"
            href="/equipe/secretariado"
            icon={<RiTeamLine />}
          />
          <Card title="Cronograma" href="/equipe/teste" icon={<RiTeamLine />} />
          <Card title="Recursos" href="/equipe/teste" icon={<RiTeamLine />} />
          <Card title="Mapa" href="/equipe/teste" icon={<RiTeamLine />} />
          <Card title="Orientação" href="/equipe/teste" icon={<RiTeamLine />} />
        </div>
      </div>
    </section>
  );
}
