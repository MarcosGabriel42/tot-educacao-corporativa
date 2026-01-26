import InteligenciaEmocional from "../assets/Cursos de Prateleira/Inteligencia-Emocional.jpg";
import ExcelAvancado from "../assets/Cursos de Prateleira/Excel-Avancado.png";
import DesafiosHomeOffice from "../assets/Cursos de Prateleira/Desafios-Home-Office.png";
import PrincipiosCooperativismo from "../assets/Cursos de Prateleira/Principios-Cooperativismo.png";
import MatematicaFinanceira from "../assets/Cursos de Prateleira/Matemática-Financeira.png";
import OrganizacaoAmbienteCorporativo from "../assets/Cursos de Prateleira/Organização-Ambiente-Corporativo.png";
import TomadaDecisao from "../assets/Cursos de Prateleira/Tomada-Decisao.png";
import NR17 from "../assets/Cursos de Prateleira/NR 17.jpg";
import OpenFinance from "../assets/Cursos de Prateleira/Open-Finance.png";
import GestaoAgilProjetos from "../assets/Cursos de Prateleira/Gestao-Agil-Projetos.png";

const courses = [
  { title: "Inteligência Emocional", image: InteligenciaEmocional },
  { title: "Excel Avançado", image: ExcelAvancado },
  { title: "Desafios do Home Office", image: DesafiosHomeOffice },
  { title: "7 Princípios do Cooperativismo", image: PrincipiosCooperativismo },
  { title: "Matemática Financeira", image: MatematicaFinanceira },
  { title: "Organização no Ambiente Corporativo", image: OrganizacaoAmbienteCorporativo },
  { title: "Tomada de Decisão", image: TomadaDecisao },
  { title: "NR 17", image: NR17 },
  { title: "Open Finance", image: OpenFinance },
  { title: "Gestão Ágil de Projetos", image: GestaoAgilProjetos },
];

export default function ShelfCourses() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#151616]">
            Confira os nossos Cursos de Prateleira
          </h2>
        </div>

        {/* Cards */}
        <div
          className="
            flex gap-6 overflow-x-auto pb-6
            snap-x snap-mandatory
            sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
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
                min-w-full snap-center
                sm:min-w-0
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
