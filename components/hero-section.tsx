"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Monitor, Smartphone } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-800px h-800px bg-primary/5 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-size:60px_60px" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              Agencia Digital en Bucaramanga
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6"
            >
              Conectamos tu negocio con el{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
                mundo digital
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Diseñamos páginas web profesionales que impulsan tu marca y
              generan resultados. Tu negocio merece estar en internet.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="#contacto"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:shadow-xl hover:shadow-primary/25 hover:-translate-y-1"
              >
                Solicita tu diagnóstico gratis
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="#planes"
                className="inline-flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:-translate-y-1"
              >
                Ver Planes
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50"
            >
              {[
                { value: "1+", label: "Proyectos" },
                { value: "100%", label: "Satisfacción" },
                { value: "24/7", label: "Soporte" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Laptop Mockup */}
              <motion.div
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="bg-card rounded-2xl border border-border/50 p-3 shadow-2xl shadow-primary/10">
                  <div className="flex gap-2 mb-3">
                    <div className="w-3 h-3 rounded-full bg-destructive/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <div className="bg-secondary rounded-lg p-4 aspect-video flex items-center justify-center">
                    <div className="text-center">
                      <Monitor className="w-16 h-16 text-primary mx-auto mb-3" />
                      <p className="text-sm text-muted-foreground">
                        Tu página web aquí
                      </p>
                    </div>
                  </div>
                </div>

                {/* Phone Mockup */}
                <motion.div
                  initial={{ y: -10 }}
                  animate={{ y: 10 }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                  className="absolute -right-8 -bottom-8 w-32"
                >
                  <div className="bg-card rounded-2xl border border-border/50 p-2 shadow-2xl shadow-primary/10">
                    <div className="w-8 h-1 bg-muted rounded-full mx-auto mb-2" />
                    <div className="bg-secondary rounded-lg p-3 aspect-9/16 flex items-center justify-center">
                      <Smartphone className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
              <div className="absolute top-0 right-0 w-32 h-32 border border-primary/20 rounded-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 border border-accent/20 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
