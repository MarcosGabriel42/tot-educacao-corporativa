import { useState } from "react";

export default function DemoForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    empresa: "",
    ajuda: "",
    robo: false,
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.nome ||
      !form.email ||
      !form.empresa ||
      !form.ajuda ||
      !form.robo
    ) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    alert("Enviado com sucesso! ✨");

    // Reset (opcional)
    setForm({
      nome: "",
      email: "",
      empresa: "",
      ajuda: "",
      robo: false,
    });
  }

  return (
    <section
      id="agendar-demo"
      className="w-full bg-[#151616] py-24"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-10">
          Agende uma demonstração
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6"
        >
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none"
          />

          <input
            type="email"
            name="email"
            placeholder="Email corporativo"
            value={form.email}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none"
          />

          <input
            type="text"
            name="empresa"
            placeholder="Qual empresa você trabalha?"
            value={form.empresa}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none"
          />

          <textarea
            name="ajuda"
            placeholder="Como podemos ajudar?"
            rows="4"
            value={form.ajuda}
            onChange={handleChange}
            className="p-4 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none resize-none"
          />

          {/* Checkbox fake */}
          <label className="flex items-center gap-3 text-white text-sm">
            <input
              type="checkbox"
              name="robo"
              checked={form.robo}
              onChange={handleChange}
              className="w-4 h-4"
            />
            Não sou um robô
          </label>

          <button
            type="submit"
            className="mt-6 bg-[#E34926] text-white py-4 rounded-md font-semibold transition hover:opacity-90"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
