import { Code, Globe, Palette } from "lucide-react";

export default function Footer() {
    return(
        <footer className="py-8 px-6 bg-gray-900 border-t border-gray-700">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            © 2025 Andrea - Desarrolladora Frontend | Creando experiencias digitales excepcionales
          </p>
          <div className="flex justify-center space-x-6">
            <Globe className="w-5 h-5 text-cyan-400 hover:scale-110 transition-transform cursor-pointer" />
            <Code className="w-5 h-5 text-purple-400 hover:scale-110 transition-transform cursor-pointer" />
            <Palette className="w-5 h-5 text-pink-400 hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </footer>
    )
}