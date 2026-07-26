import type { Metadata } from "next";
import { LandingClient } from "@/app/components/landing-client";

export const metadata: Metadata = {
  title: "SINTAC",
  description: "Abra portões, convide visitantes e gerencie seu condomínio direto do celular. Tecnologia SINTAC para uma vida residencial mais segura e moderna.",
  openGraph: {
    title: "SINTAC — Acesso residencial na palma da mão",
    description: "Controle remoto, convites de visitantes, correspondência e eventos. Tudo em um só app.",
  },
};

export default function Page() {
  return <LandingClient />;
}