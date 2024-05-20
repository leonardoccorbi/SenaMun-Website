import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="h-20 bg-blue-custom items-center flex justify-center bottom-0">
      <div className="flex justify-center items-center flex-col opacity-65 ">
        <p className="text-white">SenaMUN © Todos direitos reservados.</p>
        <div className="flex text-white gap-3 text-xl">
          <Link href={"https://www.instagram.com/senamun_/"}>
            <FaInstagram />
          </Link>
          <Link href={"mailto:senacmun@gmail.com"}>
            <IoIosMail />
          </Link>
          <Link href={"https://www.tiktok.com/@senacmun"}>
            <FaTiktok />
          </Link>
        </div>
      </div>
    </div>
  );
}
