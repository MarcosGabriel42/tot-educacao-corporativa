const courses = [
  {
    title: "Inteligência Emocional",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
  },
  {
    title: "Excel Avançado",
    image: "https://cdn.eadplataforma.app/client/edson/upload/crop/product/photo/cd9021ee6ad317947926ecc66e62f204_97png.png-product-photo-detail.png",
  },
  {
    title: "Desafios do Home Office",
    image: "https://images.unsplash.com/photo-1587614203976-365c74645e83",
  },
  {
    title: "7 Princípios do Cooperativismo",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
  },
  {
    title: "Matemática Financeira",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
  },
  {
    title: "Organização no Ambiente Corporativo",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  },
  {
    title: "Tomada de Decisão",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
  },
  {
    title: "NR 17",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
  },
  {
    title: "Open Finance",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6",
  },
  {
    title: "Gestão Ágil de Projetos",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
  },
];

export default function ShelfCourses() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#151616]">
            Confira os nossos Cursos de Prateleira
          </h2>
        </div>

        {/* Grid 5x2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {courses.map((course, index) => (
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
                src={course.image}
                alt={course.title}
                className="
                  w-full
                  h-[373px]
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Texto */}
              <div className="absolute inset-0 flex items-end">
                <h3 className="text-white text-lg font-semibold p-6">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Botão */}
        <div className="flex justify-center mt-16">
          <button
            className="
              bg-[#E34926]
              text-white
              px-10
              py-3
              rounded-md
              font-semibold
              hover:bg-[#cc3f20]
              transition-all
              duration-300
            "
          >
            Ver mais
          </button>
        </div>
      </div>
    </section>
  );
}
