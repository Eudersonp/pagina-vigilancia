"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Page() {
  const year = new Date().getFullYear();

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
          <Link href="/indicadores" className="hover:text-green-700 transition">Indicadores</Link>
          <Link href="/normativas" className="hover:text-green-700 transition">Normativas</Link>
          <Link href="/sobre" className="text-green-700 font-bold">Sobre a Vigilância</Link>
        </nav>
      </header>

      {/* Conteúdo principal com Power BI */}
      <main className="flex-1 p-6 flex flex-col items-center justify-center text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-6 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Painel de Dados CRAS
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="w-full max-w-screen-xl"
        >
          <iframe
            title="dados-cras"
            width="100%"
            height="541.25"
            src="https://app.powerbi.com/reportEmbed?reportId=cac31868-ff5a-4e26-a03f-7c19354a6b0e&autoAuth=true&ctid=ba201131-9621-49ca-b50d-57d968b4ac35"
            frameBorder="0"
            allowFullScreen
            className="rounded-lg shadow-lg"
          ></iframe>
        </motion.div>
      </main>

      {/* Rodapé */}
      <footer className="bg-gradient-to-r from-blue-700 to-green-600 text-center py-4 text-white text-sm mt-8">
        © {year} Prefeitura de Santa Izabel do Pará - SEMTEPS | Vigilância Socioassistencial | By Camila Barros | Euderson Pereira
      </footer>
    </div>
  );
}