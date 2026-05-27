// src/data/contactData.ts

export type Lang = "en" | "es";

export const availabilityColors = {
  available: {
    tag: "is-success is-light",
    dot: "#22c55e",
  },
  busy: {
    tag: "is-warning is-light",
    dot: "#f59e0b",
  },
  unavailable: {
    tag: "is-danger is-light",
    dot: "#ef4444",
  },
};

export const contactData = {
  en: {
    pageTitle: "Contact",
    availabilityStatus: "available" as const, // Coincide perfectamente con el mapeo
    availabilityLabel: "Availability",
    availabilityValue: "Open to opportunities",
    responseLabel: "Response time",
    responseValue: "< 24h",
    infoHeading: "Direct channels",
    a11y: {
      infoRegion: "Contact information",
      formRegion: "Contact form",
      statusLive: "Form submission status",
      required: "required field",
    },
    infoItems: [
      {
        label: "Email",
        value: "davidgp4ndrs@gmail.com", // 👈 Cambia por tu correo
        href: "mailto:yourname@email.com",
        icon: "fas fa-envelope",
        mono: true,
      },
      {
        label: "Phone",
        value: "+34 632 182 235", // 👈 Tu teléfono visible
        href: "tel:+34 632 182 235",
        icon: "fas fa-phone",
        mono: true,
      },
      {
        label: "WhatsApp",
        value: "+34 632 182 235", // 👈 Tu teléfono visible
        // 👈 Formato limpio de API de WhatsApp internacional (Sin espacios, sin el símbolo +)
        href: "https://wa.me/34632182235?text=Hello%20Andrew,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect.",
        icon: "fab fa-whatsapp",
        mono: true,
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/yourprofile",
        href: "https://linkedin.com/in/yourprofile",
        icon: "fab fa-linkedin",
        mono: false,
      },
      {
        label: "GitHub",
        value: "github.com/yourusername",
        href: "https://github.com/yourusername",
        icon: "fab fa-github",
        mono: false,
      },
    ],
    form: {
      heading: "Send a message",
      subjectLabel: "Subject",
      subjectPlaceholder: "What is this about?",
      nameLabel: "Name",
      namePlaceholder: "Your name",
      emailLabel: "Email",
      emailPlaceholder: "your@email.com",
      messageLabel: "Message",
      messagePlaceholder: "Write your message here...",
      sendBtn: "Send message",
      sendingBtn: "Sending...",
      successHeading: "Message sent",
      successBody: "Thank you for reaching out. I will get back to you shortly.",
      errorHeading: "Something went wrong",
      errorBody: "Please try again or contact me directly by email.",
    },
  },
  es: {
    pageTitle: "Contacto",
    availabilityStatus: "available" as const,
    availabilityLabel: "Disponibilidad",
    availabilityValue: "Abierto a oportunidades",
    responseLabel: "Tiempo de respuesta",
    responseValue: "< 24h",
    infoHeading: "Canales directos",
    a11y: {
      infoRegion: "Información de contacto",
      formRegion: "Formulario de contacto",
      statusLive: "Estado del envío del formulario",
      required: "campo requerido",
    },
    infoItems: [
      {
        label: "Email",
        value: "davidgp4ndrs@gmail.com", // 👈 Cambia por tu correo
        href: "mailto:tunombre@email.com",
        icon: "fas fa-envelope",
        mono: true,
      },
      {
        label: "Teléfono",
        value: "+34 632 182 235", // 👈 Tu teléfono visible
        href: "tel:+34 632 182 235",
        icon: "fas fa-phone",
        mono: true,
      },
      {
        label: "WhatsApp",
        value: "+34 632 182 235", // 👈 Tu teléfono visible
        // 👈 Formato en español con texto predefinido listo
        href: "https://wa.me/34632182235?text=Hola%20Andrew,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20contactar%20contigo.",
        icon: "fab fa-whatsapp",
        mono: true,
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/tuperfil",
        href: "https://linkedin.com/in/tuperfil",
        icon: "fab fa-linkedin",
        mono: false,
      },
      {
        label: "GitHub",
        value: "github.com/tuusuario",
        href: "https://github.com/tuusuario",
        icon: "fab fa-github",
        mono: false,
      },
    ],
    form: {
      heading: "Enviar mensaje",
      subjectLabel: "Asunto",
      subjectPlaceholder: "¿De qué se trata?",
      nameLabel: "Nombre",
      namePlaceholder: "Tu nombre",
      emailLabel: "Correo",
      emailPlaceholder: "tu@correo.com",
      messageLabel: "Mensaje",
      messagePlaceholder: "Escribe tu mensaje aquí...",
      sendBtn: "Enviar mensaje",
      sendingBtn: "Enviando...",
      successHeading: "Mensaje enviado",
      successBody: "Gracias por escribir. Te responderé en breve.",
      errorHeading: "Algo salió mal",
      errorBody: "Por favor intenta de nuevo o contáctame directamente por email.",
    },
  },
};
