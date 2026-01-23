import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import InstitutionalSection from "./components/InstitutionalSection";
import TotNews from "./components/TotNews";
import DemoForm from "./components/DemoForm";
import StatsSection from "./components/StatsSection";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner overlayOpacity={0.5} />
        <TotNews />
        <InstitutionalSection />
        <StatsSection />
        <DemoForm />
      </main>

      <Footer />
    </>
  );
}

export default App;
