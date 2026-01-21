import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import Footer from "./components/Footer";
import InstitutionalSection from "./components/InstitutionalSection";

function App() {
  return (
    <>
      <Header />

      <main>
        <HeroBanner overlayOpacity={0.5} />
        <InstitutionalSection />
      </main>

      <Footer />
    </>
  );
}

export default App;
