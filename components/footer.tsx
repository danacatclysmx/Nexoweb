import Link from "next/link";
import { Globe, Instagram, Facebook, Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#planes", label: "Planes" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#contacto", label: "Contacto" },
];

const services = [
  "Páginas Web",
  "Tiendas Online",
  "Diseño Responsive",
  "SEO",
  "Soporte Web",
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main Footer */}
        <div className="py-12 lg:py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="#inicio" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Nexoweb</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Agencia de diseño web en Bucaramanga. Conectamos tu negocio con el
              mundo digital.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href="https://instagram.com/nexoweb.bga"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://facebook.com/nexoweb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:contacto@nexoweb.co"
                className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary/20 flex items-center justify-center transition-colors group"
                aria-label="Email"
              >
                <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground text-sm">
                  Bucaramanga, Santander, Colombia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+573001234567"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  +57 300 123 4567
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:contacto@nexoweb.co"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  contacto@nexoweb.co
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="https://instagram.com/nexoweb.bga"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors text-sm"
                >
                  @nexoweb.bga
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm text-center md:text-left">
            © {new Date().getFullYear()} Nexoweb. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Hecho con ❤️ en Bucaramanga
          </p>
        </div>
      </div>
    </footer>
  );
}
