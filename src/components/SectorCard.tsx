import type { Sector } from "../types";

export const SectorCard = ({ sector }: { sector: Sector }) => {
  return (
    <div className="border rounded p-4 hover:shadow">
      <h3 className="font-semibold text-lg">{sector.title}</h3>
      <p className="text-sm text-[var(--muted)] mt-2">{sector.summary}</p>
      <div className="mt-3">
        <a href={sector.link} className="text-[var(--brand)] hover:underline">
          Learn more →
        </a>
      </div>
    </div>
  );
};
