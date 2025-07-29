import { Star, Zap } from "lucide-react";

export default function About() {
    return(
        <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Tu Visión, Mi Código
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Combino <span className="text-cyan-400 font-semibold">experiencia profesional</span> con 
              <span className="text-purple-400 font-semibold"> pasión por el diseño</span> para crear 
              sitios web que no solo se ven increíbles, sino que <span className="text-pink-400 font-semibold">generan resultados reales</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300">
                <Star className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">Experiencia Probada</h3>
                <p className="text-gray-300">2 años desarrollando soluciones robustas como ingeniera de software, donde la precisión y la calidad son fundamentales.</p>
              </div>
              
              <div className="p-6 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-2xl border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300">
                <Zap className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-purple-400">Resultados Que Impactan</h3>
                <p className="text-gray-300">No solo creo sitios bonitos, desarrollo experiencias que convierten visitantes en clientes y hacen crecer tu negocio.</p>
              </div>
            </div>

            <div className="relative">
              <div className="p-8 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-3xl border border-cyan-400/30 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  ¿Por Qué Elegirme?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Código limpio y mantenible</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    <span>Diseños únicos y personalizados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse delay-400"></div>
                    <span>Entrega puntual garantizada</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-600"></div>
                    <span>Soporte continuo post-lanzamiento</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}