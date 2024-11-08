import { IconArrowWaveRightUp, IconBoxAlignTopLeft } from "@tabler/icons-react";
import "./footer.css";

export const Footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="footer-bg bg-neutral-0 text-white py-12 relative overflow-hidden">
        {/* Fondo animado */}
        <div className="footer-gradients">
          <div className="footer-gradient-layer"></div>
          <div className="footer-gradient-layer"></div>
          <div className="footer-gradient-layer"></div>
          <div className="footer-gradient-layer"></div>
          <div className="footer-gradient-layer"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 relative z-10">
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Sobre Nosotros</h2>
            <p className="text-neutral-400">
              Somos una empresa comprometida con el desarrollo de soluciones innovadoras para un futuro mejor.
            </p>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Enlaces Rápidos</h2>
            <ul className="text-neutral-400 space-y-1">
              <li><a href="#" className="hover:underline">Inicio</a></li>
              <li><a href="#" className="hover:underline">Servicios</a></li>
              <li><a href="#" className="hover:underline">Contacto</a></li>
            </ul>
          </div>
          <div className="md:w-1/3">
            <h2 className="text-lg font-semibold mb-3">Síguenos</h2>
            <div className="flex space-x-4 text-neutral-400">
              <a href="#" className="hover:text-neutral-100">
                <IconBoxAlignTopLeft className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-neutral-100">
                <IconArrowWaveRightUp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-600 pt-4 text-center relative z-10">
          <p className="text-neutral-400">© 2023 STDC. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
};
