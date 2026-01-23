const solutions = [
  {
    title: "TOT | Cursos Personalizados",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "TOT | Cursos de Prateleira",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
  },
  {
    title: "TOT | Plataforma de Aprendizagem",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
  },
  {
    title: "TOT | Consultoria Educacional",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
