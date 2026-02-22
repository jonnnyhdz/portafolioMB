import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const services = [
    {
      title: "Calendario de Contenido",
      description:
        "Organización estratégica de publicaciones para mantener constancia, coherencia y crecimiento sostenido en plataformas digitales.",
    },
    {
      title: "Estrategia Digital",
      description:
        "Planificación y dirección integral de la presencia digital de tu marca, alineando objetivos comerciales con acciones medibles.",
    },
    {
      title: "Marketing Digital",
      description:
        "Ejecución y difusión de campañas en plataformas digitales, optimizadas para maximizar alcance, interacción y conversión.",
    },
    {
      title: "Identidad de Marca",
      description:
        "Construcción de la base visual y conceptual que define la personalidad, posicionamiento y percepción de tu negocio.",
    },
    {
      title: "Diseño Gráfico",
      description:
        "Desarrollo de piezas visuales profesionales adaptadas a distintos canales y necesidades de comunicación.",
    },
    {
      title: "Flyers Promocionales",
      description:
        "Diseños específicos para promociones, lanzamientos y eventos con enfoque en impacto visual y claridad del mensaje.",
    },
    {
      title: "Invitaciones Personalizadas",
      description:
        "Diseños exclusivos y adaptados a eventos especiales, alineados a la identidad y estilo del cliente.",
    },
  ];

  const [active, setActive] = useState(0);
  const [mobileActive, setMobileActive] = useState<number | null>(null);

  return (
    <section
      id="servicios"
      className="scroll-mt-24 py-32 px-6 bg-violet-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        {/* TITULO */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-20"
        >
          Conoce sobre{" "}
          <div className="inline text-violet-600">mi experiencia</div>
        </motion.h2>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:grid grid-cols-2 gap-16 items-start">
          {/* LEFT - Selector */}
          <div className="space-y-4 relative">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActive(index)}
                className={`cursor-pointer rounded-2xl px-6 py-5 transition-all duration-300 border ${
                  active === index
                    ? "bg-white shadow-lg border-violet-200 scale-[1.02]"
                    : "bg-white/60 border-transparent hover:bg-white hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between">
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      active === index ? "text-violet-600" : "text-slate-800"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <span
                    className={`text-sm transition-all duration-300 ${
                      active === index
                        ? "text-violet-600 translate-x-1"
                        : "text-slate-400"
                    }`}
                  >
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT - Dynamic Panel */}
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl p-12 shadow-2xl min-h-[300px] flex flex-col justify-center relative overflow-hidden"
          >
            {/* Fondo decorativo sutil */}
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-violet-200 rounded-full blur-3xl opacity-20"></div>

            <h3 className="text-3xl font-bold text-violet-600 relative z-10">
              {services[active].title}
            </h3>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed relative z-10">
              {services[active].description}
            </p>
          </motion.div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="lg:hidden space-y-6">
          {services.map((service, index) => {
            const isOpen = mobileActive === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border-b border-slate-200 pb-6"
              >
                <div
                  onClick={() => setMobileActive(isOpen ? null : index)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <h3
                    className={`text-lg font-semibold transition-colors duration-300 ${
                      isOpen ? "text-violet-600" : "text-slate-900"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <span
                    className={`text-xl transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-violet-600" : "text-slate-400"
                    }`}
                  >
                    +
                  </span>
                </div>

                <motion.p
                  initial={false}
                  animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden text-slate-600 mt-4 text-sm leading-relaxed"
                >
                  {service.description}
                </motion.p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
