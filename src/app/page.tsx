"use client";
import { H1 } from "@/components/Typography";
import PoetsenOneFont from "@/components/fonts/PoetsenOne";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Home() {
  return (
    <main className="flex gap-8 flex-col p-6">
      <H1 className={PoetsenOneFont.className}>Life Calendar</H1>
      <DatePicker
        onChange={(e) => {
          console.log("on change on date picker : ", e);
        }}
      />
    </main>
  );
}
