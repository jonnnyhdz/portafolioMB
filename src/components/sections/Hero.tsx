import { motion } from "framer-motion";
import {
  FaChartLine,
  FaBullhorn,
  FaPalette,
  FaCalendarAlt,
  FaPaperPlane,
  FaLayerGroup,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-linear-to-br from-violet-100 via-white to-fuchsia-100 px-6 pt-28 md:pt-32"
    >
      {/* Blobs suaves */}
      <div className="absolute top-20 left-10 w-48 h-48 bg-violet-400 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-40 right-20 w-64 h-64 bg-fuchsia-400 rounded-full blur-3xl opacity-30"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* TEXTO */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]"
          >
            <span className="block text-slate-900">Branding y contenido</span>

            <span className="block bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              para marcas en crecimiento
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="mt-6 text-base sm:text-lg text-slate-600 max-w-lg mx-auto md:mx-0"
          >
            Diseño, estrategia y comunicación visual pensada para generar
            impacto real.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#portafolio"
              className="relative group px-8 py-4 rounded-full font-semibold text-white overflow-hidden shadow-xl"
            >
              <span className="absolute inset-0 bg-linear-to-r from-violet-600 to-fuchsia-500 transition-transform duration-500 group-hover:scale-110"></span>
              <span className="relative z-10">Ver Portafolio</span>
            </a>

            <a
              href="#contacto"
              className="px-8 py-4 rounded-full font-semibold border border-violet-500 text-violet-600 backdrop-blur-md bg-white/40 hover:bg-violet-600 hover:text-white transition-all duration-300 shadow-md"
            >
              Contactame
            </a>
          </motion.div>
        </div>

        {/* COLLAGE GLASS PREMIUM */}
        <div className="relative h-120 w-full flex items-center justify-center">
          {/* Elemento central */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute backdrop-blur-xl bg-white/30 border border-white/40
                       rounded-3xl shadow-2xl p-8 w-56
                       rotate-[-4deg]"
          >
            <FaLayerGroup className="text-violet-600 text-3xl mb-4" />
            <h3 className="font-semibold text-slate-800 text-sm">
              Identidad de Marca
            </h3>
          </motion.div>

          {/* Elementos secundarios */}
          {[
            {
              icon: <FaChartLine />,
              text: "Estrategia Digital",
              color: "text-fuchsia-500",
              position: "top-6 left-6 rotate-[6deg]",
            },
            {
              icon: <FaBullhorn />,
              text: "Marketing Digital",
              color: "text-violet-600",
              position: "bottom-6 right-6 rotate-[-6deg]",
            },
            {
              icon: <FaCalendarAlt />,
              text: "Calendario de Contenido",
              color: "text-fuchsia-600",
              position: "top-24 right-2 rotate-[8deg]",
            },
            {
              icon: <FaPalette />,
              text: "Diseño Gráfico",
              color: "text-violet-500",
              position: "bottom-16 left-0 rotate-[-8deg]",
            },
            {
              icon: <FaPaperPlane />,
              text: "Flyers & Invitaciones",
              color: "text-fuchsia-500",
              position: "top-40 left-24 rotate-[4deg]",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 5 + index, repeat: Infinity }}
              className={`absolute ${item.position}
                          backdrop-blur-xl bg-white/30 border border-white/40
                          rounded-2xl shadow-xl px-5 py-4 w-48`}
            >
              <div className={`text-2xl mb-2 ${item.color}`}>{item.icon}</div>
              <p className="text-xs font-medium text-slate-700">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Ondas */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full opacity-40">
          <path
            fill="#7C3AED"
            fillOpacity="0.2"
            d="M0,192L80,176C160,160,320,128,480,144C640,160,800,224,960,240C1120,256,1280,224,1360,208L1440,192V320H0Z"
          ></path>
        </svg>
      </div>
    </section>
  );
}
