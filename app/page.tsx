import React from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Internships from "@/components/Internships";
import Events from "@/components/Events";
import Courses from "@/components/Courses";
import Approvals from "@/components/Approvals";
import { ArrowRight, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-transparent selection:bg-indigo-500 selection:text-white">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
              Future-Proof Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 animate-pulse">
                Career Growth
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up delay-100">
              Bridge the gap between theory and industry with LearnCorp&apos;s premium internships, workshops, and expert-led training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
              <Link
                href="/apply"
                className="px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-teal-500 hover:scale-105 transition-all shadow-lg shadow-teal-500/30 flex items-center justify-center gap-2 group"
              >
                Get Started
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="#courses"
                className="px-8 py-4 bg-slate-800/50 text-white text-lg font-bold rounded-full border border-slate-700 hover:bg-slate-800 hover:border-slate-500 transition-all flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
            <div className="w-6 h-10 border-2 border-slate-700 rounded-full flex justify-center pt-2">
              <div className="w-1 h-2 bg-primary rounded-full animate-scroll"></div>
            </div>
          </div>
        </section>

        {/* Components Integration */}
        <About />
        <Internships />

        {/* Services / Business Activities (Simplified & Styled) */}



        {/* Courses / Business Activities */}
        <Courses />

        <Events />

        <Approvals />

        {/* CTA Section */}
        <section className="py-24 bg-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 to-purple-900/50"></div>
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500 rounded-full blur-[128px] opacity-20"></div>

          <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
            <h2 className="text-3xl md:text-6xl font-bold text-white mb-8">Ready to Transform Your Future?</h2>
            <p className="text-indigo-200 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
              Join thousands of students who have kickstarted their careers with LearnCorp.
            </p>
            <a href="/apply" className="inline-block px-10 py-5 bg-white text-indigo-900 rounded-full font-bold text-xl hover:bg-indigo-50 transition-colors shadow-2xl hover:scale-105 transform duration-300">
              Apply Now
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


