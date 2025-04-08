
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ContactDialogProps {
  buttonText?: string;
}

export const ContactDialog = ({ buttonText = "Solicita una consulta" }: ContactDialogProps) => {
  return (
    <Link to="/contacto">
      <Button
        variant="outline"
        size="lg"
        className="rounded-full"
      >
        {buttonText}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </Link>
  );
};
