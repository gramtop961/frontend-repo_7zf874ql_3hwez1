import React from 'react';

const projects = [
  {
    title: 'Monochrome Tech Promo',
    role: 'Edit • Color • Sound',
  },
  {
    title: 'Product Launch Cutdown',
    role: 'Edit • Motion',
  },
  {
    title: 'Founder Story Short',
    role: 'Edit • Color',
  },
  {
    title: 'Social Teaser Sequence',
    role: 'Edit • Motion • Sound',
  },
  {
    title: 'Event Recap Reel',
    role: 'Edit • Color • Sound',
  },
  {
    title: 'Brand Mood Montage',
    role: 'Edit • Motion',
  },
];

const WorkCard = ({ title, role }) => {
  return (
    <a
      href="#contact"
      className="group block focus:outline-none"
      aria-label={`${title} — ${role}`}
    >
      <div className="relative overflow-hidden rounded-xl border border-white/10 bg-neutral-900">
        <div className="aspect-video w-full bg-gradient-to-br from-neutral-800 to-black" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-white">{title}</h3>
          <p className="text-xs text-white/60">{role}</p>
        </div>
        <span className="text-xs text-white/40 group-hover:text-white/80">View →</span>
      </div>
    </a>
  );
};

const WorkGallery = () => {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-white md:text-3xl">Selected Work</h2>
          <p className="mt-2 text-sm text-white/60">Clean, precise edits across product, brand, and socials.</p>
        </div>
        <a href="#contact" className="text-sm text-white/70 hover:text-white">Request full portfolio</a>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <WorkCard key={p.title} title={p.title} role={p.role} />
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
