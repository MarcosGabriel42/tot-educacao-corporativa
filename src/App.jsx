import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import InstitutionalSection from "./components/InstitutionalSection";
import TotNews from "./components/TotNews";
import DemoForm from "./components/DemoForm";
import StatsSection from "./components/StatsSection";
import SolutionsSection from "./components/SolutionsSection";
import ClientsCarousel from "./components/ClientsCarousel";
import FreeMaterial from "./components/FreeMaterial";
import ShelfCourses from "./components/ShelfCourses";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner overlayOpacity={0.5} />
        <TotNews />
        <InstitutionalSection />
        <StatsSection />
        <SolutionsSection />
        <ShelfCourses />
        <FreeMaterial />
        <DemoForm />
        <ClientsCarousel />        
      </main>

      <Footer />
    </>
  );
}

export default App;
