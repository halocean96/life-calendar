import { isPlayingSplashScreenAtom } from "@/atoms/splash";
import { H1 } from "@/components/Typography";
import { useAtom } from "jotai";
import { useEffect } from "react";

const SplashScreen = () => {
  const [_, setIsPlayingSplashScreen] = useAtom(isPlayingSplashScreenAtom);
  useEffect(() => {
    setTimeout(() => {
      setIsPlayingSplashScreen(false);
    }, 2000);
  }, [setIsPlayingSplashScreen]);
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-screen h-screen">
      <H1>Splash screen test</H1>
    </div>
  );
};

export default SplashScreen;
