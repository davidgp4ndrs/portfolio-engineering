// src/data/projectsData.ts

export const projectsData = {
  en: {
    sectionTitle: "Technical Projects",
    items: [
      {
        title: "Cross-Platform Phonetic Training App",
        role: "Software Architect & Lead Developer",
        period: "2024 - Present",
        status: "In Development",
        description:
          "Desktop application built with Avalonia UI for structured IPA phonetic training, featuring chronological learning paths and real-time typing validation.",
        tags: ["Avalonia UI", ".NET Core", "C#", "MVVM"],
        detail: {
          longDescription:
            "Modular training system that synchronizes text and IPA symbols across structured learning sequences. Implements a custom chronological training engine that tracks user progress across complex phonetic datasets using an optimized MVVM architecture.",
          results: [
            "Sub-50ms UI response time for real-time typing validation",
            "Native deployment on Linux and Windows from a single codebase",
            "Custom IPA font rendering engine with full Unicode support",
            "Sequential learning algorithm for phonetic retention",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
      {
        title: "Real-Time Audio DSP Engine",
        role: "DSP Engineer",
        period: "2024",
        status: "In Development",
        description:
          "Low-latency audio capture and processing module for a smart teleprompter system. Implements voice activity detection and real-time waveform visualization.",
        tags: ["C#", "DSP", "Audio Processing", "Real-Time"],
        detail: {
          longDescription:
            "Audio backend for real-time voice capture using circular buffer management to minimize latency between microphone input and visual feedback. Applies digital signal processing techniques for noise filtering and voice activity detection to trigger scroll events based on speech.",
          results: [
            "Audio capture pipeline with under 20ms latency",
            "Real-time waveform visualization synchronized with voice events",
            "Basic noise filtering and VAD implementation",
            "Optimized CPU usage for concurrent audio and UI processing",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
      {
        title: "FPGA Acceleration Hub",
        role: "Hardware Developer",
        period: "2024 - Concept",
        status: "In Development",
        description:
          "Hardware acceleration platform using FPGA for high-speed signal processing tasks that exceed conventional software performance limits.",
        tags: ["FPGA", "Verilog", "VHDL", "RTL Design"],
        detail: {
          longDescription:
            "Prototyping of parallel computing solutions on FPGA targets for digital filtering and signal processing workloads. Focused on RTL design for custom logic blocks aimed at reducing latency in real-time processing pipelines by offloading computation from software to dedicated hardware gates.",
          results: [
            "Digital filter logic implemented in hardware for reduced latency",
            "RTL integration strategy with high-level software interfaces",
            "Architecture design for custom FPGA-based signal processing",
            "Research into low-latency hardware acceleration for DSP tasks",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
      {
        title: "Gregg Shorthand Training Engine",
        role: "Software Developer",
        period: "2025 - Concept",
        status: "Concept",
        description:
          "Training system for Gregg shorthand stenography, designed for touch and stylus-enabled devices. Focused on stroke recognition and structured learning sequences.",
        tags: ["Avalonia UI", ".NET", "C#", "Touch Input"],
        detail: {
          longDescription:
            "Planned development of a cross-platform training application for Gregg shorthand, a cursive stenographic system based on unique geometric strokes. The system will provide structured exercises, stroke validation and progressive learning paths optimized for tablet and stylus input devices.",
          results: [
            "Cross-platform architecture planned with Avalonia UI",
            "Stroke-based input system for tablet and stylus devices",
            "Structured learning sequences for shorthand symbol training",
            "Integration path with the existing Phonetic Training ecosystem",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
    ],
  },
  es: {
    sectionTitle: "Proyectos Técnicos",
    items: [
      {
        title: "App de Entrenamiento Fonético Multiplataforma",
        role: "Arquitecto de Software & Desarrollador Principal",
        period: "2024 - Presente",
        status: "En desarrollo",
        description:
          "Aplicación de escritorio construida con Avalonia UI para entrenamiento fonético IPA estructurado, con rutas de aprendizaje cronológico y validación de escritura en tiempo real.",
        tags: ["Avalonia UI", ".NET Core", "C#", "MVVM"],
        detail: {
          longDescription:
            "Sistema de entrenamiento modular que sincroniza texto y símbolos IPA en secuencias de aprendizaje estructuradas. Implementa un motor de entrenamiento cronológico que rastrea el progreso del usuario a través de conjuntos de datos fonéticos complejos usando arquitectura MVVM optimizada.",
          results: [
            "Tiempo de respuesta de UI inferior a 50ms para validación en tiempo real",
            "Despliegue nativo en Linux y Windows desde una sola base de código",
            "Motor de renderizado de fuentes IPA con soporte Unicode completo",
            "Algoritmo de aprendizaje secuencial para retención fonética",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
      {
        title: "Motor DSP de Audio en Tiempo Real",
        role: "Ingeniero de Procesamiento de Señales",
        period: "2024",
        status: "En desarrollo",
        description:
          "Módulo de captura y procesamiento de audio de baja latencia para un sistema de teleprompter inteligente. Implementa detección de actividad de voz y visualización de forma de onda en tiempo real.",
        tags: ["C#", "DSP", "Procesamiento de Audio", "Tiempo Real"],
        detail: {
          longDescription:
            "Backend de audio para captura de voz en tiempo real usando gestión de buffers circulares para minimizar la latencia entre la entrada del micrófono y la respuesta visual. Aplica técnicas de procesamiento digital de señales para filtrado de ruido y detección de actividad de voz para controlar el scroll del teleprompter.",
          results: [
            "Pipeline de captura de audio con latencia inferior a 20ms",
            "Visualización de forma de onda en tiempo real sincronizada con eventos de voz",
            "Implementación de filtrado básico de ruido y VAD",
            "Uso optimizado de CPU para procesamiento concurrente de audio y UI",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
      {
        title: "FPGA Acceleration Hub",
        role: "Desarrollador de Hardware",
        period: "2024 - Concepto",
        status: "En desarrollo",
        description:
          "Plataforma de aceleración hardware mediante FPGA para tareas de procesamiento de señales de alta velocidad que superan los límites del software convencional.",
        tags: ["FPGA", "Verilog", "VHDL", "Diseño RTL"],
        detail: {
          longDescription:
            "Prototipado de soluciones de cómputo paralelo en targets FPGA para cargas de trabajo de filtrado digital y procesamiento de señales. Enfocado en diseño RTL para bloques lógicos personalizados orientados a reducir la latencia en pipelines de procesamiento en tiempo real.",
          results: [
            "Lógica de filtrado digital implementada en hardware para latencia reducida",
            "Estrategia de integración RTL con interfaces de software de alto nivel",
            "Diseño de arquitectura para procesamiento de señales basado en FPGA",
            "Investigación en aceleración hardware de baja latencia para tareas DSP",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
      {
        title: "Motor de Entrenamiento Taquigrafía Gregg",
        role: "Desarrollador de Software",
        period: "2025 - Concepto",
        status: "Concepto",
        description:
          "Sistema de entrenamiento para taquigrafía Gregg, diseñado para dispositivos con entrada táctil y lápiz óptico. Enfocado en reconocimiento de trazos y secuencias de aprendizaje estructuradas.",
        tags: ["Avalonia UI", ".NET", "C#", "Entrada Táctil"],
        detail: {
          longDescription:
            "Desarrollo planificado de una aplicación de entrenamiento multiplataforma para taquigrafía Gregg, un sistema estenográfico cursivo basado en trazos geométricos únicos. El sistema proporcionará ejercicios estructurados, validación de trazos y rutas de aprendizaje progresivas optimizadas para tablets y lápices ópticos.",
          results: [
            "Arquitectura multiplataforma planificada con Avalonia UI",
            "Sistema de entrada basado en trazos para tablets y lápices ópticos",
            "Secuencias de aprendizaje estructuradas para símbolos taquigráficos",
            "Ruta de integración con el ecosistema de entrenamiento fonético existente",
          ],
          links: { demo: null, repo: null },
          image: null,
        },
      },
    ],
  },
};
