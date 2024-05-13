import { isPlayingSplashScreenAtom } from "@/atoms/splash";
import { H2 } from "@/components/Typography";
import { useAtom } from "jotai";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const ANIMATION_DELAY_TIME = 4000;

const SplashScreen = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [_, setIsPlayingSplashScreen] = useAtom(isPlayingSplashScreenAtom);
  useEffect(() => {
    if (!api) return;
    // @ts-ignore
    api.on("autoplay:stop", () => {
      setTimeout(() => {
        setIsPlayingSplashScreen(false);
      }, ANIMATION_DELAY_TIME + 500);
    });
  }, [api, setIsPlayingSplashScreen]);
  return (
    <Carousel
      setApi={setApi}
      plugins={[
        Autoplay({
          delay: ANIMATION_DELAY_TIME,
          stopOnLastSnap: true,
        }),
      ]}
      className="flex justify-center bg-white items-center absolute top-0 left-0 w-full h-full"
    >
      <CarouselContent>
        <CarouselItem className="flex flex-col items-center">
          <H2 className="text-center">100세까지 산다면</H2>
          <H2 className="text-center">5200주가 남아 있어요.</H2>
        </CarouselItem>
        <CarouselItem className="flex flex-col items-center gap-4">
          <H2 className="text-center">사각형 1개가</H2>
          <H2 className="text-center">한 주에요.</H2>
        </CarouselItem>
        <CarouselItem className="flex flex-col items-center gap-4">
          <H2 className="text-center">색칠된 사각형은 지난거고</H2>
          <H2 className="text-center">비워있는 부분은 앞으로</H2>
          <H2 className="text-center">채워나갈 주(weeks)에요.</H2>
        </CarouselItem>
      </CarouselContent>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2">
        <Button
          variant={"ghost"}
          onClick={() => {
            setIsPlayingSplashScreen(false);
          }}
          className="text-gray-400"
        >
          skip 하기
        </Button>
      </div>
    </Carousel>
  );
};

export default SplashScreen;
