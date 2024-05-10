"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { koKR } from "@mui/x-date-pickers/locales";

import { H1 } from "@/components/Typography";
import PoetsenOneFont from "@/fonts/PoetsenOne";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import dayjs from "dayjs";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { useAtom } from "jotai";
import { dateInfoListAtom } from "@/atoms/dateInfoList";
import { nanoid } from "nanoid";
import DateInfoList from "@/sections/DateInfoList";

export default function Home() {
  const [birthDate, setBirthDate] = useState(dayjs());
  const [expectAge, setExpectAge] = useState(90);
  const [expectHealthAge, setExpectHealthAge] = useState(60);
  const { toast, dismiss } = useToast();
  const [dateInfoList, setDateInfoList] = useAtom(dateInfoListAtom);
  return (
    <LocalizationProvider
      localeText={
        koKR.components.MuiLocalizationProvider.defaultProps.localeText
      }
      dateAdapter={AdapterDayjs}
    >
      <Toaster />
      <main className="flex gap-8 flex-col p-6">
        <div>
          <H1 className={PoetsenOneFont.className}>Life Calendar</H1>
        </div>
        <div className="flex flex-col gap-2 py-2">
          <Label>생년월일을 알려주세요.</Label>
          <DatePicker
            value={birthDate}
            onChange={(e) => {
              setBirthDate(dayjs(e));
            }}
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <Label htmlFor="expect-age">기대수명을 알려주세요.</Label>
          <Input
            id="expect-age"
            type="number"
            value={expectAge}
            onChange={(e) => {
              setExpectAge(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col gap-2 py-2">
          <Label htmlFor="expect-health-age">
            기대 건강 수명을 알려주세요.
          </Label>
          <Input
            id="expect-health-age"
            type="number"
            value={expectHealthAge}
            onChange={(e) => {
              setExpectHealthAge(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button
            onClick={() => {
              const notValidBirth =
                dayjs().format("YYYY.MM.DD") === birthDate.format("YYYY.MM.DD");
              if (notValidBirth) {
                const { id: toastId } = toast({
                  title: "생년월일을 다시 확인해주세요.",
                  variant: "destructive",
                });
                setTimeout(() => {
                  dismiss(toastId);
                }, 1000);
              } else {
                setDateInfoList((prev) => [
                  ...prev,
                  {
                    id: nanoid(),
                    birthDate,
                    expectAge,
                    expectHealthAge,
                  },
                ]);
              }
            }}
          >
            인생 달력 보러가기
          </Button>
          <DateInfoList />
        </div>
      </main>
    </LocalizationProvider>
  );
}
