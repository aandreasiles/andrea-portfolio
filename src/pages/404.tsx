import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/30 via-orange-900/30 to-yellow-900/30"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-gradient-to-r from-red-500/20 to-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/10 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 text-center max-w-2xl mx-auto px-6">
        <h1 className="text-8xl md:text-9xl font-bold mb-4 bg-gradient-to-r from-red-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-light text-gray-300 mb-6">
          Página No Encontrada
        </h2>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed">
          Lo sentimos, la página que buscas no existe o ha sido movida. Pero no te preocupes, siempre puedes volver al inicio.
        </p>

        <a
          href="/"
          className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105"
        >
          <ArrowLeft className="inline-block mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Volver al Inicio
        </a>
      </div>
    </section>
  );
}
