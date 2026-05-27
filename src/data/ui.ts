// src/data/ui.ts — Updated for Electronics & Communications Engineer profile

export const sidebarLabels = {
  es: {
    contact: "Contacto",
    certs: "Certificaciones",
    cv: "Currículum",
    downloadBtn: "Descargar CV",
    modalBtn: "Contáctame",
  },
  en: {
    contact: "Contact",
    certs: "Certifications",
    cv: "Resume",
    downloadBtn: "Download CV",
    modalBtn: "Contact Me",
  },
};

// Updated certifications — relevant to EE/Telecom/AI profile
export const certificationsData = {
  en: [
    { name: "Cisco CCNA — Routing & Switching", icon: "fas fa-certificate" },
    { name: "AWS Certified IoT Specialty", icon: "fas fa-certificate" },
    { name: "TensorFlow Developer Certificate", icon: "fas fa-certificate" },
  ],
  es: [
    { name: "Cisco CCNA — Routing & Switching", icon: "fas fa-certificate" },
    { name: "AWS Certified IoT Specialty", icon: "fas fa-certificate" },
    { name: "Certificado de Desarrollador TensorFlow", icon: "fas fa-certificate" },
  ],
};

export const modalLabels = {
  es: {
    title: "contacto.exe",
    name: "Nombre",
    email: "Correo Electrónico",
    message: "Mensaje",
    send: "Enviar Mensaje",
    placeholderName: "Tu nombre...",
    placeholderEmail: "nombre@ejemplo.com",
    placeholderMsg: "Escribe tu mensaje aquí...",
  },
  en: {
    title: "contact.exe",
    name: "Name",
    email: "Email Address",
    message: "Message",
    send: "Send Message",
    placeholderName: "Your name...",
    placeholderEmail: "name@example.com",
    placeholderMsg: "Write your message here...",
  },
};
