import { FaUsers, FaProjectDiagram, FaChartLine } from "react-icons/fa";

export default function StatsSection() {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          
          {/* Coluna 1 */}
          <div className="flex flex-col items-center gap-4">
            <FaUsers size={48} className="text-[#e34926]" />
            <p className="text-4xl font-bold text-[#e34926]">
              +2,5 milhões
            </p>
            <p className="text-gray-700 text-base leading-relaxed max-w-xs">
              de aprendizes impactados com os nossos cursos.
            </p>
          </div>

          {/* Coluna 2 */}
          <div className="flex flex-col items-center gap-4">
            <FaProjectDiagram size={48} className="text-[#e34926]" />
            <p className="text-4xl font-bold text-[#e34926]">
              +1200
            </p>
            <p className="text-gray-700 text-base leading-relaxed max-w-xs">
              projetos entregues para os nossos clientes.
            </p>
          </div>

          {/* Coluna 3 */}
          <div className="flex flex-col items-center gap-4">
            <FaChartLine size={48} className="text-[#e34926]" />
            <p className="text-4xl font-bold text-[#e34926]">
              97%
            </p>
            <p className="text-gray-700 text-base leading-relaxed max-w-xs">
              de engajamento e conclusão dos cursos desenvolvidos pela TOT.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
