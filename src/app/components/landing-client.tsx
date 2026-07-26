'use client'

import { motion } from "framer-motion";
import {
    Shield, Smartphone, Users, Bell, KeyRound, Mail, Calendar,
    CheckCircle2, Lock, Zap, ArrowRight, Radar, Fingerprint, Plus, Briefcase, Truck, LayoutGrid, GraduationCap, Building2, Link, Phone, QrCode, BarChart3, Camera, Wifi, ClipboardList
} from "lucide-react";
import screenLogin from "@/assets/login.png";
import screenHome from "@/assets/home.png";
import screenVisitors from "@/assets/visitante.png";
import screenCorrespondencia from "@/assets/correspondencia.png";
import SplineScene from "@/app/components/ui/spline";
import WhatsAppFloat from '@/app/components/ui/Whatsappfloat'
import { useState } from "react";
import CountUp from "react-countup";
import Footer from "@/app/footer";

const features = [
    { icon: Link, title: "Convite Facial por Link", desc: "Envie um link de convite que captura o rosto do visitante antes da chegada. Entrada autorizada sem contato humano no posto." },
    { icon: Phone, title: "Chamadas VoIP", desc: "Comunicação em tempo real entre portaria, moradores e visitantes direto pelo app, sem custo de telefonia." },
    { icon: QrCode, title: "QR Code Dinâmico", desc: "Códigos de acesso gerados com validade configurável, uso único ou recorrente. Sem impressão, sem reaproveitamento indevido" },
    { icon: BarChart3, title: "Relatórios em Tempo Real", desc: "Dashboard completo com fluxo de entradas, ocorrências, tempo médio de triagem e auditoria exportável." },
    { icon: Camera, title: "Reconhecimento Facial", desc: "Identificação biométrica integrada a câmeras e controladores de acesso dos principais fabricantes do mercado." },
    { icon: KeyRound, title: "Abertura Remota de Portões", desc: "Libere cancelas, portas e catracas com um toque, de qualquer lugar, com log de ação registrado automaticamente." },
    { icon: Users, title: "Gestão de Visitantes", desc: "Cadastre e gerencie familiares, prestadores e recorrentes com permissões granulares por horário e setor." },
    { icon: Bell, title: "Notificações de Correspondência", desc: "Aviso instantâneo ao morador quando uma encomenda chega ao posto, com foto e confirmação de retirada." },
    { icon: Calendar, title: "Agenda e Reservas", desc: "Controle de áreas comuns, eventos internos e comunicados em tempo real para toda a unidade." },
    { icon: Shield, title: "Registro Seguro e Auditoria", desc: "Histórico imutável de acessos com autenticação em dois fatores e criptografia ponta a ponta." },
    { icon: Wifi, title: "Integração IoT", desc: "Compatível com leitores de tag, biometria, LPR e dispositivos IoT dos principais fabricantes globais." },
    { icon: Lock, title: "Controle de Setores Restritos", desc: "Defina zonas de acesso por perfil, horário e credencial. Ideal para industriais, docas e áreas técnicas." },
    { icon: ClipboardList, title: "Pré-cadastro de Prestadores", desc: "Fluxo digital de autorização prévia para obras, manutenções e entregas, com validade programada." },
    { icon: Zap, title: "Automação de Fluxo", desc: "Regras automáticas de liberação por reconhecimento, placa ou tag, sem intervenção do operador." },
    { icon: Mail, title: "Convites Digitais", desc: "Envie convites com QR code, data e validade configurável. Rastreie confirmações e acessos em tempo real." },
];

// ---------------------------------------------------------------------------
// FAQ Data
// ---------------------------------------------------------------------------

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "Como funciona o modelo comercial da plataforma?",
        answer:
            " Nossa plataforma opera exclusivamente no modelo B2B (Business to Business). Nós não vendemos diretamente para condomínios ou usuários finais. Fornecemos a tecnologia e a infraestrutura em nuvem para que a sua empresa comercialize, implante e gerencie os projetos locais, retendo 100% da margem de lucro.",
    },
    {
        question: "O sistema é realmente White Label? Como funciona a personalização? ",
        answer:
            "Sim, nossa solução é genuinamente White Label. O aplicativo nas lojas (Google Play e App Store) e o painel administrativo Web levarão o nome, logotipo e as cores da sua empresa. Para o mercado, a tecnologia pertence a você.",
    },
    {
        question: "Preciso pagar alguma taxa de adesão ou fidelidade?",
        answer:
            "Não. Não cobramos taxa de implantação (setup) e não exigimos fidelidade contratual. Nosso faturamento é sob demanda: você paga apenas pelos apartamentos ou usuários ativos no mês.",
    },
    {
        question: "Quais modelos de portaria o sistema suporta?",
        answer:
            "O sistema atende perfeitamente a três modelos: Portaria Remota(centralizada na sua empresa), Portaria Autônoma (morador gerencia tudo direto pelo app com tecnologia VoIP nativa) e Portaria Presencial (painel web moderno para porteiros físicos).",
    },
    {
        question: "O software é compatível com quais marcas de hardware? ",
        answer:
            "Nosso sistema é agnóstico. Possui integração nativa com os principais fabricantes do mercado (Intelbras, Control iD, Hikvision, Nice, entre outros) para leitores faciais, biometrias, antenas RFID e LPR.",
    },
    {
        question: "Como a plataforma lida com a LGPD e a segurança dos dados?",
        answer:
            "oda a nossa infraestrutura está hospedada na AWS (Amazon Web Services) com servidores no Brasil. Os dados são criptografados de ponta a ponta e operam em total conformidade com as exigências da Lei Geral de Proteção de Dados (LGPD).",
    },
    {
        question: "Como funciona o suporte técnico para o integrador?",
        answer:
            "Oferecemos suporte técnico especializado e humanizado focado na sua equipe de TI e operação. Sem robôs ou respostas automáticas quando você precisa resolver cenários críticos em tempo real.",
    },
];

// ---------------------------------------------------------------------------
// FAQ Sub-components
// ---------------------------------------------------------------------------

interface FAQRowProps {
    item: FAQItem;
    index: number;
    isOpen: boolean;
    onToggle: () => void;
}

const logo = '/assets/logo.png'
const screenDownload = '/assets/download.png'
const controlid = '/assets/icons/controlid.svg'
const hikivision = '/assets/icons/hikvision.svg'
const intelbras = '/assets/icons/intelbras.svg'
const nice = '/assets/icons/nice.png'
const zk_teco = '/assets/icons/zk-teco.png'
const system = '/assets/system.svg'

function FAQRow({ item, index, isOpen, onToggle }: FAQRowProps) {
    return (
        <div
            className={[
                "group border-b transition-colors duration-300",
                "border-[var(--secondary)]/20",
                isOpen ? "bg-[var(--secondary)]/10" : "hover:bg-[var(--secondary)]/5",
            ].join(" ")}
        >
            <button
                type="button"
                onClick={onToggle}
                aria-expanded={isOpen}
                className="w-full flex items-start gap-5 px-6 py-5 text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--secondary)]"
            >
                <span
                    className={[
                        "shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-lg font-bold mt-0.5 transition-colors duration-300",
                        isOpen
                            ? "bg-[var(--secondary)] text-[var(--secondary-foreground)]"
                            : "bg-[var(--secondary)]/20 text-[var(--muted-foreground)] group-hover:bg-[var(--secondary)]/40",
                    ].join(" ")}
                >
                    {String(index + 1).padStart(2, "0")}
                </span>

                <span
                    className={[
                        "flex-1 text-lg font-medium leading-snug transition-colors duration-200",
                        isOpen
                            ? "text-[var(--foreground)]"
                            : "text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]",
                    ].join(" ")}
                >
                    {item.question}
                </span>

                <span
                    className={[
                        "shrink-0 ml-2 mt-0.5 transition-transform duration-300",
                        isOpen ? "rotate-45 text-[var(--accent)]" : "rotate-0 text-[var(--muted-foreground)]",
                    ].join(" ")}
                >
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="9" y1="2" x2="9" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </span>
            </button>

            <div
                className={[
                    "overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
                ].join(" ")}
            >
                <p className="px-6 pb-5 pl-[4.5rem] text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {item.answer}
                </p>
            </div>
        </div>
    );
}



// ---------------------------------------------------------------------------
// Landing
// ---------------------------------------------------------------------------

function Landing() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const logos = [
        { src: controlid, alt: 'Control iD' },
        { src: hikivision, alt: 'Hikvision' },
        { src: intelbras, alt: 'Intelbras' },
        { src: nice, alt: 'nice' },
        { src: zk_teco, alt: 'ZK Teco' }
    ];

    const doubled = [...logos, ...logos, ...logos, ...logos];

    const [showAll, setShowAll] = useState(false);
    const visibleFeatures = showAll ? features : features.slice(0, 6);

    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
            {/* Global ambient mesh */}
            <div className="fixed inset-0 pointer-events-none -z-10 opacity-60"
                style={{ background: "var(--gradient-mesh)", filter: "blur(120px)" }}
            />
            <div className="fixed inset-0 pointer-events-none -z-10"
                style={{
                    backgroundImage: "linear-gradient(oklch(1 0 0 / 0.04) 1px, transparent 1px), linear-gradient(90deg, oklch(1 0 0 / 0.04) 1px, transparent 1px)",
                    backgroundSize: "48px 48px",
                }}
            />

            {/* NAV */}
            <header className="fixed top-4 inset-x-0 z-50 px-4">
                <div className="max-w-7xl mx-auto rounded-2xl backdrop-blur-2xl bg-background/40 border border-primary/20 hud-corners shadow-[var(--shadow-hud)]">
                    <div className="px-6 h-14 flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                            <div className="flex flex-col leading-none max-w-[160px] mr-4">
                                <a href="#hero">
                                    <img src={logo} />
                                </a>

                            </div>
                        </div>
                        <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-muted-foreground tracking-wide uppercase">
                            <a href="#features" className="hover:text-primary-glow transition">Sistemas</a>
                            <a href="#preview" className="hover:text-primary-glow transition">Interface</a>
                            <a href="#how" className="hover:text-primary-glow transition">Protocolo</a>
                            <a href="#faq" className="hover:text-primary-glow transition">FAQ</a>
                        </nav>
                        <a href="https://wa.me/5534992318655"
                            target="_blank" className=" inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-bold uppercase tracking-wider px-2 sm:px-4 py-2 rounded-full bg-[var(--gradient-primary)] text-primary-foreground hover:scale-105 transition-transform shadow-[var(--shadow-glow)]">
                            Seja nosso parceiro <ArrowRight className="h-3.5 w-3.5" />
                        </a>
                    </div>
                </div>
            </header>

            {/* HERO */}
            <section className="relative pt-36 pb-28 overflow-hidden" style={{ background: "var(--gradient-hero)" }} id="hero">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-primary-glow to-transparent animate-hud-scan opacity-70" />
                </div>
                <div className="absolute -right-40 top-20 w-[600px] h-[600px] pointer-events-none opacity-30 animate-hud-rotate">
                    <div className="absolute inset-0 rounded-full border border-primary-glow/40" />
                    <div className="absolute inset-10 rounded-full border border-primary-glow/30 border-dashed" />
                    <div className="absolute inset-24 rounded-full border border-accent/40" />
                </div>
                <div className="absolute top-20 -left-20 h-96 w-96 rounded-full bg-primary/40 blur-[140px]" />
                <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-accent/30 blur-[140px]" />

                <div className="relative max-w-7xl mx-auto px-6 flex flex-col lg:grid lg:grid-cols-12 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-7"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/15 border border-primary-glow/40 text-[11px] font-semibold text-primary-glow mb-6 backdrop-blur-md tracking-[0.2em] uppercase shadow-[var(--shadow-hud)]">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-glow opacity-75" />
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-glow" />
                            </span>
                            SINTAC!
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-4xl font-black tracking-tighter leading-[0.95] mb-6">
                            Sua Marca. {" "}

                            <span className="text-gradient-primary animate-shimmer" style={{ backgroundImage: "linear-gradient(90deg, oklch(0.32 0.14 20), oklch(0.65 0.18 20), oklch(0.32 0.14 20))" }}>
                                Nossa Tecnologia
                            </span>
                        </h1>
                        <h3
                            className="text-4xl sm:text-5xl font-black tracking-tighter text-[var(--foreground)] mb-4"
                        >
                            Potencialize sua empresa de segurança com a plataforma de{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, var(--brand-wine-light), var(--accent), var(--brand-wine-light))",
                                }}
                            >
                                Controle de Acesso mais completa do mercado.
                            </span>
                        </h3>

                        <p className="flex-wrap text-lg md:text-xl text-muted-foreground max-w-xl mb-8 leading-relaxed">
                            Um ecossistema 100% em nuvem e Totalmente White Label. Coloque sua marca no aplicativo e no painel web, elimine custos de infraestrutura e ofereça tecnologia de ponta para condomínios e empresas.
                        </p>
                        <div className="flex flex-wrap gap-3">
                            <a href="#faq" className="group relative inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--gradient-primary)] text-primary-foreground font-bold uppercase tracking-wider text-sm shadow-[var(--shadow-glow)] hover:scale-[1.03] transition-transform">
                                <Zap className="h-4 w-4" /> Conhecer a Plataforma
                            </a>
                            <a
                                href="https://wa.me/5534992318655"
                                target="_blank"
                                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-primary-glow/40 bg-card/30 backdrop-blur-md hover:bg-card/60 transition text-sm font-semibold uppercase tracking-wider">
                                <Radar className="h-4 w-4 text-primary-glow" /> Falar com um Especialista
                            </a>
                        </div>
                        <div className="grid grid-cols-3 gap-8 smpt-10 max-w-3xl mx-auto lg:mx-0 mt-12">
                            <div className="space-y-2">
                                <div className="text-4xl font-bold text-primary">

                                    <CountUp end={100} duration={5} />

                                    <span>0</span>

                                    <span>+</span>
                                </div>
                                <div className="text-sm text-muted-foreground">Clientes</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-bold text-primary">

                                    <CountUp end={5} duration={5} />



                                    <span>+</span>
                                </div>
                                <div className="text-sm text-muted-foreground">Anos de serviço</div>
                            </div>
                            <div className="space-y-2">
                                <div className="text-4xl font-bold text-primary">

                                    <CountUp end={5} duration={5} />

                                    <span>0</span>

                                    <span>+</span>
                                </div>
                                <div className="text-sm text-muted-foreground">Localidades</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative mx-auto w-[500px] md:w-[700px] h-[700px] rounded-full">
                            <div className="absolute -inset-16 bg-primary/40 blur-3xl rounded-full animate-hud-pulse" />
                            <div className="absolute -inset-12 rounded-full border border-primary-glow/30 animate-hud-rotate" style={{ animationDuration: "20s" }}>
                                <Plus className="absolute -top-2 left-1/2 -translate-x-1/2 h-4 w-4 text-primary-glow" />
                                <Plus className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-4 w-4 text-primary-glow" />
                                <Plus className="absolute top-1/2 -left-2 -translate-y-1/2 h-4 w-4 text-primary-glow" />
                                <Plus className="absolute top-1/2 -right-2 -translate-y-1/2 h-4 w-4 text-primary-glow" />
                            </div>
                            <SplineScene style={{ width: '100%', height: '100%', position: 'absolute' }} />
                        </div>
                    </motion.div>
                </div>
            </section>

            <section id="features" className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[110px]" />
                <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-primary-glow/10 rounded-full blur-[110px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.08),transparent_45%)]" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Cabeçalho */}
                    <div className="text-center space-y-4 mb-14">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary-glow/20 backdrop-blur-sm">
                            <span className="text-sm text-primary-glow font-medium uppercase tracking-wider">• Funcionalidades •</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                            <span className="text-foreground">Recursos avançados para gerenciar qualquer condomínio com </span>
                            <span className="text-secondary">
                                facilidade
                            </span>
                            <span className="text-foreground">.</span>
                        </h2>
                    </div>

                    {/* Grid de cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
                        {visibleFeatures.map((f, i) => (
                            <motion.div
                                key={f.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.05 }}
                                className="group relative overflow-hidden rounded-3xl bg-black/20 shadow-2xl shadow-black/30 border border-primary-glow/15 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-glow/50 p-7"
                            >
                                <div className="absolute top-3 right-3 font-mono text-[10px] text-primary-glow/50 tracking-widest">
                                    {String(i + 1).padStart(3, "0")}
                                </div>
                                <div className="relative h-12 w-12 rounded-xl bg-primary/15 border border-primary-glow/40 grid place-items-center mb-5 group-hover:bg-[var(--gradient-primary)] group-hover:border-transparent transition shadow-[var(--shadow-hud)]">
                                    <f.icon className="h-5 w-5 group-hover:text-primary-foreground transition" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
                                <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary-glow/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                            </motion.div>
                        ))}
                    </div>

                    {/* Botão mostrar mais */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col items-center gap-3 mt-10"
                    >
                        {!showAll && (
                            <p className="text-xs text-muted-foreground">
                                Exibindo <span className="text-primary-glow font-medium">6</span> de{" "}
                                <span className="text-primary-glow font-medium">{features.length}</span> funcionalidades
                            </p>
                        )}
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-primary-glow/30 bg-black/20 backdrop-blur-sm text-sm font-medium text-primary-glow hover:border-primary-glow/60 hover:bg-card/40 transition-all duration-200"
                        >
                            {showAll ? "Mostrar menos" : "Mostrar todas as funcionalidades"}
                            <span className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}>
                                ↓
                            </span>
                        </button>
                    </motion.div>

                </div>
            </section>

            {/* STATS / INTEGRAÇÕES */}
            <section className="relative border-y border-primary-glow/20 bg-card/20 backdrop-blur-xl overflow-hidden py-16">

                {/* Cabeçalho */}
                <div className="max-w-3xl mx-auto text-center mb-12 px-6">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <span className="h-px w-12 bg-primary-glow/40" />
                        <span className="text-[18px] uppercase tracking-[0.3em] text-primary-glow/70 font-mono">
                            Integrações
                        </span>
                        <span className="h-px w-12 bg-primary-glow/40" />
                    </div>

                    <h2 className="text-2xl md:text-4xl font-semibold text-foreground leading-snug mb-4">
                        Tecnologia compatível com o que você{" "}
                        <span className="text-primary-glow">já usa em campo.</span>
                    </h2>

                    <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Esqueça travas de hardware. Nossa plataforma possui integrações nativas com os principais
                        fabricantes de hardware de reconhecimento facial, biometria, leitura de placas (LPR),
                        tags e dispositivos IoT do mundo.
                    </p>
                </div>

                {/* Carrossel */}
                <div className="max-w-5xl mx-auto overflow-hidden" id="integracoes-mask">
                    <div id="integracoes-track">
                        {doubled.map((logo, i) => (
                            <div key={i} className="flex items-center justify-center px-10 py-4">
                                <img
                                    src={logo.src}
                                    alt={logo.alt}
                                    className="h-16 w-auto object-contain transition-all duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </section>


            {/* APLICAÇÃO */}
            <section id="features" className="relative py-24 md:py-32 overflow-hidden">
                <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[110px]" />
                <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-primary-glow/10 rounded-full blur-[110px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.08),transparent_45%)]" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Cabeçalho */}
                    <div className="text-center space-y-4 mb-14">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary-glow/20 backdrop-blur-sm">
                            <span className="text-sm text-primary-glow font-medium uppercase tracking-wider">• Para quem •</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black leading-tight tracking-tighter">
                            <span className="text-foreground">Para quem foi feito e onde </span>
                            <span className="bg-gradient-to-r from-secondary via-secondary to-secondary bg-clip-text text-transparent">
                                aplicar
                            </span>
                            <span className="text-foreground"> a sua nova plataforma?</span>
                        </h2>
                    </div>

                    <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6">

                        {/* Quadro A — Para Quem é */}
                        <motion.div
                            initial={{ opacity: 0, x: -24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="rounded-3xl border border-primary-glow/20 bg-black/20 backdrop-blur-xl p-8"
                        >
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-glow uppercase tracking-[0.25em] mb-6">
                                <span className="h-px w-6 bg-primary-glow" /> Seu cliente direto
                            </div>
                            <h3 className="text-xl font-black mb-6 leading-snug">
                                Para quem é
                            </h3>

                            <div className="space-y-5">
                                {[
                                    {
                                        t: "Empresas de Monitoramento e Controle de Acesso",
                                        d: "Centralize sua operação em um único ecossistema em nuvem, otimize o tempo dos seus operadores e reduza o consumo de infraestrutura local.",
                                    },
                                    {
                                        t: "Integradores de Segurança Eletrônica",
                                        d: "Pare de revender marcas de terceiros. Crie seu próprio patrimônio tecnológico, agregue valor recorrente e garanta contratos de longo prazo.",
                                    },
                                    {
                                        t: "Empresas de Facilidades e Portaria Presencial",
                                        d: "Modernize a mão de obra alocada nos postos. Substitua processos manuais por uma triagem digital rápida e livre de falhas humanas.",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 1, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                                        className="flex gap-4 p-4 rounded-2xl border border-transparent hover:border-primary-glow/25 hover:bg-card/30 transition-all duration-300 group"
                                    >
                                        <div className="font-mono text-2xl font-black text-secondary opacity-70 w-10 shrink-0 select-none pt-0.5">
                                            {String(i + 1).padStart(2, "0")}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1 group-hover:text-secondary-glow transition-colors duration-200">
                                                {item.t}
                                            </h4>
                                            <p className="text-lg text-muted-foreground leading-relaxed">{item.d}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Quadro B — Onde se Aplica */}
                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="rounded-3xl border border-primary-glow/20 bg-black/20 backdrop-blur-xl p-8"
                        >
                            <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-glow uppercase tracking-[0.25em] mb-6">
                                <span className="h-px w-6 bg-primary-glow" /> Cenários de venda
                            </div>
                            <h3 className="text-xl font-black mb-6 leading-snug">
                                Onde se aplica
                            </h3>

                            <div className="space-y-3">
                                {[
                                    {
                                        icon: Building2,
                                        t: "Condomínios Residenciais",
                                        d: "Gestão fluida para prédios compactos ou grandes complexos horizontais.",
                                    },
                                    {
                                        icon: Truck,
                                        t: "Condomínios Logísticos e Industriais",
                                        d: "Triagem pesada de caminhões, motoristas, controle de docas e auditoria de setores restritos.",
                                    },
                                    {
                                        icon: Briefcase,
                                        t: "Edifícios Corporativos",
                                        d: "Gerenciamento dinâmico de recepções, catracas integradas e convites digitais para reuniões.",
                                    },
                                    {
                                        icon: LayoutGrid,
                                        t: "Coworkings e Espaços Compartilhados",
                                        d: "Automação total de acessos integrada à agenda, sem necessidade de recepção física ativa.",
                                    },
                                    {
                                        icon: GraduationCap,
                                        t: "Escolas, Academias e Clubes",
                                        d: "Validação ágil de planos na entrada e controle rigoroso de fluxo por catracas.",
                                    },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, y: 12 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                                        className="flex items-start gap-3 p-3.5 rounded-2xl border border-transparent hover:border-primary-glow/25 hover:bg-card/30 transition-all duration-300 group"
                                    >
                                        <div className="h-10 w-10 rounded-lg bg-primary/15 border border-primary-glow/30 grid place-items-center shrink-0 group-hover:bg-primary/25 transition">
                                            <item.icon className="h-6 w-6 " />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-0.5 group-hover:text-primary-glow transition-colors duration-200">
                                                {item.t}
                                            </h4>
                                            <p className="text-lg text-muted-foreground leading-relaxed">{item.d}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="flex justify-center mt-12"
                    >
                        <a
                            href="https://wa.me/5534992318655"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[var(--gradient-primary)] text-primary-foreground font-bold text-base shadow-[var(--shadow-hud)] hover:opacity-90 hover:-translate-y-0.5 transition-all duration-200"
                        >
                            Seja nosso parceiro
                            <span className="h-5 w-5 rounded-full bg-white/20 grid place-items-center group-hover:translate-x-1 transition-transform duration-200">
                                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                                    <path d="M2 5h6M5.5 2.5L8 5l-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>
                    </motion.div>

                </div>
            </section >

            {/* HOW IT WORKS */}
            <section id="how" className="py-18 lg:py-32 relative">
                <div className="max-w-7xl mx-auto px-6">

                    {/* Cabeçalho */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="max-w-3xl mb-16"
                    >
                        <div className="inline-flex items-center gap-2 text-xs font-bold text-primary-glow uppercase tracking-[0.3em] mb-4">
                            <span className="h-px w-8 bg-primary-glow" /> Diferenciais
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                            Por que os integradores <br />
                            <span className="text-gradient-primary">escolhem a nossa plataforma?</span>
                        </h2>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            Elimine custos fixos e tenha total liberdade para escalar seu negócio com a nossa tecnologia.
                        </p>
                    </motion.div>

                    {/* Grid 2x2 */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {[
                            {
                                n: "01",
                                t: "Sua Marca em Primeiro Lugar",
                                tag: "White Label",
                                d: "Aplicativo e painel web customizados com as cores, logotipo e nome da sua empresa na App Store e Google Play. Para o mercado, a tecnologia é sua.",
                            },
                            {
                                n: "02",
                                t: "Faturamento Sob Demanda",
                                tag: "Pay-per-use",
                                d: "Pague exclusivamente pelas licenças ativas no mês. Sem pacotes mínimos obrigatórios, sem taxas escondidas e sem cobranças ociosas.",
                            },
                            {
                                n: "03",
                                t: "Fidelidade Zero",
                                tag: "Liberdade total",
                                d: "Acreditamos na qualidade e na estabilidade da nossa plataforma. Você tem total liberdade comercial, sem contratos de permanência forçada ou multas de rescisão.",
                            },
                            {
                                n: "04",
                                t: "Suporte Técnico Especializado",
                                tag: "Atendimento humano",
                                d: "Atendimento humanizado e ágil, focado em resolver problemas críticos em tempo real. Sem robôs, sem respostas automáticas e sem burocracia.",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={card.n}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                                className="group relative p-7 rounded-2xl border border-primary-glow/20 bg-card/30 backdrop-blur-sm hover:border-primary-glow/50 hover:bg-card/50 transition-all duration-300"
                            >
                                {/* Número decorativo */}
                                <div className="font-mono text-4xl font-black text-gradient-primary opacity-80 absolute top-5 right-6 select-none">
                                    {card.n}
                                </div>

                                {/* Tag */}
                                <span className="inline-block text-[10px] font-bold uppercase tracking-[0.25em] text-primary-glow/70 border border-primary-glow/30 rounded-full px-3 py-1 mb-4">
                                    {card.tag}
                                </span>

                                {/* Título */}
                                <h3 className="text-lg font-bold mb-3 leading-snug">
                                    {card.t}
                                </h3>

                                {/* Descrição */}
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {card.d}
                                </p>

                                {/* Linha decorativa hover */}
                                <div className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-primary-glow/0 via-primary-glow/40 to-primary-glow/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </motion.div>
                        ))}
                    </div>

                </div>
            </section>


            {/* PREVIEW */}
            <section id="preview" className="py-12 lg:py-28 relative overflow-hidden">
                <div className="absolute top-10 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-[110px]" />
                <div className="absolute bottom-10 right-1/3 w-96 h-96 bg-primary-glow/10 rounded-full blur-[110px]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.08),transparent_45%),radial-gradient(circle_at_80%_60%,rgba(147,51,234,0.08),transparent_45%)]" />
                <div className="py-10 flex flex-col lg:flex-row items-center justify-center gap-8 max-w-7xl mx-auto px-6">
                    <div className="max-w-[1100px] w-full flex flex-col gap-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            SINTAC — {" "}
                            <span
                                className="text-gradient-primary"
                            >
                                Acesso Total.
                            </span>
                            <br />
                            Controle Absoluto
                        </h1>
                        <p className="text-muted-foreground text-xl leading-relaxed">
                            Desenvolvemos uma solução robusta, escalável e de rápida implantação, projetada especificamente para empresas de segurança eletrônica, facilities e controle de acesso.Nós cuidamos da evolução tecnológica, da estabilidade dos servidores e das atualizações de segurança, enquanto você lidera o mercado local com uma solução de alto valor agregado. Entregue uma central de comando de bolso para o seu cliente: abra portões, autorize visitantes e monitore acessos com total mobilidade e precisão.
                        </p>
                    </div>
                    <div className="flex-shrink-0 lg:translate-x-16 max-w-[650px] w-full lg:w-auto">
                        <img
                            src={system}
                            alt="Sistema Sintac"
                            className="w-full lg:max-w-[700px] rounded-xl"
                        />
                    </div>
                </div>
            </section>


            {/* FAQ */}
            < section id="faq" className="relative py-24 px-4 overflow-hidden" >
                {/* Glow de fundo vinho */}
                < div
                    className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full opacity-30 blur-[120px]"
                    style={{ background: "var(--brand-wine)" }
                    }
                />
                < div
                    className="pointer-events-none absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full opacity-20 blur-[100px]"
                    style={{ background: "var(--brand-wine-light)" }}
                />

                < div className="relative z-10 max-w-3xl mx-auto" >
                    {/* Header */}
                    < div className="mb-14 text-center" >
                        <span
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-6"
                            style={{
                                background: "oklch(0.32 0.14 20 / 0.25)",
                                border: "1px solid oklch(0.48 0.14 20 / 0.45)",
                                color: "var(--accent-foreground)",
                            }}
                        >
                            <span
                                className="w-1.5 h-1.5 rounded-full animate-pulse"
                                style={{ background: "var(--brand-wine-light)" }}
                            />
                            Suporte &amp; Dúvidas
                        </span>

                        <h2
                            className="text-4xl sm:text-5xl font-black tracking-tighter text-[var(--foreground)] mb-4"
                        >
                            Perguntas{" "}
                            <span
                                className="bg-clip-text text-transparent"
                                style={{
                                    backgroundImage:
                                        "linear-gradient(135deg, var(--brand-wine-light), var(--accent), var(--brand-wine-light))",
                                }}
                            >
                                Frequentes
                            </span>
                        </h2>
                    </div >

                    {/* Linha decorativa */}
                    < div
                        className="w-full h-px mb-0"
                        style={{
                            background: "linear-gradient(to right, transparent, oklch(0.48 0.14 20 / 0.6), transparent)",
                        }}
                    />

                    {/* Lista */}
                    <div
                        className="rounded-2xl overflow-hidden"
                        style={{
                            border: "1px solid oklch(0.48 0.14 20 / 0.25)",
                            boxShadow: "var(--shadow-wine-glow)",
                        }}
                    >
                        {faqs.map((item, i) => (
                            <FAQRow
                                key={i}
                                item={item}
                                index={i}
                                isOpen={openFaq === i}
                                onToggle={() => setOpenFaq((prev) => (prev === i ? null : i))}
                            />
                        ))}
                    </div>


                </div >
            </section >

            {/* FOOTER */}
            <Footer />

            <WhatsAppFloat
                phoneNumber="5534992318655"
                message="Olá! Vim pelo site e gostaria de mais informações."
            />
        </div >
    );
}

export { Landing as LandingClient };