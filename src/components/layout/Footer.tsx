import { FaWhatsapp, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          {/* Marca */}
          <div>
            <a href="#inicio" className="group inline-block">
              <img
                src="/img/logo-morado-desktop.png"
                alt="Mabel Marketing"
                className="h-16 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </a>

            <p className="mt-4 text-slate-600 text-sm leading-relaxed max-w-xs">
              Estrategia digital, identidad visual y ejecución creativa para
              marcas que buscan destacar con intención.
            </p>
          </div>

          {/* Navegación */}
          <div className="flex flex-col gap-3 text-sm text-slate-600">
            <a href="#inicio" className="hover:text-violet-600 transition">
              Inicio
            </a>
            <a href="#sobre-mi" className="hover:text-violet-600 transition">
              Sobre mí
            </a>
            <a href="#servicios" className="hover:text-violet-600 transition">
              Servicios
            </a>
            <a href="#portafolio" className="hover:text-violet-600 transition">
              Portafolio
            </a>
            <a href="#contacto" className="hover:text-violet-600 transition">
              Contacto
            </a>
          </div>

          {/* Conecta */}
          <div>
            <p className="text-sm text-slate-500 mb-4">Conecta</p>

            <div className="flex gap-4 flex-wrap">
              {/* WhatsApp */}
              <a
                href="https://wa.me/529982439827"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-violet-50 border border-violet-200
                           hover:bg-violet-600 hover:text-white
                           transition-all duration-300"
              >
                <FaWhatsapp size={16} />
              </a>

              {/* Email */}
              <a
                href="mailto:belemnarvaez1@gmail.com"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-violet-50 border border-violet-200
                           hover:bg-violet-600 hover:text-white
                           transition-all duration-300"
              >
                <HiOutlineMail size={16} />
              </a>

              <a
                href="https://www.linkedin.com/in/belem-narvaez-6a98352b5/"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-violet-50 border border-violet-200
                           hover:bg-violet-600 hover:text-white
                           transition-all duration-300"
              >
                <FaLinkedinIn size={16} />
              </a>

              {/* Instagram */}
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-violet-50 border border-violet-200
                           hover:bg-violet-600 hover:text-white
                           transition-all duration-300"
              >
                <FaInstagram size={16} />
              </a> */}

              {/* Facebook */}
              {/* <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full 
                           bg-violet-50 border border-violet-200
                           hover:bg-violet-600 hover:text-white
                           transition-all duration-300"
              >
                <FaFacebookF size={16} />
              </a> */}
            </div>
          </div>
        </div>

        {/* Línea inferior */}
        <div className="border-t border-slate-200 mt-12 pt-6 text-center text-xs text-slate-500">
          © {new Date().getFullYear()} Mabel Marketing. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
