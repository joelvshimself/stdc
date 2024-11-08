import { IconBrandInstagram, IconBrandWhatsapp } from "@tabler/icons-react";
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
          <div className="md:w-1/2">
            <h2 className="text-lg font-semibold mb-3">Sobre SwiftTec</h2>
            <p className="text-neutral-400">
              SwiftTec es un grupo estudiantil dedicado al desarrollo de aplicaciones para la gran Manzana. Buscamos conectar estudiantes y profesionales apasionados por la tecnología para crear soluciones innovadoras.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-lg font-semibold mb-3">Síguenos</h2>
            <div className="flex space-x-4 text-neutral-400">
              <a href="https://www.instagram.com/swift.tec" className="hover:text-neutral-100">
                <IconBrandInstagram className="h-6 w-6" />
              </a>
              <a href="https://chat.whatsapp.com/F32yXVAqu1jC1kmZdquIf9" className="hover:text-neutral-100">
                <IconBrandWhatsapp className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 border-t border-neutral-600 pt-4 text-center relative z-10">
          <p className="text-neutral-400">© 2024 SwiftTec. Todos los derechos reservados.</p>
          <p className="text-neutral-400 mt-2">
            Developer's Conference - Apple Intelligence | Conéctate, aprende y colabora con los mejores de la industria.
          </p>
        </div>
      </footer>
    </>
  );
};
