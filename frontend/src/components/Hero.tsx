import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Shield, Zap, Lock, Code } from "lucide-react";
import gsap from "gsap";

export const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });

    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        descriptionRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        buttonsRef.current,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.2"
      )
      .fromTo(
        Array.from(iconsRef.current?.children || []),
        {
          opacity: 0,
          scale: 0.8,
          rotation: -10,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.4"
      );
  }, []);

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 ref={titleRef} className="inline">
            <span className="inline bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-transparent bg-clip-text">
              CloudOps
            </span>{" "}
            Tools Hub
          </h1>{" "}
          <h2 ref={subtitleRef} className="inline">
            for{" "}
            <span className="inline bg-gradient-to-r from-[#10B981] via-[#06B6D4] to-[#3B82F6] text-transparent bg-clip-text">
              DevOps
            </span>{" "}
            and Security
          </h2>
        </main>

        <p
          ref={descriptionRef}
          className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0"
        >
          Una collezione completa di strumenti per DevOps e sicurezza
          informatica. Genera password sicure, accorcia URL, crea immagini con
          AI e molto altro.
        </p>

        <div
          ref={buttonsRef}
          className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row"
        >
          <Button className="w-full md:w-auto">Esplora i Tools</Button>

          <a
            rel="noreferrer noopener"
            href="https://github.com/aintnier/security-tools-hub"
            target="_blank"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            GitHub Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Hero visual elements */}
      <div className="z-10 relative">
        <div ref={iconsRef} className="grid grid-cols-2 gap-6 p-8">
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
            <Shield className="w-12 h-12 text-white" />
          </div>
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl shadow-lg">
            <Lock className="w-12 h-12 text-white" />
          </div>
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl shadow-lg">
            <Code className="w-12 h-12 text-white" />
          </div>
          <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl shadow-lg">
            <Zap className="w-12 h-12 text-white" />
          </div>
        </div>

        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl -z-10"></div>
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
