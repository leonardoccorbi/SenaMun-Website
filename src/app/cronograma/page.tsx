import Image from "next/image";

export default function Cronogramas() {
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
            Cronograma
          </h1>
          <p className="mt-3 mb-5">Veja o planejamento</p>
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
      <main className="bg-blue-custom flex justify-center md:p-0 py-5 ">
        <img
          src="/Cronogramas/cronograma-senamun24.png"
          alt="Cronograma"
          className="md:block hidden"
        />
        <img
          src="/Cronogramas/cronograma-senamun24-mobile.png"
          alt="Cronograma"
          className="md:hidden block"
        />
      </main>
    </div>
  );
}
