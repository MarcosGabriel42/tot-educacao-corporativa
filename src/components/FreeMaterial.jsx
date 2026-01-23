import manualImg from "../assets/ManualUniversidadeCorporativa.png";

export default function FreeMaterial() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Coluna esquerda */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#151616]">
            Material Gratuito
          </h2>

          <p className="text-[#151616] text-base md:text-lg mt-6 leading-relaxed">
            Conheça o nosso Manual da Universidade Corporativa. Nele, você
            encontrará os 6 passos para uma implantação de sucesso na sua
            empresa. Aproveite!
          </p>

          <button
            className="mt-8 bg-[#E34926] text-white px-8 py-3 rounded-md font-semibold 
                       hover:bg-[#cc3f20] transition-all duration-300"
          >
            Conheça agora
          </button>
        </div>

        {/* Coluna direita */}
        <div className="flex justify-center md:justify-end">
          <img
            src={manualImg}
            alt="Manual da Universidade Corporativa"
            className="max-w-full h-auto rounded-lg"
          />
        </div>

      </div>
    </section>
  );
}
