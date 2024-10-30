"use client";
import { useState } from 'react';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';
import Image from 'next/image';
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";

export default function MainPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Función para manejar el acordeón de preguntas y respuestas
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
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
    },{
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
          style={{ fontSize: 'clamp(10rem, 18vw, 27rem)', lineHeight: '1' }}
          className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold pointer-events-none text-center"
        >
          <Image
            src="/STDC20242.png"
            alt="STDC Logo"
            width={900}
            height={900}
            className=" object-contain drop-shadow-2xl"
          />
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

      {/* Contenedor de Proyectos */}
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-300 dark:text-neutral-200 font-sans">
        Proyectos
      </h2>
      <BentoGrid className="max-w-4xl mx-auto py-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>

      {/* Contenedor de logos en la parte inferior */}
      <div className="w-full flex items-center justify-center gap-6 py-10">
        {logoImages.map((logo, index) => (
          <div
            key={index}
            style={{
              width: 'clamp(3rem, 8vw, 4rem)',
              height: 'clamp(3rem, 8vw, 4rem)',
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
                width: 'clamp(1rem, 6vw, 3rem)',
                height: 'clamp(1rem, 6vw, 3rem)',
              }}
            />
          </div>
        ))}
      </div>
      

      {/* Sección de preguntas frecuentes (FAQ) */}
      <div className="bg-gray-900 text-white py-16">
        <h2 className="text-4xl font-bold text-center mb-10 text-neutral-300">Preguntas Frecuentes</h2>
        <div className="max-w-4xl mx-auto space-y-4 px-4">
          {questionsAnswers.map((item, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
              onClick={() => toggleAccordion(index)}
            >
              <h3 className="text-lg font-semibold text-neutral-100 flex justify-between items-center">
                {item.question}
                <span className="text-gray-400">
                  {openIndex === index ? '-' : '+'}
                </span>
              </h3>
              {openIndex === index && (
                <p className="text-gray-400 mt-4">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-1000 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-lg font-semibold mb-2">Sobre Nosotros</h2>
              <p className="text-gray-400">
                Somos una empresa comprometida con el desarrollo de soluciones innovadoras para un futuro mejor.
              </p>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-lg font-semibold mb-2">Enlaces Rápidos</h2>
              <ul className="text-gray-400">
                <li className="mb-1">
                  <a href="#" className="hover:underline">Inicio</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">Servicios</a>
                </li>
                <li className="mb-1">
                  <a href="#" className="hover:underline">Contacto</a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/3 mb-4">
              <h2 className="text-lg font-semibold mb-2">Síguenos</h2>
              <div className="flex space-x-4 text-gray-400">
                <a href="#" className="hover:text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.88c0 .91-.37 1.75-1.02 2.38-.66.65-1.54 1.02-2.48 1.02H3.5c-.94 0-1.83-.37-2.48-1.02-.65-.63-1.02-1.47-1.02-2.38V4.56c0-.91.37-1.75 1.02-2.38.66-.65 1.54-1.02 2.48-1.02h17c.94 0 1.83.37 2.48 1.02.65.63 1.02 1.47 1.02 2.38z"/></svg>
                </a>
                <a href="#" className="hover:text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.88c0 .91-.37 1.75-1.02 2.38-.66.65-1.54 1.02-2.48 1.02H3.5c-.94 0-1.83-.37-2.48-1.02-.65-.63-1.02-1.47-1.02-2.38V4.56c0-.91.37-1.75 1.02-2.38.66-.65 1.54-1.02 2.48-1.02h17c.94 0 1.83.37 2.48 1.02.65.63 1.02 1.47 1.02 2.38z"/></svg>
                </a>
                <a href="#" className="hover:text-gray-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.56v14.88c0 .91-.37 1.75-1.02 2.38-.66.65-1.54 1.02-2.48 1.02H3.5c-.94 0-1.83-.37-2.48-1.02-.65-.63-1.02-1.47-1.02-2.38V4.56c0-.91.37-1.75 1.02-2.38.66-.65 1.54-1.02 2.48-1.02h17c.94 0 1.83.37 2.48 1.02.65.63 1.02 1.47 1.02 2.38z"/></svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-4 text-center">
            <p className="text-gray-400">© 2023 STDC. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

// Skeleton para encabezado en cada tarjeta
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);


const items = [
  
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "YouTube Video",
    description: "Watch an interesting video on AI applications.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/48wo5KINI_g"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  
  
];

// Datos de preguntas y respuestas
const questionsAnswers = [
  {
    question: "¿Cómo puedo registrarme en la plataforma?",
    answer: "Para registrarte, ve a la página principal y haz clic en el botón de 'Registrarse'. Llena el formulario con tus datos y sigue las instrucciones para completar el registro.",
  },
  {
    question: "¿Es gratuita la plataforma?",
    answer: "Sí, nuestra plataforma es completamente gratuita. No existen costos ocultos ni cargos adicionales.",
  },
  {
    question: "¿Cómo puedo contactar al soporte?",
    answer: "Puedes contactar al soporte a través de la sección de 'Contacto' en el menú principal o enviándonos un correo electrónico a soporte@ejemplo.com.",
  },
  {
    question: "¿Qué tipo de contenido se puede compartir en la plataforma?",
    answer: "Puedes compartir cualquier contenido que cumpla con nuestras normas de la comunidad, como artículos, videos y documentos informativos.",
  }
];


