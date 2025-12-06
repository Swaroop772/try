import React from 'react';
import Image from 'next/image';
import { Target, Users, Zap, CheckCircle } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function About() {
    return (
        <section id="about" className="py-20 md:py-28 bg-slate-950 relative overflow-hidden">
            {/* Background blobs - Teal/Slate themed */}
            <div className="absolute -right-20 top-40 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
            <div className="absolute -left-20 bottom-20 w-72 h-72 bg-slate-800/30 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <ScrollReveal animation="slide-in-left" duration={1000}>
                    <div className="relative">
                        <div className="relative z-10 glass-dark rounded-3xl p-8 md:p-12 shadow-2xl bg-slate-900 text-white overflow-hidden transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500 rounded-full blur-[100px] opacity-20"></div>

                            <div className="mb-8 relative w-40 h-14 bg-white rounded-xl p-2 flex items-center justify-center shadow-lg">
                                <Image src="/logo.png" alt="LearnCorp" fill className="object-contain p-2" />
                            </div>
                            <h3 className="text-2xl font-bold mb-6">Why Choose LearnCorp?</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-indigo-500/20 text-indigo-300">
                                        <Target size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Practical Focus</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">We bridge the gap between theory and industry needs with hands-on projects.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-pink-500/20 text-pink-300">
                                        <Users size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Expert Mentorship</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Learn directly from industry veterans who have built scalable systems.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300">
                                        <Zap size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Career Growth</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed">Our internships and workshops are designed to get you hired.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="slide-in-right" duration={1000} delay={200}>
                    <div>
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Who We Are</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-6">
                            Empowering <span className="text-gradient">Interns</span>
                        </h2>
                        <p className="text-slate-400 text-lg mb-6 leading-relaxed">
                            At LearnCorp, empowering interns for future success involves equipping them with the skills, knowledge, and experiences needed to thrive in their careers. Internships serve as a vital bridge between education and industry, allowing individuals to apply theoretical knowledge to real-world challenges.
                        </p>
                        <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                            Through hands-on training, interns develop both technical and soft skills, gaining confidence and adaptability. Mentorship plays a crucial role by offering career guidance, constructive feedback, and fostering a growth mindset.
                        </p>

                        <ul className="space-y-4 mb-8">
                            {[
                                "Bridge between education and industry",
                                "Real-world exposure & problem solving",
                                "Expert Mentorship & Career Guidance",
                                "Networking & Leadership Opportunities"
                            ].map((item, index) => (
                                <li key={index} className="flex items-center gap-3 text-slate-300 font-medium">
                                    <CheckCircle size={20} className="text-primary" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <a href="/about" className="inline-block px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-slate-200 transition-colors">
                            READ MORE
                        </a>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
}
