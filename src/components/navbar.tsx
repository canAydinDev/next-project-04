import { links } from "../../public/assets/data";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-emerald-200">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8 justify-between">
        <h2 className="text-3xl font-bold">
          Web
          <span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex gap-x-3">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <Link
                key={id}
                href={href}
                className="capitalize text-lg tracking-wide hover:text-emerald-600 duration-300"
              >
                {text}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
