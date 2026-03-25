import { motion } from 'framer-motion';
import { Github, FileText, Mail } from 'lucide-react';
import { profile } from '../data';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const ctaLinks = (p) => [
  { label: 'GitHub', href: p.gitHub, icon: Github },
  { label: 'Resume', href: p.resume, icon: FileText },
  { label: 'Email', href: p.email, icon: Mail },
];

export default function Hero() {
  const links = ctaLinks(profile);
  const [first, ...rest] = profile.name.split(' ');

  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 pt-20 overflow-hidden">
      {/* aurora blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full opacity-25"
          style={{ background: '#818cf8', filter: 'blur(90px)' }}
          animate={{ x: [0, 160, -80, 0], y: [0, -120, 80, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[420px] h-[420px] rounded-full opacity-20"
          style={{ background: '#22d3ee', filter: 'blur(100px)' }}
          animate={{ x: [0, -140, 100, 0], y: [0, 100, -60, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/2 right-1/3 w-[360px] h-[360px] rounded-full opacity-15"
          style={{ background: '#a78bfa', filter: 'blur(110px)' }}
          animate={{ x: [0, 80, -120, 0], y: [0, 140, -80, 0] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto w-full">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-7"
        >
          <motion.p
            variants={item}
            className="font-mono text-sm text-muted tracking-widest uppercase"
          >
            Hi, I'm
          </motion.p>

          <motion.h1
            variants={item}
            className="text-[clamp(3rem,10vw,6rem)] font-black tracking-tighter leading-none text-primary"
          >
            {first}{' '}
            <span className="text-accent">{rest.join(' ')}</span>
          </motion.h1>

          <motion.div variants={item} className="space-y-1.5">
            <p className="text-xl sm:text-2xl font-medium text-primary">
              Senior Software Engineer{' '}
              <span className="text-accent">@ Grafana Labs</span>
            </p>
            <p className="text-muted text-base sm:text-lg">
              Builder, educator, civic advocate.
            </p>
          </motion.div>

          <motion.div variants={item} className="flex flex-wrap gap-3 pt-1">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-2.5 rounded-full border border-border-subtle text-sm text-muted hover:border-accent hover:text-accent transition-all duration-200"
              >
                <Icon size={14} />
                {label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

