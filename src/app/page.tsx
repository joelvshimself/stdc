import { useState } from 'react';
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

  // Datos dummy para el carrusel
  const carouselData = [
    {
      category: "Artificial Intelligence",
      title: "You can do more with AI.",
      src: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "The first rule of Apple club is that you boast about Apple club.",
    },
    {
      category: "Productivity",
      title: "Enhance your productivity.",
      src: "https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: "Quickly jot down a grocery list, and take amazing class notes.",
    }
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
                width: 'clamp(3rem, 8vw, 4rem)', // Tamaño responsivo del contenedor
                height: 'clamp(3rem, 8vw, 4rem)', // Tamaño responsivo del contenedor
              }}
              className="rounded-full bg-white bg-opacity-80 flex items-center justify-center shadow-lg overflow-hidden"
            >
              <Image
                src={logo}
                width={500}
                height={500}
                alt={`Logo ${index + 1}`}
                className="object-contain opacity-50"
                style={{
                  width: 'clamp(1rem, 6vw, 3rem)', // Tamaño responsivo de la imagen
                  height: 'clamp(1rem, 6vw, 3rem)', // Tamaño responsivo de la imagen
                }}
              />
            </div>
          ))}
        </div>
      </BackgroundGradientAnimation>

      
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-300 dark:text-neutral-200 font-sans">
        Conferencias
      </h2>
      {/* Carrusel de tarjetas */}
      <div className="w-full py-20 overflow-x-auto flex space-x-6 px-4">
        {carouselData.map((card, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-xs bg-white rounded-xl shadow-md overflow-hidden"
          >
            <Image
              src={card.src}
              alt={card.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{card.category}</p>
              <p className="text-gray-700 text-sm">{card.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contenedor de Proyectos*/}
    </>
  );
}
