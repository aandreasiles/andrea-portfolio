import { services } from "../data/services";

export default function Services() {
    return(
        <section className="py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Servicios Que Transforman
            </h2>
            <p className="text-xl text-gray-300">Cada proyecto es una oportunidad para crear algo extraordinario</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-600/30 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}