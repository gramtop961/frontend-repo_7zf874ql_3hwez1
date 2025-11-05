import React from 'react';
import Spline from '@splinetool/react-spline';
import { Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/vwPe8k3Yw7HcN4yu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6 text-white">
        <p className="mb-3 text-sm tracking-widest text-white/70">VIDEO EDITOR • MOTION • COLOR</p>
        <h1 className="text-4xl font-semibold leading-tight md:text-6xl">
          Cutting clean, modern visuals
          <br className="hidden md:block" />
          that move your audience
        </h1>
        <p className="mt-5 max-w-xl text-white/80">
          I craft minimalist, story-first edits for brands, creators, and agencies. Polished pacing, refined color, and sound that hits.
        </p>
        <div className="mt-8 flex items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            <Play className="h-4 w-4" />
            Watch Selected Work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
