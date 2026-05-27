"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Crear mensaje para WhatsApp
    const whatsappMessage = `Hola! Soy ${formData.name}. ${formData.message}. Mi correo es ${formData.email} y mi teléfono ${formData.phone}`;
    const whatsappUrl = `https://wa.me/573001234567?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Contáctanos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            ¿Listo para <span className="text-primary">comenzar?</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cuéntanos sobre tu proyecto y te responderemos en menos de 24 horas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="bg-card p-6 rounded-2xl border border-border/50">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Información de Contacto
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/573001234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl bg-green-500/10 hover:bg-green-500/20 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-foreground group-hover:text-green-500 transition-colors">
                      +57 300 123 4567
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Teléfono</p>
                    <p className="font-semibold text-foreground">
                      +57 300 123 4567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Correo</p>
                    <p className="font-semibold text-foreground">
                      contacto@nexoweb.co
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-semibold text-foreground">
                      Bucaramanga, Colombia
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card p-6 lg:p-8 rounded-2xl border border-border/50"
            >
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Envíanos un mensaje
              </h3>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="tu@correo.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Teléfono / WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="+57 300 000 0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-foreground mb-2"
                  >
                    Cuéntanos sobre tu proyecto
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-input border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Describe brevemente qué necesitas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  <Send className="w-5 h-5" />
                  Enviar por WhatsApp
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
