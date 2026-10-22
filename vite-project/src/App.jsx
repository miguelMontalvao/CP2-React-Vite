
import { useState } from 'react'

function BotaoClicar({ onClick, label = 'Clicar' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-500"
    >
      {label}
    </button>
  )
}

function App() {
  const [cliques, setCliques] = useState(0)

  const aumentar = () => {
    setCliques((valorAnterior) => valorAnterior + 1)
  }

  return (
    <main className="min-h-screen bg-[#1a1d23] px-6 py-8 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-6">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Rêlampago McQueen
        </h1>

        <section className="space-y-5 text-lg leading-relaxed text-slate-200">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-white">Mentor:</h2>
            <p>Doc Hudson - Piloto experiente e mentor de Lightning McQueen "As vezes é preciso virar à direita para ir à esquerda"</p>
          </div>

          <p>
            <span className="font-semibold text-white">Amigo:</span> Matte - Mecânico e amigo leal de Lightning McQueen, sempre pronto para ajudar e oferecer conselhos valiosos. "Não precisa saber para onde está indo se você sabe onde já esteve."
          </p>

          <p>
            <span className="font-semibold text-white">Interesse Rômantico:</span> Sally Carrera - Advogada e interesse romântico de Lightning McQueen, que o incentiva a ser melhor e a valorizar as coisas importantes da vida. "Às vezes, é preciso desacelerar para realmente apreciar a jornada."
          </p>
        </section>

        <div className="mt-8 flex flex-col items-start gap-4">
          <img
            src="./src/assets/lightning_Mcqueen.png"
            alt="Relâmpago McQueen"
            className="h-40 w-auto rounded-xl border border-white/10 bg-white/5 p-2 shadow-lg"
          />

          <div className="flex items-center gap-4">
            <p className="text-lg text-slate-200">Você clicou {cliques} vezes.</p>
            <BotaoClicar onClick={aumentar} label="Clicar" />
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
