import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Mail,
  MapPin,
  Menu,
  Package,
  Phone,
  Shield,
  Truck,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const STATS = [
  { value: "40+", label: "Trade Lanes Operated" },
  { value: "13", label: "Countries Served" },
  { value: "30+", label: "Daily Departures" },
];

const SERVICE_PILLS = [
  "Freight Forwarding Solutions",
  "Customised Logistics Services",
  "Efficient Refrigerated Transport",
  "Comprehensive Transportation Services",
];

const SERVICES = [
  {
    id: "freight",
    title: "Freight Forwarding",
    description:
      "We manage the entire freight journey — from origin to destination — with precision and care. Our expert team coordinates sea, air, and road freight with seamless end-to-end visibility.",
    bullets: [
      "Full container and groupage shipments",
      "Real-time shipment tracking & updates",
      "Dedicated account management",
    ],
    icon: Truck,
    gradient: "from-emerald-950 via-green-900 to-emerald-800",
    iconColor: "text-emerald-400",
  },
  {
    id: "storage",
    title: "Storage Solutions",
    description:
      "Our modern warehouse facilities provide secure, flexible storage for all cargo types. From short-term overflow to long-term managed inventory, we handle it with care.",
    bullets: [
      "Temperature-controlled facilities",
      "Secure 24/7 monitored premises",
      "Flexible short & long-term options",
    ],
    icon: Package,
    gradient: "from-green-950 via-teal-900 to-green-800",
    iconColor: "text-teal-400",
  },
  {
    id: "customs",
    title: "Customs Management",
    description:
      "Our experienced customs brokers ensure smooth clearance for all your imports and exports. We navigate complex regulations so you stay compliant and your cargo keeps moving.",
    bullets: [
      "HMRC compliant import & export clearance",
      "Duty & tariff classification guidance",
      "Comprehensive documentation support",
    ],
    icon: Shield,
    gradient: "from-emerald-900 via-green-800 to-lime-900",
    iconColor: "text-lime-400",
  },
];

function GradientPlaceholder({
  gradient,
  icon: Icon,
  iconColor,
}: {
  gradient: string;
  icon: React.ComponentType<{ className?: string }>;
  iconColor: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-center justify-center rounded-xl overflow-hidden bg-gradient-to-br",
        gradient,
        "aspect-[4/3] w-full",
      )}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(oklch(0.95 0 0 / 0.15) 1px, transparent 1px), linear-gradient(90deg, oklch(0.95 0 0 / 0.15) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <Icon className={cn("w-24 h-24 opacity-40", iconColor)} />
    </div>
  );
}

export default function App() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    message: "",
    consent: false,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Static form — no backend
    alert("Thank you! We will be in touch shortly.");
    setFormData({ name: "", message: "", consent: false });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      {/* ── NAVIGATION ── */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border"
            : "bg-transparent",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#home"
            className="text-xl font-display font-bold text-primary tracking-tight"
            data-ocid="nav.link"
          >
            Promove Ltd
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  data-ocid="nav.link"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
            type="button"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-background/95 border-b border-border overflow-hidden"
            >
              <ul className="flex flex-col px-6 py-4 gap-4">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      data-ocid="nav.link"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── HERO ── */}
      <section
        id="home"
        className="relative min-h-screen flex items-center overflow-hidden"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('/assets/uploads/image-019d2bf0-9023-70fd-a603-8524fa057c46-1.png')",
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
        {/* Gradient fade to brand bg at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 md:py-40">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <span className="inline-block text-sm font-semibold tracking-widest text-primary uppercase mb-4">
              Promove Ltd
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Your Trusted Freight Forwarding Partner
            </h1>
            <p className="text-lg text-white/75 leading-relaxed mb-10 max-w-xl">
              Delivering seamless UK and international logistics solutions since
              day one. We move your cargo efficiently, reliably, and safely —
              every shipment, every time.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8"
                data-ocid="hero.primary_button"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold px-8"
                data-ocid="hero.secondary_button"
                asChild
              >
                <a href="#about">
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WE EXCEL IN ── */}
      <section id="about" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 relative inline-block">
              Your Logistics Specialists
              <span className="block mt-2 h-1 w-16 mx-auto rounded-full bg-primary" />
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">We excel in:</p>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {SERVICE_PILLS.map((pill) => (
                <span
                  key={pill}
                  className="px-5 py-2.5 rounded-full border border-primary/40 bg-primary/10 text-primary font-medium text-sm tracking-wide"
                >
                  {pill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="border-y border-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
              >
                <p className="font-display text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm tracking-wide uppercase">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE SECTIONS ── */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-28">
          {SERVICES.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center",
                  !isEven && "lg:[&>*:first-child]:order-last",
                )}
              >
                {/* Gradient placeholder image */}
                <GradientPlaceholder
                  gradient={service.gradient}
                  icon={Icon}
                  iconColor={service.iconColor}
                />

                {/* Text */}
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <Icon className={cn("w-7 h-7", service.iconColor)} />
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                        <span className="text-foreground/80 text-sm">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className="border-primary/50 text-primary hover:bg-primary/10 hover:border-primary mt-2"
                    data-ocid={`${service.id}.button`}
                    asChild
                  >
                    <a href="#contact">Contact Us</a>
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3 relative inline-block">
              Get In Touch
              <span className="block mt-2 h-1 w-16 mx-auto rounded-full bg-primary" />
            </h2>
            <p className="mt-4 text-muted-foreground">
              Ready to move your cargo? Our team is here to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-secondary/50 rounded-2xl p-8 lg:p-10 border border-border space-y-8"
            >
              <div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                  Contact Information
                </h3>
                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Phone
                      </p>
                      <a
                        href="tel:+441234567890"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        +44 (0) 1234 567 890
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Email
                      </p>
                      <a
                        href="mailto:info@promoveltd.co.uk"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        info@promoveltd.co.uk
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Address
                      </p>
                      <p className="text-foreground">
                        Promove Ltd, Logistics House,
                        <br />
                        Heathrow Business Park,
                        <br />
                        London, TW6 2BQ, UK
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <Globe className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                        Website
                      </p>
                      <a
                        href="https://www.promoveltd.co.uk"
                        className="text-foreground hover:text-primary transition-colors"
                      >
                        www.promoveltd.co.uk
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wide mb-3">
                  Operating Hours
                </p>
                <p className="text-foreground/80 text-sm">
                  Monday – Friday: 08:00 – 18:00
                </p>
                <p className="text-foreground/80 text-sm">
                  Saturday: 09:00 – 13:00
                </p>
                <p className="text-muted-foreground text-sm">Sunday: Closed</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background rounded-2xl p-8 lg:p-10 border border-border"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Send Us a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm text-foreground/80">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, name: e.target.value }))
                    }
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground"
                    data-ocid="contact.input"
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-sm text-foreground/80"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData((p) => ({ ...p, message: e.target.value }))
                    }
                    required
                    className="bg-input border-border text-foreground placeholder:text-muted-foreground resize-none"
                    data-ocid="contact.textarea"
                  />
                </div>
                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) =>
                      setFormData((p) => ({ ...p, consent: !!checked }))
                    }
                    required
                    className="mt-0.5"
                    data-ocid="contact.checkbox"
                  />
                  <Label
                    htmlFor="consent"
                    className="text-sm text-muted-foreground leading-relaxed cursor-pointer"
                  >
                    I consent to Promove Ltd storing my data for the purpose of
                    responding to this enquiry.
                  </Label>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold py-3"
                  data-ocid="contact.submit_button"
                >
                  Send Message
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Promove Ltd. All rights reserved.</p>
          <p>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
