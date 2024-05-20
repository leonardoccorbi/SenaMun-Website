import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center h-screen text-center">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-xl font-semibold">Página em desenvolvimento.</h1>
        <p>Por favor, volte a página principal</p>
        <Link
          href="/"
          className="py-1 bg-yellow-custom light-blue-custom w-20 rounded-xl text-white mt-1"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}
