import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { gallery } from "@/data/site";
import { Reveal } from "./Reveal";

export function Gallery() {
  const [idx, setIdx] = useState<number | null>(null);
  const n = gallery.length;
  return (
    <DialogPrimitive.Root open={idx !== null} onOpenChange={(open) => !open && setIdx(null)}>
      <div className="columns-2 gap-4 md:columns-3 lg:columns-4">
        {gallery.map((g, i) => (
          <Reveal key={i} delay={(i % 4) * 80} className="mb-4 break-inside-avoid">
            <DialogPrimitive.Trigger asChild>
              <button
                onClick={() => setIdx(i)}
                className="group block w-full overflow-hidden"
                aria-label={`Ampliar: ${g.alt}`}
              >
                <img
                  src={g.src}
                  alt={g.alt}
                  loading="lazy"
                  className={`w-full object-cover transition duration-700 group-hover:scale-105 ${i % 3 === 0 ? "aspect-[3/4]" : "aspect-square"}`}
                />
              </button>
            </DialogPrimitive.Trigger>
          </Reveal>
        ))}
      </div>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-forest/95 animate-in fade-in" />
        <DialogPrimitive.Content
          aria-describedby={undefined}
          onKeyDown={(event) => {
            if (idx === null) return;
            if (event.key === "ArrowRight") {
              event.preventDefault();
              setIdx((idx + 1) % n);
            } else if (event.key === "ArrowLeft") {
              event.preventDefault();
              setIdx((idx - 1 + n) % n);
            }
          }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 outline-none"
        >
          <DialogPrimitive.Title className="sr-only">Visualização da imagem</DialogPrimitive.Title>
          <DialogPrimitive.Close
            aria-label="Fechar galeria"
            className="absolute right-5 top-5 text-forest-foreground"
          >
            <X className="h-8 w-8" />
          </DialogPrimitive.Close>
          <button
            type="button"
            aria-label="Imagem anterior"
            className="absolute left-3 text-forest-foreground md:left-8"
            onClick={() => setIdx((idx! - 1 + n) % n)}
          >
            <ChevronLeft className="h-10 w-10" />
          </button>
          {idx !== null && gallery[idx] && (
            <img
              src={gallery[idx].src}
              alt={gallery[idx].alt}
              className="max-h-[85vh] max-w-full object-contain shadow-2xl"
            />
          )}
          <button
            type="button"
            aria-label="Próxima imagem"
            className="absolute right-3 text-forest-foreground md:right-8"
            onClick={() => setIdx((idx! + 1) % n)}
          >
            <ChevronRight className="h-10 w-10" />
          </button>
          {idx !== null && gallery[idx] && (
            <p className="absolute bottom-6 font-serif text-lg italic text-forest-foreground">
              {gallery[idx].alt}
            </p>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
