import { Link } from "react-router-dom";
import { MobileMenu } from "./MobileMenu";

export const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--brand)] rounded flex items-center justify-center text-white font-bold">
            A
          </div>
          <div>
            <div className="font-semibold">ATIPC</div>
            <div className="text-xs text-[var(--muted)]">
              Arewa Trade & Investment Promotion Council
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex gap-6 items-center text-sm">
          <Link to="/" className="hover:underline">
            Home
          </Link>
          <Link to="/about" className="hover:underline">
            About
          </Link>
          <Link to="/opportunities" className="hover:underline">
            Opportunities
          </Link>
          <Link to="/research" className="hover:underline">
            Research
          </Link>
          <Link
            to="/contact"
            className="text-white bg-[var(--brand)] px-4 py-2 rounded"
          >
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};
