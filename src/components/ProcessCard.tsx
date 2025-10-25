import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ProcessCardProps {
  title: string;
  subtitle: string;
  description: string;
  to: string;
  className?: string;
}

export default function ProcessCard({ title, subtitle, description, to, className }: ProcessCardProps) {
  return (
    <div className={cn("rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition", className)}>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
      <p className="mt-4 text-base leading-relaxed">{description}</p>
      <Link to={to} className="inline-block mt-5 text-primary font-semibold hover:underline">
        Ver cómo funciona →
      </Link>
    </div>
  );
}
