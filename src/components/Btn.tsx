
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceCTAProps {
  buttonText: string,
  href: string,
  target?: string,
}

const Btn = ({ buttonText, href, target="_self" }: ServiceCTAProps) => {
  return (
    <Link to={href} target={target}>
      <Button className="flex items-center gap-2 bg-[#542d87] hover:bg-[#542d87] hover:opacity-80">
        {buttonText}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Link>
  );
};

export default Btn;
