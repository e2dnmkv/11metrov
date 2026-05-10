import { Button } from "@/components/layout/button";
import { MapPin, Clock, Phone, Calendar, Mail, Zap } from "lucide-react";
import { useFadeInUp, useStaggerFadeIn } from "@/hooks/useGsapAnimation";

export function ContactSection() {
  const headerRef = useFadeInUp();
  const cardsRef = useStaggerFadeIn(0.15);
  const buttonsRef = useFadeInUp(0.3);

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-dark text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 20% 50%, hsl(var(--accent)) 0%, transparent 50%), radial-gradient(circle at 80% 80%, hsl(var(--primary-glow)) 0%, transparent 50%)" }} />
      <div className="container relative">
        <div ref={headerRef} className="max-w-3xl">
          <Zap className="w-12 h-12 text-accent mb-6" />
          <h2 className="font-display text-4xl md:text-6xl font-black mb-6 text-balance leading-tight">
            Готовы выйти на поле?
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10 leading-relaxed">
            Забронируйте поле онлайн за 2 минуты. Безналичная оплата, прозрачное расписание, никаких звонков.
          </p>
          <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: MapPin, l: "Адрес", v: "Новосибирск, комплекс «11 метров»" },
              { icon: Clock, l: "График", v: "Ежедневно 08:00 – 23:00" },
              { icon: Phone, l: "Телефон", v: "+7 (383) 11-22-33" },
            ].map((c) => (
              <div key={c.l} className="border border-primary-foreground/15 rounded-2xl p-6 backdrop-blur-sm">
                <c.icon className="w-6 h-6 text-accent mb-3" />
                <div className="text-xs uppercase tracking-wider text-primary-foreground/60 mb-1">{c.l}</div>
                <div className="font-display font-bold">{c.v}</div>
              </div>
            ))}
          </div>
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-gradient-accent text-accent-foreground hover:opacity-90 font-semibold text-base h-14 px-8">
              <Calendar className="mr-2 w-5 h-5" /> Забронировать поле
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 hover:text-white h-14 px-8">
              <Mail className="mr-2 w-5 h-5" /> Корпоративные турниры
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
