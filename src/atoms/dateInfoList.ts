import { Dayjs } from "dayjs";
import { atomWithStorage } from "jotai/utils";

export type DateInfo = {
  id: string;
  birthDate: Dayjs;
  expectAge: number;
  expectHealthAge: number;
};

export const dateInfoListAtom = atomWithStorage<DateInfo[]>("dateInfoList", []);
