import Internships from "@/components/Internships";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function InternshipsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow pt-20">
                <Internships />
            </main>
            <Footer />
        </div>
    );
}
