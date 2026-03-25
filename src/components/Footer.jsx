import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { profile } from '../data';

const socialLinks = (p) => [
  { label: 'GitHub', href: p.gitHub, icon: Github },
  { label: 'LinkedIn', href: p.linkedIn, icon: Linkedin },
  { label: 'Email', href: p.email, icon: Mail },
  { label: 'Resume', href: p.resume, icon: FileText },
];

export default function Footer() {
  const links = socialLinks(profile);

  return (
    <footer id="contact" className="py-24 px-6 border-t border-border-subtle">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-primary">Let's connect.</h2>
            <p className="text-muted text-base">
              Open to interesting conversations, collaborations, or just saying hi.
            </p>
          </div>

          <div className="flex items-center gap-5">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted hover:text-accent transition-colors duration-200"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>

          <p className="text-xs text-muted/60 font-mono">
            © {new Date().getFullYear()} Jev Forsberg
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
