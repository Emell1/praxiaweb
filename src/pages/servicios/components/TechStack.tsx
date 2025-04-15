
import { Card, CardContent } from "@/components/ui/card";

interface TechStackProps {
  stacks: Array<{
    name: string;
    tech: string[];
  }>;
}

const TechStack = ({ stacks }: TechStackProps) => {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      {stacks.map((stack) => (
        <Card key={stack.name} className="bg-accent/30">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">{stack.name}</h3>
            <ul className="space-y-1">
              {stack.tech.map((tech) => (
                <li key={tech} className="text-sm text-gray-600">{tech}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default TechStack;
