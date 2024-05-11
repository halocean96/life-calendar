"use client";
import { isPlayingSplashScreenAtom } from "@/atoms/splash";
import HomePage from "@/sections/HomePage";
import SplashScreen from "@/sections/SplashScreen";
import { useAtom } from "jotai";

export default function Page() {
  const [isPlayingSplashScreen] = useAtom(isPlayingSplashScreenAtom);

  return (
    <>
      {isPlayingSplashScreen ? <SplashScreen /> : null}
      <main
        className={`${
          isPlayingSplashScreen ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000`}
      >
        <HomePage />
      </main>
    </>
  );
}
