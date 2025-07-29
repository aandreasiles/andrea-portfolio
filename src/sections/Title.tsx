import { useEffect, useState } from "react";

export default function Title() {
    const [isVisible, setIsVisible] = useState(false);
    const [, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        setIsVisible(true);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleContactClick = () => {
        const footer = document.getElementById("footer");
        if (footer) {
            footer.scrollIntoView({ behavior: "smooth" });
        }
    };

    return(
        <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 -right-10 w-96 h-96 bg-gradient-to-r from-purple-400/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute -bottom-10 left-1/3 w-80 h-80 bg-gradient-to-r from-green-400/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Andrea
            </h1>
            <div className="text-2xl md:text-3xl font-light text-gray-300 mb-6">
              <span className="inline-block animate-bounce delay-100">Desarrolladora</span>
              <span className="mx-3 text-cyan-400">•</span>
              <span className="inline-block animate-bounce delay-300">Frontend</span>
              <span className="mx-3 text-purple-400">•</span>
              <span className="inline-block animate-bounce delay-500">Diseñadora Web</span>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            <span className="text-cyan-400 font-semibold">2 años de experiencia</span> creando experiencias digitales excepcionales
            <br />
            <span className="text-purple-400 font-semibold">Ingeniera de Software</span> especializada en frontend
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              className="px-8 py-4 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              onClick={handleContactClick}
            >
              Contactar Ahora
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-1 h-12 bg-gradient-to-b from-cyan-400 to-transparent rounded-full"></div>
        </div>
      </section>
    )
}