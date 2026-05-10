import { Badge } from "@/components/layout/badge";
import { VideoPlayer } from "@/components/VideoPlayer";

interface VideoSectionProps {
  videoSrc: string;
  poster: string;
}

export function VideoSection({ videoSrc }: VideoSectionProps) {
  return (
    <section id="presentation" className="py-20 md:py-28 bg-gradient-dark text-primary-foreground">
      <div className="container">
        <div className="max-w-3xl mb-10">
          <Badge className="bg-accent text-accent-foreground mb-4">Презентация поля</Badge>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 text-balance">
            Увидьте поле своими глазами
          </h2>
          <p className="text-lg text-primary-foreground/75 leading-relaxed">
            Короткий видеоролик о комплексе: освещение, покрытие, раздевалки и атмосфера игры.
          </p>
        </div>

        <VideoPlayer
          src={videoSrc}
          className="w-full max-w-5xl mx-auto aspect-video rounded-2xl overflow-hidden border border-primary-foreground/15 shadow-elegant"
        />
      </div>
    </section>
  );
}
