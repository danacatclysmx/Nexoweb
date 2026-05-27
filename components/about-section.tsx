"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, Rocket, Heart } from "lucide-react";

const values = [
  {
    icon: Users,
    title: "Enfoque en el Cliente",
    description:
      "Tu éxito es nuestro éxito. Trabajamos de la mano contigo para entender tus necesidades.",
  },
  {
    icon: Award,
    title: "Calidad Premium",
    description:
      "Cada proyecto recibe nuestra máxima atención al detalle y los mejores estándares.",
  },
  {
    icon: Rocket,
    title: "Innovación Constante",
    description:
      "Nos mantenemos actualizados con las últimas tendencias y tecnologías del mercado.",
  },
  {
    icon: Heart,
    title: "Pasión por el Diseño",
    description:
      "Amamos lo que hacemos y eso se refleja en cada pixel de nuestros proyectos.",
  },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-secondary/30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-4 lg:px-8 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Somos <span className="text-primary">Nexoweb</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Somos una agencia de diseño web en Bucaramanga, Colombia,
              apasionada por crear experiencias digitales únicas que transforman
              negocios y conectan marcas con su audiencia.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Con años de experiencia en el mercado, hemos ayudado a decenas de
              empresas a establecer su presencia online con páginas web
              profesionales, tiendas virtuales y soluciones digitales a medida.
              Nuestro compromiso es brindar calidad, innovación y resultados
              tangibles.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "5+", label: "Años de Experiencia" },
                { value: "50+", label: "Clientes Felices" },
                { value: "100+", label: "Proyectos Entregados" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl lg:text-3xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
