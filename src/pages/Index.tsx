import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlansSection from "@/components/PlansSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <PlansSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
