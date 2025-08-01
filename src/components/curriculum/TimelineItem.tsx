/* eslint-disable @typescript-eslint/no-explicit-any */
interface TimelineItemProps {
  item: any; // Define a more specific type based on your data structure
}

export const TimelineItem = ({ item }: TimelineItemProps) => (
  <div className="relative pl-8 sm:pl-12 py-6 group">
    <div className="absolute top-5 left-0 w-2 h-2 mt-1 bg-cyan-400 rounded-full z-10 transition-all duration-500 group-hover:scale-[1.75]"></div>
    <div className="absolute top-7 left-[3px] h-full w-0.5 bg-gray-700"></div>
    <div className="p-6 bg-gradient-to-br from-gray-800/50 to-gray-700/50 rounded-2xl border border-gray-700/50 group-hover:border-cyan-400/50 transition-all duration-300 transform group-hover:scale-105">
      <time className="absolute -left-28 sm:-left-32 top-6 text-sm font-bold text-cyan-400 uppercase tracking-wider">{item.period}</time>
      <h3 className="text-xl font-bold text-gray-100 mb-1">{item.role || item.degree}</h3>
      <p className="text-purple-400 mb-3">{item.company || item.institution}</p>
      <p className="text-gray-300 leading-relaxed mb-4">{item.description}</p>
      {item.technologies && (
        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech: string) => (
            <span key={tech} className="px-3 py-1 text-xs font-semibold text-cyan-200 bg-cyan-900/50 rounded-full">
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);