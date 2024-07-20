import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import image from "@/assets/image-2-no-bg.png";

export default function Hero() {
  return (
    <div className="bg-emerald-200 py-24">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Can</h1>
          <p className="text-slate-700 mt-4 text-2xl tracking-wide capitalize">
            Full Stack Developer || Data Scientist
          </p>
          <p className="mt-2 text-base text-slate-700 capitalize tracking-wide">
            Solving complex problems with tech innovation.
          </p>
          <div className="flex gap-x-4 mt-4">
            <Link href="#" passHref>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </Link>
            <Link href="#" passHref>
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </Link>
            <Link href="#" passHref>
              <FaTwitterSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </Link>
          </div>
        </article>

        <article className="hidden md:block">
          <Image
            src={image}
            alt="rick-n-roll"
            layout="responsive"
            width={200}
            height={150}
            objectFit="contain"
          />
        </article>
      </div>
    </div>
  );
}
