import React from "react";
import {
  Key,
  Link,
  Image,
  Shield,
  Zap,
  Code,
  Database,
  Search,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ToolProps {
  icon: React.ReactElement;
  name: string;
  description: string;
  status: "available" | "coming-soon" | "planned";
  category: string;
}

const tools: ToolProps[] = [
  {
    icon: <Key size={24} />,
    name: "Password Generator",
    description:
      "Genera password sicure e verifica che non siano presenti in data leak",
    status: "available",
    category: "Security",
  },
  {
    icon: <Link size={24} />,
    name: "URL Shortener",
    description: "Accorcia URL lunghi e genera link personalizzati",
    status: "available",
    category: "Productivity",
  },
  {
    icon: <Image size={24} />,
    name: "AI Image Generator",
    description: "Genera immagini da prompt usando intelligenza artificiale",
    status: "coming-soon",
    category: "AI Tools",
  },
  {
    icon: <Shield size={24} />,
    name: "Security Scanner",
    description: "Scansiona URL e file per minacce e vulnerabilità",
    status: "planned",
    category: "Security",
  },
  {
    icon: <Code size={24} />,
    name: "Code Formatter",
    description: "Formatta e valida codice in diversi linguaggi",
    status: "planned",
    category: "Development",
  },
  {
    icon: <Database size={24} />,
    name: "JSON Formatter",
    description: "Formatta, valida e minifica file JSON",
    status: "coming-soon",
    category: "Development",
  },
  {
    icon: <Search size={24} />,
    name: "Hash Generator",
    description: "Genera hash MD5, SHA-1, SHA-256 e altri algoritmi",
    status: "planned",
    category: "Security",
  },
  {
    icon: <Zap size={24} />,
    name: "QR Code Generator",
    description: "Genera codici QR personalizzabili per testi e URL",
    status: "coming-soon",
    category: "Productivity",
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "available":
      return "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20";
    case "coming-soon":
      return "bg-orange-500/10 text-orange-700 dark:text-orange-400 border-orange-500/20";
    case "planned":
      return "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20";
    default:
      return "bg-gray-500/10 text-gray-700 dark:text-gray-400 border-gray-500/20";
  }
};

const getStatusText = (status: string) => {
  switch (status) {
    case "available":
      return "Disponibile";
    case "coming-soon":
      return "Prossimamente";
    case "planned":
      return "In programma";
    default:
      return "Non definito";
  }
};

export const Tools = () => {
  return (
    <section id="tools" className="container pt-24 sm:py-32">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-4">
        Strumenti{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Disponibili
        </span>
      </h2>

      <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
        Una collezione crescente di strumenti per DevOps, sicurezza e
        produttività
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {tools.map(
          ({ icon, name, description, status, category }: ToolProps) => (
            <Card
              key={name}
              className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{icon}</div>
                  </div>
                  <Badge className={getStatusColor(status)}>
                    {getStatusText(status)}
                  </Badge>
                </div>
                <CardTitle className="text-lg">{name}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {category}
                </Badge>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {description}
                </CardDescription>
              </CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
