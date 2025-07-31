// app/page.tsx
"use client";

import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import ServicesSection from "./components/ServicesSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/TestimonialsSection";
import CustomersSection from "./components/CustomersSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

const Home = () => {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main className="pt-16 sm:pt-20">
                <HeroSection />
                <ServicesSection />
                <ProjectsSection />
                <TestimonialsSection />
                <CustomersSection />
                <AboutSection />
                <ContactSection />
            </main>
            <Footer />
        </div>
    );
};

export default Home;
