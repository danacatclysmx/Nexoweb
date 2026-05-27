"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Globe,
  Palette,
  Smartphone,
  Search,
  ShoppingCart,
  Headphones,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Páginas Web",
    description:
      "Diseño web moderno y atractivo que representa tu marca y conecta con tu audiencia.",
  },
  {
    icon: Palette,
    title: "Diseño Profesional",
    description:
      "Interfaces elegantes y funcionales que mejoran la experiencia de tus usuarios.",
  },
  {
    icon: Smartphone,
    title: "Diseño Responsive",
    description:
      "Tu sitio se verá perfecto en cualquier dispositivo: móvil, tablet o computador.",
  },
  {
    icon: Search,
    title: "SEO Optimizado",
    description:
      "Posicionamiento en buscadores para que tus clientes te encuentren fácilmente.",
  },
  {
    icon: ShoppingCart,
    title: "Tiendas Online",
    description:
      "E-commerce completo con carrito de compras y pasarelas de pago integradas.",
  },
  {
    icon: Headphones,
    title: "Soporte Continuo",
    description:
      "Acompañamiento y mantenimiento para que tu sitio siempre esté actualizado.",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Soluciones digitales para{" "}
            <span className="text-primary">tu negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos servicios completos de diseño y desarrollo web para llevar
            tu empresa al siguiente nivel.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-card hover:bg-card/80 rounded-2xl p-6 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
