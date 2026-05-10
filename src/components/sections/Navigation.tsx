import { useEffect, useRef } from "react";
import { Button } from "@/components/layout/button";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

interface NavigationProps {
  scrolled: boolean;
  logo: string;
}

export function Navigation({ scrolled, logo }: NavigationProps) {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    gsap.to(navRef.current, {
      backgroundColor: scrolled ? "rgba(255, 255, 255, 0.9)" : "rgba(255, 255, 255, 0)",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [scrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.querySelector(target);
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: target, offsetY: 80 },
        ease: "power3.inOut",
      });
    }
  };

  return (
    <nav ref={navRef} className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "backdrop-blur-lg shadow-card" : ""}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#top" onClick={(e) => handleNavClick(e, "#top")} className="flex items-center gap-3 cursor-pointer">
          <img src={logo} alt="Логотип «11 метров»" className="h-11 w-auto" />
          <span className={`hidden sm:inline font-display font-extrabold text-lg ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>11 метров</span>
        </a>
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? "text-foreground" : "text-primary-foreground/90"}`}>
          <a href="#about" onClick={(e) => handleNavClick(e, "#about")} className="hover:text-accent transition-smooth cursor-pointer">Проект</a>
          <a href="#presentation" onClick={(e) => handleNavClick(e, "#presentation")} className="hover:text-accent transition-smooth cursor-pointer">Презентация</a>
          <a href="#problem" onClick={(e) => handleNavClick(e, "#problem")} className="hover:text-accent transition-smooth cursor-pointer">Исследование</a>
          <a href="#features" onClick={(e) => handleNavClick(e, "#features")} className="hover:text-accent transition-smooth cursor-pointer">Инфраструктура</a>
          <a href="#audience" onClick={(e) => handleNavClick(e, "#audience")} className="hover:text-accent transition-smooth cursor-pointer">Аудитория</a>
          <a href="#documents" onClick={(e) => handleNavClick(e, "#documents")} className="hover:text-accent transition-smooth cursor-pointer">Материалы</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")} className="hover:text-accent transition-smooth cursor-pointer">Контакты</a>
        </div>
        <Button variant="default" className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-semibold">
          Забронировать
        </Button>
      </div>
    </nav>
  );
}
