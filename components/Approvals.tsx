import React from "react";
import { Award, ShieldCheck, CheckCircle, Star } from "lucide-react";

export default function Approvals() {
    return (
        <section className="py-16 bg-slate-50 border-t border-slate-200">
            <div className="container mx-auto px-6 md:px-12 text-center">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-12 flex items-center justify-center gap-3">
                    <ShieldCheck className="text-primary" size={32} />
                    <span className="uppercase tracking-wide">Approval By</span>
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-center opacity-80 mix-blend-multiply">
                    {/* Using text/icons placeholders as I don't have the actual logo assets. 
                In a real scenario, use Image components here. */}

                    <ApprovalItem icon={<Award size={48} />} label="AICTE" sub="Approved" />
                    <ApprovalItem icon={<ShieldCheck size={48} />} label="MSME" sub="Registered" />
                    <ApprovalItem icon={<CheckCircle size={48} />} label="ISO 9001:2015" sub="Certified" />
                    <ApprovalItem icon={<Star size={48} />} label="IAF" sub="Accredited" />
                </div>
            </div>
        </section>
    );
}

function ApprovalItem({ icon, label, sub }: { icon: React.ReactNode, label: string, sub: string }) {
    return (
        <div className="flex flex-col items-center gap-3 group hover:opacity-100 transition-opacity p-4">
            <div className="text-slate-400 group-hover:text-primary transition-colors duration-300">
                {icon}
            </div>
            <div>
                <div className="text-xl font-bold text-slate-700">{label}</div>
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">{sub}</div>
            </div>
        </div>
    )
}
