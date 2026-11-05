export function SectionTitle({
  eyebrow,
  title,
  light = false,
}: {
  eyebrow: string;
  title: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto mb-14 flex max-w-2xl flex-col items-center text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2
        className={`mt-4 text-4xl leading-tight md:text-5xl ${light ? "text-forest-foreground" : "text-primary"}`}
      >
        {title}
      </h2>
      <span className="gold-rule mt-6" />
    </div>
  );
}
