import { Badge } from "@/components/layout/badge";
import { Button } from "@/components/layout/button";
import { Card } from "@/components/data-display/card";
import { CheckCircle2, FolderOpen, ExternalLink, FileText, BarChart3, Calculator, FileCheck } from "lucide-react";
import { useStaggerFadeIn, useFadeInUp, useSlideInFromLeft, useSlideInFromRight } from "@/hooks/useGsapAnimation";

const documents = [
  {
    icon: FileText,
    title: "Презентация проекта",
    desc: "Полная презентация концепции и бизнес-модели",
    color: "bg-blue-500/10 text-blue-500"
  },
  {
    icon: BarChart3,
    title: "Маркетинговое исследование ФАБА",
    desc: "Анализ рынка и целевой аудитории",
    color: "bg-green-500/10 text-green-500"
  },
  {
    icon: Calculator,
    title: "Финансовая модель и прогнозы",
    desc: "Расчёты окупаемости и прибыльности",
    color: "bg-purple-500/10 text-purple-500"
  },
  {
    icon: FileCheck,
    title: "Технические требования к полям",
    desc: "Спецификации оборудования и покрытия",
    color: "bg-orange-500/10 text-orange-500"
  },
];

export function DocumentsSection() {
  const headerRef = useFadeInUp();
  const cardsRef = useStaggerFadeIn(0.1);
  const leftRef = useSlideInFromLeft();
  const rightRef = useSlideInFromRight();

  return (
    <section id="documents" className="py-24 md:py-32 bg-secondary relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-left max-w-3xl mb-16">
          <Badge variant="secondary" className="mb-4 bg-background">
            <FolderOpen className="w-3 h-3 mr-1" /> Документация проекта
          </Badge>
          <h2 className="font-display text-4xl md:text-6xl font-extrabold mb-6 text-balance">
            Подробная информация о&nbsp;проекте
          </h2>
        </div>

        <Card className="p-8 md:p-12 bg-gradient-to-br from-background to-background/50 border-2 border-primary/20 shadow-2xl backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-2xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-primary-foreground flex items-center justify-center mb-6 shadow-glow">
                <FolderOpen className="w-8 h-8" />
              </div>
              <h3 className="font-display text-3xl font-extrabold mb-4">Доступ к материалам</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Все документы доступны для просмотра и скачивания. Вы можете изучить детали проекта, поделиться материалами с партнёрами или использовать их для анализа.
              </p>

              <a
                href="https://drive.google.com/drive/folders/1q0OXU3Q-y0_-WVXMtM4Ca84nMFa6PBIa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 h-14 px-8 shadow-lg hover:shadow-xl transition-all">
                  <FolderOpen className="mr-2 w-5 h-5" />
                  Открыть Google Drive
                  <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            <div ref={rightRef} className="space-y-4">
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Презентация</h4>
                    <p className="text-sm text-muted-foreground">Визуальное представление проекта с ключевыми метриками</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Исследование</h4>
                    <p className="text-sm text-muted-foreground">Данные опроса 44 респондентов и анализ конкурентов</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Calculator className="w-5 h-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold mb-1">Финансы</h4>
                    <p className="text-sm text-muted-foreground">Детальные расчёты инвестиций и прогноз доходности</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
