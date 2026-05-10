interface FooterProps {
  logo: string;
}

export function Footer({ logo }: FooterProps) {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-3 mb-3">
            <img src={logo} alt="Логотип «11 метров»" className="h-14 w-auto" />
            <span className="font-display font-extrabold text-xl text-background">11 метров</span>
          </div>
          <p className="text-background/60 text-sm leading-relaxed">
            «11 метров до победы. Бизнес на поле.» — проект команды ГолДевочки.
          </p>
        </div>
        <div className="text-sm text-background/70">
          <div className="font-bold mb-2 text-background">Команда ГолДевочки</div>
          <p className="leading-relaxed">Ярошенко А.Н., Юрлова Е.С., Костина Н.Р., Жукова С.Е., Грибкова И.В.</p>
        </div>
        <div className="text-sm text-background/70">
          <div className="font-bold mb-2 text-background">Учебное заведение</div>
          <p>Новосибирский государственный университет экономики и управления · 2 курс</p>
        </div>
      </div>
      <div className="container mt-8 pt-6 border-t border-background/10 text-xs text-background/50">
        © 2026 «11 метров». Все права защищены.
      </div>
    </footer>
  );
}
