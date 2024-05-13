import { isPlayingSplashScreenAtom } from "@/atoms/splash";
import { H1 } from "@/components/Typography";
import { useAtom } from "jotai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";

const ANIMATION_DELAY_TIME = 1000;

const SplashScreen = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [_, setIsPlayingSplashScreen] = useAtom(isPlayingSplashScreenAtom);
  useEffect(() => {
    if (!api) return;
    // @ts-ignore
    api.on("autoplay:stop", () => {
      setTimeout(() => {
        setIsPlayingSplashScreen(false);
      }, ANIMATION_DELAY_TIME);
    });
  }, [api, setIsPlayingSplashScreen]);
  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: ANIMATION_DELAY_TIME,
          stopOnLastSnap: true,
          stop: () => {
            console.log("auto play stop!!");
          },
        }),
      ]}
      className="flex justify-center bg-white items-center absolute top-0 left-0 w-screen h-screen"
    >
      <CarouselContent>
        <CarouselItem>
          <H1 className="text-center">1 페이지</H1>
        </CarouselItem>
        <CarouselItem>
          <H1 className="text-center">2 페이지</H1>
        </CarouselItem>
        <CarouselItem>
          <H1 className="text-center">3 페이지</H1>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default SplashScreen;
