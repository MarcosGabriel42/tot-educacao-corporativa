export default function TotNews() {
  return (
    <section className="w-full bg-[#E34926]">
      <div
        className="
          max-w-6xl 
          mx-auto 
          px-6 
          h-[50px] 
          flex 
          items-center 
          justify-center
          text-center
        "
      >
        <p className="text-white text-sm md:text-base leading-tight">
          <strong>TOT News</strong> – A sua nova newsletter sobre Educação
          Corporativa!{" "}
          <u className="cursor-pointer font-semibold">
            Inscreva-se aqui.
          </u>
        </p>
      </div>
    </section>
  );
}
