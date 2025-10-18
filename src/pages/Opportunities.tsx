import opportunities from "../data/opportunities.json";
import type { Sector } from "../types";
import { Helmet } from "react-helmet";

export const Opportunities = () => {
  const sectors = opportunities as Sector[];
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>ATIPC — Opportunities</title>
      </Helmet>

      <h1 className="text-3xl font-semibold mb-6">
        Trade & Investment Opportunities
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sectors.map((s) => (
          <div key={s.id} id={s.id} className="border p-4 rounded">
            <h3 className="font-semibold text-lg">{s.title}</h3>
            <p className="text-[var(--muted)] mt-2">{s.summary}</p>
            <div className="mt-3">
              <a href="#" className="text-[var(--brand)] hover:underline">
                Download brief
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
