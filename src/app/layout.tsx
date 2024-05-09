"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { koKR } from "@mui/x-date-pickers/locales";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LocalizationProvider
      localeText={
        koKR.components.MuiLocalizationProvider.defaultProps.localeText
      }
      dateAdapter={AdapterDayjs}
    >
      <html lang="ko">
        <body className={inter.className}>{children}</body>
      </html>
    </LocalizationProvider>
  );
}
