type Props = {
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
};

export const Hero = ({ title, subtitle, cta }: Props) => {
  return (
    <section className="bg-gradient-to-r from-white to-gray-50 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-[var(--muted)] max-w-2xl mx-auto mb-6">{subtitle}</p>
        {cta && (
          <a
            href={cta.href}
            className="inline-block bg-[var(--brand)] text-white px-6 py-3 rounded"
          >
            {cta.label}
          </a>
        )}
      </div>
    </section>
  );
};
