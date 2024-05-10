"use client";

import { dateInfoListAtom } from "@/atoms/dateInfoList";
import { H2 } from "@/components/Typography";
import { Button } from "@/components/ui/button";
import PoetsenOneFont from "@/fonts/PoetsenOne";
import dayjs from "dayjs";
import { useAtom } from "jotai";
import { usePathname, useRouter } from "next/navigation";
import WeeksChunk from "@/components/WeeksChunk";
import { range } from "lodash-es";
import weekYear from "dayjs/plugin/weekYear";
import weekOfYear from "dayjs/plugin/weekOfYear";

dayjs.extend(weekYear);
dayjs.extend(weekOfYear);

export default function CalendarPage() {
  const router = useRouter();
  const pathname = usePathname();
  const calendarId = pathname.split("/")[2];
  const [dateInfoList] = useAtom(dateInfoListAtom);
  if (dateInfoList.length === 0) return null;
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
  const weekDiff = dayjs().diff(dateInfo.birthDate, "week");
  //  weekList를 7개의 chunk로 나눈다, 하나의 52주
  //  chunk를 순회하면서 4개를 채우고 다음으로 넘어간다
  return (
    <main
      className={`flex gap-4 flex-col p-6 items-center ${PoetsenOneFont.className}`}
    >
      <H2>Weeks of my life</H2>
      <section className="grid gap-2 grid-cols-7">
        {range(dateInfo.expectAge).map((year) => {
          return (
            <WeeksChunk
              key={year}
              fillCount={
                dayjs().diff(
                  dayjs(dateInfo.birthDate).add(year, "year"),
                  "year"
                ) > 0
                  ? 52
                  : 0
              }
            />
          );
        })}
      </section>
    </main>
  );
}
