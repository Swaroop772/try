import React from "react";
import { BookOpen, Video, Clock } from "lucide-react";
import ScrollReveal from "./ui/ScrollReveal";

export default function Courses() {
    return (
        <section className="py-20 md:py-28 bg-slate-950 relative">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Our Courses</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">Skill Development <span className="text-gradient">Programs</span></h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <ScrollReveal animation="fade-up" delay={0}>
                        <CourseCard
                            icon={<Video size={28} />}
                            title="Python Development Course"
                            desc="Teaching full detail course for explaining Basis, Image and video Project (OPENCV) and Internship will provided."
                            color="bg-primary"
                            status="Available"
                        />
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={100}>
                        <CourseCard
                            icon={<BookOpen size={28} />}
                            title="Coming Soon"
                            desc="New exciting courses are on the way."
                            color="bg-slate-700"
                            status="Stay Tuned"
                        />
                    </ScrollReveal>
                    <ScrollReveal animation="fade-up" delay={200}>
                        <CourseCard
                            icon={<Clock size={28} />}
                            title="Coming Soon"
                            desc="More opportunities for skill enhancement."
                            color="bg-slate-700"
                            status="Stay Tuned"
                        />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}

function CourseCard({ icon, title, desc, color, status }: { icon: React.ReactNode, title: string, desc: string, color: string, status: string }) {
    return (
        <div className="group relative p-8 rounded-3xl bg-slate-900/40 backdrop-blur-sm border border-slate-800 hover:border-slate-700 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            {/* Gradient Blob on Hover */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 ${color} opacity-0 group-hover:opacity-20 blur-[60px] transition-opacity duration-500 rounded-full pointer-events-none`}></div>

            <div className={`w-14 h-14 rounded-2xl ${color} flex items-center justify-center text-white mb-6 shadow-lg shadow-teal-900/10 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
            </div>

            <div className="mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${status === "Available" ? "bg-teal-900/10 text-teal-400 border-teal-900/30" : "bg-slate-800/50 text-slate-400 border-slate-700"}`}>
                    {status}
                </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-colors">
                {title}
            </h3>

            <p className="text-slate-400 leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">
                {desc}
            </p>

            <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                <span>Learn more</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </div>
        </div>
    )
}
