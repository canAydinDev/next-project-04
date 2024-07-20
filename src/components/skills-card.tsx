interface SkillCardProps{
  id: string; 
  title: string; 
  icon: React.ReactNode; 
  text: string; 
  
}

export default function SkillsCard(props: SkillCardProps) {
  const {icon, title, text} = props;
  return <article>
    <span>
      {icon}
    </span>
    <h4 className="mt-6 font-bold">
      {title}
    </h4>
    <p className="mt-2 text-slate-500">
      {text}
    </p>
  </article>
}