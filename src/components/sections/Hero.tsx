import { useEffect, useRef } from "react";
import { Button } from "@/components/layout/button";
import { Badge } from "@/components/layout/badge";
import { Trophy, ChevronRight, Target, ShowerHead, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
  heroField: string;
}

const stats = [
  { value: "4", label: "поля 20×40 м", icon: Target },
  { value: "8", label: "раздевалок с душем", icon: ShowerHead },
  { value: "75%", label: "играют 2+ раз в неделю", icon: TrendingUp },
  { value: "62.8%", label: "готовы платить больше за качество", icon: Trophy },
];

export function Hero({ heroField }: HeroProps) {
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(badgeRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.6 })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8 }, "-=0.3")
      .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.4")
      .fromTo(buttonsRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.3")
      .fromTo(
        statsRef.current?.children || [],
        { opacity: 0, y: 30, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.1 },
        "-=0.2"
      );

    if (imageRef.current) {
      gsap.to(imageRef.current, {
        y: 200,
        ease: "none",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <header id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <img 
        ref={imageRef}
        src={heroField} 
        alt="Современное мини-футбольное поле с освещением" 
        width={1920} 
        height={1088}
        className="absolute inset-0 w-full h-full object-cover" 
      />
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="container relative z-10 text-primary-foreground py-32">
        <div ref={badgeRef}>
          <Badge className="bg-accent/20 text-accent border-accent/40 mb-6 backdrop-blur-sm">
            <Trophy className="w-3 h-3 mr-1" /> Проект «11 метров» · команда ГолДевочки
          </Badge>
        </div>
        <h1 ref={titleRef} className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-6 text-balance leading-[0.95]">
          11 метров<br />
          <span className="bg-gradient-accent bg-clip-text text-transparent">до победы.</span><br />
          Бизнес на поле.
        </h1>
        <p ref={descRef} className="text-xl md:text-2xl max-w-2xl text-primary-foreground/85 mb-10 leading-relaxed">
          Комплекс из 4 современных открытых полей для мини-футбола 5×5 с профессиональным освещением, раздевалками и онлайн-бронированием.
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base h-14 px-8">
            Забронировать поле <ChevronRight className="ml-1 w-4 h-4" />
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 h-14 px-8">
            Узнать о проекте
          </Button>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
          {stats.map((s) => (
            <div key={s.label} className="backdrop-blur-md bg-primary-foreground/10 border border-primary-foreground/20 rounded-2xl p-6 hover:scale-105 transition-transform cursor-pointer">
              <s.icon className="w-6 h-6 text-accent mb-3" />
              <div className="font-display text-3xl md:text-4xl font-black">{s.value}</div>
              <div className="text-sm text-primary-foreground/75 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
