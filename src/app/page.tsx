"use client";

// Using native <button> instead of missing "@/components/ui/button"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function HomePage() {
  const year = new Date().getFullYear();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col">
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
          <Link href="/sobre" className="hover:text-green-700 transition">Sobre a Vigilância</Link>
        </nav>
      </header>

      {/* Destaque principal */}
      <main className="flex-1 flex flex-col items-center justify-center text-center p-8">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 drop-shadow-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Bem-vindo à Plataforma da Vigilância Socioassistencial
        </motion.h2>

        <p className="text-lg md:text-xl text-gray-700 max-w-3xl mb-8">
          Um espaço moderno e acessível para você acompanhar os dados da rede socioassistencial de Santa Izabel do Pará, visualizar boletins, indicadores e informações essenciais para a gestão.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/boletins">
            <button type="button" className="rounded-2xl px-8 py-4 bg-blue-700 hover:bg-blue-800 text-white shadow-lg">
              Acessar Boletins
            </button>
          </a>
            <Link href="/indicadores">
              <button type="button" className="rounded-2xl px-8 py-4 bg-green-600 hover:bg-green-700 text-white shadow-lg">
                Ver Indicadores
              </button>
            </Link>
        </div>

        {/* Cartões de Acesso Rápido */}
        <section className="mt-12 w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="font-bold text-blue-800">Últimos Indicadores</h3>
            <p className="text-gray-600 text-sm mt-2">Confira os principais dados atualizados da rede socioassistencial.</p>
            <Link href="/indicadores" className="text-blue-700 text-sm mt-3 inline-block hover:underline">Abrir</Link>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="font-bold text-green-700">Boletins e Relatórios</h3>
            <p className="text-gray-600 text-sm mt-2">Acesse os boletins e relatórios mensais da Vigilância.</p>
            <a href="#boletins" className="text-green-700 text-sm mt-3 inline-block hover:underline">Abrir</a>
          </motion.div>

          <motion.div
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.03 }}
          >
            <h3 className="font-bold text-blue-800">Contato</h3>
            <p className="text-gray-600 text-sm mt-2">Fale com a equipe da Vigilância Socioassistencial para suporte e dúvidas.</p>
            <a href="#contato" className="text-blue-700 text-sm mt-3 inline-block hover:underline">Abrir</a>
          </motion.div>
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