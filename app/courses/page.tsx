import Courses from "@/components/Courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CoursesPage() {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50">
            <Navbar />
            <main className="flex-grow pt-20">
                <Courses />
            </main>
            <Footer />
        </div>
    );
}
