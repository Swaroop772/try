import Events from "@/components/Events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EventsPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow pt-20">
                <Events />
            </main>
            <Footer />
        </div>
    );
}
