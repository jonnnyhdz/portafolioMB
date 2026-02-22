import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Sparkles } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contacto"
      className="scroll-mt-24 py-32 px-6 bg-white relative overflow-hidden"
    >
      {/* Fondo decorativo sutil */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute -top-40 right-20 w-[400px] h-[400px] bg-violet-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-fuchsia-200 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Lado izquierdo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <p className="text-violet-600 font-semibold tracking-widest uppercase text-sm mb-4">
            Contacto
          </p>

<h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 leading-tight">
  Escríbeme y{" "}
  <span className="bg-linear-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
    conozcámonos mejor
  </span>
</h2>

<p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-xl">
  Seguro podemos construir algo muy cool y alineado a tu visión.
</p>

<div className="mt-8 flex items-center gap-3 text-violet-600">
  <Sparkles className="w-5 h-5" />
  <span className="text-sm font-medium tracking-wide">
    Siempre abierta a nuevas ideas y colaboraciones
  </span>
</div>
        </motion.div>

        {/* Lado derecho */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {/* WhatsApp */}
          <a
            href="https://wa.me/529982439827"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between px-8 py-6 rounded-2xl 
                       bg-violet-50 border border-violet-200
                       hover:bg-violet-600 hover:text-white
                       transition-all duration-300 shadow-sm hover:shadow-xl"
          >
            <div className="flex items-center gap-4">
              <FaWhatsapp
                size={26}
                className="text-violet-600 group-hover:text-white transition"
              />
              <span className="text-lg font-semibold">
                Enviar mensaje por WhatsApp
              </span>
            </div>

            <span className="text-xl group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </a>

          {/* Email */}
          <a
            href="mailto:belemnarvaez1@gmail.com"
            className="group flex items-center justify-between px-8 py-6 rounded-2xl 
                       bg-white border border-slate-200
                       hover:border-violet-400 hover:shadow-lg
                       transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <HiOutlineMail
                size={26}
                className="text-violet-600"
              />
              <span className="text-lg font-semibold text-slate-800">
                Enviar correo electrónico
              </span>
            </div>

            <span className="text-xl text-violet-600 group-hover:translate-x-2 transition-transform duration-300">
              →
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  );
}