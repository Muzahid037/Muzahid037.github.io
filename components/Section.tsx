import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  children,
  className = "",
}) => {
  return (
    <section id={id} className={`scroll-mt-20 py-16 px-6 md:px-20 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
        {title}
      </h2>
      {children}
    </section>
  );
};

export default Section;
