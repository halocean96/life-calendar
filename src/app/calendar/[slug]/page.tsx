"use client";

import { dateInfoListAtom } from "@/atoms/dateInfoList";
import { H2 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
export default function CalendarPage() {
  const router = useRouter();
  const pathname = usePathname();
  const calendarId = pathname.split("/")[2];
  const [dateInfoList] = useAtom(dateInfoListAtom);
  const dateInfo = dateInfoList.find((v) => v.id === calendarId);
  if (!dateInfo) {
    return (
      <main className="flex flex-col h-screen justify-center items-center p-6 gap-4">
        <H2>인생 달력 정보가 없습니다😅</H2>
        <Button
          onClick={() => {
            router.replace("/");
          }}
        >
          돌아가기
        </Button>
      </main>
    );
  }
  return (
    <main className="flex gap-8 flex-col p-6">
      <div className="flex">
        <div>{dayjs(dateInfo.birthDate).format("🎉 YYYY.MM.DD")}</div>
        <div>{`💪 ${dateInfo.expectHealthAge}`}</div>
        <div>{`🪦 ${dateInfo.expectAge}`}</div>
      </div>
    </main>
  );
}
