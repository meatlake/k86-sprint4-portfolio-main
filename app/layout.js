"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useEffect } from "react";
import { QuizProvider } from "./context/QuizContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <QuizProvider>
      <html lang="en" className="bg-black">
        <head>
          <title>K86 sprint 4 portfolio</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" type="image/x-icon" href="/blobs/blobBlue.png" />
        </head>
        <body className={inter.className}>
          {children}
          <Analytics />
          <SpeedInsights />
        </body>
      </html>
    </QuizProvider>
  );
}
