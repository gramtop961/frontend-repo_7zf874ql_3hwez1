import React from 'react';
import { Mail, Instagram, Linkedin, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <footer id="contact" className="border-t border-white/10 bg-black/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-white">Let’s cut your next piece</h2>
          <p className="mt-2 max-w-xl text-sm text-white/60">
            Send a brief, timeline, and references. I’ll reply within 24 hours with a clear plan and estimate.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <a
            href="mailto:hello@editorfolio.com"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-5 text-white hover:border-white/30"
          >
            <Mail className="h-5 w-5" />
            <span>hello@editorfolio.com</span>
          </a>
          <a
            href="tel:+1234567890"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-5 text-white hover:border-white/30"
          >
            <Phone className="h-5 w-5" />
            <span>+1 (234) 567-890</span>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-5 text-white hover:border-white/30"
          >
            <Instagram className="h-5 w-5" />
            <span>@editorfolio</span>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 rounded-xl border border-white/10 bg-neutral-950 p-5 text-white hover:border-white/30"
          >
            <Linkedin className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </div>

        <div className="mt-12 flex items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Editorfolio. All rights reserved.</p>
          <p>Minimalist video editor portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
