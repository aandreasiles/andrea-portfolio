export default function Process() {
    return(
        <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
              Tu Web en 3 Pasos Simples
            </h2>
            <p className="text-xl text-gray-300">Un proceso claro y transparente que garantiza resultados excepcionales</p>
          </div>

          <div className="relative">

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              {/* Paso 1 */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/25 group-hover:shadow-cyan-500/40 transition-all duration-500 transform group-hover:scale-110">
                    <div className="text-4xl">💬</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-cyan-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg animate-bounce">
                    1
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    Contacto & Ideas
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Conversamos sobre tu visión, objetivos y necesidades. Analizamos tu marca y audiencia para crear un <span className="text-cyan-400 font-semibold">concepto único</span> que represente perfectamente tu negocio.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span>Consulta gratuita</span>
                  </div>
                </div>
              </div>

              {/* Paso 2 */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center shadow-2xl shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-500 transform group-hover:scale-110">
                    <div className="text-4xl">🎨</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg animate-bounce delay-200">
                    2
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-purple-400 group-hover:text-purple-300 transition-colors">
                    Diseño & Desarrollo
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Creo prototipos interactivos y desarrollo tu web con <span className="text-purple-400 font-semibold">revisiones constantes</span>. Tu feedback es clave en cada etapa para asegurar que el resultado supere tus expectativas.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-200"></div>
                    <span>Revisiones ilimitadas</span>
                  </div>
                </div>
              </div>

              {/* Paso 3 */}
              <div className="group text-center">
                <div className="relative mb-8">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl shadow-green-500/25 group-hover:shadow-green-500/40 transition-all duration-500 transform group-hover:scale-110">
                    <div className="text-4xl">🚀</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg animate-bounce delay-400">
                    3
                  </div>
                </div>
                <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-green-400/30 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105">
                  <h3 className="text-2xl font-bold mb-4 text-green-400 group-hover:text-green-300 transition-colors">
                    Lanzamiento & Soporte
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    Subo tu web optimizada y lista para conquistar el mundo. Incluyo <span className="text-green-400 font-semibold">soporte técnico</span> para que tengas tranquilidad total después del lanzamiento.
                  </p>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400"></div>
                    <span>Soporte incluido</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}