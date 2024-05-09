"use client";
import { H1 } from "@/components/Typography";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Home() {
  return (
    <main className="flex gap-8 flex-col p-6">
      <H1>date picker test</H1>
      <DatePicker
        onChange={(e) => {
          console.log("on change on date picker : ", e);
        }}
      />
    </main>
  );
}
