import { useEffect, useState } from "react";
import { Button } from "@/components/layout/button";
import { Card } from "@/components/data-display/card";
import { Badge } from "@/components/layout/badge";
import { Navigation, Hero, VideoSection, AboutSection, FeaturesSection, DocumentsSection, ContactSection, Footer } from "@/components/sections";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { useFadeInUp, useStaggerFadeIn } from "@/hooks/useGsapAnimation";
import heroField from "@/assets/hero-field.jpg";
import logo from "@/assets/logo.png";
import fieldVideo from "@/assets/prewiev.MP4";
import { Calendar, CheckCircle2, BarChart3 } from "lucide-react";

const problems = [
  { value: "52.3%", text: "сталкиваются с высокой загруженностью полей" },
  { value: "52.3%", text: "не устраивает высокая цена аренды" },
  { value: "40.9%", text: "жалуются на неудобное расположение" },
  { value: "34.1%", text: "играют на травмоопасном покрытии" },
];

const audience = [
  { tag: "Приоритет 1", title: "Любительские команды и лиги", desc: "Регулярные тренировки 2+ раза в неделю, корпоративные турниры, лиги выходного дня." },
  { tag: "Приоритет 2", title: "Молодёжь 18–25 лет", desc: "45.5% аудитории. Активные игроки, ценят сервис, мобильное бронирование и атмосферу." },
  { tag: "Приоритет 3", title: "Семьи и школьники до 18", desc: "38.6% опрошенных. Выходные тренировки, детские секции, школьные турниры." },
];

const advantages = [
  { title: "4 поля вместо 1", text: "Параллельные матчи, мини-турниры на одной площадке, рост пропускной способности в 2.5 раза." },
  { title: "Цифровой сервис", text: "Онлайн-запись и безналичная оплата против звонков и наличных у муниципальных площадок." },
  { title: "Вечерние слоты", text: "Освещение позволяет играть до 23:00 — пик платежеспособного спроса." },
  { title: "Сервис как продукт", text: "Душ, парковка, трибуны — то, чего нет у школьных и дворовых полей." },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  
  const problemHeaderRef = useFadeInUp();
  const problemCardsRef = useStaggerFadeIn(0.1);
  const problemStatsRef = useStaggerFadeIn(0.15);
  
  const audienceHeaderRef = useFadeInUp();
  const audienceCardsRef = useStaggerFadeIn(0.15);
  const audienceDemoRef = useFadeInUp(0.3);
  
  const advantagesLeftRef = useFadeInUp(0.2);
  const advantagesRightRef = useStaggerFadeIn(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navigation scrolled={scrolled} logo={logo} />
      <Hero heroField={heroField} />
      <VideoSection videoSrc={fieldVideo} />
      <AboutSection />

      <section id="problem" className="py-24 md:py-32 bg-gradient-dark text-primary-foreground">
        <div className="container">
          <div ref={problemHeaderRef} className="max-w-3xl mb-16">
            <Badge className="bg-accent text-accent-foreground mb-4">
              <BarChart3 className="w-3 h-3 mr-1" /> Опрос · 44 респондента
            </Badge>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-balance">
              Что говорят сами игроки
            </h2>
            <p className="text-lg text-primary-foreground/75 leading-relaxed">
              Мы провели исследование среди активных футболистов. Результаты подтверждают каждый аспект проекта.
            </p>
          </div>

          <div ref={problemCardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {problems.map((p) => (
              <div key={p.text} className="bg-primary-foreground/5 border border-primary-foreground/10 rounded-2xl p-6 backdrop-blur-sm">
                <AnimatedCounter value={p.value} className="font-display text-5xl font-black bg-gradient-accent bg-clip-text text-transparent mb-3" />
                <p className="text-primary-foreground/80 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>

          <div ref={problemStatsRef} className="grid lg:grid-cols-3 gap-6">
            <Card className="p-8 bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-wider text-accent mb-3 font-semibold">Частота игры</div>
              <div className="font-display text-3xl font-black mb-4 text-primary-foreground">75% играют 2+ раз в неделю</div>
              <div className="space-y-2">
                {[
                  ["2 раза в неделю или чаще", 75],
                  ["1 раз в неделю", 15.9],
                  ["1 раз в месяц или реже", 4.5],
                  ["Каждый день", 2.3],
                ].map(([l, v]) => (
                  <div key={l as string}>
                    <div className="flex justify-between text-xs text-primary-foreground/70 mb-1">
                      <span>{l}</span><span>{v}%</span>
                    </div>
                    <div className="h-1.5 bg-primary-foreground/10 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-accent rounded-full" style={{ width: `${v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-wider text-accent mb-3 font-semibold">Готовность платить</div>
              <div className="font-display text-3xl font-black mb-6 text-primary-foreground">62.8% «Да» — за +10–15%</div>
              <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
                Готовы платить больше за поле с профессиональным освещением, раздевалками с душем и онлайн-бронированием.
              </p>
              <div className="relative h-32 flex items-end gap-2">
                {[
                  { l: "Да", v: 62.8, c: "bg-gradient-accent" },
                  { l: "Нет", v: 32.6, c: "bg-primary-foreground/30" },
                  { l: "Возможно", v: 4.6, c: "bg-primary-foreground/15" },
                ].map((b) => (
                  <div key={b.l} className="flex-1 flex flex-col items-center gap-2">
                    <div className={`w-full rounded-t ${b.c}`} style={{ height: `${b.v}%` }} />
                    <div className="text-xs text-primary-foreground/70">{b.l}</div>
                    <div className="text-sm font-bold text-accent">{b.v}%</div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-primary-foreground/5 border-primary-foreground/10 backdrop-blur-sm">
              <div className="text-sm uppercase tracking-wider text-accent mb-3 font-semibold">Готовы ехать за качеством</div>
              <div className="font-display text-3xl font-black mb-6 text-primary-foreground">54.6% поедут 20–40 минут</div>
              <div className="space-y-3">
                {[
                  ["Готовы ехать 30–40 минут", "45.5%"],
                  ["Готовы ехать 15–20 минут", "38.6%"],
                  ["Главное — качество", "9.1%"],
                  ["Только в своём районе", "6.8%"],
                ].map(([l, v]) => (
                  <div key={l} className="flex items-center justify-between border-b border-primary-foreground/10 pb-2">
                    <span className="text-sm text-primary-foreground/80">{l}</span>
                    <span className="font-display font-bold text-accent">{v}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      <FeaturesSection />

      <section id="audience" className="py-24 md:py-32 bg-secondary">
        <div className="container">
          <div ref={audienceHeaderRef} className="max-w-3xl mb-16">
            <Badge variant="secondary" className="mb-4 bg-background">Целевая аудитория · STP</Badge>
            <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-balance">
              Для кого мы строим
            </h2>
          </div>

          <div ref={audienceCardsRef} className="grid lg:grid-cols-3 gap-6 mb-16">
            {audience.map((a, i) => (
              <Card key={a.title} className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 font-display text-[8rem] font-black text-primary/5 leading-none">0{i + 1}</div>
                <Badge className="bg-primary text-primary-foreground mb-4 relative">{a.tag}</Badge>
                <h3 className="font-display text-2xl font-bold mb-3 relative">{a.title}</h3>
                <p className="text-muted-foreground relative leading-relaxed">{a.desc}</p>
              </Card>
            ))}
          </div>

          <Card ref={audienceDemoRef} className="p-8 md:p-12 bg-background">
            <h3 className="font-display text-2xl font-bold mb-8">Демография аудитории · опрос</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">Возраст</div>
                <div className="space-y-3">
                  {[
                    ["18–25 лет", 45.5],
                    ["до 18 лет", 38.6],
                    ["26–35 лет", 9.1],
                    ["36–45 лет", 4.5],
                    ["старше 45", 2.3],
                  ].map(([l, v]) => (
                    <div key={l as string} className="flex items-center gap-4">
                      <div className="w-24 text-sm text-muted-foreground">{l}</div>
                      <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-primary rounded-full" style={{ width: `${(v as number) * 2}%` }} />
                      </div>
                      <div className="w-14 text-right font-display font-bold">{v}%</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">Пол</div>
                <div className="flex gap-4 mb-8">
                  <div className="flex-[93] bg-gradient-primary text-primary-foreground rounded-2xl p-6">
                    <div className="font-display text-4xl font-black">93.2%</div>
                    <div className="opacity-90">Мужской</div>
                  </div>
                  <div className="flex-[7] bg-accent text-accent-foreground rounded-2xl p-6 min-w-[120px]">
                    <div className="font-display text-2xl font-black">6.8%</div>
                    <div className="text-xs">Женский</div>
                  </div>
                </div>
                <div className="text-sm uppercase tracking-wider text-muted-foreground mb-4 font-semibold">Топ места игры</div>
                <div className="space-y-2">
                  {[["Спортивный зал", "65.9%"], ["Открытое поле", "52.3%"], ["Манеж / крытое", "29.5%"]].map(([l, v]) => (
                    <div key={l} className="flex justify-between border-b border-border pb-1.5">
                      <span className="text-sm">{l}</span>
                      <span className="font-display font-bold text-primary">{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            <div ref={advantagesLeftRef}>
              <Badge variant="secondary" className="mb-4">Преимущества</Badge>
              <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-balance">
                Почему «11 метров» обыгрывает конкурентов
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Школьные поля бесплатны, но без сервиса. Манежи дороги и далеко. Мы — золотая середина с пропускной способностью в 2.5 раза выше.
              </p>
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-14 px-8">
                <Calendar className="mr-2 w-5 h-5" />
                Забронировать слот
              </Button>
            </div>
            <div ref={advantagesRightRef} className="space-y-3">
              {advantages.map((a) => (
                <div key={a.title} className="flex gap-4 p-5 rounded-xl hover:bg-secondary transition-smooth">
                  <CheckCircle2 className="w-6 h-6 text-primary-glow shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-lg mb-1">{a.title}</h3>
                    <p className="text-muted-foreground">{a.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DocumentsSection />

      <ContactSection />
      <Footer logo={logo} />
    </div>
  );
}
