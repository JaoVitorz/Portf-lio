type Props = { children: React.ReactNode; className?: string };

export function Placeholder({ children, className = "" }: Props) {
  return <span className={`placeholder ${className}`.trim()}>{children}</span>;
}
