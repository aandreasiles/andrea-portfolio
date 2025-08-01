import { ArrowLeft, Briefcase, GraduationCap, Code, Award, Zap, Users, ShieldCheck } from 'lucide-react';

import experienceData from '../data/curriculum/experience.json';
import educationData from '../data/curriculum/education.json';
import skillsData from '../data/curriculum/skills.json';
import certificationsData from '../data/curriculum/certifications.json';
import { SectionTitle } from '../components/curriculum/SectionTite';
import { TimelineItem } from '../components/curriculum/TimelineItem';
import { SkillCategory } from '../components/curriculum/SkillCategory';


export default function CurriculumPage() {
  return (
    <div className="bg-gray-900 text-white min-h-screen font-sans">
      <header className="fixed top-0 left-0 w-full bg-gray-900/80 backdrop-blur-lg z-50 border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="/" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">
            Andrea Siles
          </a>
          <a href="/" className="group px-6 py-2 border-2 border-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Volver
          </a>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Un resumen de mi trayectoria profesional, académica y proyectos.</p>
          </div>

          <section id="experience" className="mb-20">
            <SectionTitle icon={<Briefcase className="w-8 h-8 text-cyan-400" />}>
              Experiencia Profesional
            </SectionTitle>
            <div className="relative">
              {experienceData.map((item, index) => <TimelineItem key={index} item={item} />)}
            </div>
          </section>

          <section id="education" className="mb-20">
             <SectionTitle icon={<GraduationCap className="w-8 h-8 text-cyan-400" />}>
              Formación Académica
            </SectionTitle>
             <div className="relative">
              {educationData.map((item, index) => <TimelineItem key={index} item={item} />)}
            </div>
          </section>
          
          <section id="skills" className="mb-20">
            <SectionTitle icon={<Zap className="w-8 h-8 text-cyan-400" />}>
              Habilidades y Tecnologías
            </SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <SkillCategory title="Técnicas" skills={skillsData.technical} icon={<Code className="w-5 h-5"/>} colorClass="cyan" />
                <div className="space-y-8">
                    <SkillCategory title="Metodologías" skills={skillsData.methodologies} icon={<ShieldCheck className="w-5 h-5"/>} colorClass="purple" />
                    <SkillCategory title="Soft Skills" skills={skillsData.soft} icon={<Users className="w-5 h-5"/>} colorClass="pink" />
                </div>
            </div>
          </section>
          
          <section id="certifications">
            <SectionTitle icon={<Award className="w-8 h-8 text-cyan-400" />}>
              Licencias y Certificaciones
            </SectionTitle>
            <div className="space-y-4">
              {certificationsData.map((cert, index) => (
                <div key={index} className="p-4 bg-gray-800/60 rounded-lg border border-gray-700/50 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold text-pink-400">{cert.name}</h3>
                    <p className="text-sm text-gray-400">{cert.issuer}</p>
                  </div>
                  <time className="text-sm font-bold text-gray-500">{cert.date}</time>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      
       <footer className="py-8 px-6 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Andrea Siles - Desarrolladora Frontend</p>
        </div>
      </footer>
    </div>
  );
}