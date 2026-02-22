import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const menuRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { label: "Inicio", href: "#inicio", id: "inicio" },
    { label: "Sobre mí", href: "#sobre-mi", id: "sobre-mi" },
    { label: "Experiencia", href: "#servicios", id: "servicios" },
    { label: "Portafolio", href: "#portafolio", id: "portafolio" },
    { label: "Certificaciones", href: "#certificaciones", id: "certificaciones" },
    { label: "Contacto", href: "#contacto", id: "contacto" },
  ];

  // 🔹 Detectar sección activa
  useEffect(() => {
    const sections = navItems.map(item =>
      document.getElementById(item.id)
    );

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach(section => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  // 🔹 Cerrar al hacer clic fuera
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        open &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // 🔹 Cerrar al hacer scroll
  useEffect(() => {
    function handleScroll() {
      if (open) setOpen(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [open]);

  return (
    <header className="fixed top-0 w-full z-50">
      <nav className="mx-auto max-w-7xl px-6 py-4 relative">
        <div
          className="flex items-center justify-between
                     bg-white/30 backdrop-blur-xl
                     border border-white/20
                     shadow-lg
                     rounded-2xl
                     px-6 py-3"
        >
          <a href="#inicio" className="flex items-center group">
            <img
              src="/img/logo-morado-desktop.png"
              alt="Mabel Marketing"
              className="h-12 w-auto object-contain md:hidden transition-transform duration-300 group-hover:scale-105"
            />
            <img
              src="/img/logo-morado-desktop.png"
              alt="Mabel Marketing"
              className="hidden md:block h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <li key={item.label} className="relative">
                  <a
                    href={item.href}
                    className={`cursor-pointer font-medium tracking-wide transition-colors duration-300 ${
                      isActive
                        ? "text-violet-600"
                        : "text-slate-800 hover:text-violet-600"
                    }`}
                  >
                    {item.label}
                  </a>

                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-linear-to-r from-violet-600 to-fuchsia-500 rounded-full transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </li>
              );
            })}
          </ul>

          {/* Mobile button */}
          <button
            className="md:hidden text-violet-600"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            ref={menuRef}
            className="md:hidden absolute left-0 right-0 mt-4 mx-6
                       bg-white/40 backdrop-blur-xl
                       border border-white/20
                       shadow-xl rounded-2xl
                       p-6"
          >
            <ul className="flex flex-col gap-6 font-medium">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;

                return (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`transition-colors duration-300 ${
                        isActive
                          ? "text-violet-600 font-semibold"
                          : "text-slate-800 hover:text-violet-600"
                      }`}
                    >
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}