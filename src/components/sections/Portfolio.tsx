import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import GalleryModal from "./GalleryModal";

export default function Portfolio() {
  const projects = [
    { image: "/img/portfolio/cv.png", title: "Identidad de Marca" },
    { image: "/img/portfolio/puntodventa.jpg", title: "Invitación" },
    { image: "/img/portfolio/OOFICIALm.png", title: "POST" },
    { image: "/img/portfolio/INVITACIÓN2.png", title: "Invitación" },
    { image: "/img/portfolio/identidad-ul.png", title: "Identidad de Marca" },
    { image: "/img/portfolio/CLOUD.png", title: "Identidad de Marca" },
    { image: "/img/portfolio/identidadhealthy.PNG", title: "Identidad de Marca" },

    { image: "/img/portfolio/POST.png", title: "POST" },
    { image: "/img/portfolio/POST2.png", title: "POST" },
    { image: "/img/portfolio/POST333.png", title: "POST" },
    { image: "/img/portfolio/post-conta.png", title: "POST" },
    { image: "/img/portfolio/post-healty.png", title: "POST" },
    { image: "/img/portfolio/POST-LOVESENSE.png", title: "POST" },
    { image: "/img/portfolio/OFICIAL.png", title: "POST" },
    { image: "/img/portfolio/postconta.PNG", title: "POST" },
    { image: "/img/portfolio/postconta2.PNG", title: "POST" },
    { image: "/img/portfolio/postconta3.PNG", title: "POST" },
    { image: "/img/portfolio/invitacion-conta.png", title: "Invitación" },
    { image: "/img/portfolio/empaque.PNG", title: "Empaque" },
    {
      image: "/img/portfolio/identidad-arena.png",
      title: "Identidad de Marca",
    },
    { image: "/img/portfolio/identidad-eco.png", title: "Identidad de Marca" },
    { image: "/img/portfolio/identidad-burguir.PNG", title: "Identidad de Marca" },

  ];

  const total = projects.length;
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [galleryOpen, setGalleryOpen] = useState(false);

  // AutoPlay
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % total);
      }, 3500);
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay, total]);

  const stopAutoPlay = () => {
    setAutoPlay(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const next = () => {
    stopAutoPlay();
    setCurrent((prev) => (prev + 1) % total);
  };

  const prev = () => {
    stopAutoPlay();
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const getPosition = (index: number) => {
    const diff = index - current;

    if (diff === 0) return 0;
    if (diff === -1 || diff === total - 1) return -1;
    if (diff === 1 || diff === -(total - 1)) return 1;

    return 2;
  };

  return (
    <section
      id="portafolio"
      className="scroll-mt-24 py-28 bg-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-26 text-slate-800">
          Explora mi 
          <div className="inline ml-2 text-violet-600">Portafolio</div>
        </h2>

        <div className="relative flex items-center justify-center">
          {/* Flechas SOLO desktop */}
          <button
            onClick={prev}
            className="hidden lg:block absolute left-6 z-20 group"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full 
                            bg-white/40 backdrop-blur-lg border border-white/50
                            shadow-lg transition-all duration-300
                            group-hover:scale-110 group-hover:shadow-violet-300"
            >
              <span className="text-violet-600 text-xl font-bold transition-transform group-hover:-translate-x-1">
                ←
              </span>
            </div>
          </button>

          <div className="relative w-full h-105 flex items-center justify-center">
            {projects.map((project, index) => {
              const position = getPosition(index);

              let scale = 0.7;
              let x = 0;
              let opacity = 0;
              let zIndex = 0;

              if (position === 0) {
                scale = 1;
                x = 0;
                opacity = 1;
                zIndex = 10;
              }

              if (position === -1) {
                scale = 0.8;
                x = -260;
                opacity = 0.6;
                zIndex = 5;
              }

              if (position === 1) {
                scale = 0.8;
                x = 260;
                opacity = 0.6;
                zIndex = 5;
              }

              return (
                <motion.div
                  key={index}
                  animate={{ scale, x, opacity }}
                  transition={{ duration: 0.6 }}
                  className="absolute flex flex-col items-center"
                  style={{ zIndex }}
                >
                  <div
                    className="bg-white rounded-3xl shadow-xl p-4 
                  w-70 lg:w-105
                  flex items-center justify-center"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="max-h-90 lg:max-h-120 
                 w-auto h-auto 
                 object-contain"
                    />
                  </div>

                  {position === 0 && (
                    <motion.h3
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center mt-4 text-base lg:text-lg font-semibold text-slate-800"
                    >
                      {project.title}
                    </motion.h3>
                  )}
                </motion.div>
              );
            })}
          </div>

          <button
            onClick={next}
            className="hidden lg:block absolute right-6 z-20 group"
          >
            <div
              className="w-12 h-12 flex items-center justify-center rounded-full 
                            bg-white/40 backdrop-blur-lg border border-white/50
                            shadow-lg transition-all duration-300
                            group-hover:scale-110 group-hover:shadow-violet-300"
            >
              <span className="text-violet-600 text-xl font-bold transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </button>
        </div>

        {/* Indicadores mobile */}
        <div className="flex justify-center gap-3 mt-8 lg:hidden">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                stopAutoPlay();
                setCurrent(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                current === index ? "bg-violet-600 w-6" : "bg-slate-300"
              }`}
            ></button>
          ))}
        </div>
        <div className="flex justify-center mt-16">
          <button
            onClick={() => setGalleryOpen(true)}
            className="px-8 mt-8 py-3 rounded-full font-semibold text-white 
               bg-linear-to-r from-violet-600 to-fuchsia-500 
               shadow-lg hover:scale-105 transition"
          >
            Ver portafolio completo
          </button>
        </div>
      </div>
      <GalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        projects={projects}
      />
    </section>
  );
}
