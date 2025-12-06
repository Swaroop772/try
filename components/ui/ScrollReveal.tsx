"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
    children: React.ReactNode;
    animation?: "fade-up" | "fade-in" | "scale-up" | "slide-in-right" | "slide-in-left";
    delay?: number;
    duration?: number;
    className?: string;
    threshold?: number;
}

export default function ScrollReveal({
    children,
    animation = "fade-up",
    delay = 0,
    duration = 800,
    className = "",
    threshold = 0.1,
}: ScrollRevealProps) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold,
                rootMargin: "0px 0px -50px 0px", // Trigger slighty before bottom
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    const getAnimationClass = () => {
        switch (animation) {
            case "fade-up":
                return "translate-y-10 opacity-0";
            case "fade-in":
                return "opacity-0";
            case "scale-up":
                return "scale-90 opacity-0";
            case "slide-in-right":
                return "translate-x-10 opacity-0";
            case "slide-in-left":
                return "-translate-x-10 opacity-0";
            default:
                return "opacity-0";
        }
    };

    const getVisibleClass = () => {
        switch (animation) {
            case "fade-up":
                return "translate-y-0 opacity-100";
            case "fade-in":
                return "opacity-100";
            case "scale-up":
                return "scale-100 opacity-100";
            case "slide-in-right":
            case "slide-in-left":
                return "translate-x-0 opacity-100";
            default:
                return "opacity-100";
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-all ${className} ${isVisible ? getVisibleClass() : getAnimationClass()
                }`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
                transitionTimingFunction: "cubic-bezier(0.2, 0.0, 0.2, 1)", // Premium easing
            }}
        >
            {children}
        </div>
    );
}
