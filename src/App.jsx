import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />

      {/* Conteúdo fake só pra testar o scroll */}
      <main className="pt-24">
        <div className="h-[2000px] px-6">
          <h1 className="text-3xl font-bold">
            Home - TOT Educação Corporativa
          </h1>
        </div>
      </main>
    </>
  );
}

export default App;
