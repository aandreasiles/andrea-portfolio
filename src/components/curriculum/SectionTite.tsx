interface SectionTitleProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

export const SectionTitle = ({ icon, children, className = '' }: SectionTitleProps) => (
  <h2 className={`text-3xl md:text-4xl font-bold mb-12 flex items-center justify-center gap-4 ${className}`}>
    {icon}
    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      {children}
    </span>
  </h2>
);