
"use client";

import { useState } from "react";

const artigos = [
  {
    emoji: "🧪",
    categoria: "Poções",
    titulo: "A poção que transforma ex em barata",
    descricao:
      "Um mago tentou superar o término e criou uma poção que deu MUITO errado.",
    cor: "from-purple-600 to-fuchsia-950",
  },
  {
    emoji: "🐉",
    categoria: "Criaturas",
    titulo: "Dragão é flagrado roubando Wi-Fi",
    descricao:
      "A criatura usava o fogo para esquentar o roteador. A internet nunca foi tão quente.",
    cor: "from-orange-600 to-red-950",
  },
  {
    emoji: "🔮",
    categoria: "Feitiços",
    titulo: "Feitiço para ficar rico falha miseravelmente",
    descricao:
      "O bruxo invocou 300 moedas. Todas eram de chocolate vencido.",
    cor: "from-blue-600 to-indigo-950",
  },
  {
    emoji: "🐸",
    categoria: "Maldições",
    titulo: "Príncipe encantado pede para continuar sapo",
    descricao:
      "Segundo ele, a vida no pântano é mais barata que pagar aluguel no castelo.",
    cor: "from-green-600 to-emerald-950",
  },
  {
    emoji: "📕",
    categoria: "Objetos",
    titulo: "Grimório começa a cobrar assinatura mensal",
    descricao:
      "Os feitiços avançados agora estão disponíveis apenas no plano Premium Arcano.",
    cor: "from-pink-600 to-rose-950",
  },
  {
    emoji: "🧹",
    categoria: "Objetos",
    titulo: "Vassoura voadora perde a carteira de motorista",
    descricao:
      "A bruxa foi flagrada voando na contramão e estacionando em cima de um dragão.",
    cor: "from-cyan-600 to-blue-950",
  },
];

export default function Home() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todos");
  const [favoritos, setFavoritos] = useState<string[]>([]);

  const categorias = [
    "Todos",
    "Poções",
    "Criaturas",
    "Feitiços",
    "Maldições",
    "Objetos",
  ];

  const filtrados = artigos.filter((artigo) => {
    const correspondeCategoria =
      categoria === "Todos" || artigo.categoria === categoria;

    const correspondeBusca =
      artigo.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      artigo.descricao.toLowerCase().includes(busca.toLowerCase());

    return correspondeCategoria && correspondeBusca;
  });

  return (
    <main className="min-h-screen bg-[#0b0714] text-white">
      {/* NAVBAR */}
      <nav className="border-b border-white/10 bg-black/30">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="text-2xl font-black">
            🔮 Grimório<span className="text-fuchsia-400">.LOL</span>
          </a>

          <a
            href="#artigos"
            className="rounded-xl bg-purple-600 px-5 py-3 text-sm font-bold transition hover:bg-purple-500"
          >
            Ver artigos engraçados ✨
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
          <div>
            <span className="rounded-full border border-fuchsia-400/30 bg-fuchsia-500/10 px-4 py-2 text-xs font-bold text-fuchsia-300">
              ✦ A REVISTA MAIS SUSPEITA DO REINO ✦
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight sm:text-7xl">
              Magia,
              <br />
              caos e
              <br />
              <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-300 bg-clip-text text-transparent">
                fofocas.
              </span>
            </h1>

            <p className="mt-6 max-w-lg leading-7 text-zinc-400">
              Descubra os segredos mais absurdos do mundo mágico. Poções
              duvidosas, dragões problemáticos e bruxos que precisam de terapia.
            </p>

            <a
              href="#artigos"
              className="mt-8 inline-block rounded-xl bg-fuchsia-600 px-7 py-4 font-bold shadow-lg shadow-fuchsia-950/50 transition hover:-translate-y-1 hover:bg-fuchsia-500"
            >
              🪄 Abrir o grimório
            </a>

            <div className="mt-10 flex gap-8 text-sm">
              <div>
                <p className="text-2xl font-black">666</p>
                <p className="mt-1 text-zinc-500">mistérios</p>
              </div>
              <div>
                <p className="text-2xl font-black">∞</p>
                <p className="mt-1 text-zinc-500">maluquices</p>
              </div>
              <div>
                <p className="text-2xl font-black">0%</p>
                <p className="mt-1 text-zinc-500">juízo</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute inset-0 rounded-full bg-purple-600/20 blur-3xl" />

            <div className="relative rounded-[2rem] border border-purple-400/20 bg-gradient-to-br from-purple-500/20 to-fuchsia-950/50 p-10 text-center shadow-2xl">
              <div className="animate-bounce text-8xl">🧙‍♂️</div>

              <h2 className="mt-8 text-2xl font-black">
                O Oráculo está online!
              </h2>

              <p className="mt-4 leading-7 text-zinc-400">
                Sua previsão de hoje: você vai abrir a geladeira 15 vezes
                esperando que apareça comida nova.
              </p>

              <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4 text-sm text-purple-300">
                ✨ Previsão magicamente inútil ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTIGOS */}
      <section
        id="artigos"
        className="border-t border-white/10 bg-white/[0.02]"
      >
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-fuchsia-400">
                📜 Conhecimento proibido
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Artigos <span className="text-purple-400">mágicos</span>
              </h2>

              <p className="mt-3 text-zinc-400">
                Cuidado: ler pode causar risadas inexplicáveis.
              </p>
            </div>

            <input
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
              placeholder="🔍 Buscar maluquices..."
              className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 outline-none transition focus:border-fuchsia-500 md:max-w-xs"
            />
          </div>

          {/* FILTROS */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-2">
            {categorias.map((item) => (
              <button
                key={item}
                onClick={() => setCategoria(item)}
                className={`whitespace-nowrap rounded-full border px-5 py-2 text-sm font-bold transition ${
                  categoria === item
                    ? "border-purple-500 bg-purple-600 text-white"
                    : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* GRID */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtrados.map((artigo) => (
              <article
                key={artigo.titulo}
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br ${artigo.cor} p-6 transition duration-300 hover:-translate-y-2 hover:border-fuchsia-400/50`}
              >
                <div className="absolute inset-0 bg-[#0b0714]/55 transition group-hover:bg-[#0b0714]/35" />

                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-purple-200">
                      {artigo.categoria}
                    </span>

                    <button
                      onClick={() =>
                        setFavoritos((atual) =>
                          atual.includes(artigo.titulo)
                            ? atual.filter((t) => t !== artigo.titulo)
                            : [...atual, artigo.titulo]
                        )
                      }
                      aria-label="Favoritar artigo"
                      className="text-2xl transition hover:scale-125"
                    >
                      {favoritos.includes(artigo.titulo) ? "❤️" : "🤍"}
                    </button>
                  </div>

                  <div className="my-8 text-6xl transition group-hover:rotate-6">
                    {artigo.emoji}
                  </div>

                  <h3 className="text-xl font-black leading-snug">
                    {artigo.titulo}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-zinc-300">
                    {artigo.descricao}
                  </p>

                  <div className="mt-6 border-t border-white/10 pt-4 text-sm text-purple-200">
                    📖 Leitura recomendada para magos sem nada para fazer.
                  </div>
                </div>
              </article>
            ))}
          </div>

          {filtrados.length === 0 && (
            <div className="py-20 text-center">
              <p className="text-5xl">🦄</p>
              <p className="mt-4 text-xl font-bold">
                Nenhuma magia encontrada!
              </p>
              <button
                onClick={() => {
                  setBusca("");
                  setCategoria("Todos");
                }}
                className="mt-5 rounded-xl bg-purple-600 px-5 py-3 font-bold"
              >
                Tentar novamente
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-4xl rounded-3xl border border-fuchsia-400/20 bg-gradient-to-br from-purple-900/50 to-fuchsia-950/30 p-10 text-center md:p-16">
          <div className="text-6xl">🧙‍♀️</div>

          <h2 className="mt-6 text-3xl font-black sm:text-4xl">
            Você chegou ao fim do universo mágico.
          </h2>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-zinc-400">
            Agora vá descansar. Até porque transformar uma abóbora em carruagem
            não vai pagar suas contas.
          </p>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-8 rounded-xl bg-fuchsia-600 px-7 py-4 font-bold transition hover:bg-fuchsia-500"
          >
            🔮 Voltar ao topo
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-zinc-500">
        <p>
          🔮 Grimório.LOL © 2026 — Feito com magia, café e decisões
          questionáveis.
        </p>
        <p className="mt-2">
          Nenhum dragão foi prejudicado na criação destes artigos. 🐉
        </p>
      </footer>
    </main>
  );
}
