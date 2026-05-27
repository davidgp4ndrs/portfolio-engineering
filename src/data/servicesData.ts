// src/data/servicesData.ts

export const servicesData = {
  en: {
    header: "Technical Services",
    items: [
      {
        title: "RF Radiolink Planning & Analysis",
        description:
          "Design and simulation of point-to-point and point-to-multipoint radio links. Coverage analysis, path loss calculation and antenna placement for reliable wireless infrastructure.",
        icon: "fas fa-broadcast-tower",
        items: [
          "Link budget and Fresnel zone calculation",
          "Coverage simulation with Radio Mobile",
          "Antenna height, type and placement optimization",
        ],
        detail: {
          methodology: [
            "Site survey and geographic data collection",
            "Path loss and fade margin calculation (ITU-R models)",
            "Fresnel zone clearance and antenna height determination",
            "Link budget generation and coverage map validation",
          ],
          tools: ["Radio Mobile", "ITU-R Models", "AutoCAD", "Google Earth", "Excel"],
          duration: "1–3 weeks depending on number of links",
          image: null,
        },
      },
      {
        title: "Network Deployment & Technical Support",
        description:
          "Field installation and commissioning of fiber optic networks and data infrastructure. Fault diagnosis, documentation and preventive maintenance of active links and network equipment.",
        icon: "fas fa-network-wired",
        items: [
          "Fiber optic splicing, termination and testing",
          "Network topology documentation and inventory",
          "Fault diagnosis and link quality verification",
        ],
        detail: {
          methodology: [
            "Physical plant survey and route planning",
            "Cable laying, conduit installation and splicing",
            "Continuity testing and fault location",
            "Service commissioning and handover documentation",
          ],
          tools: ["Fiber Optic Tools", "OTDR", "TCP/IP", "AutoCAD", "Network Diagrams"],
          duration: "Variable depending on network scale",
          image: null,
        },
      },
      {
        title: "Industrial Automation & Instrumentation",
        description:
          "Support in industrial environments with PLC-based control systems, electrical substation assistance, CAD documentation and process instrumentation tasks.",
        icon: "fas fa-industry",
        items: [
          "PLC-based control system support",
          "High and medium voltage substation assistance",
          "Technical CAD documentation and asset inventory",
        ],
        detail: {
          methodology: [
            "Process and control system review",
            "PLC program inspection and parameter verification",
            "Electrical schematic documentation in CAD",
            "Asset inventory and maintenance record update",
          ],
          tools: ["PLCs", "AutoCAD", "SCADA", "Multimeter", "Clamp Meter", "Technical Documentation"],
          duration: "Ongoing or project-based engagement",
          image: null,
        },
      },
    ],
  },
  es: {
    header: "Servicios Técnicos",
    items: [
      {
        title: "Planificación y Análisis de Radioenlaces RF",
        description:
          "Diseño y simulación de radioenlaces punto a punto y punto a multipunto. Análisis de cobertura, cálculo de pérdidas de trayecto y ubicación de antenas para infraestructura inalámbrica fiable.",
        icon: "fas fa-broadcast-tower",
        items: [
          "Cálculo de link budget y zonas de Fresnel",
          "Simulación de cobertura con Radio Mobile",
          "Optimización de altura, tipo y ubicación de antenas",
        ],
        detail: {
          methodology: [
            "Levantamiento de sitio y recopilación de datos geográficos",
            "Cálculo de path loss y margen de desvanecimiento (modelos ITU-R)",
            "Determinación de despeje de zona de Fresnel y altura de antenas",
            "Generación de link budget y validación de mapa de cobertura",
          ],
          tools: ["Radio Mobile", "Modelos ITU-R", "AutoCAD", "Google Earth", "Excel"],
          duration: "1–3 semanas según número de enlaces",
          image: null,
        },
      },
      {
        title: "Despliegue de Redes y Soporte Técnico",
        description:
          "Instalación y puesta en servicio en campo de redes de fibra óptica e infraestructura de datos. Diagnóstico de fallos, documentación y mantenimiento preventivo de enlaces activos y equipos de red.",
        icon: "fas fa-network-wired",
        items: [
          "Fusión, terminación y pruebas de fibra óptica",
          "Documentación de topología de red e inventario",
          "Diagnóstico de fallos y verificación de calidad de enlace",
        ],
        detail: {
          methodology: [
            "Levantamiento de planta externa y planificación de ruta",
            "Tendido de cable, instalación de canalización y fusión",
            "Pruebas de continuidad y localización de fallos",
            "Puesta en servicio y documentación de entrega",
          ],
          tools: ["Herramientas de Fibra Óptica", "OTDR", "TCP/IP", "AutoCAD", "Diagramas de Red"],
          duration: "Variable según escala de la red",
          image: null,
        },
      },
      {
        title: "Automatización Industrial e Instrumentación",
        description:
          "Apoyo en entornos industriales con sistemas de control basados en PLCs, asistencia en subestaciones eléctricas, documentación CAD y tareas de instrumentación de procesos.",
        icon: "fas fa-industry",
        items: [
          "Soporte en sistemas de control basados en PLC",
          "Asistencia en subestaciones de alta y media tensión",
          "Documentación técnica CAD e inventario de activos",
        ],
        detail: {
          methodology: [
            "Revisión del proceso y sistema de control",
            "Inspección de programa PLC y verificación de parámetros",
            "Documentación de esquemas eléctricos en CAD",
            "Inventario de activos y actualización de registros de mantenimiento",
          ],
          tools: ["PLCs", "AutoCAD", "SCADA", "Multímetro", "Pinza Amperimétrica", "Documentación Técnica"],
          duration: "Continuo o por proyecto",
          image: null,
        },
      },
    ],
  },
};
