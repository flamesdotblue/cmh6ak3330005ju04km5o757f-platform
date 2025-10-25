import React from 'react';
import { Smartphone, Layers, Code, Shield, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Smartphone,
    title: 'Product Strategy & UX',
    desc: 'Research, journey mapping, wireframes and delightful UI for apps that users love.'
  },
  {
    icon: Code,
    title: 'Full-stack Development',
    desc: 'Robust web and mobile builds with modern stacks, CI/CD and testing baked in.'
  },
  {
    icon: Layers,
    title: 'Cross-platform Apps',
    desc: 'React Native and web apps that share a unified design system and codebase.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    desc: 'Best-practice auth, data protection and performance monitoring from day one.'
  },
];

export default function Services() {
  return (
    <section id="services" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-6 pb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Services tailored for impact</h2>
            <p className="mt-3 text-neutral-700 max-w-2xl">
              Whether you need an MVP or an enterprise rollout, Srivick brings design, engineering and strategy together to ship faster.
            </p>
          </div>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:border-neutral-900 transition-colors"
          >
            Book a discovery call <Rocket size={16} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-2xl border border-neutral-200 bg-white p-6 hover:shadow-xl transition-shadow"
            >
              <div className="h-11 w-11 rounded-xl bg-rose-100 text-rose-600 grid place-items-center mb-4">
                <s.icon size={20} />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-neutral-700 leading-relaxed">{s.desc}</p>
              <div className="mt-4 text-xs text-neutral-500">
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>

        <div id="contact" className="mt-20 grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-neutral-200 p-6 md:p-8 bg-gradient-to-br from-white to-neutral-50">
              <h3 className="text-2xl font-semibold">Have an idea? Let’s build it.</h3>
              <p className="mt-2 text-neutral-700">
                Share a few details and our team will get back within 1 business day.
              </p>
              <form className="mt-6 grid sm:grid-cols-2 gap-4">
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Your name" />
                <input type="email" className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900" placeholder="Work email" />
                <input className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 sm:col-span-2" placeholder="Company / Brand" />
                <textarea rows="4" className="w-full rounded-xl border border-neutral-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-neutral-900 sm:col-span-2" placeholder="Briefly describe your project" />
                <button type="button" className="inline-flex items-center justify-center rounded-xl bg-black text-white px-5 py-3 text-sm font-medium hover:bg-neutral-900 transition-colors sm:col-span-2">
                  Request proposal
                </button>
              </form>
            </div>
          </div>
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h4 className="font-semibold">Why Srivick?</h4>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                <li>• Senior product + engineering team</li>
                <li>• Rapid sprints, transparent roadmaps</li>
                <li>• Design systems and component libraries</li>
                <li>• Ongoing support and growth partnerships</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-neutral-200 p-6">
              <h4 className="font-semibold">Tech we love</h4>
              <p className="mt-2 text-sm text-neutral-700">React, Next.js, React Native, Node.js, GraphQL, PostgreSQL, Tailwind, AWS</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
