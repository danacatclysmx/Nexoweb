"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Star } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Plan Básico Digital",
    price: "Desde $800.000",
    description:
      "Ideal para emprendedores y pequeños negocios que quieren comenzar su presencia online.",
    features: [
      "Página institucional",
      "Hasta 5 secciones",
      "Formulario de contacto",
      "Diseño responsive",
      "Certificado SSL",
      "Dominio por 1 año",
    ],
    popular: false,
    cta: "Solicitar Cotización",
  },
  {
    name: "Plan Crecimiento Web",
    price: "Desde $1.500.000",
    description:
      "Para negocios que buscan expandir su alcance digital y generar más leads.",
    features: [
      "Diseño profesional premium",
      "Hasta 10 secciones",
      "Integración con redes sociales",
      "SEO básico incluido",
      "Formularios avanzados",
      "Galería de imágenes",
      "Botón de WhatsApp",
      "Hosting por 1 año",
    ],
    popular: true,
    cta: "Solicitar Cotización",
  },
  {
    name: "Plan Profesional Completo",
    price: "Desde $2.500.000",
    description:
      "Solución completa para empresas que quieren vender online y crecer exponencialmente.",
    features: [
      "Tienda online completa",
      "Pasarela de pagos integrada",
      "SEO avanzado",
      "Capacitación incluida",
      "Soporte preferencial 24/7",
      "Panel de administración",
      "Integración de inventario",
      "Reportes de ventas",
    ],
    popular: false,
    cta: "Solicitar Cotización",
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="planes" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Planes y Precios
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Elige el plan perfecto para{" "}
            <span className="text-primary">tu negocio</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tenemos opciones flexibles que se adaptan a tus necesidades y
            presupuesto.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative bg-card rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "border-primary shadow-xl shadow-primary/10 scale-105 lg:scale-110"
                  : "border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    <Star className="w-4 h-4 fill-current" />
                    Más Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {plan.name}
                </h3>
                <div className="text-3xl font-bold text-primary mb-2">
                  {plan.price}
                </div>
                <p className="text-sm text-muted-foreground">
                  {plan.description}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="#contacto"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center text-muted-foreground text-sm mt-8"
        >
          * Todos los precios están en pesos colombianos (COP). Contáctanos para
          planes personalizados.
        </motion.p>
      </div>
    </section>
  );
}
