import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import Image from 'next/image';

export default function MainPage() {
  // Array con las rutas de los logos
  const logoImages = [
    '/apple.svg',
    '/apple.svg',
    '/apple.svg',
    '/apple.svg',
    '/apple.svg',
  ];

  return (
    <>
      <BackgroundGradientAnimation>
        {/* Texto principal */}
        <div
          id="HeroTitle"
          style={{ fontSize: 'clamp(5rem, 15vw, 15rem)', lineHeight: '1' }}
          className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold pointer-events-none text-center"
        >
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            STDC
          </p>
        </div>

        {/* Contenedor de logos en la parte inferior */}
        <div className="absolute bottom-10 w-full flex items-center justify-center gap-6">
          {logoImages.map((logo, index) => (
            <div
              key={index}
              style={{
                width: 'clamp(3rem, 8vw, 4rem)',    // Tamaño responsivo del contenedor
                height: 'clamp(3rem, 8vw, 4rem)',   // Tamaño responsivo del contenedor
              }}
              className="rounded-full bg-white bg-opacity-50 flex items-center justify-center shadow-lg overflow-hidden"
            >
              <Image
                src={logo}
                width={500}
                height={500}
                alt={`Logo ${index + 1}`}
                className="object-contain opacity-50"
                style={{
                  width: 'clamp(1rem, 6vw, 3rem)',    // Tamaño responsivo de la imagen
                  height: 'clamp(1rem, 6vw, 3rem)',   // Tamaño responsivo de la imagen
                }}
              />
            </div>
          ))}
        </div>
      </BackgroundGradientAnimation>
    </>
  );
}
