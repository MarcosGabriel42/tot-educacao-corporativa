export default function HeroBanner({
  overlayOpacity = 0.5,
}) {
  return (
    <section className="w-full flex justify-center">
      <div
        className="relative w-full h-[500px] overflow-hidden"
      >
        {/* Imagem */}
        <img
          src="src/assets/HeroBanner.png"
          alt="Equipe focada"
          className="w-full h-full object-cover"
        />

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />

        {/* Texto */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-10">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              O conteúdo é estratégico.
              <br />
              A entrega, humana.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
