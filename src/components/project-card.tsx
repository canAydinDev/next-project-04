import Image from "next/image";
import Link from "next/link";
import { FaGithubSquare } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";

interface ProjectsCardProps {
  id: string;
  img: string;
  url: string;
  github: string;
  title: string;
  text: string;
}

export default function ProjectsCard(props: ProjectsCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
      <Image
        src={props.img}
        alt={props.title}
        width={100}
        height={50}
        objectFit="contain"
        className="rounded-t-lg"
      />
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{props.title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{props.text}</p>
        <div className="mt-4 flex gap-x-4">
          <Link href={props.url}>
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300 " />
          </Link>
          <Link href={props.url}>
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300 " />
          </Link>
        </div>
      </div>
    </article>
  );
}
