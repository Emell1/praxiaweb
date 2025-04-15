
import { LucideIcon } from "lucide-react";

interface ServiceHeaderProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

const ServiceHeader = ({ Icon, title, description }: ServiceHeaderProps) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 mb-10">
      <div className="bg-secondary/20 p-4 rounded-full">
        <Icon className="h-12 w-12 text-secondary-DEFAULT" />
      </div>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
        <p className="text-xl mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ServiceHeader;
