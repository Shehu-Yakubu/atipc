import { useState } from "react";
import { Link } from "react-router-dom";

export const MobileMenu = () => {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="p-2 rounded bg-gray-100"
      >
        ☰
      </button>
      {open && (
        <div className="absolute right-4 mt-2 w-48 bg-white border rounded shadow p-2 z-50">
          <Link to="/" className="block py-2" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            to="/about"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            About
          </Link>
          <Link
            to="/opportunities"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            Opportunities
          </Link>
          <Link
            to="/research"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            Research
          </Link>
          <Link
            to="/contact"
            className="block py-2"
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};
