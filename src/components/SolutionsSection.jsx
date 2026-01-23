const solutions = [
  {
    title: "TOT | Cursos Personalizados",
    image: "src/assets/Cursos-Personalizados.png",
  },
  {
    title: "TOT | Cursos de Prateleira",
    image: "src/assets/Cursos-Prateleira.png",
  },
  {
    title: "TOT | Plataforma de Aprendizagem",
    image: "src/assets/Plataforma-Aprendizagem.png",
  },
  {
    title: "TOT | Consultoria Educacional",
    image: "src/assets/Consultoria-Educacional.png",
  },
];

export default function SolutionsSection() {
  return (
    <section className="w-full bg-[#151616] py-24">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Soluções com propósito
          </h2>
          <p className="text-white mt-4 text-base md:text-lg">
            Entender o contexto, personalizar a jornada e caminhar lado a lado.
          </p>
        </div>

        {/* Cards */}
        <div
          className="
            flex gap-6 overflow-x-auto pb-4
            snap-x snap-mandatory
            sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none
            lg:grid-cols-4
          "
        >
          {solutions.map((item, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-xl
                cursor-pointer
                transition-all
                duration-500
                hover:shadow-[0_0_30px_rgba(227,73,38,0.45)]
                min-w-full snap-center
                sm:min-w-0
              "
            >
              {/* Imagem */}
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-[260px]
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Texto */}
              <div className="absolute inset-0 flex items-end">
                <h3 className="text-white text-lg font-semibold p-6">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
