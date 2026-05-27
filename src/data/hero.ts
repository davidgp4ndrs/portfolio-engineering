// src/data/hero.ts

export const heroData = {
  es: {
    default: {
      name: "David Andres Gavilanes",
      headline: "Electrónica · Telecomunicaciones · Automatización",
      subtitle: "Ingeniería aplicada desde la señal hasta el sistema",
      tags: ["RF", "Fibra Óptica", "DSP", "Embebidos", "FPGA", "ML"],
    },
    services: {
      headline: "Servicios Técnicos",
      subtitle: "Soluciones reales para infraestructura, señal e industria",
      tags: ["Radioenlaces", "Fibra Óptica", "PLCs", "Soporte de Red"],
    },
    experience: {
      headline: "Proyectos Técnicos",
      subtitle: "Desarrollo activo en software, señal y hardware dedicado",
      tags: ["C#", ".NET", "DSP", "FPGA", "Avalonia", "Python"],
    },
    skills: {
      headline: "Competencias Técnicas",
      subtitle: "Stack académico y aplicado en telecomunicaciones e ingeniería",
      tags: ["Telecomunicaciones", "Redes", "Control", "Embebidos", "Software"],
    },
    contact: {
      headline: "Contacto",
      subtitle: "Disponible para roles técnicos · Permiso de trabajo en trámite · España",
      tags: ["Disponibilidad inmediata", "Remoto", "Presencial"],
    },
  },
  en: {
    default: {
      name: "David Andres Gavilanes",
      headline: "Electronics · Telecoms · Automation",
      subtitle: "Applied engineering from signal to system",
      tags: ["RF", "Fiber Optics", "DSP", "Embedded", "FPGA", "ML"],
    },
    services: {
      headline: "Technical Services",
      subtitle: "Real solutions for infrastructure, signal and industry",
      tags: ["Radiolinks", "Fiber Optics", "PLCs", "Network Support"],
    },
    experience: {
      headline: "Technical Projects",
      subtitle: "Active development in software, signal and dedicated hardware",
      tags: ["C#", ".NET", "DSP", "FPGA", "Avalonia", "Python"],
    },
    skills: {
      headline: "Core Competencies",
      subtitle: "Academic and applied stack in telecoms and engineering",
      tags: ["Telecoms", "Networks", "Control", "Embedded", "Software"],
    },
    contact: {
      headline: "Contact",
      subtitle: "Available for technical roles · Work permit in process · Spain",
      tags: ["Immediate availability", "Remote", "On-site"],
    },
  },
};

export type HeroSection = keyof typeof heroData.en;
export type Lang = keyof typeof heroData;
