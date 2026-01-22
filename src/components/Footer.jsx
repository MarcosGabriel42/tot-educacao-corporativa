import { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notRobot, setNotRobot] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim() || !email.trim()) {
      alert("Por favor, preencha nome e email.");
      return;
    }

    if (!notRobot) {
      alert("Confirme que você não é um robô.");
      return;
    }

    alert("Inscrição realizada com sucesso! ✨");

    // limpa o formulário
    setName("");
    setEmail("");
    setNotRobot(false);
  }

  return (
    <footer
      className="w-full mt-20"
      style={{
        backgroundColor: "#151616",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Coluna esquerda */}
          <div>
            <h2 className="text-3xl font-bold mb-6">
              TOT Educação
            </h2>

            <div className="text-sm leading-relaxed space-y-3 text-gray-300">
              <p className="font-semibold text-white">Contato</p>

              <p>
                R. Antônio da Veiga, 419, Sala 10 - Victor Konder,
                Blumenau - SC - 89012-500
              </p>

              <p>(47) 96427-5326</p>
              <p>(47) 3516-4418</p>

              <p>contato@toteduca.com.br</p>
            </div>
          </div>

          {/* Coluna direita */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Se inscreva para receber novidades
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-[#1f1f1f] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />

              {/* Checkbox fictício */}
              <label className="flex items-center gap-2 text-sm text-gray-300">
                <input
                  type="checkbox"
                  checked={notRobot}
                  onChange={(e) => setNotRobot(e.target.checked)}
                  className="accent-orange-500"
                />
                Não sou robô
              </label>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 transition text-white font-semibold py-3 rounded-md"
              >
                Enviar
              </button>
            </form>
          </div>

        </div>

        {/* Linha inferior */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-sm text-gray-400 text-center">
          © {new Date().getFullYear()} TOT Educação Corporativa. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
