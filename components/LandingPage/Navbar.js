import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

export default function Navbar() {
  return (
    <div className="flex justify-between">
        <div className="mt-5 flex gap-2 justify-center items-center text-2xl font-semibold">
            <Image src={logo} height={52} width={52} alt="easybank logo" />
            <p>uPay</p>
        </div>
        <div className=" ">
        <Link href="/home">
        <button className="hidden h-full  lg:block bg-blue-500 rounded-full px-7  text-neutral-white text-xs from-primary-lime-green to-primary-bright-cyan hover:button-brightness focus:outline-none focus:ring ring-green-400">
            Launch App
        </button>
        </Link>
        </div>

    </div>
  );
}