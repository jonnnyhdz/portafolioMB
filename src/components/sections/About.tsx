import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="py-28 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        {/* IMAGEN DIFUMINADA PREMIUM */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Glow orgánico grande */}
          <div className="absolute w-80 h-80 md:w-105 md:h-105 bg-linear-to-br from-violet-200 to-fuchsia-200 rounded-full blur-3xl opacity-30"></div>

          {/* Imagen con máscara degradada */}
          <div className="relative">
            <img
              src="/img/sobremi.png"
              alt="María Belem Narváez"
              className="
        w-72
        sm:w-80
        md:w-105
        lg:w-115
        object-cover
        drop-shadow-2xl
        [mask-image:radial-gradient(circle,rgba(0,0,0,1)_65%,rgba(0,0,0,0)_100%)]
        [-webkit-mask-image:radial-gradient(circle,rgba(0,0,0,1)_65%,rgba(0,0,0,0)_100%)]
      "
            />
          </div>
        </motion.div>

        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center lg:text-left"
        >
          {/* Mini etiqueta */}
          <p className="text-xs uppercase tracking-[0.3em] text-violet-600 font-semibold mb-5">
            Sobre mí
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Hola, soy{" "}
            <span className="relative inline-block align-middle">
              {/* Primera letra elegante */}
              <span className="font-serif italic text-5xl sm:text-6xl lg:text-7xl text-violet-600 mr-1">
                M
              </span>

              {/* Nombre con degradado */}
              <span className="bg-linear-to-r italic from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                abel!
              </span>
            </span>
          </h2>

          <p className="mt-8 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Mi nombre es{" "}
            <span className="font-semibold text-slate-900">Belem</span>, soy
            estudiante de{" "}
            <span className="font-semibold text-slate-900">Mercadotecnia</span>{" "}
            con enfoque en{" "}
            <span className="font-medium text-violet-600">
              social media y diseño
            </span>
            , con experiencia en crecimiento dentro del campo.
          </p>

          <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Me apasiona la{" "}
            <span className="font-medium text-violet-600">organización</span> y
            el <span className="font-medium text-violet-600">diseño</span> como
            herramientas para conectar ideas, marcas y personas. Disfruto
            colaborar en equipo, soy{" "}
            <span className="font-semibold text-slate-900">
              detallista y amigable
            </span>
            , y siempre estoy en constante aprendizaje para seguir mejorando mis
            habilidades.
          </p>

          {/* Divider sutil */}
          <div className="mt-10 w-16 h-0.5 bg-linear-to-r from-violet-600 to-fuchsia-500 mx-auto lg:mx-0 rounded-full"></div>

          {/* HABILIDADES */}
          <div className="mt-12 grid sm:grid-cols-2 gap-10 text-left">
            {/* Técnicas */}
            <div>
              <h5 className="text-xs font-semibold tracking-wider uppercase text-slate-800 mb-4">
                Habilidades técnicas
              </h5>

              <div className="flex flex-wrap gap-3">
                {[
                  "Illustrator",
                  "Photoshop",
                  "Figma",
                  "Canva",
                  "Meta Business",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-xs font-medium rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Personales */}
            <div>
              <h5 className="text-xs font-semibold tracking-wider uppercase text-slate-800 mb-4">
                Habilidades personales
              </h5>

              <div className="flex flex-wrap gap-3">
                {[
                  "Creatividad",
                  "Comunicación efectiva",
                  "Pensamiento crítico",
                  "Trabajo en equipo",
                  "Adaptabilidad",
                  "Liderazgo",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 text-xs font-medium rounded-full bg-violet-50 text-violet-700 hover:bg-violet-100 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
