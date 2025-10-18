import { Hero } from "../components/Hero";
import { SectorCard } from "../components/SectorCard";
import opportunities from "../data/opportunities.json";
import type { Sector } from "../types";
import { Helmet } from "react-helmet";

export const Home = () => {
  const sectors = opportunities as Sector[];
  return (
    <div>
      <Helmet>
        <title>ATIPC — Home</title>
        <meta
          name="description"
          content="Promoting trade and investment across Arewa region."
        />
      </Helmet>

      <Hero
        title="Promoting trade, investment, and shared prosperity across Arewa"
        subtitle="ATIPC supports investors, businesses, and governments through research, advocacy, and capacity building to improve the region's business climate."
        cta={{ label: "Explore Opportunities", href: "/opportunities" }}
      />

      <section className="container mx-auto px-4 py-12">
        <h2 className="text-2xl font-semibold mb-4">Priority Sectors</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((s) => (
            <SectorCard key={s.id} sector={s} />
          ))}
        </div>
      </section>

      <section className="bg-white py-12 border-t">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">
            Latest Research & Publications
          </h2>
          <p className="text-[var(--muted)]">
            Download recent economic roadmaps and investment guides.
          </p>
        </div>
      </section>
    </div>
  );
};
