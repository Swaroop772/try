"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function OrganicBackground() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <div className="fixed inset-0 -z-20 overflow-hidden bg-slate-950">
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 z-50 opacity-[0.03] pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
                }}
            ></div>

            {/* Ambient Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900"></div>

            {/* Interactive Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Primary Blob */}
                <motion.div
                    animate={{
                        x: mousePosition.x * 0.05,
                        y: mousePosition.y * 0.05,
                    }}
                    transition={{ type: "spring", damping: 50, stiffness: 50 }}
                    className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-teal-500/10 rounded-full blur-[120px] mix-blend-screen"
                />

                {/* Secondary Blob */}
                <motion.div
                    animate={{
                        x: mousePosition.x * -0.05,
                        y: mousePosition.y * -0.05,
                    }}
                    transition={{ type: "spring", damping: 50, stiffness: 50 }}
                    className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-500/10 rounded-full blur-[100px] mix-blend-screen"
                />

                {/* Floating Accent Blob */}
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-[20%] right-[30%] w-[30vw] h-[30vw] bg-primary/5 rounded-full blur-[80px] mix-blend-screen"
                />
            </div>

            {/* Grid Overlay - extremely subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
        </div>
    );
}
