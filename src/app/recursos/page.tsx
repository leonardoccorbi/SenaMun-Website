import Image from "next/image";

export default function Recursos() {
  const headerHeight = 80;

  const resources = [
    {
      title: "Documentos oficiais",
      description: "Link para pasta do Drive",
      link: "https://drive.google.com/documentosoficiais",
    },
    {
      title: "Guias de Estudo",
      description: "Link para pasta do Drive",
      link: "https://drive.google.com/guiasdeestudo",
    },
    {
      title: "Google Classroom",
      description: "Link para pasta do Drive",
      link: "https://drive.google.com/googleclassroom",
    },
  ];

  const ResourceCard = ({ title, description, link }: any) => (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="border-yellow-custom border-2 p-8 rounded-xl text-center"
    >
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
        {title}
      </h5>
      <p className="font-normal text-yellow-custom">{description}</p>
    </a>
  );

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
            Recursos
          </h1>
          <p className="mt-3 mb-5">Documentos</p>
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
      <div className="bg-blue-custom h-screen flex flex-col justify-center border-y-8 border-yellow-custom">
        <div className="text-center text-yellow-custom px-2">
          <h1 className="font-bold text-4xl">Encontre os recursos desejados</h1>
          <p className="text-white text-lg mt-1">Consulte abaixo</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto px-4 mt-10">
          {resources.map((resource, index) => (
            <ResourceCard key={index} {...resource} />
          ))}
        </div>
      </div>
    </div>
  );
}
