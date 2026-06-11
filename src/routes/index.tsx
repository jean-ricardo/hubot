import { useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bot,
  Play,
  Check,
  X,
  MessageCircle,
  Instagram,
  Send,
  Facebook,
  Users,
  LayoutGrid,
  Zap,
  Bell,
  BarChart3,
  Shield,
  Workflow,
  Sparkles,
  ArrowRight,
  Mail,
  MapPin,
  Linkedin,
  Youtube,
} from "lucide-react";
import hubotWhite from "@/assets/hubot-white.png.asset.json";
import hubotBlack from "@/assets/hubot-black.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HUBOT — Atendimento ágil e inteligente para sua empresa" },
      {
        name: "description",
        content:
          "HUBOT é a plataforma SaaS que conecta sua empresa aos clientes via WhatsApp, Instagram e mais — com integração TOTVS, Kanban e múltiplos atendentes.",
      },
      { property: "og:title", content: "HUBOT — Atendimento ágil e inteligente" },
      { property: "og:description", content: "A forma mais ágil e eficiente de conectar sua empresa aos clientes" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navbar />
      <Hero />
      <SocialProof />
      <PainSolution />
      <FeatureZ1 />
      <FeatureZ2 />
      <FeatureZ3 />
      <AdvancedGrid />
      <DemoLead />
      <Pricing />
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

/* -------------------- NAVBAR -------------------- */
function Navbar() {
  const links = [
    { label: "O que é", href: "#sobre" },
    { label: "Funcionalidades", href: "#funcionalidades" },
    { label: "Integração TOTVS", href: "#totvs" },
    { label: "Planos", href: "#planos" },
  ];
  return (
    <header className="sticky top-0 z-40 w-full bg-black/95 backdrop-blur border-b border-white/5">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 py-4">
        <a href="#top" className="flex items-center" aria-label="HUBOT">
          <img src={hubotWhite.url} alt="HUBOT" className="h-36 md:h-44 w-auto -my-10" />
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-[#ffd33d]"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#demo"
          className="inline-flex items-center rounded-md border border-[#ffd33d] px-4 py-2 text-sm font-semibold text-[#ffd33d] transition-all hover:bg-[#ffd33d] hover:text-black hover:shadow-md"
        >
          Teste Grátis
        </a>
      </nav>
    </header>
  );
}

/* -------------------- HERO -------------------- */
function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    sectionRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  return (
    <section
      id="top"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden bg-black text-white"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 211, 61, 0.255), transparent 40%)",
        }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 md:py-24 lg:grid-cols-2">



        <div className="animate-fade-in-up">
          <span className="inline-block rounded-full border border-[#ffd33d] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#ffd33d]">
            O FUTURO DO ATENDIMENTO JÁ COMEÇOU
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            A forma mais ágil e eficiente de{" "}
            <span className="text-[#ffd33d]">conectar sua empresa</span> aos clientes
          </h1>
          <p className="mt-6 max-w-xl text-lg text-gray-400">
            Centralize WhatsApp, Instagram, Telegram e Messenger num único painel. Integre com TOTVS,
            organize com Kanban e venda mais com múltiplos atendentes.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-md bg-[#ffd33d] px-6 py-3.5 text-sm font-bold text-black shadow-md transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,211,61,0.4)]"
            >
              Teste 7 dias grátis
            </a>
            <a
              href="#video"
              className="inline-flex items-center gap-2 rounded-md border border-white/40 bg-transparent px-6 py-3.5 text-sm font-semibold text-white transition-all hover:border-[#ffd33d] hover:-translate-y-1 hover:bg-white/5"
            >
              <Play size={16} fill="currentColor" />
              Ver vídeo na prática
            </a>
          </div>
          <div className="mt-10 flex items-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-2">
              <Check size={14} className="text-[#ffd33d]" /> Sem cartão de crédito
            </span>
            <span className="flex items-center gap-2">
              <Check size={14} className="text-[#ffd33d]" /> Suporte humano
            </span>
          </div>
        </div>

        {/* Right: phone mock with floating integrations */}
        <div className="relative mx-auto flex h-[520px] w-full max-w-md items-center justify-center">
          <div className="relative h-[480px] w-[240px] rounded-[2.5rem] border-[10px] border-gray-800 bg-gray-900 shadow-2xl transition-transform duration-500 ease-out hover:scale-[1.02] hover:-translate-y-2 hover:drop-shadow-[0_0_40px_rgba(255,211,61,0.35)]">
            <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-black" />
            <div className="m-2 mt-6 flex h-[calc(100%-3rem)] flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-[#ffd33d] via-amber-200 to-white">
              <div className="bg-black/90 px-3 py-2 text-[10px] font-semibold text-white flex items-center gap-2">
                <span className="grid h-5 w-5 place-items-center rounded bg-[#ffd33d] text-black">
                  <Bot size={11} />
                </span>
                HUBOT Live
              </div>
              <div className="flex-1 space-y-2 p-3">
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-black px-3 py-2 text-[10px] text-white">
                  Olá! Quero saber sobre os planos.
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[10px] text-gray-900 shadow">
                  Claro! Te envio agora todas as opções 👇
                </div>
                <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[10px] text-gray-900 shadow">
                  <div className="font-semibold">Plano Premium</div>
                  <div className="text-gray-500">{"\n"} 599{"\n"}</div>
                </div>
                <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-black px-3 py-2 text-[10px] text-white">
                  Perfeito! Vamos contratar.
                </div>
              </div>
            </div>
          </div>

          {/* Floating integrations */}
          {[
            { Icon: MessageCircle, cls: "top-4 -left-2 bg-green-500", delay: "0s" },
            { Icon: Instagram, cls: "top-32 -right-2 bg-gradient-to-br from-pink-500 to-purple-600", delay: "1s" },
            { Icon: Send, cls: "bottom-32 -left-4 bg-sky-500", delay: "1.5s" },
            { Icon: Facebook, cls: "bottom-8 -right-4 bg-blue-600", delay: "0.5s" },
          ].map(({ Icon, cls, delay }, i) => (
            <div
              key={i}
              style={{ animationDelay: delay }}
              className={`absolute grid h-14 w-14 place-items-center rounded-2xl text-white shadow-xl animate-float ${cls}`}
            >
              <Icon size={26} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- SOCIAL PROOF -------------------- */
function SocialProof() {
  const logos = [
    "Amigotech", "Locavel", "RM Polímeros", "Bokus", "Autonorte", "Capetro",
    "Foco", "Solplast", "Sport", "Vale - MonteRei", "Edilimp", "Divisão",
    "Fruta Pluss", "Zero Um", "Provider", "Ultra",
  ];
  return (
    <section className="w-full bg-[#ffd33d]">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 py-5 md:flex-row md:gap-8 md:py-6">
        <h3 className="shrink-0 text-center text-base font-bold text-black md:text-left md:text-lg md:max-w-xs">
          Empresas estruturadas com a tecnologia HUBOT:
        </h3>
        <div
          className="relative flex-1 overflow-hidden w-full"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div className="flex w-max animate-marquee whitespace-nowrap">
            {[...logos, ...logos].map((l, i) => (
              <span key={i} className="flex items-center">
                <span className="mx-6 text-lg font-extrabold tracking-tight text-black/80">
                  {l}
                </span>
                <span className="text-black/60">•</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- PAIN vs SOLUTION -------------------- */
function PainSolution() {
  const pains = [
    "WhatsApp desorganizado entre vendedores",
    "Atendentes perdendo conversas importantes",
    "Falta de relatórios e métricas",
    "Clientes esperando horas por uma resposta",
    "Zero integração com seu ERP",
  ];
  const solutions = [
    "Caixa única com múltiplos atendentes",
    "Histórico completo de cada cliente",
    "Dashboards e métricas em tempo real",
    "Respostas rápidas e automações inteligentes",
    "Integração nativa com TOTVS e ERPs",
  ];

  const [spot, setSpot] = useState<{ x: number; y: number } | null>(null);
  const solutionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = solutionRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section id="sobre" className="bg-[#f9fafb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center animate-fade-in-up">
          <span className="text-sm font-bold uppercase tracking-wider text-[#ffd33d]">
            Evolua seu atendimento
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Pare de perder vendas por desorganização
          </h2>
          <p className="mt-4 text-gray-600">
            Veja a diferença entre o caos atual e a sua operação com HUBOT.
          </p>
        </div>

        <div className="group/cards mt-14 grid gap-8 lg:grid-cols-2">
          {/* Card 1 — Sem o HUBOT */}
          <div className="group/pain relative rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-100 transition-all duration-300 group-hover/cards:opacity-40 group-hover/cards:blur-[2px] hover:!opacity-100 hover:!blur-none hover:ring-red-200 hover:shadow-[0_20px_60px_-15px_rgba(239,68,68,0.25)]">
            <div className="mb-6 flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-red-100 text-red-400">
                <X size={26} strokeWidth={3} />
              </span>
              <h3 className="text-2xl font-bold text-gray-900">Sem o HUBOT</h3>
            </div>
            <ul className="space-y-4">
              {pains.map((p, i) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-gray-700 transition-transform duration-300 ease-out group-hover/pain:translate-x-1"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <X size={18} className="mt-1 shrink-0 text-red-500" strokeWidth={3} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2 — Com o HUBOT (Spotlight) */}
          <div
            ref={solutionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setSpot(null)}
            className="group/sol relative overflow-hidden rounded-2xl bg-[#fff8dc] p-8 ring-1 ring-[#ffd33d]/30 shadow-md transition-all duration-300 group-hover/cards:opacity-40 group-hover/cards:blur-[2px] hover:!opacity-100 hover:!blur-none hover:!scale-105 hover:ring-2 hover:ring-[#ffd33d] hover:shadow-xl hover:shadow-yellow-500/20"
          >
            {spot && (
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                style={{
                  background: `radial-gradient(360px circle at ${spot.x}px ${spot.y}px, rgba(255,211,61,0.25), transparent 70%)`,
                }}
              />
            )}
            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#ffd33d] text-black">
                  <Check size={26} strokeWidth={3} />
                </span>
                <h3 className="text-2xl font-bold text-gray-900">Com o HUBOT</h3>
              </div>
              <ul className="space-y-4">
                {solutions.map((s, i) => (
                  <li
                    key={s}
                    className="flex items-start gap-3 text-gray-700 transition-all duration-300 ease-out group-hover/sol:translate-x-2 group-hover/sol:text-gray-900"
                    style={{ transitionDelay: `${i * 60}ms` }}
                  >
                    <Check size={18} className="mt-1 shrink-0 text-green-600" strokeWidth={3} />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* -------------------- FEATURE Z BLOCKS -------------------- */
function VideoPlaceholder({ ratio = "16/9", label }: { ratio?: string; label: string }) {
  return (
    <div
      className="group relative w-full overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black shadow-xl ring-1 ring-black/5 transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)]"
      style={{ aspectRatio: ratio }}
    >
      <div className="absolute inset-0 grid place-items-center">
        <button className="grid h-20 w-20 place-items-center rounded-full bg-[#ffd33d] text-black shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(255,211,61,0.6)]">
          <Play size={32} fill="currentColor" className="ml-1" />
        </button>
      </div>
      <div className="absolute bottom-4 left-4 rounded-md bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur opacity-80 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:-translate-y-1">
        {label}
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,211,61,0.15),transparent_50%)]" />
    </div>
  );
}

function FeatureZ1() {
  return (
    <section id="funcionalidades" className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <VideoPlaceholder label="Painel de atendimento ao vivo" />
        <div className="group/text">
          <span className="inline-block rounded-full bg-[#fff8dc] px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 transition-colors duration-300 ease-out group-hover/text:bg-[#ffe98a]">
            Gestão de equipe
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Múltiplos atendentes em um único número
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Sua equipe inteira atende pelo mesmo WhatsApp, com distribuição automática, transferência
            entre setores e acompanhamento em tempo real do desempenho de cada agente.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Distribuição inteligente de tickets",
              "Transferência entre setores em 1 clique",
              "Relatórios individuais por atendente",
            ].map((i) => (
              <li
                key={i}
                className="group/item flex items-center gap-2 text-gray-700 transition-all duration-300 ease-out hover:translate-x-2 hover:text-black"
              >
                <Check
                  size={18}
                  className="text-green-600 transition-transform duration-300 ease-out group-hover/item:scale-110"
                  strokeWidth={3}
                />{" "}
                {i}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function FeatureZ2() {
  return (
    <section id="totvs" className="bg-gray-50">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <div className="order-2 lg:order-1">
          <span className="inline-block rounded-full bg-[#fff8dc] px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 transition-colors duration-300 ease-out hover:bg-[#ffe98a] hover:text-amber-900">
            Integração
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Integração nativa com TOTVS
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Consulte pedidos, boletos, notas fiscais e estoque diretamente no chat. Seu atendimento
            fala a mesma língua do seu ERP.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Consulta de pedidos em tempo real",
              "Emissão e envio de boletos pelo chat",
              "Atualização automática de cadastros",
              "Sincronização bidirecional",
            ].map((i) => (
              <li
                key={i}
                className="group/item flex items-center gap-2 text-gray-700 transition-all duration-300 ease-out hover:translate-x-2 hover:text-black cursor-default"
              >
                <Check
                  size={18}
                  className="text-green-600 transition-transform duration-300 ease-out group-hover/item:scale-110"
                  strokeWidth={3}
                />{" "}
                {i}
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 lg:order-2">
          <div className="group rounded-3xl bg-white p-10 shadow-xl ring-1 ring-gray-100 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
            <div className="flex items-center justify-between">
              <div className="flex flex-col items-center gap-2">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-green-500 text-white shadow-lg animate-pulse-soft">
                  <MessageCircle size={36} />
                </div>
                <span className="text-sm font-semibold text-gray-700">WhatsApp</span>
              </div>
              <div className="relative flex-1 px-6">
                <div className="h-0.5 w-full bg-gradient-to-r from-green-500 via-[#ffd33d] to-blue-600" />
                <div className="pointer-events-none absolute inset-0 flex items-center">
                  <span className="animate-pingpong group-hover:[animation-duration:1.8s] grid h-10 w-10 place-items-center rounded-full bg-[#ffd33d] text-black shadow-md transition-shadow duration-300 group-hover:shadow-[0_0_15px_#ffd33d]">
                    <Bot size={20} />
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="grid h-20 w-20 place-items-center rounded-2xl bg-blue-600 text-white text-xs font-extrabold tracking-wide shadow-lg animate-pulse-soft [animation-delay:1s]">
                  TOTVS
                </div>
                <span className="text-sm font-semibold text-gray-700">ERP</span>
              </div>
            </div>
            <div className="mt-8 rounded-xl bg-gray-50 p-4 text-center text-sm text-gray-600">
              Dados sincronizados em{" "}
              <span className="font-bold text-gray-900">tempo real</span>
              <span className="ml-2 inline-block h-2 w-2 rounded-full bg-green-500 align-middle animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureZ3() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <VideoPlaceholder ratio="4/3" label="Kanban de atendimentos" />
        <div>
          <span
            className="inline-block rounded-full bg-[#fff8dc] px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-700 transition-colors duration-300 ease-out hover:bg-[#ffe98a] animate-fade-in-up"
            style={{ animationDelay: "0ms" }}
          >
            Organização
          </span>
          <h2
            className="mt-4 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            Kanban Integrado
          </h2>
          <p
            className="mt-4 text-lg text-gray-600 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            Visualize toda a jornada do cliente em colunas arrastáveis. Do primeiro contato ao
            fechamento, com automações de movimentação e alertas inteligentes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* -------------------- ADVANCED GRID -------------------- */
function AdvancedGrid() {
  const cards = [
    { Icon: Zap, title: "Automações", desc: "Fluxos inteligentes que respondem 24/7 sem perder o toque humano." },
    { Icon: Bell, title: "Alertas em tempo real", desc: "Receba notificações sobre clientes parados e SLA estourado." },
    { Icon: BarChart3, title: "Relatórios completos", desc: "Métricas de produtividade, conversão e satisfação." },
    { Icon: Shield, title: "Segurança LGPD", desc: "Criptografia ponta a ponta e conformidade total com a LGPD." },
    { Icon: Workflow, title: "Chatbot com IA", desc: "Bots treinados que entendem contexto e qualificam leads." },
    { Icon: Users, title: "CRM embutido", desc: "Histórico, tags e segmentação de clientes nativo." },
    { Icon: LayoutGrid, title: "API aberta", desc: "Conecte com qualquer sistema da sua operação." },
    { Icon: Sparkles, title: "Respostas prontas", desc: "Biblioteca de mensagens com variáveis dinâmicas." },
  ];
  return (
    <section className="bg-[#fff8dc]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-700">
            Recursos avançados
          </span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl whitespace-pre-line">
            Tudo que sua operação precisa{" "}
            {"\n"}em um só lugar
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl bg-white p-6 shadow-sm border border-transparent transition-all duration-300 ease-out hover:border-[#ffd33d] hover:shadow-lg hover:shadow-yellow-500/10"
            >
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#ffd33d] text-black transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3">
                <Icon size={24} strokeWidth={2.2} />
              </span>
              <h3 className="mt-5 text-lg font-bold text-gray-800 transition-colors duration-300 ease-out group-hover:text-black">{title}</h3>
              <p className="mt-2 text-sm text-gray-500 leading-relaxed opacity-90 transition-opacity duration-300 ease-out group-hover:opacity-100">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------- DEMO LEAD -------------------- */
function DemoLead() {
  return (
    <section id="demo" className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 py-20 lg:grid-cols-2">
        <div>
          <span className="inline-block animate-fade-in-up text-sm font-bold uppercase tracking-wider text-[#ffd33d]" style={{ animationDelay: "0ms" }}>
            DEMONSTRAÇÃO{" "}
          </span>
          <h2 className="mt-3 animate-fade-in-up text-3xl font-extrabold tracking-tight sm:text-4xl" style={{ animationDelay: "100ms" }}>
            Veja como funciona por dentro
          </h2>
          <p className="mt-4 animate-fade-in-up text-gray-400" style={{ animationDelay: "200ms" }}>
            Um especialista mostra a plataforma na prática, com casos reais aplicados ao seu segmento.
          </p>
          <div id="video" className="mt-8">
            <VideoPlaceholder label="Tour completo da plataforma" />
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-2xl bg-white p-8 text-gray-900 shadow-2xl transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
        >
          <h3 className="text-2xl font-extrabold tracking-tight">Solicite uma demonstração</h3>
          <p className="mt-1 text-sm text-gray-500">Resposta em até 1 hora útil.</p>
          <div className="mt-6 space-y-4">
            {[
              { label: "Nome completo", type: "text", placeholder: "Seu nome" },
              { label: "Email corporativo", type: "email", placeholder: "voce@empresa.com" },
              { label: "WhatsApp", type: "tel", placeholder: "(00) 00000-0000" },
              { label: "Empresa", type: "text", placeholder: "Nome da empresa" },
            ].map((f) => (
              <div key={f.label}>
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-600">
                  {f.label}
                </label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="mt-1 w-full rounded-md bg-gray-50 border border-gray-200 px-4 py-3 text-sm transition-colors duration-200 hover:bg-gray-100 focus:bg-white focus:border-[#ffd33d] focus:ring-2 focus:ring-[#ffd33d]/50 focus:outline-none"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="mt-6 w-full rounded-md bg-[#ffd33d] py-4 text-sm font-extrabold uppercase tracking-wider text-black shadow-md transition-all duration-300 ease-out hover:bg-[#e6be2e] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,211,61,0.3)] active:translate-y-0 active:shadow-none"
          >
            Solicitar
          </button>
          <p className="mt-3 text-center text-xs text-gray-500">
            Ao enviar, você concorda com nossa política de privacidade.
          </p>
        </form>

      </div>
    </section>
  );
}

/* -------------------- PRICING -------------------- */
function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "199",
      desc: "Para começar com o pé direito",
      features: ["1 número WhatsApp", "3 atendentes", "Kanban básico", "Suporte por email"],
    },
    {
      name: "Pro",
      price: "399",
      desc: "Para times em crescimento",
      features: ["2 números", "10 atendentes", "Kanban + automações", "Integrações básicas", "Suporte prioritário"],
    },
    {
      name: "Premium",
      price: "599",
      desc: "O mais escolhido pelas equipes",
      highlight: true,
      features: [
        "Números ilimitados",
        "30 atendentes",
        "Integração TOTVS",
        "Chatbot com IA",
        "Relatórios avançados",
        "Suporte 24/7",
      ],
    },
    {
      name: "Enterprise",
      price: "A Consultar",
      desc: "Operações em larga escala",
      features: ["Atendentes ilimitados", "API dedicada", "SLA garantido", "Customizações", "CSM dedicado"],
    },
  ];

  return (
    <section id="planos" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-amber-700">Planos</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl whitespace-pre-line">
            Estruture antes de crescer
            {"\n"}Escolha seu plano
          </h2>
          <p className="mt-4 text-gray-600">{"\n"}</p>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-4">
          {plans.map((p) => {
            const hl = p.highlight;
            return (
              <div
                key={p.name}
                className={`group relative flex flex-col rounded-2xl p-8 transition-all duration-300 ease-in-out ${
                  hl
                    ? "bg-[#ffd33d] shadow-lg lg:scale-105 hover:scale-110 hover:-translate-y-4 hover:shadow-2xl"
                    : "bg-white border border-gray-200 hover:bg-[#ffd33d] hover:-translate-y-2 hover:shadow-xl"
                }`}
              >
                {hl && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-black px-4 py-1 text-xs font-bold uppercase tracking-wider text-[#ffd33d]">
                    Mais popular
                  </span>
                )}
                <h3 className={`text-lg font-bold ${hl ? "text-black" : "text-gray-900"}`}>
                  {p.name}
                </h3>
                <p className={`mt-1 text-sm ${hl ? "text-black/70" : "text-gray-500 group-hover:text-black/70"} transition-colors duration-300`}>{p.desc}</p>
                <div className="mt-6 flex flex-col items-start">
                  <span className={`text-5xl font-extrabold ${hl ? "text-black" : "text-gray-900 group-hover:text-black"} transition-colors duration-300`}>
                    {p.name === "Enterprise" ? "" : " \n "}
                    {p.price}
                  </span>
                  <span className={`text-sm ${hl ? "text-black/70" : "text-gray-500"}`}>
                    {"\n"}
                  </span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${
                        hl ? "text-black" : "text-gray-700 group-hover:text-black"
                      } transition-colors duration-300`}
                    >
                      <Check
                        size={16}
                        strokeWidth={3}
                        className={`mt-0.5 transition-colors duration-300 ${hl ? "text-black" : "text-green-600 group-hover:text-black"}`}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#demo"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-md py-3 text-sm font-bold transition-all duration-300 ${
                    hl
                      ? "bg-black text-white hover:shadow-[0_0_24px_rgba(0,0,0,0.45)] animate-pulse-ring"
                      : "border-2 border-black bg-white text-black group-hover:bg-black group-hover:text-white group-hover:border-black"
                  }`}
                >
                  Contratar
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------- FOOTER -------------------- */
function Footer() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };

  return (
    <footer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Main footer with light spotlight */}
      <div onMouseMove={handleMouseMove} className="relative overflow-hidden bg-[#fff8dc] text-gray-800">
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(0,0,0,0.06), transparent 40%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <a href="#top" className="flex items-center -ml-4 -mt-6" aria-label="HUBOT">
                <img src={hubotBlack.url} alt="HUBOT" className="h-36 w-auto" />
              </a>
              <p className="-mt-4 text-sm leading-relaxed text-gray-700">
                Conectamos empresas e clientes com tecnologia, dados e empatia. O futuro do atendimento
                passa por conversas que importam.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black">Links úteis</h4>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {["Política de privacidade", "Termos de uso", "LGPD", "Política de segurança"].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="inline-block transition-all duration-200 ease-out hover:translate-x-1 hover:text-black hover:font-medium"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black">Contato</h4>
              <ul className="mt-4 space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <MapPin size={16} className="mt-0.5 shrink-0" /> Rua Bruno Veloso 603 - Recife. PE
                </li>
                <li className="flex items-start gap-2">
                  <Mail size={16} className="mt-0.5 shrink-0" /> contato@hubot.com.br
                </li>
                <li className="flex items-start gap-2">
                  <MessageCircle size={16} className="mt-0.5 shrink-0" /> (11) 99999-9999
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold uppercase tracking-wider text-black">Newsletter</h4>
              <p className="mt-4 text-sm text-gray-700">Receba dicas de atendimento e novidades.</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 flex overflow-hidden rounded-md ring-1 ring-gray-300"
              >
                <input
                  type="email"
                  placeholder="seu@email.com"
                  className="flex-1 bg-white/80 px-3 py-2.5 text-sm transition-all duration-300 focus:ring-2 focus:ring-[#ffd33d] focus:bg-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center bg-black px-4 text-[#ffd33d] border-2 border-black transition-all duration-300 ease-out hover:bg-[#ffd33d] hover:text-black hover:border-black"
                >
                  <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar with dark spotlight */}
      <div onMouseMove={handleMouseMove} className="relative overflow-hidden bg-neutral-900">
        <div
          className={`pointer-events-none absolute inset-0 transition-opacity duration-500 ease-in-out ${isHovered ? "opacity-100" : "opacity-0"}`}
          style={{
            background:
              "radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255,211,61,0.15), transparent 70%)",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6">
          <div className="flex flex-col items-start justify-between gap-4 text-xs text-gray-400 sm:flex-row sm:items-center">
            <p>© {new Date().getFullYear()} HUBOT — CNPJ 00.000.000/0001-00. Todos os direitos reservados.</p>
            <div className="flex items-center gap-5">
              {[
                { Icon: Instagram, label: "Instagram" },
                { Icon: Linkedin, label: "LinkedIn" },
                { Icon: Youtube, label: "YouTube" },
                { Icon: Facebook, label: "Facebook" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="text-gray-400 transition-all duration-300 ease-out hover:text-[#ffd33d] hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,211,61,0.8)]"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------- WHATSAPP FAB -------------------- */
function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco no WhatsApp"
      className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#ffd33d] text-black shadow-xl transition-transform hover:scale-110 animate-pulse-ring"
    >
      <MessageCircle size={28} strokeWidth={2.4} />
    </a>
  );
}
