import React from 'react';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black text-white grid place-items-center">
            <Rocket size={18} />
          </div>
          <span className="text-lg font-semibold tracking-tight">Srivick Agency</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-neutral-700">
          <a href="#services" className="hover:text-black transition-colors">Services</a>
          <a href="#work" className="hover:text-black transition-colors">Work</a>
          <a href="#contact" className="hover:text-black transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center rounded-xl border border-neutral-300 px-4 py-2 text-sm font-medium hover:border-neutral-900 hover:text-neutral-900 transition-colors"
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}
