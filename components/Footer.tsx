"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone, Send, ShieldCheck, Award } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                    {/* Brand & Certifications */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="w-48 h-16 relative bg-white/5 rounded-lg p-2">
                                <Image
                                    src="/logo_transparent.png"
                                    alt="LearnCorp Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        </Link>

                        <div>
                            <h3 className="text-lg font-bold text-white mb-1">Shaping Dreams into Reality</h3>
                            <p className="text-slate-400 text-sm">
                                AICTE | MSME | ISO 9001:2015 Certified<br />
                                IAF Accreditation Forum
                            </p>
                        </div>

                        <div className="flex gap-4">
                            <SocialIcon icon={<Facebook size={18} />} href="#" />
                            <SocialIcon icon={<Twitter size={18} />} href="#" />
                            <SocialIcon icon={<Instagram size={18} />} href="#" />
                            <SocialIcon icon={<Linkedin size={18} />} href="#" />
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-6 border-b border-slate-800 pb-2 inline-block">Quick Links</h4>
                        <ul className="space-y-3">
                            <FooterLink href="/">Home</FooterLink>
                            <FooterLink href="/about">About Us</FooterLink>
                            <FooterLink href="/internships">Internships</FooterLink>
                            <FooterLink href="/courses">Courses & Training</FooterLink>
                            <FooterLink href="/careers">Career Opportunities</FooterLink>
                            <FooterLink href="/contact">Contact Us</FooterLink>
                            <FooterLink href="/privacy">Privacy Policy</FooterLink>
                            <FooterLink href="/terms">Terms & Conditions</FooterLink>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold text-white mb-6 border-b border-slate-800 pb-2 inline-block">Contact Information</h4>
                        <ul className="space-y-5">
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 rounded-full bg-slate-900/80 text-primary border border-slate-800 group-hover:border-primary transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Phone</p>
                                    <p className="text-slate-300 font-medium">+91 8072519738</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 rounded-full bg-slate-900/80 text-primary border border-slate-800 group-hover:border-primary transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Email</p>
                                    <p className="text-slate-300 font-medium">learncorp.in@gmail.com</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 group">
                                <div className="p-2 rounded-full bg-slate-900/80 text-primary border border-slate-800 group-hover:border-primary transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-slate-500 text-xs uppercase tracking-wider font-semibold">Address</p>
                                    <p className="text-slate-300 font-medium">Chennai, Tamilnadu, India</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter / Submission Form */}
                    <div>
                        <h4 className="font-bold text-white mb-6 border-b border-slate-800 pb-2 inline-block">Submission Form</h4>
                        <p className="text-slate-400 text-sm mb-4">Enter your email address for updates.</p>

                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
                                <input
                                    type="email"
                                    placeholder="Your email for updates"
                                    className="w-full bg-slate-900 border border-slate-800 rounded-lg py-3 pl-10 pr-4 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                                />
                            </div>
                            <button className="w-full py-3 bg-primary text-white rounded-lg font-bold text-sm hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-teal-900/20">
                                <span>Submit your application now</span>
                                <Send size={16} />
                            </button>
                        </form>

                        <div className="mt-6 flex gap-3 text-slate-500 text-xs">
                            <div className="flex items-center gap-1">
                                <ShieldCheck size={14} className="text-primary" />
                                <span>Secure</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Award size={14} className="text-primary" />
                                <span>Certified</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-900 pt-8 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; 2025 LearnCorp. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon, href }: { icon: React.ReactNode, href: string }) {
    return (
        <a href={href} className="w-10 h-10 rounded-full bg-slate-900 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 border border-slate-800">
            {icon}
        </a>
    );
}

function FooterLink({ href, children }: { href: string, children: React.ReactNode }) {
    return (
        <li>
            <Link href={href} className="text-slate-400 hover:text-primary transition-colors hover:translate-x-1 inline-block text-sm">
                {children}
            </Link>
        </li>
    );
}
