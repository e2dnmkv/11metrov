import { Badge } from "@/components/layout/badge";
import { Card } from "@/components/data-display/card";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Badge variant="secondary" className="mb-4">Суть проекта</Badge>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold mb-6 text-balance">
            Спорт уровня клубной арены — рядом с домом
          </h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            Мы строим комплекс из <b className="text-foreground">4 полей 20×40 м</b>, расположенных квадратом 2×2, с искусственным покрытием, профессиональным освещением, восемью раздевалками с душем, двумя трибунами и парковкой.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Решаем системную проблему: качественной спортивной инфраструктуры для взрослых любителей в шаговой доступности — критически не хватает.
          </p>
          <div className="grid grid-cols-2 gap-4 mt-8">
            {[
              { v: "2×2", l: "квадрат полей" },
              { v: "22×41 м", l: "забор · h 3 м" },
              { v: "до 23:00", l: "вечерние слоты" },
              { v: "5×5", l: "формат игры" },
            ].map((i) => (
              <div key={i.l} className="border border-border rounded-xl p-4">
                <div className="font-display text-2xl font-bold text-primary">{i.v}</div>
                <div className="text-sm text-muted-foreground">{i.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          {[
            { n: "01", t: "Дефицит инфраструктуры", d: "Любители играют на изношенных полях или платят за дорогие манежи. Мы заполняем нишу." },
            { n: "02", t: "Рост любительских лиг", d: "Корпоративные турниры и команды выходного дня растут — а сервис муниципальных площадок отстаёт." },
            { n: "03", t: "Тренд на ЗОЖ", d: "Футбол — самый массовый спорт. Качество инфраструктуры мотивирует на регулярность." },
          ].map((a) => (
            <Card key={a.n} className="p-6 shadow-card hover:shadow-elegant transition-smooth border-l-4 border-l-primary">
              <div className="flex gap-5">
                <div className="font-display text-4xl font-black text-primary/20">{a.n}</div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-2">{a.t}</h3>
                  <p className="text-muted-foreground">{a.d}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
