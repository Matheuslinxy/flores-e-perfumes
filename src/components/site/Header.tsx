import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { company, whatsappLink } from "@/data/site";

const nav = [
  { href: "#sobre", label: "Sobre" },
  { href: "#produtos", label: "Produtos" },
  { href: "#galeria", label: "Galeria" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const solid = scrolled || open;
  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${solid ? "bg-background/95 shadow-sm backdrop-blur" : "bg-transparent"}`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <a href="#inicio" className="flex flex-col leading-none">
          <span
            className={`font-serif text-2xl italic ${solid ? "text-primary" : "text-forest-foreground"}`}
          >
            {company.name}
          </span>
          <span className="eyebrow mt-1 !text-[0.6rem]">Floricultura</span>
        </a>
        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm tracking-wide transition-colors hover:text-gold ${solid ? "text-foreground" : "text-forest-foreground"}`}
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm text-forest transition hover:brightness-105 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            onClick={() => setOpen(!open)}
            className={`lg:hidden ${solid ? "text-primary" : "text-forest-foreground"}`}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      {open && (
        <nav
          id="mobile-navigation"
          className="flex flex-col gap-1 border-t bg-background px-6 pb-6 pt-2 lg:hidden"
        >
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-3 font-serif text-xl text-primary"
            >
              {n.label}
            </a>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4" /> Falar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
