import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Zap, Code } from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const features: FeatureProps[] = [
  {
    title: "Sicurezza Avanzata",
    description:
      "Tutti i nostri strumenti sono progettati con la sicurezza come priorità, utilizzando le migliori pratiche di crittografia e protezione dei dati.",
    icon: <Shield className="w-16 h-16 text-blue-500" />,
  },
  {
    title: "Performance Ottimizzate",
    description:
      "Algoritmi efficienti e architettura cloud-native garantiscono tempi di risposta rapidi per tutti gli strumenti.",
    icon: <Zap className="w-16 h-16 text-green-500" />,
  },
  {
    title: "Open Source",
    description:
      "Il codice è completamente open source, permettendo trasparenza, contributi della community e personalizzazioni.",
    icon: <Code className="w-16 h-16 text-purple-500" />,
  },
];

const featureList: string[] = [
  "Tema Scuro/Chiaro",
  "Responsive Design",
  "API RESTful",
  "Sicurezza First",
  "Performance Ottimizzate",
  "Open Source",
  "Cloud Ready",
  "Workflow n8n",
  "DevOps Tools",
];

export const Features = () => {
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Caratteristiche{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Principali
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card
            key={title}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>

            <CardFooter className="flex justify-center">
              <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                {icon}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
