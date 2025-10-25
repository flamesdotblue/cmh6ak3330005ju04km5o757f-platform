import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[88vh] w-full">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/90" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 flex min-h-[88vh] items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl space-y-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300 bg-white/70 backdrop-blur px-3 py-1 text-xs font-medium text-neutral-700">
            <span className="h-2 w-2 rounded-full bg-rose-500" />
            App design & development, end-to-end
          </div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Building standout apps for bold brands
          </h1>
          <p className="text-lg md:text-xl text-neutral-700">
            Srivick crafts high-performance mobile and web apps with delightful user experiences. From concept to launch, we ship products that scale.
          </p>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors"
            >
              Start a project <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center rounded-xl border border-neutral-300 bg-white px-5 py-3 text-sm font-medium hover:border-neutral-900 transition-colors"
            >
              Explore services
            </a>
          </div>
          <div className="pt-6 text-xs text-neutral-600">
            Trusted process • Rapid delivery • Quality at scale
          </div>
        </motion.div>
      </div>
    </section>
  );
}
