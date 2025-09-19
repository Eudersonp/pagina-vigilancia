"use client";
// Using native <button> instead of missing "@/components/ui/button"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const year = new Date().getFullYear();

  const indicadores = [
    {
      title: "Famílias Atendidas",
      value: "3.245",
      color: "text-green-700",
      link: "/indicadores/informacoespbi/dashcras",
    },
    {
      title: "Benefícios Eventuais",
      value: "1.128",
      color: "text-blue-700",
    },
    {
      title: "CadÚnico Atualizado",
      value: "87%",
      color: "text-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex flex-col">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-lg p-4 flex flex-col md:flex-row md:justify-between items-center border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <img
            src="/logo.png"
            alt="Prefeitura de Santa Izabel do Pará"
            width={100}
            height={100}
            className="w-44 h-28 object-contain drop-shadow-md"
          />
          <div className="text-left">
            <h1 className="text-lg md:text-xl font-extrabold text-gray-800 tracking-tight">
              Secretaria Municipal de Trabalho <br />e Promoção Social - SEMTEPS
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              Plataforma da Vigilância Socioassistencial
            </p>
          </div>
        </div>

        <nav className="flex flex-wrap justify-center md:justify-end space-x-6 text-gray-700 font-semibold mt-4 md:mt-0">
          <Link href="/" className="hover:text-green-700 transition">Página Inicial</Link>
          <Link href="/assistencia-social" className="hover:text-green-700 transition">Assistência Social</Link>
          <Link href="/boletins" className="hover:text-green-700 transition">Boletim da Vigilância</Link>
          <Link href="/indicadores" className="text-green-700 font-bold">Indicadores</Link>
          <Link href="/normativas" className="hover:text-green-700 transition">Normativas</Link>
          <a href="#sobre" className="hover:text-green-700 transition">Sobre a Vigilância</a>
        </nav>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-6 flex flex-col items-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-green-900 mb-6 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Indicadores da Rede Socioassistencial
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
          Acompanhe os principais indicadores da rede socioassistencial de Santa Izabel do Pará. Os dados apresentados refletem a atuação dos serviços, programas e benefícios ofertados à população em situação de vulnerabilidade.
        </p>

        <motion.h2
          className="text-4xl md:text-4xl font-extrabold text-green-900 mb-6 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Mapa Social do Município
        </motion.h2>

        {/* Mapa incorporado */}
        <div className="w-full max-w-5xl h-[500px] mb-12 relative overflow-visible">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1RTfwf1S4E9FI8ucL0y0NLwVC58wBAXM&ehbc=2E312F"
            loading="lazy"
            allowFullScreen
            className="rounded-xl shadow-lg border border-gray-300 absolute left-1/2 -translate-x-1/2 w-[120%] h-full"
          ></iframe>
        </div>

        {/* Indicadores em destaque */}
        <section className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
          {indicadores.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              whileHover={{ scale: 1.03 }}
            >
              <h3 className={`font-bold ${item.color}`}>{item.title}</h3>
              <p className="text-3xl font-extrabold text-gray-800 mt-2">{item.value}</p>
              <p className="text-sm text-gray-500 mt-1">Dados atualizados em setembro/2025</p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-700 hover:underline mt-2 inline-block"
                >
                  Mais informações
                </a>
              )}
            </motion.div>
          ))}
        </section>
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-blue-700 to-green-600 text-center py-4 text-white text-sm mt-8">
        © {year} Prefeitura de Santa Izabel do Pará - SEMTEPS | Vigilância Socioassistencial |
        By Camila Barros | Euderson Pereira
      </footer>
    </div>
  );
}