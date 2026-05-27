// src/data/indexContent.ts
// Complementary content — expands what the PDF CV cannot cover.

export const logos = [
  { name: "Python", file: "python.svg" },
  { name: "C# / .NET", file: "dotnet.svg" },
  { name: "Linux", file: "linux.svg" },
  { name: "Git", file: "git.svg" },
  { name: "AutoCAD", file: "autocad.svg" },
  { name: "LaTeX", file: "latex.svg" },
  { name: "KiCad", file: "kicad.svg" },
];

export const indexContent = {
  en: {
    mainTitle: "Engineering Profile",
    bio: `
      <strong>Electronics and Communications Engineer</strong> with a broad academic foundation
      spanning <em>RF systems, digital signal processing, embedded hardware,
      industrial automation and telecommunications networks</em>.
      <br/><br/>
      Hands-on exposure to <strong>fiber optic deployment</strong>, radiolink planning using
      <em>Radio Mobile</em>, PLC-based industrial control, microcontroller programming
      and applied machine learning.
      <br/><br/>
      Currently based in <strong>Spain</strong>, with a <em>work permit in process</em> and a degree
      undergoing <strong>official homologation</strong>. Open to technical roles in
      telecommunications, networks, embedded systems or any engineering
      environment that values a practical, problem-solving profile.
    `,
    toolsTitle: "Tools & Technologies",
  },
  es: {
    mainTitle: "Perfil de Ingeniería",
    bio: `
      <strong>Ingeniero en Electrónica y Comunicaciones</strong> con una base académica amplia que
      abarca <em>sistemas RF, procesamiento digital de señales, hardware embebido,
      automatización industrial y redes de telecomunicaciones</em>.
      <br/><br/>
      Experiencia práctica en <strong>despliegue de fibra óptica</strong>, planificación de
      radioenlaces con <em>Radio Mobile</em>, control industrial basado en PLCs, programación
      de microcontroladores y aprendizaje automático aplicado.
      <br/><br/>
      Actualmente residiendo en <strong>España</strong>, con <em>permiso de trabajo en trámite</em> 
      y título en proceso de <strong>homologación oficial</strong>. Abierto a roles técnicos en
      telecomunicaciones, redes, sistemas embebidos o cualquier entorno de ingeniería
       que valore un perfil práctico enfocado en la resolución de problemas.
    `,
    toolsTitle: "Herramientas y Tecnologías",
  },
};
