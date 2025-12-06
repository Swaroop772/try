import React from 'react';
import { Calendar } from 'lucide-react';
import ScrollReveal from './ui/ScrollReveal';

export default function Events() {
    return (
        <section id="events" className="py-20 md:py-28 bg-slate-950">
            <div className="container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Connect & Learn</span>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mt-2">
                            Internship <span className="text-gradient">Events</span>
                        </h2>
                    </div>
                </div>

                <div className="bg-slate-900/50 backdrop-blur-sm rounded-3xl p-12 text-center border border-slate-800 hover-lift relative overflow-hidden">
                    <div className="inline-flex p-4 rounded-full bg-teal-900/30 text-teal-400 mb-6 animate-pulse">
                        <Calendar size={48} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        UPCOMING EVENT WILL BE PARTICIPATE.
                    </h3>
                    <p className="text-slate-400 text-lg">
                        Explore exciting home internship job events and connect with opportunities.
                    </p>
                    <div className="mt-8">
                        <a href="/events" className="inline-block px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-teal-600 transition-colors">
                            View Details
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
