"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, X, Diamond } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#usecases", label: "Usecases" },
  { href: "#pricing", label: "Pricing" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "py-5 bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link href="#home" className="flex items-center gap-2">
          <Diamond className="w-6 h-6 text-white" />
          <span className="text-xl font-semibold text-white">Nova</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Button
            variant="secondary"
            className="rounded-full px-6 bg-white text-black hover:bg-white/90 font-medium"
          >
            Login
          </Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full sm:w-80 bg-black/40 backdrop-blur-xl border-l border-white/10 p-6"
          >
            <div className="flex flex-col gap-6 mt-16">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-2xl text-white/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button
                  variant="secondary"
                  className="w-full rounded-full bg-white text-black hover:bg-white/90 font-medium mt-4"
                >
                  Login
                </Button>
              </motion.div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
