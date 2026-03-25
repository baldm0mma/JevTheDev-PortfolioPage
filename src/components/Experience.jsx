import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { experience } from '../data';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

function SectionHeading({ number, title }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <span className="font-mono text-sm text-accent shrink-0">0{number}.</span>
      <h2 className="text-2xl font-bold text-primary shrink-0">{title}</h2>
      <div className="flex-1 h-px bg-border-subtle" />
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading number={2} title="Experience" />
          </motion.div>

          <div className="space-y-0">
            {experience.map((role, i) => (
              <motion.div
                key={role.id}
                variants={fadeInUp}
                className={`group py-8 ${
                  i < experience.length - 1 ? 'border-b border-border-subtle' : ''
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                  <div className="flex items-center gap-2">
                    {role.url ? (
                      <a
                        href={role.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-lg text-primary hover:text-accent transition-colors duration-200 flex items-center gap-1.5"
                      >
                        {role.company}
                        <ArrowUpRight
                          size={15}
                          className="opacity-0 group-hover:opacity-100 transition-opacity text-accent"
                        />
                      </a>
                    ) : (
                      <span className="font-semibold text-lg text-primary">{role.company}</span>
                    )}
                  </div>
                  <span className="font-mono text-sm text-muted shrink-0">{role.dates}</span>
                </div>

                <p className="text-sm font-medium text-accent mb-3">{role.role}</p>
                <p className="text-[#a1a1aa] text-sm sm:text-base leading-relaxed">
                  {role.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
