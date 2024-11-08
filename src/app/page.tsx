"use client";
import { useState } from 'react';
import { BackgroundGradientAnimation } from '../components/ui/background-gradient-animation';


import Image from 'next/image';
import { BentoGrid, BentoGridItem } from "../components/ui/bento-grid";
import { IconArrowWaveRightUp, IconBoxAlignRightFilled, IconBoxAlignTopLeft, IconClipboardCopy, IconFileBroken, IconSignature, IconTableColumn } from "@tabler/icons-react";
import { Footer } from '@/components/Footer';

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
          className="heroTitle absolute z-50 inset-0 flex items-center justify-center text-white font-bold pointer-events-none text-center"
        >
          <Image
              src={'/Logo.png'}
              width={180}
              height={180}
              alt={`Logo`}
              className="object-contain"
            />
          <h1 className="title">
            SwiftTec Developers Conference 2024
          </h1>

          <div>
            <span className="emoji">📍</span><span className="location">Nuevo Edificio EXPEDITION</span>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Conferencias 
      <div className="max-w-7xl mx-auto py-12">
      <h2 className="text-5xl font-bold text-neutral-300 mb-8 text-center">
          Conferencias
        </h2>
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
      </div> */}

      {/* agenda */}
      <section className='agenda'>
        

        <h2 className="agendaTitle">
          Agenda
        </h2>

        <div className='itemAgenda'>
          <div className='title'>
            <span>Registro</span> - <span>10:30 am</span>
          </div>
          <span className='headline'>Participantes y Conferencistas</span>
        </div>

        <div className='itemAgenda'>
          <div className='title'>
            <span className='first'>Tech Santos,  Joaquin Ramirez y Paco Macedo, Emprendimiento TEC</span> - <span>11:00 am</span>
          </div>
          <span className='headline'>Paneles</span>
        </div>

        <div className='itemAgenda'>
          <div className='title'>
            <span>Networking y snacks</span> - <span>12:00 pm</span>
          </div>
          <span className='headline'>Con Expertos de la industria</span>
        </div>

        <div className='itemAgenda'>
          <div className='title'>
            <span>Apple Intelligence para desarrolladores</span> - <span>1:00 pm</span>
          </div>
          <span className='headline'>Apple Worldwide Developer Relations</span>
        </div>

        <div className='itemAgenda'>
          <div className='title'>
            <span>App Showcases</span> - <span>2:00 pm</span>
          </div>
          <span className='headline'>Presentación con Expertos</span>
        </div>

        <div className='itemAgenda'>
          <div className='title'>
            <span>Networking, Feria de apps y pizza </span> - <span>3:00 pm</span>
          </div>
          <span className='headline'>Prueba los Apple Vision Pro</span>
        </div>

        <div className='itemAgenda'>
          <div className='title'>
            <span>Despedida</span> - <span>6:00 pm</span>
          </div>
          <span className='headline'>Nos vemos en el siguiente evento</span>
        </div>
      </section>

      {/* Proyectos */}
      <section className="max-w-7xl mx-auto py-12">
        <h2 className="text-5xl font-bold text-neutral-300 mb-8 text-center">
          Proyectos
        </h2>
        <BentoGrid className="gap-6">
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
      </section>

      {/* Logos */}
      <div className="w-full flex items-center justify-center gap-8 py-12 bg-neutral-50">
        {logoImages.map((logo, index) => (
          <div
            key={index}
            className="rounded-full bg-white shadow-lg flex items-center justify-center p-4"
            style={{
              width: 'clamp(2.5rem, 5vw, 3.5rem)',
              height: 'clamp(2.5rem, 5vw, 3.5rem)',
            }}
          >
            <Image
              src={logo}
              width={500}
              height={500}
              alt={`Logo ${index + 1}`}
              className="object-contain opacity-60"
            />
          </div>
        ))}
      </div>

      {/* Preguntas Frecuentes */}
      <section className="bg-neutral-900 text-white py-16">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-neutral-300 tracking-tight">
          Preguntas Frecuentes
        </h2>
        <div className="max-w-3xl mx-auto space-y-4 px-6">
          {questionsAnswers.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className={`p-6 rounded-xl shadow-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                openIndex === index ? 'bg-neutral-800 text-neutral-200' : 'bg-neutral-900'
              }`}
              style={{
                background: openIndex === index ? 'linear-gradient(to bottom right, #555, #333)' : '',
                transition: 'background-color 0.3s ease, transform 0.3s ease',
              }}
            >
              <h3 className="text-xl font-semibold flex justify-between items-center">
                {item.question}
                <span className={`text-neutral-500 transition-transform ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                  {openIndex === index ? '-' : '+'}
                </span>
              </h3>
              {openIndex === index && (
                <p className="text-neutral-400 mt-4 transition-opacity duration-300 ease-in-out">
                  {item.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
        
        {/* Footer */}
        <Footer />
    </>
  );
}

// Skeleton para encabezado en cada tarjeta
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);


const items = [
  {
    title: "Konpa",
    description: "KONPA es una app para organizar eventos con notificaciones en tiempo real, alertas para nuevos invitados, seguimiento de asistentes y enlaces universales para compartir eventos.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/_0aC5JahO1A"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "Patch App",
    description: "Patch App fomenta hábitos sustentables a través de un huerto virtual. Los usuarios completan misiones diarias para mejorar su huerto y competir con amigos en su progreso.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/ZGkT7H1OvS0"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "TECuido",
    description: "TECuido es un asistente médico que brinda apoyo en emergencias, desde la detección de lesiones hasta el seguimiento de recetas. Notifica a contactos y da recomendaciones médicas.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/V1En6iZ9CLc"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "MedVision",
    description: "MedVision ayuda a estudiantes de medicina a aprender procedimientos quirúrgicos paso a paso, con visualizaciones 3D y realidad aumentada para practicar en objetos físicos escaneados.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/6fGD26dGgt4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "ReSicloApp",
    description: "ReSicloApp promueve el reciclaje en México. Ofrece localización de centros de reciclaje y proporciona información sobre los procesos de reciclaje de diferentes artículos.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://youtube.com/embed/ELtJjuP4cfM"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "SafeSisters",
    description: "SafeSisters es una app de seguridad para mujeres, que integra Apple Watch y notificaciones de emergencia para alertar al círculo de confianza en situaciones de riesgo.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/0hH0zGVWe60"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "HealthWind",
    description: "HealthWind ofrece información en tiempo real sobre la calidad del aire, ayudando a los usuarios a tomar decisiones para proteger su salud y concienciar sobre la contaminación.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://www.youtube.com/embed/Yiu68wS-Tag"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  },
  {
    title: "New Spot",
    description: "New Spot mide el impacto ambiental de las actividades diarias, como compras y viajes. Ofrece recomendaciones personalizadas para reducir la huella de carbono.",
    header: (
      <iframe
        className="w-full h-48 md:h-64 rounded-xl"
        src="https://drive.google.com/file/d/1dzqOqh2VgUvtEj0D93FW6qMX_ceRx8qp/preview"
        title="Google Drive video preview"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    ),
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />
  }
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


