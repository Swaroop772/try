"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ApplyPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        position: "Web Development",
        jobId: "", // Optional, in case you want to link specific job IDs later
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [message, setMessage] = useState("");

    const positions = [
        "Web Development",
        "Data Science",
        "AI & ML",
        "App Development",
        "UI/UX Design",
        "Cloud Computing",
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        setMessage("");

        try {
            const res = await fetch("/api/applications", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setMessage("Your application has been submitted successfully! We will contact you soon.");
            setFormData({ name: "", email: "", position: positions[0], jobId: "" });
        } catch (error: any) {
            setStatus("error");
            setMessage(error.message);
        }
    };

    return (
        <div className="min-h-screen flex flex-col theme-blue">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 px-6 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-20 right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] animate-float"></div>
                    <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-[100px] animate-float delay-200"></div>
                </div>

                <div className="container mx-auto max-w-2xl relative z-10">
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold animate-fade-in-up">
                            Join Our Team
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up delay-100">
                            Start Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Journey</span>
                        </h1>
                        <p className="text-slate-400 text-lg animate-fade-in-up delay-200">
                            Apply now for our premium internship programs and take the first step towards your dream career.
                        </p>
                    </div>

                    <div className="glass-dark p-8 md:p-12 rounded-3xl shadow-2xl border border-slate-800/50 animate-fade-in-up delay-300">
                        {status === "success" ? (
                            <div className="text-center py-12">
                                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center text-green-400 mx-auto mb-6 shadow-[0_0_20px_rgba(74,222,128,0.2)]">
                                    <CheckCircle size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Application Received!</h3>
                                <p className="text-slate-400 mb-8">{message}</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-all hover-lift"
                                >
                                    Submit Another
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                {status === "error" && (
                                    <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl flex items-center gap-2">
                                        <AlertCircle size={20} />
                                        {message}
                                    </div>
                                )}

                                <div className="group">
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all hover:border-slate-600"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all hover:border-slate-600"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>

                                <div className="group">
                                    <label htmlFor="position" className="block text-sm font-semibold text-slate-300 mb-2 ml-1">Interested Position</label>
                                    <div className="relative">
                                        <select
                                            id="position"
                                            className="w-full px-5 py-4 rounded-xl bg-slate-900/50 border border-slate-700 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 outline-none transition-all appearance-none cursor-pointer hover:border-slate-600"
                                            value={formData.position}
                                            onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                                        >
                                            {positions.map((pos) => (
                                                <option key={pos} value={pos} className="bg-slate-900 text-white">{pos}</option>
                                            ))}
                                        </select>
                                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6" /></svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={status === "submitting"}
                                        className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all hover-lift flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                                    >
                                        {status === "submitting" ? (
                                            <>Processing...</>
                                        ) : (
                                            <>Submit Application <Send size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                        )}
                                    </button>
                                </div>

                                <p className="text-center text-sm text-slate-500 mt-4">
                                    By submitting, you agree to our Terms of Service and Privacy Policy.
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
