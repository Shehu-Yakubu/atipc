export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t mt-12">
      <div className="container mx-auto px-4 py-8 text-sm text-[var(--brand)]">
        <div className="flex flex-col md:flex-row justify-between">
          <div>
            <div className="font-semibold">
              Arewa Trade & Investment Promotion Council (ATIPC)
            </div>
            <div className="mt-2">Address: Abuja, Nigeria</div>
            <div className="mt-1">Email: info@atipc.org</div>
          </div>
          <div className="mt-4 md:mt-0">
            <div>© {new Date().getFullYear()} ATIPC. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
