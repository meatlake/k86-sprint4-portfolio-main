"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const video = document.getElementById("introVideo");
    video.onended = () => {
      setVideoEnded(true);
    };
  }, []);

  return (
    <html lang="en" className="bg-black">
      <body className={inter.className}>
        {!videoEnded && (
          <video
            id="introVideo"
            autoPlay
            muted
            controls
            className="w-screen h-screen"
          >
            <source src="/videos/openingvid.mp4" type="video/mp4" />
          </video>
        )}
        {videoEnded && (
          <>
            {children}
            <Analytics />
            <SpeedInsights />
          </>
        )}
      </body>
    </html>
  );
}
