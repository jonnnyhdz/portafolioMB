import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { FaGoogle, FaAward } from "react-icons/fa";
import { SiOdoo } from "react-icons/si";

export default function Certifications() {
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const certifications = [
    {
      title: "Fundamentos de Marketing",
      file: "/certificaciones/funcamentosMarketing.pdf",
      tag: "Certificación",
      icon: <FaGoogle size={16} />,
    },
    {
      title: "Certificación Odoo",
      file: "/certificaciones/odoo.pdf",
      tag: "Profesional",
      icon: <SiOdoo size={16} />,
    },
    {
      title: "Protocolos Profesionales",
      file: "/certificaciones/protocolos.pdf",
      tag: "Certificación",
      icon: <FaAward size={16} />,
    },
    {
      title: "Reconocimiento Académico",
      file: "/certificaciones/reconocimiento.pdf",
      tag: "Formación",
      icon: <FaAward size={16} />,
    },
  ];

  return (
    <section
      id="certificaciones"
      className="scroll-mt-24 py-32 px-6 bg-linear-to-b from-white to-violet-50"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-slate-900">
          Certificaciones & Reconocimientos
        </h2>

        {/* GRID */}
        <div className="mt-16 grid md:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              onClick={() => setActivePdf(cert.file)}
              className="cursor-pointer group bg-white rounded-3xl shadow-lg 
                         border border-slate-200 hover:shadow-2xl 
                         transition-all duration-300 overflow-hidden"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-4 bg-violet-50 border-b border-slate-100">
                <div className="flex items-center gap-3 text-violet-600">
                  <div
                    className="w-8 h-8 flex items-center justify-center 
                                  rounded-full bg-white shadow-sm"
                  >
                    {cert.icon}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {cert.tag}
                  </span>
                </div>
              </div>

              {/* MINI PREVIEW RESPONSIVE */}
              <div className="p-6 bg-slate-100">
                <div
                  className="relative w-full max-w-sm mx-auto aspect-[4/3] bg-white 
                  rounded-xl shadow-md overflow-hidden border border-slate-200"
                >
                  <iframe
                    src={`${cert.file}#toolbar=0&navpanes=0&scrollbar=0`}
                    className="absolute inset-0 w-full h-full pointer-events-none"
                  />
                </div>
              </div>

              {/* TITLE */}
              <div className="p-6 text-left">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-violet-600 transition">
                  {cert.title}
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Click para ver documento completo
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL COMPLETO */}
      <AnimatePresence>
        {activePdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.96 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.96 }}
              className="relative bg-white w-full max-w-6xl 
                   h-[85vh] sm:h-[90vh] 
                   rounded-2xl sm:rounded-3xl 
                   shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="flex justify-between items-center px-6 py-4 border-b border-slate-200">
                <h3 className="text-sm sm:text-base font-semibold text-slate-700">
                  Documento
                </h3>

                <button
                  onClick={() => setActivePdf(null)}
                  className="text-slate-600 hover:text-violet-600 transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Desktop iframe */}
              <div className="hidden sm:flex flex-1">
                <iframe src={activePdf} className="w-full h-full" />
              </div>

              {/* Mobile botón abrir PDF */}
              <div className="flex sm:hidden flex-1 items-center justify-center p-6 text-center">
                <div>
                  <p className="text-slate-600 text-sm mb-6">
                    Para una mejor visualización, abre el documento en pantalla
                    completa.
                  </p>

                  <a
                    href={activePdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-3 rounded-full 
                         bg-linear-to-r from-violet-600 to-fuchsia-500 
                         text-white font-medium shadow-lg"
                  >
                    Abrir documento
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
