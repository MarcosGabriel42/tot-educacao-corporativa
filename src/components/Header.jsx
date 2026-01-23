import { useEffect, useState } from "react";

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Detecta scroll para cima ou baixo
      if (currentScrollY < lastScrollY) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
        setMenuOpen(false);
      }

      // Detecta se saiu do topo
      setIsScrolled(currentScrollY > 10);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-300 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{
        backgroundColor:
          isScrolled && showHeader ? "#151616" : "transparent",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="text-xl font-bold">
          TOT Educação
        </div>

        {/* Menu Desktop */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-sm font-medium">
            {[
              "Cursos personalizados",
              "Cursos de prateleira",
              "Plataforma de Aprendizagem",
              "Consultoria",
              "Blog",
              "eBooks",
            ].map((item) => (
              <li
                key={item}
                className="cursor-pointer hover:opacity-80 transition"
              >
                {item}
              </li>
            ))}
          </ul>
        </nav>

        {/* Menu Mobile */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Menu Mobile Dropdown */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{ backgroundColor: "#151616" }}
      >
        <ul className="flex flex-col px-6 pb-4 text-white text-sm font-medium gap-4">
          {[
            "Cursos personalizados",
            "Cursos de prateleira",
            "Plataforma de Aprendizagem",
            "Consultoria",
            "Blog",
            "eBooks",
          ].map((item) => (
            <li
              key={item}
              className="cursor-pointer hover:opacity-80 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
