import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Lightbulb, Heart } from "lucide-react";

const stats = [
  {
    value: "10+",
    label: "Tools Disponibili",
  },
  {
    value: "100%",
    label: "Open Source",
  },
  {
    value: "24/7",
    label: "Disponibilità",
  },
  {
    value: "∞",
    label: "Possibilità",
  },
];

const values = [
  {
    icon: <Target className="w-8 h-8 text-blue-500" />,
    title: "Mission",
    description:
      "Fornire strumenti DevOps e di sicurezza accessibili, sicuri e open source per sviluppatori e professionisti IT.",
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-yellow-500" />,
    title: "Innovazione",
    description:
      "Sviluppiamo soluzioni innovative che semplificano workflow complessi e migliorano la produttività.",
  },
  {
    icon: <Users className="w-8 h-8 text-green-500" />,
    title: "Community",
    description:
      "Crediamo nella forza della community open source e nell'importanza della collaborazione.",
  },
  {
    icon: <Heart className="w-8 h-8 text-red-500" />,
    title: "Passione",
    description:
      "Ogni tool è sviluppato con passione e attenzione ai dettagli per offrire la migliore esperienza utente.",
  },
];

export const About = () => {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Chi{" "}
                </span>
                Siamo
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                CloudOps Tools Hub nasce dalla necessità di avere strumenti
                DevOps e di sicurezza centralizzati, sicuri e facili da usare.
                Il nostro obiettivo è semplificare le operazioni quotidiane di
                sviluppatori, DevOps engineer e professionisti della sicurezza.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl md:text-4xl font-bold text-primary">
                    {value}
                  </div>
                  <p className="text-sm text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
        {values.map(({ icon, title, description }) => (
          <Card
            key={title}
            className="text-center hover:shadow-lg transition-shadow duration-300"
          >
            <CardHeader>
              <div className="flex justify-center mb-4">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full">
                  {icon}
                </div>
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
