import Image from "next/image";

interface Secretarios {
  nome: string;
  cargo: string;
  imagem: string;
}

function SecretariadoCard({ nome, cargo, imagem }: Secretarios) {
  return (
    <div className="flex flex-col items-center tracking-wider text-center">
      <Image src={imagem} alt={nome} width={250} height={200} />
      <h1 className="text-xl font-semibold mt-2 text-light-blue-custom ">
        {nome}
      </h1>
      <p className="text-md mt-1 font-medium">{cargo}</p>
    </div>
  );
}

export default function SecretariadoPage() {
  const secretariado: Secretarios[] = [
    {
      nome: "Gabriella Ribeiro Soares",
      cargo: "Secretária Geral",
      imagem: "/Secretariado/base-secretariado.jpg",
    },
    {
      nome: "Gabriela dos Santos Vasconcelos",
      cargo: "Vice-secretária Geral",
      imagem: "/Secretariado/base-secretariado.jpg",
    },
    {
      nome: "Bruno Tachian Zacharauskas",
      cargo: "Internacional Secretary",
      imagem: "/Secretariado/base-secretariado.jpg",
    },
    {
      nome: "Giovanna Galvão de Almeida Tomanini",
      cargo: "Secretária de Mídia",
      imagem: "/Secretariado/base-secretariado.jpg",
    },
    {
      nome: "Lucas Gabriel Mielitz Apolonio",
      cargo: "Secretário de Crise",
      imagem: "/Secretariado/base-secretariado.jpg",
    },
    {
      nome: "Melissa Mayra Soto Mercado",
      cargo: "Secretária de Logística",
      imagem: "/Secretariado/base-secretariado.jpg",
    },
  ];

  return (
    <>
      <h1 className="custom-xl:text-5xl px-4 text-3xl text-center mt-12 underline tracking-wider font-medium text-light-blue-custom">
        Grupo do Secretariado
      </h1>
      <div className="flex flex-wrap justify-center py-4">
        {secretariado.map((membro, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 py-10 px-6"
          >
            <SecretariadoCard {...membro} />
          </div>
        ))}
      </div>
    </>
  );
}
