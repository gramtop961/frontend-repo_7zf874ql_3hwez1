import React from 'react';
import { Scissors, Camera, Monitor, Wand2 } from 'lucide-react';

const services = [
  {
    icon: Scissors,
    title: 'Editing',
    desc: 'Rhythmic, story-first cuts that feel effortless and modern.',
  },
  {
    icon: Wand2,
    title: 'Motion & Graphics',
    desc: 'Subtle type, lower-thirds, and logo reveals that stay on brand.',
  },
  {
    icon: Monitor,
    title: 'Color & Finishing',
    desc: 'Clean grades with natural skin tones and crisp contrast.',
  },
  {
    icon: Camera,
    title: 'Social Adaptations',
    desc: 'Cutdowns, formats, and hooks tailored for each platform.',
  },
];

const Services = () => {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-2xl font-semibold text-white md:text-3xl">Services</h2>
        <p className="mt-2 max-w-2xl text-sm text-white/60">
          From concept to delivery, I keep things streamlined and intentional. Every frame serves the message.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-xl border border-white/10 bg-neutral-950 p-6">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
              <Icon className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-sm font-medium text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/60">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
