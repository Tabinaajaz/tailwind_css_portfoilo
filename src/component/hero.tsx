import Image from "next/image";
import mypic from "../public/download.jpeg";

export default function Hero() {
  return (
    <div className="bg-slate-200 text-center grid place-content-center h-full">
      <section>
        <div className="column">
          <h1 className="font-bold text-4xl shadow-inner md:text-5xl lg:text-7xl">
            I am TABINDA ATIF
          </h1>
          <p className="font-serif shadow-inner text-2xl md:text-3xl lg:text-4xl">
            I am a student of Frontend Development at GIAIC
          </p>
        </div>
        <div className="grid place-content-center">
          <Image
            src={mypic}
            alt="Tabinda Atif's image"
            className="w-24 h-24 md:w-64 md:h-64 bg-rose-200 rounded-full"
          />
        </div>
      </section>

      <section className="mt-10">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          ABOUT ME
        </h1>
        <p className="text-2xl text-center md:text-3xl lg:text-4xl font-serif mt-4">
          My skills include MS Office, and I am well-versed in HTML, CSS,
          JavaScript, Tailwind CSS, TypeScript, and Next.js. I create dynamic,
          visually engaging, and user-friendly web interfaces. I am dedicated to
          continuous learning and building meaningful digital experiences that
          blend aesthetics with functionality.
        </p>
      </section>
    </div>
  );
}
