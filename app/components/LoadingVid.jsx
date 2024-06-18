'use client';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import React from 'react'
import { useState, useEffect } from 'react';
import RootLayout from '../layout';

const LoadingVid = () => {
    const [videoEnded, setVideoEnded] = useState(false)

    useEffect(() => {
        const video = document.getElementById('introVideo');
        video.onended = () => setVideoEnded(true);
    }, []);

  return (
    <div>
        {!videoEnded && (
            <video id="introVideo" autoPlay controls>
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
    </div>
  )
}

export default LoadingVid