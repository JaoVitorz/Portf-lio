type Props = {
  number: string;
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({ number, eyebrow, title, description, id }: Props) {
  return (
    <div className="section-heading">
      <div className="section-meta"><span>{number}</span><span className="meta-rule" /><span>{eyebrow}</span></div>
      <h2 id={id}>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
