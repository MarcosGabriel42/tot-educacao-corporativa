export default function InstitutionalSection() {
  return (
    <section className="w-full bg-[#151616] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold leading-tight">
          Soluções educativas, entrega de conhecimento
          <br />
          e conexão para a sua organização.
        </h2>

        <p className="text-white text-base md:text-lg mt-6 leading-relaxed max-w-4xl mx-auto">
          Conteúdos estratégicos, desenvolvidos para a sua realidade, adaptados
          para os seus colaboradores e personalizados para sua empresa. Com a
          TOT, o cliente nunca anda sozinho.
        </p>

        <div className="mt-10">
          <a
            href="#agendar-demo"
            className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:border-[#E34926] hover:bg-[#E34926] hover:text-[#FFFFFF]">
            Agende uma demonstração
          </a>
        </div>
      </div>
    </section>
  );
}
