
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  title: string;
  description: string;
  buttonText: string;
}

const ServiceCTA = ({ title, description, buttonText }: ServiceCTAProps) => {
  return (
    <div className="bg-secondary/10 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-6">{description}</p>
      <Link to="/contacto">
        <Button className="flex items-center gap-2">
          {buttonText}
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default ServiceCTA;
