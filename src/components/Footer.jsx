import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-neutral-200">
      <div className="mx-auto max-w-7xl px-6 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-black text-white grid place-items-center text-xs font-semibold">S</div>
            <span className="font-semibold">Srivick Agency</span>
          </div>
          <p className="mt-3 text-sm text-neutral-700 max-w-md">
            We design and build world-class apps for startups and enterprises. Let’s launch something great together.
          </p>
        </div>
        <div className="md:text-right space-y-3">
          <div className="text-sm text-neutral-700">hello@srivick.agency</div>
          <div className="flex md:justify-end gap-3">
            <a href="#" aria-label="Twitter" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 hover:border-neutral-900">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-neutral-300 hover:border-neutral-900">
              <Linkedin size={16} />
            </a>
          </div>
          <div className="text-xs text-neutral-500">© {new Date().getFullYear()} Srivick Agency. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
