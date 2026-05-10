import { Button } from "@/components/layout/button";

interface NavigationProps {
  scrolled: boolean;
  logo: string;
}

export function Navigation({ scrolled, logo }: NavigationProps) {
  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-smooth ${scrolled ? "bg-background/90 backdrop-blur-lg shadow-card" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Логотип «11 метров»" className="h-20 w-auto" />
        </a>
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium ${scrolled ? "text-foreground" : "text-primary-foreground/90"}`}>
          <a href="#about" className="hover:text-accent transition-smooth">Проект</a>
          <a href="#features" className="hover:text-accent transition-smooth">Инфраструктура</a>
          <a href="#documents" className="hover:text-accent transition-smooth">Материалы</a>
          <a href="#contact" className="hover:text-accent transition-smooth">Контакты</a>
        </div>
        <Button variant="default" className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-semibold">
          Забронировать
        </Button>
      </div>
    </nav>
  );
}
