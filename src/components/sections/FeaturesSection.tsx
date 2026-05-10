import { Badge } from "@/components/layout/badge";
import { Card } from "@/components/data-display/card";
import { Lightbulb, Smartphone, ShowerHead, Car, Users, ShieldCheck } from "lucide-react";

const features = [
  { icon: Lightbulb, title: "Профессиональное освещение", text: "Игры и трансляции до позднего вечера. Решаем проблему «нельзя играть после 21:00»." },
  { icon: Smartphone, title: "Онлайн-бронирование", text: "Запись через сайт и приложение, безналичная оплата, прозрачное расписание." },
  { icon: ShowerHead, title: "8 раздевалок с душем", text: "Комфорт уровня клубных арен — для команд, корпоративных лиг и зрителей." },
  { icon: Car, title: "Просторная парковка", text: "Удобный доезд для играющих и болельщиков — закрываем главное «но» городских полей." },
  { icon: Users, title: "Две трибуны", text: "Место для болельщиков, корпоративных турниров и трансляций матчей." },
  { icon: ShieldCheck, title: "Безопасное покрытие", text: "Современный искусственный газон, сертифицированный для любительского футбола 5×5." },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 md:py-32">
      <div className="container">
        <div className="max-w-3xl mb-16">
          <Badge variant="secondary" className="mb-4">Инфраструктура</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Каждый аспект — ответ на запрос аудитории
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Шесть ключевых преимуществ комплекса «11 метров» — построены на данных опроса и анализе конкурентов.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Card key={f.title} className="p-8 hover:shadow-elegant transition-smooth group cursor-pointer hover:-translate-y-1 duration-300">
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-5 group-hover:scale-110 transition-smooth shadow-glow">
                <f.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.text}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
