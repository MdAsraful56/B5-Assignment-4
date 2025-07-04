import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

import Banner6 from "@/assets/Cover/cover (1).jpg";
import Banner2 from "@/assets/Cover/cover (13).jpg";
import Banner3 from "@/assets/Cover/cover (15).jpg";
import Banner5 from "@/assets/Cover/cover (16).jpg";
import Banner7 from "@/assets/Cover/cover (2).jpg";
import Banner8 from "@/assets/Cover/cover (3).jpg";
import Banner9 from "@/assets/Cover/cover (4).jpg";
import Banner4 from "@/assets/Cover/cover (8).jpg";
import Banner1 from "@/assets/Cover/cover (9).jpg";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function BannerCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const banners = [
    Banner1,
    Banner2,
    Banner3,
    Banner4,
    Banner5,
    Banner6,
    Banner7,
    Banner8,
    Banner9,
  ];

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full max-w-6xl mx-auto relative overflow-hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index} className="w-full">
            <div className="p-2">
              <img
                src={banner}
                alt={`Banner ${index + 1}`}
                className="w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[550px] object-cover rounded-xl"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
      <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
    </Carousel>
  );
}
