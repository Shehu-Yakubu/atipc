import { Helmet } from "react-helmet";

export const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>ATIPC — About</title>
      </Helmet>

      <h1 className="text-3xl font-semibold mb-4">About ATIPC</h1>
      <p className="text-[var(--muted)] max-w-3xl">
        The Arewa Trade & Investment Promotion Council (ATIPC) is dedicated to
        promoting sustainable economic growth by connecting investors with
        opportunities across the region, providing research, and supporting
        capacity building for state IPAs.
      </p>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p className="text-[var(--muted)] mt-2">
          To stimulate trade and investment in the Arewa region through targeted
          support, advocacy, and strategic partnerships.
        </p>
      </section>
    </div>
  );
};
