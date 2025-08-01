import type { ReactNode } from "react";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: ReactNode;
  colorClass: keyof typeof colorClassMap;
}

const colorClassMap = {
    cyan: {
        container: 'hover:border-cyan-400/50',
        title: 'text-cyan-400',
        skillBadge: 'hover:bg-cyan-400/20 hover:text-cyan-300'
    },
    purple: {
        container: 'hover:border-purple-400/50',
        title: 'text-purple-400',
        skillBadge: 'hover:bg-purple-400/20 hover:text-purple-300'
    },
    pink: {
        container: 'hover:border-pink-400/50',
        title: 'text-pink-400',
        skillBadge: 'hover:bg-pink-400/20 hover:text-pink-300'
    }
};

export const SkillCategory = ({ title, skills, icon, colorClass }: SkillCategoryProps) => {
    const styles = colorClassMap[colorClass] || colorClassMap.cyan;
    return (
        <div className={`p-6 bg-gray-800/60 rounded-2xl border border-gray-700/50 ${styles.container} transition-all duration-300`}>
            <h3 className={`text-xl font-bold mb-4 flex items-center gap-2 ${styles.title}`}>
                {icon}
                {title}
            </h3>
            <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                    <span key={skill} className={`px-4 py-2 text-sm font-medium text-gray-100 bg-gray-700/50 rounded-lg shadow-md ${styles.skillBadge} transition-all`}>
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );
};