import CalendarPage from "@/sections/CalendarPage";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div></div>}>
      <CalendarPage />
    </Suspense>
  );
}
