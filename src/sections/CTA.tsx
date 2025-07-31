import { Mail, MessageCircle } from "lucide-react";

export default function CTA() {
    return(
        <section className="py-20 px-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/20 to-purple-900/20"></div>
            <div className="relative z-10 max-w-4xl mx-auto text-center">
                <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    ¿Listo Para Destacar Online?
                </h2>
                <p className="text-xl md:text-2xl text-gray-300 mb-8">
                    Tu sitio web es tu mejor vendedor 24/7. Hagamos que trabaje para ti.
                </p>
            
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                    <div 
                        className="flex items-center space-x-3 text-lg cursor-pointer" 
                        onClick={() => window.location.href = "mailto:silesandrea@gmail.com"}
                        title="Enviar correo"
                    >
                        <Mail className="w-6 h-6 text-cyan-400" />
                        <span>silesandrea@gmail.com</span>
                    </div>
                    <div 
                        className="flex items-center space-x-3 text-lg cursor-pointer" 
                        onClick={() => window.location.href = "https://wa.me/34722340010"} 
                        title="Enviar WhatsApp">
                        <MessageCircle className="w-6 h-6 text-purple-400" />
                        <span>+34 722 340 010</span>
                    </div>
                </div>
            </div>
      </section>
    )
}