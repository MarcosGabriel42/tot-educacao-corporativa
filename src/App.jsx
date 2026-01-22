import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import InstitutionalSection from "./components/InstitutionalSection";
import TotNews from "./components/TotNews";
import DemoForm from "./components/DemoForm";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner overlayOpacity={0.5} />
        <TotNews />
        <InstitutionalSection />
        <DemoForm />
      </main>

      <Footer />
    </>
  );
}

export default App;
