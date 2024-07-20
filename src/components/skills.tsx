import SectionTitle from "./section-title";
import { skills } from "../../public/assets/data";
import SkillsCard from "./skills-card";

const text = "tex stack";
export default function Skills() {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text={text} />
      <div className="py-16 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />;
        })}
      </div>
    </section>
  );
}
