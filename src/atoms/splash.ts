import { atomWithStorage } from "jotai/utils";

export const isPlayingSplashScreenAtom = atomWithStorage(
  "isPlayingSplashScreen",
  true
);
