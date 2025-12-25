"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import NewsCarouselItem from "./NewsCarouselItem";
import Autoplay from "embla-carousel-autoplay";
import NewsCarouselSkeleton from "./NewsCarouselSkeleton";
import { useNews } from "@/hooks/useNews";

const CATEGORY_LABELS: Record<string, string> = {
  SUPER_LIG: "Süper Lig",
  PREMIER_LEAGUE: "Premier League",
  LA_LIGA: "La Liga",
  BUNDESLIGA: "Bundesliga",
  SERIE_A: "Serie A",
  LIGUE_1: "Ligue 1",
};

export default function NewsCarousel() {
  const { news, isLoading } = useNews();

  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const autoplay = useRef(
    Autoplay({
      delay: 4000,
      stopOnInteraction: false,
    })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    autoplay.current,
  ]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      emblaApi?.scrollTo(index);
    },
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setSelectedIndex(emblaApi.selectedScrollSnap());

    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <section className="relative w-full py-8 md:py-16">
      <div
        className="relative px-4 md:px-32"
        onMouseEnter={() => autoplay.current.stop()}
        onMouseLeave={() => autoplay.current.play()}
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {isLoading
              ? Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="min-w-full shrink-0">
                    <NewsCarouselSkeleton />
                  </div>
                ))
              : news?.content.map((item) => (
                  <div key={item.id} className="min-w-full shrink-0">
                    <NewsCarouselItem
                      title={item.title}
                      slug={item.slug}
                      imageUrl={item.imageUrl}
                      category={CATEGORY_LABELS[item.category] ?? item.category}
                      date={new Date(item.createdDate).toLocaleDateString(
                        "tr-TR",
                        { day: "numeric", month: "long", year: "numeric" }
                      )}
                    />
                  </div>
                ))}
          </div>
        </div>

        <button
          onClick={scrollPrev}
          className="cursor-pointer absolute left-5 md:left-20 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black transition"
        >
          <ChevronLeft />
        </button>

        <button
          onClick={scrollNext}
          className="cursor-pointer absolute right-5 md:right-20 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white hover:bg-black transition"
        >
          <ChevronRight />
        </button>
        <div className="mt-4 flex justify-center gap-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`
                cursor-pointer h-2.5 w-2.5 rounded-full transition
                ${
                  index === selectedIndex
                    ? "bg-amber-500 scale-110"
                    : "bg-white/40 hover:bg-white/70"
                }
              `}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
