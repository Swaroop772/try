"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Internships", href: "/internships" },
        { name: "Events", href: "/events" },
        { name: "Courses", href: "/courses" },
    ];

    return (
        <nav
            className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] md:w-[90%] max-w-7xl z-50 transition-all duration-300 rounded-full border border-white/5 ${scrolled
                ? "glass-dark shadow-2xl shadow-teal-900/20 py-2"
                : "bg-slate-950/20 backdrop-blur-sm py-3 border-transparent"
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="relative w-36 h-12 flex items-center group">
                    <div className="relative w-full h-full bg-white rounded-full px-3 flex items-center justify-center shadow-lg shadow-teal-500/10 group-hover:shadow-teal-500/30 transition-shadow duration-300">
                        <Image src="/logo_transparent.png" alt="LearnCorp" fill className="object-contain p-1" priority />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-1">
                    <div className="bg-slate-900/50 rounded-full px-2 py-1 border border-white/5 mr-4 flex items-center backdrop-blur-md">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden group ${pathname === link.href
                                    ? "bg-slate-800 text-white shadow-inner"
                                    : "text-slate-300 hover:text-white"
                                    }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {pathname !== link.href && (
                                    <span className="absolute inset-0 bg-slate-800/0 group-hover:bg-slate-800/50 transition-colors duration-300 rounded-full"></span>
                                )}
                            </Link>
                        ))}
                    </div>

                    <Link
                        href="/apply"
                        className="px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-sm hover:bg-teal-500 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-teal-500/30 flex items-center gap-2 group"
                    >
                        Apply Now
                        <div className="w-2 h-2 rounded-full bg-white group-hover:animate-ping"></div>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu Overlay */}
                {isOpen && (
                    <div className="absolute top-full left-0 right-0 mt-4 p-4 bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl flex flex-col gap-2 md:hidden animate-fade-in-up">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={`px-4 py-3 rounded-xl text-center font-medium transition-colors ${pathname === link.href ? "bg-slate-800 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/apply"
                            onClick={() => setIsOpen(false)}
                            className="mt-2 px-4 py-3 rounded-xl bg-primary text-white font-bold text-center hover:bg-teal-500 transition-colors shadow-lg shadow-primary/20"
                        >
                            Apply Now
                        </Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
