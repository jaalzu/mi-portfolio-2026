export const translations = {
  es: {
    // Ventanas - títulos
    winAbout: "Sobre mí",
    winContact: "Contacto",

    // About
    aboutRole: "Desarrollador Frontend",
    aboutText:
      "con experiencia en el diseño, desarrollo, mantenimiento y mejora de aplicaciones web.",
    aboutText2:
      "Transformo requisitos complejos en experiencias de usuario destacadas, abordando cada proyecto con entusiasmo y compromiso.",

    // Info
    info1: "Aprendizaje autodidacta",
    info2: "Alto nivel de inglés",
    info3: "+3 años de experiencia en desarrollo web",
    info4:
      "Disfruto colaborar tanto en decisiones técnicas como de producto y UI/UX",

    // Contact
    contactP: "Podés contactarme por cualquiera de estos medios!",
    contactEmail: "Ver correo",
    contactCopied: "✓ Copiado!",
    contactHover: "· click para copiar",

    // Picture
    picAge: "25 años",
    picCountry: "Argentina",

    // Proyectos títulos de ventana
    p1WinTitle: "Proyecto #1",
    p2WinTitle: "Proyecto #2",
    p3WinTitle: "Proyecto #3",

    // Proyecto rentalibre
    p1Desc:
      "Marketplace de segunda mano para alquilar y vender objetos entre personas. Mensajería en tiempo real, sistema de reviews mutuas y flujo completo de compra con estados y notificaciones.",
    p1Origin:
      "Todos tenemos objetos que nos da vergüenza, pereza o miedo vender. Por eso surgió esta app, inspirada en Wallapop pero pensada para el mercado argentino, para que puedas vender lo que quieras sin costo.",

    // Proyecto PickYourColor
    p2Desc:
      "Visualizador interactivo de paletas de color con toolbar para modificar colores en tiempo real. Los cambios se aplican instantáneamente sobre componentes de UI y las paletas se pueden compartir por URL.",
    p2Origin:
      "Nació para evitar el constante ir y venir entre el código y el navegador al crear y ajustar paletas de colores, permitiendo ver cambios en tiempo real y probar los colores directamente en una web profesional.",

    // Proyecto Courses
    p3Desc:
      "Plataforma e-Learning con acceso por roles, gestión de cursos y lecciones, progreso de alumnos en tiempo real y foro de comunidad por curso.",
    p3Origin:
      "El proyecto surgió cuando un mentor digital necesitaba una plataforma privada para ofrecer cursos a sus alumnos como parte de su programa de mentoría.",

    // Botones
    btnSite: "Sitio web",
    btnCode: "Código",
    btnChangeBg: "Cambiar Fondo",
    tabOverview: "Overview",
    tabStack: "Stack",
    tabImages: "Imágenes",
    tabOrigin: "Origen",
  },
  en: {
    winAbout: "About me",
    winContact: "Contact",

    aboutRole: "Frontend Developer",
    aboutText:
      "with experience in the design, development, maintenance and improvement of web applications.",
    aboutText2:
      "I transform complex requirements into outstanding user experiences, approaching each project with enthusiasm and commitment.",

    info1: "Self-taught learner (the hard way)",
    info2: "Native Spanish speaker, high level of English",
    info3: "+3 years of experience in web development",
    info4:
      "I enjoy collaborating on both technical and product , UI/UX decisions",

    contactP: "You can reach me through any of these channels!",
    contactEmail: "View email",
    contactCopied: "✓ Copied!",
    contactHover: "· click to copy",

    picAge: "25 years old",
    picCountry: "Argentina",

    p1WinTitle: "Project #1",
    p2WinTitle: "Project #2",
    p3WinTitle: "Project #3",

    p1Desc:
      "Second-hand marketplace to rent and sell items between people. Real-time messaging, mutual review system and complete purchase flow with statuses and notifications.",
    p1Origin:
      "We all have items we're embarrassed, lazy or afraid to sell. That's why this app was born, inspired by Wallapop but designed for the Argentine market, so you can sell whatever you want for free.",

    p2Desc:
      "Interactive color palette visualizer with a toolbar to modify colors in real time. Changes are instantly applied to UI components and palettes can be shared via URL.",
    p2Origin:
      "Born to avoid the constant back and forth between code and browser when creating and adjusting color palettes, allowing you to see changes in real time and test colors directly on a professional website.",

    p3Desc:
      "e-Learning platform with role-based access, course and lesson management, real-time student progress and a community forum per course.",
    p3Origin:
      "The project came about when a digital mentor needed a private platform to offer courses to their students as part of their mentoring program.",

    btnSite: "Website",
    btnCode: "Code",
    btnChangeBg: "Change Background",
    tabOverview: "Overview",
    tabStack: "Stack",
    tabImages: "Images",
    tabOrigin: "Origin",
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
