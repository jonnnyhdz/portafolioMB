import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { useState, useEffect } from "react";

type BaseProject = {
  image: string;
  title: string;
};

type Project = {
  image?: string;
  pdf?: string;
  title: string;
  category: string;
};

interface Props {
  isOpen: boolean;
  onClose: () => void;
  projects: BaseProject[];
}

export default function GalleryModal({ isOpen, onClose, projects }: Props) {
  /* ===============================
     📌 BANNERS (INDEPENDIENTES)
  =============================== */

  const banners: Project[] = [
    {
      image: "/img/portfolio/banner.png",
      title: "Banner Promocional de healthy but tasty 1",
      category: "Banners",
    },
    {
      image: "/img/portfolio/banner2.png",
      title: "Banner Promocional de healthy but tasty 2",
      category: "Banners",
    },
    {
      image: "/img/portfolio/banner3.PNG",
      title: "Banner colegio de arquitectos 3",
      category: "Banners",
    },
  ];

  /* ===============================
     📌 PROPUESTAS WEB (PDF)
  =============================== */

  const webProposals: Project[] = [
    {
      pdf: "/disenos-web/healthy.pdf",
      title: "Landing Healthy But Tasty",
      category: "Propuestas Web",
    },
    {
      pdf: "/disenos-web/ColegioDeContadores.pdf",
      title: "Landing Colegio de Contadores",
      category: "Propuestas Web",
    },
    {
      pdf: "/disenos-web/ULSolar.pdf",
      title: "Landing UL Solar",
      category: "Propuestas Web",
    },
  ];

  /* ===============================
     📌 CLASIFICACIÓN AUTOMÁTICA
  =============================== */

  const imageProjects: Project[] = projects.map((p) => {
    let category = "Otros";
    const title = p.title.toLowerCase();

    if (title.includes("post")) category = "POST";
    else if (title.includes("invit")) category = "Invitación";
    else if (title.includes("identidad")) category = "Identidad de Marca";
    else if (title.includes("empaque")) category = "Empaque";

    return {
      image: p.image,
      title: p.title,
      category,
    };
  });

  const allProjects = [...imageProjects, ...banners];

  const categories = [
    "Todos",
    "Identidad de Marca",
    "POST",
    "Invitación",
    "Empaque",
    "Banners",
    "Propuestas Web",
  ];

  const [activeCategory, setActiveCategory] = useState("Todos");
  const [activePdf, setActivePdf] = useState<string | null>(null);

  /* ===============================
     🧠 FIX BUG IFRAME
  =============================== */

  useEffect(() => {
    setActivePdf(null);
  }, [activeCategory]);

  const filtered =
    activeCategory === "Todos"
      ? allProjects
      : allProjects.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-999 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        >
          <motion.div
            initial={{ scale: 0.96 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.96 }}
            className="relative w-full max-w-7xl h-[95vh] bg-white rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* HEADER */}
            <div className="flex justify-between items-center px-6 sm:px-10 py-5 border-b border-slate-200">
              <h2 className="text-lg sm:text-2xl font-bold text-slate-800">
                Portafolio Completo
              </h2>

              <button
                onClick={onClose}
                className="text-slate-600 hover:text-violet-600 transition"
              >
                <X size={26} />
              </button>
            </div>

            {/* CATEGORÍAS */}
            <div className="flex gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-6 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition whitespace-nowrap ${
                    activeCategory === cat
                      ? "bg-linear-to-r from-violet-600 to-fuchsia-500 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* CONTENIDO */}
            <div className="flex-1 overflow-y-auto px-6 sm:px-10 pb-6 sm:pb-10">
              {/* ===== IMÁGENES Y BANNERS ===== */}
              {activeCategory !== "Propuestas Web" && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, index) =>
                      project.image ? (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.03 }}
                          className="bg-white rounded-2xl shadow-lg overflow-hidden"
                        >
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-contain"
                          />
                        </motion.div>
                      ) : null,
                    )}
                  </div>

                  {/* ✨ MENSAJE SUTIL */}
                  {filtered.length < 4 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                      className="mt-16 flex justify-center"
                    >
                      <div className="text-center max-w-lg">
                        <div className="w-16 h-[1px] bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto mb-6 opacity-60"></div>

                        <p className="text-slate-600 text-sm tracking-wide">
                          Estoy trabajando en nuevas propuestas que pronto
                          formarán parte de este espacio.
                        </p>

                        <p className="mt-3 text-xs text-slate-400 italic">
                          La creatividad siempre está en movimiento.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </>
              )}

              {/* ===== PROPUESTAS WEB ===== */}
              {activeCategory === "Propuestas Web" && (
                <div className="flex flex-col lg:flex-row h-full gap-6">
                  {/* Sidebar */}
                  <div className="lg:w-72 space-y-3">
                    {webProposals.map((proposal, index) => (
                      <button
                        key={index}
                        onClick={() => setActivePdf(proposal.pdf!)}
                        className={`w-full text-left px-4 py-3 rounded-xl transition ${
                          activePdf === proposal.pdf
                            ? "bg-linear-to-r from-violet-600 to-fuchsia-500 text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {proposal.title}
                      </button>
                    ))}
                  </div>

                  {/* Preview */}
                  <div className="flex-1 h-[60vh] lg:h-full">
                    <iframe
                      src={`${activePdf ?? webProposals[0].pdf}#toolbar=1`}
                      className="w-full h-full rounded-2xl shadow-xl"
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
