export default function CopyrightFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4b0000] text-white text-center py-2 text-sm">
      <p>
        © {currentYear} Aaoji. All rights reserved. Designed & Developed by{" "}
        <span className="font-medium">Eazotel</span>.
      </p>
    </footer>
  );
}
