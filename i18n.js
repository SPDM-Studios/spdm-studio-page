(function () {
  var T = {
    en: {
      nav_home: "Home",
      nav_work: "Work",
      nav_studio: "Studio",
      nav_contact: "Contact",
      nav_status: "OPEN FOR Q3 · 26",

      foot_nav_title: "Studio",
      foot_elsewhere: "Elsewhere",
      foot_touch: "Touch",
      foot_home: "Home",
      foot_copyright: "© 2026 SPDM STUDIO · ALL RIGHTS RESERVED",
      foot_version: "v0.4.2 · BUILT WITH CARE",

      // INDEX — hero
      idx_hero_h1: 'We build<br/><span class="accent">software</span> that<br/><span class="strike">looks</span> works<br/>beautifully.',
      idx_hero_p: "SPDM is a small software studio crafting mobile and web products with care. We treat code as design — and design as code — turning everyday utilities into things people actually keep on their home screen.",
      idx_meta_founded: "Founded",
      idx_meta_status_lbl: "Status",
      idx_meta_index_lbl: "Index",
      idx_meta_available: '<span class="acc">●</span> Available · Q3 2026',
      idx_meta_projects: "01 PROJECT · 03 IN PROGRESS",

      // INDEX — services
      idx_s01_id: "// services",
      idx_s01_h2: 'What we <em>build</em>.',
      idx_s01_tail: "04 capabilities",
      idx_srv01_h3: "Mobile Applications",
      idx_srv01_p: "Native and cross‑platform apps for Android & iOS. We sweat the empty states, the offline mode, and the 3am edge cases.",
      idx_srv02_h3: "Product Design",
      idx_srv02_p: "Interface and interaction design rooted in real user flows. We prototype in code, not just Figma.",
      idx_srv03_h3: "Web & Backend",
      idx_srv03_p: "Marketing sites, dashboards, and the APIs that feed them. Boring infrastructure done right.",
      idx_srv04_h3: "Design Systems",
      idx_srv04_p: "From color tokens to component libraries — the connective tissue that lets a small team ship like a big one.",

      // INDEX — work
      idx_s02_id: "// selected work",
      idx_s02_h2: 'Things we <em>shipped</em>.',
      idx_s02_viewall: "view all →",
      idx_scoreboard_lead: "A clean, dark‑themed scoreboard for any sport or backyard game. Designed to disappear so the score can take over the room.",
      idx_k_role: "Role",
      idx_k_platform: "Platform",
      idx_k_stack: "Stack",
      idx_k_status: "Status",
      idx_work_cta: 'Open case study <span class="arrow">→</span>',
      idx_proj2_ttl: "Untitled iOS Productivity Tool",
      idx_proj2_desc: "Focus timer + task triage",
      idx_proj3_ttl: "Studio Internals — Tokens API",
      idx_proj3_desc: "Design token sync engine",
      idx_proj4_ttl: "Field Notes — Mobile Journal",
      idx_proj4_desc: "Markdown-first daily log",

      // INDEX — about
      idx_s03_id: "// the studio",
      idx_s03_h2: 'A studio with a <em>clear axis</em>.',
      idx_s03_tail: "est. 2024",
      idx_about_lead: 'SPDM started as a continuous‑learning project with a clear mission: <em>design and ship mobile apps people actually want to use</em>.',
      idx_about_p1: "We are a small, hands‑on team. There are no account managers between you and the people writing the code — just clear scope, weekly demos, and software that gets better every Friday.",
      idx_about_p2: "We pick problems that matter at the small scale: scoring a pickup game, tracking a habit, taking a note. Tools that live in the seams of someone's day.",
      idx_stat01_lbl: "Apps in motion",
      idx_stat01_desc: "From shipped to early prototype.",
      idx_stat02_lbl: "Years of practice",
      idx_stat02_desc: "Design + engineering compounding.",
      idx_stat03_lbl: "Iterations welcome",
      idx_stat03_desc: "We treat v1 as the start, not the end.",

      // INDEX — process
      idx_s04_id: "// process",
      idx_s04_h2: 'How a project <em>runs</em>.',
      idx_s04_tail: "~6–14 weeks",

      // INDEX — contact
      idx_s05_id: "// contact",
      idx_s05_h2: 'Let\'s <em>build</em> something.',
      idx_s05_tail: "replies in ≤ 48h",
      idx_contact_h3: 'Send a brief.<br/>Get a real <em>reply</em>.',
      idx_contact_p: "Tell us what you're building and where it's stuck. We read every message and answer with a real human, usually within two days.",
      idx_form_name_lbl: "NAME",
      idx_form_email_lbl: "EMAIL",
      idx_form_brief_lbl: "BRIEF",
      idx_form_required: "required",
      idx_form_brief_chars: "≤ 600 chars",
      idx_form_name_ph: "Jane Cooper",
      idx_form_email_ph: "jane@studio.co",
      idx_form_brief_ph: "A short description of what you'd like to build, who it's for, and the timeline you're hoping for.",
      idx_send: "Send brief",

      // WORK page
      wrk_hero_h1: 'Selected <span style="color:var(--accent);font-style:italic;font-weight:400">work</span>,<br/>shipped &amp; in&nbsp;flight.',
      wrk_hero_p: "Most of what we make is small on purpose. Each project below is a tool we'd want on our own phone — built with the same care we'd give a client product, because we are the client too.",
      wrk_chip_build: "01 in build",
      wrk_chip_concept: "02 concept",
      wrk_s01_id: "// case_001 · live",
      wrk_s01_h2: 'My <em>Scoreboard</em>.',
      wrk_s01_tail: "2026 · android",
      wrk_scoreboard_lead: "A clean, dark‑themed scoreboard for any sport or backyard game. Designed to disappear so the score takes over the room.",
      wrk_k_role: "Role",
      wrk_k_platform: "Platform",
      wrk_k_stack: "Stack",
      wrk_k_status: "Status",
      wrk_cta: 'Open case study <span class="arrow">→</span>',
      wrk_s02_id: "// in_flight",
      wrk_s02_h2: 'Currently <em>in flight</em>.',
      wrk_s02_tail: "03 active",
      wrk_proj2_ttl: "Untitled iOS Productivity Tool",
      wrk_proj2_desc: "Focus timer + task triage",
      wrk_proj3_ttl: "Studio Internals — Tokens API",
      wrk_proj3_desc: "Design token sync engine",
      wrk_proj4_ttl: "Field Notes — Mobile Journal",
      wrk_proj4_desc: "Markdown-first daily log",
      wrk_booking: "We're booking one new project for Q3 2026.",
      wrk_send_brief: "Send a brief",

      // STUDIO page
      std_hero_h1: 'A small studio<br/>with a <span style="color:var(--accent);font-style:italic;font-weight:400">clear axis</span>.',
      std_hero_p: "We're a hands‑on team designing and building software products. No pitch decks, no account managers — just clear scope, weekly demos, and code we'd be proud to ship under our own name.",
      std_s01_id: "// origin",
      std_s01_h2: 'The <em>story</em>.',
      std_s01_tail: "est. 2024",
      std_origin_lead: 'SPDM started as a continuous‑learning project with one mission: <em>design and ship mobile apps people actually use</em>.',
      std_origin_p1: "We pick small problems on purpose. Scoring a pickup game. Tracking a habit. Taking a note. Tools that live in the seams of someone's day, not in the spotlight.",
      std_origin_p2: "Most of our work has shipped under our own name first. Each project is a chance to test an idea with the same craft we'd bring to a client product — because we are also our own client.",
      std_stat01_lbl: "Apps in motion",
      std_stat01_desc: "Live, in build, or under prototype.",
      std_stat02_lbl: "Years of practice",
      std_stat02_desc: "Compounding craft, week by week.",
      std_stat03_lbl: "Iterations welcome",
      std_stat03_desc: "v1 is the start, never the end.",
      std_s02_id: "// principles",
      std_s02_h2: 'How we <em>work</em>.',
      std_s02_tail: "06 axioms",
      std_p01_h4: "Code is the design.",
      std_p01_p: "We prototype in real code on real devices. Figma is a sketchbook, not a destination.",
      std_p02_h4: "Ship weekly.",
      std_p02_p: "Friday demos, Monday triage. Momentum compounds — so do small bugs.",
      std_p03_h4: "Default to less.",
      std_p03_p: "Subtract a feature before adding one. Empty space is a feature.",
      std_p04_h4: "Earn the metaphor.",
      std_p04_p: "Every animation, icon, and word should justify its weight in pixels.",
      std_p05_h4: "Own the seams.",
      std_p05_p: "Loading states, errors, offline mode — the unglamorous places where trust is built.",
      std_p06_h4: "Build for the small scale.",
      std_p06_p: "A handful of users who love a tool beats a million who tolerate it.",
      std_s03_id: "// team",
      std_s03_h2: 'The <em>humans</em>.',
      std_s03_tail: "02 people",
      std_p1_role: "Design + Mobile",
      std_p1_p: "Designs the product, then builds it. Spends most days alternating between Figma and Android Studio. Quietly opinionated about typography.",
      std_p2_role: "Engineering + Backend",
      std_p2_p: "Owns the parts of the stack you don't see — APIs, infra, the boring reliable bits. Believes a good error message is a love letter.",
      std_s04_id: "// toolkit",
      std_s04_h2: 'The <em>stack</em>.',
      std_s04_tail: "production-tested",

      // CONTACT page
      cnt_hero_h1: 'Send a brief.<br/>Get a real <span style="color:var(--accent);font-style:italic;font-weight:400">reply</span>.',
      cnt_hero_p: "Tell us what you're building and where it's stuck. We read every message and answer with a real human, usually within two days.",
      cnt_s01_id: "// brief",
      cnt_s01_h2: 'The <em>form</em>.',
      cnt_s01_tail: "~2 minutes",
      cnt_l_h3: 'Real humans on the<br/>other <em>side</em>.',
      cnt_l_p: 'If your project doesn\'t fit our calendar, we\'ll say so honestly and point you somewhere good. No "circle back" energy.',
      cnt_form_name: "NAME",
      cnt_form_email: "EMAIL",
      cnt_form_type: "PROJECT TYPE",
      cnt_form_type_pick: "pick one",
      cnt_form_budget: "BUDGET BAND",
      cnt_form_budget_opt: "optional",
      cnt_form_brief: "BRIEF",
      cnt_form_required: "required",
      cnt_opt_mobile: "Mobile App",
      cnt_opt_web: "Web / Site",
      cnt_opt_design: "Design System",
      cnt_opt_other: "Something Else",
      cnt_send: "Send brief",
      cnt_s02_id: "// faq",
      cnt_s02_h2: 'Quick <em>answers</em>.',
      cnt_s02_tail: "04 questions",
      cnt_faq1_q: "How long does a typical project take?",
      cnt_faq1_a: "Six to fourteen weeks for an initial release, depending on scope. We bias toward shipping a small, real version early — then iterating in 2‑week cycles after launch.",
      cnt_faq2_q: "Do you take on equity or partnership work?",
      cnt_faq2_a: "Occasionally. We're picky about it — usually only when we'd build the product anyway. If that's you, mention it in the brief.",
      cnt_faq3_q: "What does the engagement look like day‑to‑day?",
      cnt_faq3_a: "Weekly Friday demos with a real build, a shared Linear board, and async updates the rest of the time. You'll have direct contact with the people writing the code.",
      cnt_faq4_q: "Can you maintain the product after launch?",
      cnt_faq4_a: "Yes — we offer a light retainer for tracked metrics, monthly polish, and feedback loops. Or we'll hand off cleanly to your team.",
    },

    es: {
      nav_home: "Inicio",
      nav_work: "Trabajo",
      nav_studio: "Estudio",
      nav_contact: "Contacto",
      nav_status: "DISPONIBLES Q3 · 26",

      foot_nav_title: "Estudio",
      foot_elsewhere: "En la web",
      foot_touch: "Contacto",
      foot_home: "Inicio",
      foot_copyright: "© 2026 SPDM STUDIO · TODOS LOS DERECHOS RESERVADOS",
      foot_version: "v0.4.2 · HECHO CON CUIDADO",

      // INDEX — hero
      idx_hero_h1: 'Creamos<br/><span class="accent">software</span> que<br/><span class="strike">parece</span> funciona<br/>muy bien.',
      idx_hero_p: "SPDM es un pequeño estudio de software que crea productos móviles y web con cuidado. Tratamos el código como diseño — y el diseño como código — convirtiendo utilidades cotidianas en cosas que la gente realmente guarda en su pantalla de inicio.",
      idx_meta_founded: "Fundado",
      idx_meta_status_lbl: "Estado",
      idx_meta_index_lbl: "Índice",
      idx_meta_available: '<span class="acc">●</span> Disponible · Q3 2026',
      idx_meta_projects: "01 PROYECTO · 03 EN PROGRESO",

      // INDEX — services
      idx_s01_id: "// servicios",
      idx_s01_h2: 'Qué <em>creamos</em>.',
      idx_s01_tail: "04 capacidades",
      idx_srv01_h3: "Aplicaciones Móviles",
      idx_srv01_p: "Apps nativas y multiplataforma para Android e iOS. Nos preocupamos por los estados vacíos, el modo sin conexión y los casos límite de las 3am.",
      idx_srv02_h3: "Diseño de Producto",
      idx_srv02_p: "Diseño de interfaz e interacción basado en flujos de usuario reales. Prototipamos en código, no solo en Figma.",
      idx_srv03_h3: "Web y Backend",
      idx_srv03_p: "Sitios de marketing, dashboards y las APIs que los alimentan. Infraestructura aburrida hecha bien.",
      idx_srv04_h3: "Sistemas de Diseño",
      idx_srv04_p: "De tokens de color a bibliotecas de componentes — el tejido conectivo que permite a un equipo pequeño lanzar como uno grande.",

      // INDEX — work
      idx_s02_id: "// trabajo seleccionado",
      idx_s02_h2: 'Lo que hemos <em>lanzado</em>.',
      idx_s02_viewall: "ver todo →",
      idx_scoreboard_lead: "Un marcador limpio y de tema oscuro para cualquier deporte o juego de patio. Diseñado para desaparecer y dejar que el marcador domine la sala.",
      idx_k_role: "Rol",
      idx_k_platform: "Plataforma",
      idx_k_stack: "Stack",
      idx_k_status: "Estado",
      idx_work_cta: 'Ver caso de estudio <span class="arrow">→</span>',
      idx_proj2_ttl: "Herramienta iOS de Productividad",
      idx_proj2_desc: "Temporizador de enfoque + triaje de tareas",
      idx_proj3_ttl: "Internos del Estudio — API de Tokens",
      idx_proj3_desc: "Motor de sincronización de design tokens",
      idx_proj4_ttl: "Field Notes — Diario Móvil",
      idx_proj4_desc: "Registro diario en Markdown",

      // INDEX — about
      idx_s03_id: "// el estudio",
      idx_s03_h2: 'Un estudio con un <em>eje claro</em>.',
      idx_s03_tail: "fundado en 2024",
      idx_about_lead: 'SPDM empezó como un proyecto de aprendizaje continuo con una misión clara: <em>diseñar y lanzar apps móviles que la gente realmente quiera usar</em>.',
      idx_about_p1: "Somos un equipo pequeño y práctico. No hay gestores de cuentas entre tú y la gente que escribe el código — solo alcance claro, demos semanales y software que mejora cada viernes.",
      idx_about_p2: "Elegimos problemas que importan a pequeña escala: marcar un partido improvisado, seguir un hábito, tomar una nota. Herramientas que viven en los márgenes del día de alguien.",
      idx_stat01_lbl: "Apps en marcha",
      idx_stat01_desc: "Desde lanzadas hasta prototipo temprano.",
      idx_stat02_lbl: "Años de práctica",
      idx_stat02_desc: "Diseño + ingeniería que se acumula.",
      idx_stat03_lbl: "Iteraciones bienvenidas",
      idx_stat03_desc: "Tratamos la v1 como el inicio, no el final.",

      // INDEX — process
      idx_s04_id: "// proceso",
      idx_s04_h2: 'Cómo <em>funciona</em> un proyecto.',
      idx_s04_tail: "~6–14 semanas",

      // INDEX — contact
      idx_s05_id: "// contacto",
      idx_s05_h2: 'Vamos a <em>construir</em> algo.',
      idx_s05_tail: "respuesta en ≤ 48h",
      idx_contact_h3: 'Envía un brief.<br/>Recibe una <em>respuesta</em> real.',
      idx_contact_p: "Cuéntanos qué estás construyendo y dónde está atascado. Leemos cada mensaje y respondemos con una persona real, generalmente en dos días.",
      idx_form_name_lbl: "NOMBRE",
      idx_form_email_lbl: "EMAIL",
      idx_form_brief_lbl: "DESCRIPCIÓN",
      idx_form_required: "requerido",
      idx_form_brief_chars: "≤ 600 caracteres",
      idx_form_name_ph: "Juan García",
      idx_form_email_ph: "juan@empresa.com",
      idx_form_brief_ph: "Una breve descripción de lo que quieres construir, para quién es y el plazo que esperas.",
      idx_send: "Enviar brief",

      // WORK page
      wrk_hero_h1: 'Trabajo <span style="color:var(--accent);font-style:italic;font-weight:400">seleccionado</span>,<br/>lanzado y en&nbsp;vuelo.',
      wrk_hero_p: "La mayoría de lo que hacemos es pequeño intencionalmente. Cada proyecto es una herramienta que querríamos en nuestro propio teléfono — construida con el mismo cuidado que daríamos a un producto de cliente, porque nosotros también somos el cliente.",
      wrk_chip_build: "01 en construcción",
      wrk_chip_concept: "02 concepto",
      wrk_s01_id: "// caso_001 · en vivo",
      wrk_s01_h2: 'My <em>Scoreboard</em>.',
      wrk_s01_tail: "2026 · android",
      wrk_scoreboard_lead: "Un marcador limpio y de tema oscuro para cualquier deporte o juego de patio. Diseñado para desaparecer y dejar que el marcador domine la sala.",
      wrk_k_role: "Rol",
      wrk_k_platform: "Plataforma",
      wrk_k_stack: "Stack",
      wrk_k_status: "Estado",
      wrk_cta: 'Ver caso de estudio <span class="arrow">→</span>',
      wrk_s02_id: "// en_vuelo",
      wrk_s02_h2: 'Actualmente <em>en vuelo</em>.',
      wrk_s02_tail: "03 activos",
      wrk_proj2_ttl: "Herramienta iOS de Productividad",
      wrk_proj2_desc: "Temporizador de enfoque + triaje de tareas",
      wrk_proj3_ttl: "Internos del Estudio — API de Tokens",
      wrk_proj3_desc: "Motor de sincronización de design tokens",
      wrk_proj4_ttl: "Field Notes — Diario Móvil",
      wrk_proj4_desc: "Registro diario en Markdown",
      wrk_booking: "Estamos aceptando un proyecto nuevo para Q3 2026.",
      wrk_send_brief: "Enviar un brief",

      // STUDIO page
      std_hero_h1: 'Un estudio pequeño<br/>con un <span style="color:var(--accent);font-style:italic;font-weight:400">eje claro</span>.',
      std_hero_p: "Somos un equipo práctico que diseña y construye productos de software. Sin presentaciones, sin gestores de cuentas — solo alcance claro, demos semanales y código del que estamos orgullosos de publicar bajo nuestro nombre.",
      std_s01_id: "// origen",
      std_s01_h2: 'La <em>historia</em>.',
      std_s01_tail: "fundado en 2024",
      std_origin_lead: 'SPDM empezó como un proyecto de aprendizaje continuo con una misión: <em>diseñar y lanzar apps móviles que la gente realmente use</em>.',
      std_origin_p1: "Elegimos problemas pequeños intencionalmente. Marcar un partido improvisado. Seguir un hábito. Tomar una nota. Herramientas que viven en los márgenes del día de alguien, no en el centro de atención.",
      std_origin_p2: "La mayoría de nuestro trabajo se ha lanzado primero bajo nuestro propio nombre. Cada proyecto es una oportunidad de probar una idea con el mismo oficio que aportaríamos a un producto de cliente — porque nosotros también somos nuestro propio cliente.",
      std_stat01_lbl: "Apps en marcha",
      std_stat01_desc: "Lanzadas, en construcción o en prototipo.",
      std_stat02_lbl: "Años de práctica",
      std_stat02_desc: "Oficio que se acumula, semana a semana.",
      std_stat03_lbl: "Iteraciones bienvenidas",
      std_stat03_desc: "La v1 es el inicio, nunca el final.",
      std_s02_id: "// principios",
      std_s02_h2: 'Cómo <em>trabajamos</em>.',
      std_s02_tail: "06 axiomas",
      std_p01_h4: "El código es el diseño.",
      std_p01_p: "Prototipamos en código real en dispositivos reales. Figma es un cuaderno de bocetos, no un destino.",
      std_p02_h4: "Lanzar semanalmente.",
      std_p02_p: "Demos los viernes, triaje los lunes. El impulso se acumula — igual que los pequeños bugs.",
      std_p03_h4: "Por defecto, menos.",
      std_p03_p: "Quita una función antes de añadir una. El espacio vacío es una función.",
      std_p04_h4: "Ganar la metáfora.",
      std_p04_p: "Cada animación, icono y palabra debe justificar su peso en píxeles.",
      std_p05_h4: "Dominar las costuras.",
      std_p05_p: "Estados de carga, errores, modo sin conexión — los lugares sin glamour donde se construye la confianza.",
      std_p06_h4: "Construir para la pequeña escala.",
      std_p06_p: "Un puñado de usuarios que aman una herramienta supera a un millón que la toleran.",
      std_s03_id: "// equipo",
      std_s03_h2: 'El <em>equipo</em>.',
      std_s03_tail: "02 personas",
      std_p1_role: "Diseño + Móvil",
      std_p1_p: "Diseña el producto y luego lo construye. Pasa la mayoría de los días alternando entre Figma y Android Studio. Silenciosamente exigente en tipografía.",
      std_p2_role: "Ingeniería + Backend",
      std_p2_p: "Gestiona las partes del stack que no se ven — APIs, infraestructura, las partes aburridas y fiables. Cree que un buen mensaje de error es una carta de amor.",
      std_s04_id: "// kit de herramientas",
      std_s04_h2: 'El <em>stack</em>.',
      std_s04_tail: "probado en producción",

      // CONTACT page
      cnt_hero_h1: 'Envía un brief.<br/>Recibe una <span style="color:var(--accent);font-style:italic;font-weight:400">respuesta</span> real.',
      cnt_hero_p: "Cuéntanos qué estás construyendo y dónde está atascado. Leemos cada mensaje y respondemos con una persona real, generalmente en dos días.",
      cnt_s01_id: "// formulario",
      cnt_s01_h2: 'El <em>formulario</em>.',
      cnt_s01_tail: "~2 minutos",
      cnt_l_h3: 'Personas reales al<br/>otro <em>lado</em>.',
      cnt_l_p: "Si tu proyecto no encaja en nuestro calendario, lo diremos honestamente y te apuntaremos a un buen lugar. Sin rodeos.",
      cnt_form_name: "NOMBRE",
      cnt_form_email: "EMAIL",
      cnt_form_type: "TIPO DE PROYECTO",
      cnt_form_type_pick: "elige uno",
      cnt_form_budget: "PRESUPUESTO",
      cnt_form_budget_opt: "opcional",
      cnt_form_brief: "DESCRIPCIÓN",
      cnt_form_required: "requerido",
      cnt_opt_mobile: "App Móvil",
      cnt_opt_web: "Web / Sitio",
      cnt_opt_design: "Sistema de Diseño",
      cnt_opt_other: "Otro",
      cnt_send: "Enviar brief",
      cnt_s02_id: "// faq",
      cnt_s02_h2: 'Respuestas <em>rápidas</em>.',
      cnt_s02_tail: "04 preguntas",
      cnt_faq1_q: "¿Cuánto tarda un proyecto típico?",
      cnt_faq1_a: "De seis a catorce semanas para una versión inicial, según el alcance. Tendemos a lanzar una versión pequeña y real pronto — luego iteramos en ciclos de 2 semanas tras el lanzamiento.",
      cnt_faq2_q: "¿Aceptáis trabajo con capital o asociaciones?",
      cnt_faq2_a: "Ocasionalmente. Somos selectivos — generalmente solo cuando igualmente construiríamos el producto. Si ese eres tú, menciónalo en el brief.",
      cnt_faq3_q: "¿Cómo es la colaboración en el día a día?",
      cnt_faq3_a: "Demos los viernes con una versión real, un tablero de Linear compartido y actualizaciones asíncronas el resto del tiempo. Tendrás contacto directo con las personas que escriben el código.",
      cnt_faq4_q: "¿Podéis mantener el producto tras el lanzamiento?",
      cnt_faq4_a: "Sí — ofrecemos un retainer ligero para métricas, pulido mensual y bucles de feedback. O haremos una entrega limpia a tu equipo.",
    }
  };

  var lang = localStorage.getItem('spdm-lang') || 'en';

  function apply() {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[lang][key] !== undefined) el.textContent = T[lang][key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (T[lang][key] !== undefined) el.innerHTML = T[lang][key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (T[lang][key] !== undefined) el.placeholder = T[lang][key];
    });

    var btn = document.getElementById('langToggle');
    if (btn) btn.textContent = lang === 'en' ? 'ES' : 'EN';
  }

  function toggle() {
    lang = lang === 'en' ? 'es' : 'en';
    localStorage.setItem('spdm-lang', lang);
    apply();
  }

  window.i18n = { toggle: toggle, apply: apply };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', apply);
  } else {
    apply();
  }
})();
