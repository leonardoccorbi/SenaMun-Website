import Link from "next/link";
import Image from "next/image";
import { FaPlayCircle } from "react-icons/fa";

const headerHeight = 80;

export default function FirstBanner() {
  return (
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
          SenaMUN III
        </h1>
        <p>Conferência Modelo ONU</p>
        <p className="mb-5">Senac Nações Unidas</p>
        <div className="flex items-center gap-4 xl:justify-normal justify-center xl:scale-100 md:scale-100">
          <Link
            href="/saiba-mais"
            className="text-xl font-medium text-center xl:px-12 xl:py-4 md:px-8 md:py-2 sm:px-4 sm:py-2 px-2 py-2 border-4 border-light-blue-custom rounded-2xl hover:text-white hover:bg-light-blue-custom duration-300"
          >
            Saiba Mais
          </Link>
          <Link
            href={"video"}
            className="flex font-normal text-lg items-center gap-1 underline hover:scale-105 duration-300"
          >
            <FaPlayCircle />
            Assista ao vídeo
          </Link>
        </div>
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
  );
}
