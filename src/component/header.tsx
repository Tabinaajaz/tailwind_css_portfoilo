import Image from "next/image";
import Humburger from "../component/humburger";
import logo from"@/public/logo.gif";

export default function Header() {
  if (process.env.NODE_ENV === 'development') {
    console.log("Header function called");
  }

  return (
    <header className="flex p-4 m-0 bg-slate-400 w-full h-full md:w-full md:h-full justify-between place-items-center">
      <Image
        className="mx-6 md:flex md:items-start font-medium rounded-full"
        src={logo} // Corrected path
        alt="logo"
        width={100} // Specify width for Next.js image optimization
        height={100} // Specify height for Next.js image optimization
      />
      <Humburger/>
    </header>
  );
}
