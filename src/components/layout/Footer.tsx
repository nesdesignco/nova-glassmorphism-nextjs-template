"use client";

import Link from "next/link";
import { Diamond, Twitter, Github } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Features", href: "#usecases" },
    { label: "Pricing", href: "#pricing" },
    { label: "Integrations", href: "#" },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#careers" },
    { label: "Blog", href: "#" },
    { label: "Press", href: "#" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "Help Center", href: "#" },
    { label: "Community", href: "#" },
    { label: "Templates", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/nesdesignco", label: "Twitter" },
  { icon: Github, href: "https://github.com/nesdesignco", label: "GitHub" },
];

export function Footer() {
  return (
    <footer id="contact" className="relative border-t border-white/10 bg-black/40 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="shrink-0">
            <Link href="#home" className="flex items-center gap-2 mb-4">
              <Diamond className="w-6 h-6 text-white" />
              <span className="text-xl font-semibold text-white">Nova</span>
            </Link>
            <p className="text-sm text-white/50 mb-6 max-w-[200px]">
              Illuminate your creative vision. Nova helps you shine brighter than ever.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-white/70" />
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-20">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-sm font-semibold text-white mb-4">
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/50 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Nova. All rights reserved.
          </p>
          <p className="text-sm text-white/40">
            Made with love for designers everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
