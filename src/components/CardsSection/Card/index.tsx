import Link from "next/link";
import { ReactNode } from "react";

interface CardProps {
  title: string;
  href: string;
  icon: ReactNode;
}

export default function Card({ title, href, icon }: CardProps) {
  return (
    <Link href={href}>
      <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-yellow-custom">
        <div className="p-6 flex items-center gap-2 text-light-blue-custom">
          <div className="text-5xl">{icon}</div>
          <div className="">
            <h2 className="font-semibold text-lg text-yellow-custom">
              {title}
            </h2>
            <p className="text-black">Descubra os temas</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
