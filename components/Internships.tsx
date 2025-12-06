import React from 'react';
import { Globe, Smartphone, Server, PenTool, Laptop } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

const domains = [
    {
        id: 1,
        title: "Web Development",
        icon: <Globe size={28} />,
        desc: "Master modern web technologies and build responsive sites.",
    },
    {
        id: 2,
        title: "App Development",
        icon: <Smartphone size={28} />,
        desc: "Create mobile applications for Android and iOS platforms.",
    },
    {
        id: 4,
        title: "Computer Network",
        icon: <Server size={28} />,
        desc: "Understand network architecture, security, and protocols.",
    },
    {
        id: 5,
        title: "UI/UX Design",
        icon: <PenTool size={28} />,
        desc: "Design user-friendly interfaces and enhance user experiences.",
    },
    {
        id: 3,
        title: "Online Internship",
        icon: <Laptop size={28} />,
        desc: "Apply for our exciting Online internship today.", // Matches site text snippet
    },
];

export default function Internships() {
    return (
        <section id="internships" className="py-24 bg-slate-950 border-y border-slate-900">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <span className="text-primary font-bold tracking-wider uppercase text-xs">Our Programs</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-6">
                        Internship Opportunities
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Register the domain for your internship.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                    {domains.map((domain, index) => (
                        <ScrollReveal key={domain.id} animation="fade-up" delay={index * 100}>
                            <div
                                className="bg-slate-900/50 backdrop-blur-sm p-8 rounded-lg border border-slate-800 shadow-sm hover-lift hover:border-primary/50 group cursor-pointer h-full"
                            >
                                <div className="w-12 h-12 rounded-lg bg-slate-800 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {domain.icon}
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">
                                    {domain.title}
                                </h3>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {domain.desc}
                                </p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
