export const translations = {
  es: {
    // Ventanas - títulos
    // winAbout: "Sobre mí",

    aboutGreeting: "Hola! Soy",

    aboutText:
      "Frontend Engineer que disfruta diseñar, mantener y escalar productos digitales. Encontré el balance perfecto entre resolver desafíos técnicos complejos y expresar mi creatividad a través del desarrollo de software.<br> La curiosidad y la disciplina fueron fundamentales en mi formación, impulsándome a afrontar desafíos nuevos todos los días.",

    aboutWork:
      "Desarrollo páginas y aplicaciones web utilizando principalmente JavaScript y su ecosistema moderno.<br> Me gusta explorar nuevas herramientas y mantenerme al día con las tecnologías que impulsan la industria.<br> En el último tiempo incorporé la inteligencia artificial a mi proceso de desarrollo para potenciar mis capacidades y mantener altos estándares de calidad en el código.",

    aboutPortfolio:
      "Este portfolio nació como un tributo a Windows XP y Windows 7, que podés ver",

    aboutPortfolioLink: "aquí",

    aboutPortfolio2:
      "Mantuve la idea, pero diseñando mi propia UI con un estilo moderno y minimalista, cuidando cada detalle y mejorándola continuamente.",

    stackFramework: "Framework",
    stackStyling: "Styling",
    stackAnimations: "Animaciones",
    stackDeployment: "Deployment",
    // Proyectos títulos de ventana

    tratolibreNextjs: [
      "App Router con Server / Client Components",
      "Server Actions para mutaciones",
      "Routing dinámico y condicional",
      "Proxy para protección de rutas",
      "API Routes para uploads de imágenes",
    ],
    tratolibreClientState: [
      "React — arquitectura de componentes",
      "TypeScript — tipado estricto en todo el código",
      "TanStack Query — caché, sincronización y notificaciones",
      "Zustand — manejo de estado global liviano",
      "React Hook Form — manejo eficiente de formularios",
    ],
    tratolibreSupabase: [
      "Auth — email/password + OAuth (Google)",
      "PostgreSQL con RLS en todas las tablas",
      "Realtime — mensajería sin polling",
      "Storage — fotos de items y avatars",
      "Compresión de imágenes en cliente — reduce antes de subir a Storage",
    ],
    tratolibreArquitectura: [
      "Feature-Sliced Design (FSD)",
      "Seguridad multi-capa: Proxy + RLS + Server Actions",
      "Zod — schemas tipados para validación y consistencia de datos",
      "Separación clara de capas: UI, estado y lógica de negocio",
      "Sistema de roles (autorización) y UI condicional",
      "Rate limiting por acción",
    ],
    tratolibreUI: [
      "Chakra UI v3 — sistema de diseño y componentes",
      "Tailwind CSS — estilos utilitarios para layouts ",
      "Boxicons — Iconografía",
      "Image optimization — next/image con lazy loading nativo",
      "Skeletons & Spinners — loading states mientras cargan datos",
    ],
    tratolibreValidation: [
      "Vitest — unit testing",
      "Playwright — e2e testing",
      "Vercel — Speed Insights y Analytics",
    ],

    // Tech Details - PickYourColor
    colorCore: [
      "React 19 + Vite — Single Page Application (SPA)",
      "TypeScript — Tipado estricto para modelos de color y estado",
      "Zustand — Estado global reactivo para sincronizar la paleta",
    ],
    colorUI: [
      "Tailwind CSS v4 — Estilos dinámicos mediante variables CSS",
      "Radix UI — Primitivos con accesibilidad nativa (WAI-ARIA)",
      "react-colorful — Selector de color liviano y accesible",
    ],
    colorEngine: [
      "tinycolor2 — Manipulación y validación de formatos de color",
      "WCAG Algorithm — Cálculo dinámico de contraste para accesibilidad",
      "URL Serialization — Persistencia de paletas mediante parámetros en la URL",
    ],

    // Tech Details - Courses
    coursesNextjs: [
      "App Router con layouts anidados",
      "Server Actions para mutaciones",
      "Proxy para protección de rutas",
      "Route Handlers para interceptores del demo mode",
    ],
    coursesClientState: [
      "React — arquitectura de componentes",
      "Zustand — estado global de sesión y UI",
      "TanStack Query — caché y sincronización con el servidor",
    ],
    coursesSupabase: [
      "PostgreSQL con Row Level Security",
      "Auth SSR con @supabase/ssr",
      "Sincronización DB–Storage sin archivos huérfanos",
    ],
    coursesArquitectura: [
      "Feature-Sliced Design (FSD)",
      "Seguridad multi-capa: Proxy + RLS + API",
      "Modo demo con bloqueo de escrituras",
    ],
    coursesUI: [
      "Tailwind CSS v4",
      "shadcn/ui sobre Radix primitives",
      "Sonner — notificaciones",
      "next-themes — dark/light mode",
      "Dynamic imports — lazy loading of heavy components",
    ],
    coursesValidation: [
      "Zod — validación end-to-end",
      "React Hook Form — formularios complejos",
      "Vitest + Testing Library — unit tests",
      "Sentry — monitoreo de errores",
    ],

    // Tech Details - Mundial 2026
    mundialStack: [
      "Next.js 16 (App Router) + React 19 + Zustand + Tailwind 4",
      "Server Actions + Prisma 6.19 + PostgreSQL (Supabase)",
      "Auth anónima de Supabase — sin email/password, solo nombre + avatar",
      "TypeScript strict + Vitest + Docker para migraciones locales",
    ],
    mundialArquitectura: [
      "Feature-based: auth, predictions, leaderboard, profile, admin, landing",
      "Lógica de negocio separada de la UI en una capa de servidor propia",
      "Modelo de datos relacional normalizado en PostgreSQL",
    ],

    // Proyecto rentalibre
    p1Desc:
      "Marketplace de venta y intercambio de objetos nuevos y usados. Mensajería en tiempo real, sistema de reviews mutuas y flujo completo de compra con estados y notificaciones.",
    p1Origin:
      "Surgió de la idea de vender e intercambiar cosas entre mis amigos, así que armé esta app, simple y rápida, inspirada en Wallapop.",

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

    // Proyecto Mundial 2026
    p4Desc:
      "Prode del Mundial 2026. El usuario elige nombre y avatar, predice resultados de partidos y hace picks generales del torneo (campeón, MVP, etc), y compite en un leaderboard global único.",
    p4Origin:
      "Nació como un prode del Mundial para armar entre amigos y apostar , y terminó sumando más gente de la que esperaba.",

    // Botones
    btnSite: "Sitio web",
    btnCode: "Repositorio",
    btnChangeBg: "Cambiar Fondo",
    tabOverview: "Overview",
    tabStack: "Stack",
    tabImages: "Imágenes",
    tabOrigin: "Origen",
  },

  ////////////////// English //////////////////

  en: {
    // winAbout: "About me",

    aboutGreeting: "Hi! I'm",

    aboutText:
      "Frontend Engineer who enjoys designing, maintaining, and scaling digital products. I found the perfect balance between solving complex technical challenges and expressing my creativity through software development. Curiosity and discipline have been fundamental throughout my journey, driving me to embrace new challenges every single day.",

    aboutWork:
      "I build websites and web applications primarily using the modern JavaScript ecosystem. I enjoy exploring new tools and staying up to date with the technologies shaping the industry. More recently, I've integrated AI into my development workflow to enhance my capabilities and maintain high standards of code quality.",

    aboutPortfolio:
      "This portfolio started as a tribute to Windows XP and Windows 7, which you can see",

    aboutPortfolioLink: "here",

    aboutPortfolio2:
      "I kept the original concept while designing my own UI with a modern, minimalist style, continuously refining it and paying close attention to every detail.",

    stackFramework: "Framework",
    stackStyling: "Styling",
    stackAnimations: "Animations",
    stackDeployment: "Deployment",

    p1WinTitle: "TratoLibre",
    p2WinTitle: "PickYourColor",
    p3WinTitle: "Courses WebApp",
    p4WinTitle: "Mundial 2026",

    // Tech Details - TratoLibre
    tratolibreNextjs: [
      "App Router with Server / Client Components",
      "Server Actions for mutations",
      "Dynamic and conditional routing",
      "Proxy for route protection",
      "API Routes for image uploads",
    ],
    tratolibreClientState: [
      "React — component architecture",
      "TypeScript — strict typing throughout the codebase",
      "TanStack Query — caching, synchronization and server state ",
      "Zustand — lightweight global state management",
      "React Hook Form — efficient form handling",
    ],
    tratolibreSupabase: [
      "Auth — email/password + OAuth (Google)",
      "PostgreSQL with RLS on all tables",
      "Realtime — messaging without polling",
      "Storage — item photos and avatars",
      "Client-side image compression — reduces before uploading to Storage",
    ],
    tratolibreArquitectura: [
      "Feature-Sliced Design (FSD)",
      "Multi-layer security: Proxy + RLS + Server Actions",
      "Zod — typed schemas for validation and data consistency",
      "Clear separation of layers: UI, state and business logic",
      "Role system (authorization) and conditional UI",
      "Rate limiting per action",
    ],
    tratolibreUI: [
      "Chakra UI v3 — design system and components",
      "Tailwind CSS — utility-first styling for layouts and fine adjustments",
      "Boxicons — Iconography",
      "Image optimization — next/image with lazy loading.",
      "Skeletons & Spinners — loading states while data fetches",
    ],

    tratolibreValidation: [
      "Vitest — unit testing",
      "Playwright — e2e testing",
      "Vercel — Speed Insights and Analytics",
    ],

    // Tech Details - PickYourColor
    colorCore: [
      "React 19 + Vite — Single Page Application (SPA)",
      "TypeScript — Strict typing for color models and state",
      "Zustand — Reactive global state for palette sync",
    ],
    colorUI: [
      "Tailwind CSS v4 — Dynamic styles via CSS variables",
      "Radix UI — Primitives with native accessibility (WAI-ARIA)",
      "react-colorful — Lightweight and accessible color picker",
    ],
    colorEngine: [
      "tinycolor2 — Color format manipulation and validation",
      "WCAG Algorithm — Dynamic contrast calculation for accessibility",
      "URL Serialization — Palette persistence via URL parameters",
    ],

    // Tech Details - Courses
    coursesNextjs: [
      "App Router with nested layouts",
      "Server Actions for mutations",
      "Proxy for route protection",
      "Route Handlers for demo mode interceptors",
    ],
    coursesClientState: [
      "React — component architecture",
      "Zustand — global state for session and UI",
      "TanStack Query — caching and server sync",
    ],
    coursesSupabase: [
      "PostgreSQL with Row Level Security",
      "Auth SSR with @supabase/ssr",
      "DB–Storage sync without orphaned files",
    ],
    coursesArquitectura: [
      "Feature-Sliced Design (FSD)",
      "Multi-layer security: Proxy + RLS + API",
      "Demo mode with write blocking",
    ],
    coursesUI: [
      "Tailwind CSS v4",
      "shadcn/ui over Radix primitives",
      "Sonner — notifications",
      "next-themes — dark/light mode",
      "Dynamic imports — lazy loading of heavy components",
    ],
    coursesValidation: [
      "Zod — end-to-end validation",
      "React Hook Form — complex forms",
      "Vitest + Testing Library — unit tests",
      "Sentry — error monitoring",
    ],

    // Tech Details - Mundial 2026
    mundialStack: [
      "Next.js 16 (App Router) + React 19 + Zustand + Tailwind 4",
      "Server Actions + Prisma 6.19 + PostgreSQL (Supabase)",
      "Supabase anonymous auth — no email/password, just name + avatar",
      "TypeScript strict + Vitest + Docker for local migrations",
    ],
    mundialArquitectura: [
      "Feature-based: auth, predictions, leaderboard, profile, admin, landing",
      "Business logic separated from the UI in its own server layer",
      "Normalized relational data model in PostgreSQL",
    ],

    p1Desc:
      "Marketplace to sell and exchange new and used items between people. Real-time messaging, mutual review system and complete purchase flow with statuses and notifications.",
    p1Origin:
      "It came from the idea of buying, selling, and trading things between my friends, so I built this app—simple and fast, inspired by Wallapop.",

    p2Desc:
      "Interactive color palette visualizer with a toolbar to modify colors in real time. Changes are instantly applied to UI components and palettes can be shared via URL.",
    p2Origin:
      "Born to avoid the constant back and forth between code and browser when creating and adjusting color palettes, allowing you to see changes in real time and test colors directly on a professional website.",

    p3Desc:
      "e-Learning platform with role-based access, course and lesson management, real-time student progress and a community forum per course.",
    p3Origin:
      "The project came about when a digital mentor needed a private platform to offer courses to their students as part of their mentoring program.",

    p4Desc:
      "A private predictions game for the 2026 World Cup. No email or password signup — users pick a name and avatar, predict match results, make tournament-wide picks (champion, MVP, etc), and compete on a single global leaderboard.",
    p4Origin:
      "It started as a World Cup prediction pool to play with friends for some money, but ended up pulling in way more people than expected.",

    btnSite: "Website",
    btnCode: "Repository",
    btnChangeBg: "Change Background",
    tabOverview: "Overview",
    tabStack: "Stack",
    tabImages: "Images",
    tabOrigin: "Origin",
  },
} as const;

export type Lang = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es;
