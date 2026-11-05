import { createFileRoute } from "@tanstack/react-router";
import {
  Flower2,
  Truck,
  HeartHandshake,
  Sparkles,
  MapPin,
  Clock,
  Instagram,
  MessageCircle,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/site/Header";
import { Gallery } from "@/components/site/Gallery";
import { Reveal } from "@/components/site/Reveal";
import { SectionTitle } from "@/components/site/SectionTitle";
import { company, images, instagramLink, mapsLink, products, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flores e Perfumes Floricultura | Aparecida de Goiânia" },
      {
        name: "description",
        content:
          "Buquês, rosas, cestas de café e chocolate, presentes e coroas de flores em Aparecida de Goiânia. Peça pelo WhatsApp.",
      },
      { property: "og:title", content: "Flores e Perfumes Floricultura" },
      {
        property: "og:description",
        content: "Flores frescas e presentes feitos à mão em Aparecida de Goiânia - GO.",
      },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:image", content: images.hero },
      { property: "og:image:alt", content: "Buquê de rosas brancas e peônias" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Flores e Perfumes Floricultura" },
      {
        name: "twitter:description",
        content: "Flores frescas e presentes feitos à mão em Aparecida de Goiânia - GO.",
      },
      { name: "twitter:image", content: images.hero },
      { name: "twitter:image:alt", content: "Buquê de rosas brancas e peônias" },
    ],
  }),
  component: Index,
});

const perks = [
  {
    icon: Flower2,
    title: "Flores selecionadas",
    text: "Recebemos flores frescas diariamente, escolhidas uma a uma.",
  },
  {
    icon: Truck,
    title: "Entrega cuidadosa",
    text: "Entregamos em Aparecida de Goiânia e Goiânia com pontualidade.",
  },
  {
    icon: Sparkles,
    title: "Arranjos exclusivos",
    text: "Cada composição é pensada para a sua história e ocasião.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento afetuoso",
    text: "Ajudamos você a escolher o presente perfeito, sem pressa.",
  },
];

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section id="inicio" className="relative flex min-h-[100svh] items-center">
        <img
          src={images.hero}
          alt="Buquê de rosas brancas e peônias"
          width={1600}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative mx-auto w-full max-w-7xl px-6 pt-20">
          <div className="max-w-xl animate-rise">
            <span className="eyebrow">Floricultura em Aparecida de Goiânia</span>
            <h1 className="mt-6 text-5xl leading-[1.05] text-forest-foreground md:text-7xl">
              Flores que traduzem <em className="text-gold">sentimentos</em>
            </h1>
            <p className="mt-6 max-w-md text-lg text-forest-foreground/80">
              Buquês, cestas e presentes criados à mão, com delicadeza e flores frescas todos os
              dias.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#produtos"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-sm tracking-wide text-forest transition hover:brightness-105"
              >
                Conheça os produtos <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/40 px-8 py-4 text-sm text-forest-foreground transition hover:bg-forest-foreground/10"
              >
                <MessageCircle className="h-4 w-4" /> Fazer pedido
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-28 md:grid-cols-2"
      >
        <Reveal className="relative">
          <img
            src={images.sobre}
            alt="Florista montando buquê"
            loading="lazy"
            width={1008}
            height={1200}
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-40 w-40 border border-gold md:block" />
        </Reveal>
        <Reveal delay={150}>
          <span className="eyebrow">Nossa história</span>
          <h2 className="mt-4 text-4xl leading-tight text-primary md:text-5xl">
            Feito com flores, <em>entregue com carinho</em>
          </h2>
          <span className="gold-rule mt-6 !mx-0" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            A Flores e Perfumes nasceu do desejo de transformar momentos em memórias. Em nosso
            ateliê em Aparecida de Goiânia, cada arranjo é montado à mão, com flores frescas e
            atenção a cada detalhe.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            De um simples gesto de carinho a grandes celebrações, estamos ao seu lado para dizer o
            que as palavras não alcançam.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-6 border-t pt-8">
            {[
              ["+5 mil", "entregas"],
              ["100%", "flores frescas"],
              ["4,9★", "avaliações"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="font-serif text-3xl text-primary">{n}</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Produtos */}
      <section id="produtos" className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Nossos produtos" title="Para cada ocasião, um presente especial" />
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 120}>
                <article className="group">
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.imageAlt}
                      loading="lazy"
                      width={800}
                      height={1008}
                      className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mt-6 flex items-baseline justify-between gap-4">
                    <h3 className="text-3xl text-primary">{p.name}</h3>
                    {p.price && <span className="shrink-0 text-sm text-olive">{p.price}</span>}
                  </div>
                  <p className="mt-2 text-muted-foreground">{p.description}</p>
                  <a
                    href={whatsappLink(`Olá! Tenho interesse em ${p.name}. Pode me ajudar?`)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm tracking-wide text-primary transition hover:gap-3"
                  >
                    Encomendar <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria */}
      <section id="galeria" className="mx-auto max-w-7xl px-6 py-28">
        <SectionTitle eyebrow="Galeria" title="Arranjos que já fizeram história" />
        <Gallery />
        <div className="mt-12 text-center">
          <a
            href={instagramLink}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-olive"
          >
            <Instagram className="h-4 w-4" /> Veja mais em @{company.instagram}
          </a>
        </div>
      </section>

      {/* Diferenciais */}
      <section id="diferenciais" className="bg-forest py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Por que nos escolher" title="Delicadeza em cada detalhe" light />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((p, i) => (
              <Reveal key={p.title} delay={i * 100} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/50 text-gold">
                  <p.icon className="h-6 w-6" strokeWidth={1.2} />
                </div>
                <h3 className="mt-6 text-2xl text-forest-foreground">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-forest-foreground/70">{p.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-28">
        <Reveal className="mx-auto max-w-3xl px-6 text-center">
          <span className="eyebrow">Atendimento personalizado</span>
          <h2 className="mt-4 text-4xl leading-tight text-primary md:text-6xl">
            Vamos criar algo <em>inesquecível</em>?
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground">
            Fale com a nossa equipe pelo WhatsApp e receba sugestões sob medida para o seu momento.
          </p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 tracking-wide text-primary-foreground shadow-lg transition hover:bg-accent"
          >
            <MessageCircle className="h-5 w-5" /> Solicitar atendimento
          </a>
        </Reveal>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-cream py-28">
        <div className="mx-auto max-w-7xl px-6">
          <SectionTitle eyebrow="Contato" title="Visite nosso ateliê" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ContactCard icon={MapPin} title="Endereço" href={mapsLink} cta="Abrir no mapa">
              {company.address}
              <br />
              {company.district}
            </ContactCard>
            <ContactCard icon={Phone} title="WhatsApp" href={whatsappLink()} cta="Enviar mensagem">
              {company.whatsappDisplay}
            </ContactCard>
            <ContactCard icon={Instagram} title="Instagram" href={instagramLink} cta="Seguir">
              @{company.instagram}
            </ContactCard>
            <ContactCard icon={Clock} title="Horário">
              {company.hours.map((h) => (
                <span key={h.days} className="block">
                  {h.days}: {h.time}
                </span>
              ))}
            </ContactCard>
          </div>
        </div>
      </section>

      <footer className="bg-forest pt-20 pb-10 text-forest-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:grid-cols-3">
          <div>
            <p className="font-serif text-3xl italic">{company.name}</p>
            <p className="eyebrow mt-2">Floricultura</p>
            <p className="mt-6 max-w-xs text-sm text-forest-foreground/70">
              Flores frescas, cestas e presentes feitos à mão em Aparecida de Goiânia.
            </p>
          </div>
          <div>
            <p className="eyebrow">Navegação</p>
            <ul className="mt-5 space-y-2 text-sm text-forest-foreground/80">
              {[
                ["#sobre", "Sobre"],
                ["#produtos", "Produtos"],
                ["#galeria", "Galeria"],
                ["#diferenciais", "Diferenciais"],
                ["#contato", "Contato"],
              ].map(([h, l]) => (
                <li key={h}>
                  <a href={h} className="hover:text-gold">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="eyebrow">Fale conosco</p>
            <ul className="mt-5 space-y-3 text-sm text-forest-foreground/80">
              <li>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  {company.whatsappDisplay}
                </a>
              </li>
              <li>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gold"
                >
                  @{company.instagram}
                </a>
              </li>
              <li>
                <a href={mapsLink} target="_blank" rel="noreferrer" className="hover:text-gold">
                  {company.address}, {company.district}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-16 max-w-7xl border-t border-forest-foreground/15 px-6 pt-8 text-center text-xs text-forest-foreground/50">
          © {new Date().getFullYear()} {company.fullName}. Todos os direitos reservados.
        </div>
      </footer>

      <a
        href={whatsappLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 right-6 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}

function ContactCard({
  icon: Icon,
  title,
  href,
  cta,
  children,
}: {
  icon: typeof MapPin;
  title: string;
  href?: string;
  cta?: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="h-full">
      <div className="flex h-full flex-col bg-card p-8 transition hover:shadow-lg">
        <Icon className="h-6 w-6 text-gold" strokeWidth={1.3} />
        <h3 className="mt-5 text-2xl text-primary">{title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{children}</p>
        {href && (
          <a
            href={href}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 text-sm text-olive hover:text-primary"
          >
            {cta} <ArrowRight className="h-4 w-4" />
          </a>
        )}
      </div>
    </Reveal>
  );
}
