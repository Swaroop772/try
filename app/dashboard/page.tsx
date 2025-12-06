"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2, Search, Briefcase, Clock, CheckCircle, XCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

interface Application {
    id: string;
    status: string;
    appliedAt: string;
    job: {
        title: string;
        description: string;
    };
}

export default function DashboardPage() {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [applications, setApplications] = useState<Application[] | null>(null);

    const fetchApplications = async (e?: React.FormEvent) => {
        if (e) e.preventDefault();
        if (!email) return;

        setLoading(true);
        try {
            const res = await fetch(`/api/applications?email=${encodeURIComponent(email)}`);
            if (res.ok) {
                const data = await res.json();
                setApplications(data);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "ACCEPTED": return "text-green-600 bg-green-100 border-green-200";
            case "REJECTED": return "text-red-600 bg-red-100 border-red-200";
            default: return "text-yellow-600 bg-yellow-100 border-yellow-200";
        }
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "ACCEPTED": return <CheckCircle size={16} />;
            case "REJECTED": return <XCircle size={16} />;
            default: return <Clock size={16} />;
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-muted/30">
            <Navbar />

            <main className="flex-grow pt-32 pb-20 container mx-auto px-6">
                <div className="max-w-4xl mx-auto">
                    <header className="mb-10 text-center md:text-left">
                        <h1 className="text-3xl font-bold mb-2">Application Tracking</h1>
                        <p className="text-muted-foreground">Check the status of your applications in real-time.</p>
                    </header>

                    {/* Search Box */}
                    <div className="bg-card p-6 rounded-2xl border border-border shadow-sm mb-8">
                        <form onSubmit={fetchApplications} className="flex flex-col md:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email to track applications..."
                                className="flex-grow px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="submit"
                                disabled={loading || !email}
                                className="px-8 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                            >
                                {loading ? <Loader2 className="animate-spin" /> : <Search size={20} />}
                                Track Status
                            </button>
                        </form>
                    </div>

                    {/* Results */}
                    <div className="space-y-4">
                        {applications && applications.length === 0 && (
                            <div className="text-center py-12 text-muted-foreground">
                                No applications found for {email}. <a href="/apply" className="text-primary hover:underline">Apply now?</a>
                            </div>
                        )}

                        <AnimatePresence>
                            {applications?.map((app, index) => (
                                <motion.div
                                    key={app.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/20 rounded-xl flex items-center justify-center text-primary flex-shrink-0">
                                            <Briefcase size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-lg">{app.job.title}</h3>
                                            <p className="text-sm text-muted-foreground">Applied on {new Date(app.appliedAt).toLocaleDateString()}</p>
                                        </div>
                                    </div>

                                    <div className={cn(
                                        "px-4 py-2 rounded-full border text-sm font-semibold flex items-center gap-2",
                                        getStatusColor(app.status)
                                    )}>
                                        {getStatusIcon(app.status)}
                                        {app.status}
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
