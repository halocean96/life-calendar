import CalendarPage from "@/sections/CalendarPage";

export async function generateStaticParams() {
  return [
    {
      slug: "NO",
    },
  ];
}
export default function Page() {
  return <CalendarPage />;
}
