import { motion } from 'framer-motion';
import { profile, skills } from '../data';

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

export default function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
        >
          <motion.div variants={fadeInUp}>
            <SectionHeading number={1} title="About" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Bio + photo */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border-subtle">
                <img
                  src="/assets/Profile-Photo.jpg"
                  alt="Jev Forsberg"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-[#c4c4c4] leading-relaxed text-base sm:text-lg">
                {profile.bio}
              </p>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeInUp} className="space-y-6">
              {skills.map(({ category, items }) => (
                <div key={category}>
                  <p className="text-xs font-semibold tracking-widest uppercase text-muted mb-2.5">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-sm rounded-full bg-surface border border-border-subtle text-[#c4c4c4]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
