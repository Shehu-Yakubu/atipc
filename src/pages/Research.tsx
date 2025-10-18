import { Helmet } from "react-helmet";
import type { Report } from "../types";

const reports: Report[] = [
  { id: "r1", title: "Regional Economic Roadmap 2025", link: "#", year: 2025 },
  { id: "r2", title: "Investment Guide: Agriculture", link: "#", year: 2025 },
];

export const Research = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>ATIPC — Research</title>
      </Helmet>

      <h1 className="text-3xl font-semibold mb-6">Research & Insights</h1>
      <ul className="space-y-4">
        {reports.map((r) => (
          <li
            key={r.id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <div className="font-semibold">{r.title}</div>
              <div className="text-[var(--muted)] text-sm">
                Published: {r.year}
              </div>
            </div>
            <a href={r.link} className="text-[var(--brand)]">
              Download
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
