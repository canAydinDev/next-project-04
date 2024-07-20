import Image from "next/image";
import pickle from "@/assets/pickle.png";
import SectionTitle from "./section-title";

export default function AboutPage() {
  return (
    <section className="flex bg-white py-15" id="about">
      <div className="flex text-center grid md:grid-cols-2 items-center gap-16">
        <Image
          src={pickle}
          alt="pickle rick"
          objectFit="contain"
          layout="responsive"
          width={200}
          height={150}
        />
        <div>
        <SectionTitle text="code and coffee" />
        <p className="text-slate-600 mt-8 leading-loose">
          I am a versatile professional with expertise in full-stack
          development, data science, and medicine. My journey in technology has
          equipped me with the skills to build robust web applications and
          analyze complex datasets. As a data scientist, I leverage data to
          drive innovative solutions and informed decision-making. In addition
          to my technical background, I am also a dedicated medical doctor,
          committed to providing quality healthcare. This unique combination of
          skills allows me to bridge the gap between technology and medicine,
          enhancing both fields through my interdisciplinary approach.
        </p>
        </div>
      </div>
    </section>
  );
}
