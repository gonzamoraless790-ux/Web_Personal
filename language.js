(() => {
  const englishText = new Map(Object.entries({
    "Diseñador Gráfico": "Graphic Designer",
    "Inicio": "Home",
    "Sobre mí": "About",
    "Herramientas": "Tools",
    "Proyectos": "Projects",
    "Experiencia": "Experience",
    "Contacto": "Contact",
    "Hablemos": "Let's talk",
    "Disponible": "Available",
    "Disponible para proyectos selectos y colaboraciones freelance": "Available for select projects and freelance collaborations",
    "Granada, España (Disponible para remoto)": "Granada, Spain (Available for remote work)",
    "Copiar dirección de correo": "Copy email address",
    "Diseñador gráfico freelance · Granada": "Freelance graphic designer · Granada",
    "Gonzalo": "Gonzalo",
    "Morales": "Morales",
    "Diseño marcas e identidades visuales con carácter, y llevo esa misma mirada creativa a proyectos digitales y web.": "I create distinctive brands and visual identities, bringing the same creative perspective to digital and web projects.",
    "Explorar mi trabajo": "Explore my work",
    "Ver CV Completo": "View full CV",
    "Contactar directamente": "Get in touch",
    "Años como freelance": "Years as a freelancer",
    "Proyectos entregados": "Projects delivered",
    "Diseño gráfico y branding": "Graphic design and branding",
    "Identidades, campañas y piezas digitales": "Identities, campaigns and digital assets",
    "Enfoque visual": "Visual focus",
    "Composición, consistencia y claridad": "Composition, consistency and clarity",
    "Capa complementaria": "Complementary skill",
    "Diseño aplicado a interfaces y experiencias online": "Design for interfaces and online experiences",
    "Perfil Personal & Filosofía": "About & Approach",
    "Diseño gráfico que convierte ideas en": "Graphic design that turns ideas into",
    "identidades visuales": "visual identities",
    "Creo en el diseño como herramienta estratégica: una identidad visual sólida, una composición clara y una experiencia coherente pueden transformar una marca mucho más que una página web por sí sola.": "I believe design is a strategic tool: a strong visual identity, clear composition and a coherent experience can transform a brand far more than a website alone.",
    "Granada, 2026": "Granada, 2026",
    "Base en Granada, España": "Based in Granada, Spain",
    "Colaboración fluida con equipos en remoto": "Smooth collaboration with remote teams",
    "Español (Nativo)": "Spanish (Native)",
    "Inglés (C1 Profesional Fluido)": "English (Professional fluency, C1)",
    "Soy diseñador freelance desde 2022, con una base sólida en diseño gráfico, identidad visual y producción creativa. Me apasiona crear piezas y sistemas visuales que transmiten personalidad, claridad y valor de marca desde el primer vistazo.": "I've worked as a freelance designer since 2022, with a strong foundation in graphic design, visual identity and creative production. I love creating visual assets and systems that communicate personality, clarity and brand value at first glance.",
    "En los últimos años he ido conectando mi trabajo visual con la web, entendiendo la página web como una extensión natural del diseño gráfico. Lo que realmente me define es la creatividad, la coherencia visual y la capacidad de convertir una idea en una propuesta efectiva, bien pensada y con atención personalizada en cada detalle.": "In recent years, I've connected my visual work with the web, treating a website as a natural extension of graphic design. Creativity, visual consistency and the ability to turn ideas into thoughtful, effective work define my approach, with personal attention to every detail.",
    "100% creatividad aplicada": "100% creativity in practice",
    "Todo parte de una intención visual clara. No trabajo con plantillas genéricas ni con ideas prestadas; cada propuesta nace de una mirada creativa propia y una estrategia pensada para la marca.": "Every project starts with a clear visual intention. I don't rely on generic templates or borrowed ideas; each proposal comes from an original creative perspective and a strategy tailored to the brand.",
    "Diseño gráfico con impacto web": "Graphic design for the web",
    "Mi base está en el diseño gráfico, y ahora lo aplico a la web como una extensión natural: identidad visual, composición, jerarquía y personalidad pensada para la experiencia digital.": "My foundation is in graphic design, which I now bring to the web as a natural extension: visual identity, composition, hierarchy and personality shaped for digital experiences.",
    "Eficacia visual y funcional": "Visual and functional impact",
    "Me importa que el diseño no solo se vea bien, sino que funcione. Hablo de claridad, intención, comunicación efectiva y una ejecución que ayuda a vender, conectar y diferenciar.": "Design should not only look good; it should work. That means clarity, intention, effective communication and execution that helps brands sell, connect and stand out.",
    "Atención personalizada 10/10": "Personal attention, every step",
    "Trabajo de forma cercana, clara y cuidadosa. Mi enfoque es entender cada proyecto con detalle, escuchar bien y ofrecer una solución visual ajustada a la necesidad real del cliente.": "I work closely, clearly and thoughtfully. I take time to understand each project, listen carefully and create a visual solution that meets the client's real needs.",
    "Herramientas & Tecnologías": "Tools & Technology",
    "Caja de herramientas de producción": "My creative toolkit",
    "Estas son las herramientas que uso para convertir una idea visual en algo coherente, usable y con personalidad. Mi base está en el diseño gráfico y la creatividad visual, y la web la estoy integrando como una extensión natural de ese criterio.": "These are the tools I use to turn visual ideas into coherent, useful work with personality. My foundation is graphic design and visual creativity, and I bring that same perspective to the web.",
    "Todo el stack (9)": "All tools (9)",
    "Diseño Gráfico & Adobe": "Graphic Design & Adobe",
    "Web & Maquetación": "Web & Layout",
    "Flujo & Brand": "Workflow & Brand",
    "Diseño Gráfico": "Graphic Design",
    "Motion Graphics": "Motion Graphics",
    "3D & Render": "3D & Rendering",
    "CMS & Diseño Web": "CMS & Web Design",
    "Front-end": "Front-end",
    "Backend & Datos": "Back-end & Data",
    "UX / UI aplicada a web": "UX / UI for web",
    "Código Creativo": "Creative Coding",
    "Versionado & Flujo": "Version Control & Workflow",
    "Experto": "Expert",
    "Avanzado": "Advanced",
    "Competente": "Proficient",
    "Edición de imágenes, retoque fotográfico, composiciones visuales y creación de piezas gráficas para marca, campañas y contenidos digitales.": "Image editing, photo retouching, visual compositions and graphic assets for brands, campaigns and digital content.",
    "Animación, motion graphics y composición para vídeos, piezas promocionales y contenido visual de marca.": "Animation, motion graphics and compositing for video, promotional assets and branded visual content.",
    "Modelado y render 3D básico para piezas de branding, productos y conceptos visuales con enfoque publicitario.": "Basic 3D modelling and rendering for branding, product assets and advertising concepts.",
    "Desarrollo y maquetación de sitios web con WordPress, Divi y estructura visual adaptable a necesidades de marca y contenido.": "Website development and layout with WordPress and Divi, tailored to each brand and its content.",
    "Maquetación de interfaces, estilos visuales, interactividad básica y construcción de páginas web con estructura y rendimiento cuidados.": "Interface layout, visual styling, basic interactivity and carefully structured, performant web pages.",
    "Uso de lenguajes de programación y bases de datos para lógica, gestión de contenido y conexión con sistemas más complejos.": "Programming languages and databases for application logic, content management and integrations.",
    "Estoy consolidando la transición del diseño gráfico al diseño de experiencias web, aplicando composición, tipografía y jerarquía visual en interfaces digitales.": "I'm building on my graphic design background to create web experiences, applying composition, typography and visual hierarchy to digital interfaces.",
    "Efectos visuales interactivos, shaders ligeros, partículas generativas y transformaciones cinéticas guiadas por el cursor.": "Interactive visual effects, lightweight shaders, generative particles and cursor-driven motion.",
    "Control de versiones riguroso con commits semánticos, branches estructurados y pipelines de despliegue continuo.": "Structured version control with semantic commits, organized branches and continuous deployment pipelines.",
    "Actualizado con los estándares y versiones vigentes de 2026.": "Updated to current standards and versions for 2026.",
    "Herramientas aplicadas en proyectos reales": "Tools used in real projects",
    "Proyectos Seleccionados": "Selected Projects",
    "Diseño gráfico con mirada digital": "Graphic design with a digital perspective",
    "Mi trabajo se centra en la creatividad visual, la identidad de marca y la composición. La web es una extensión de ese criterio, un espacio donde aplico ese mismo enfoque con coherencia y personalidad.": "My work focuses on visual creativity, brand identity and composition. The web extends that perspective: a space where I apply the same approach with consistency and personality.",
    "Todos los proyectos (1)": "All projects (1)",
    "Creatividad Digital": "Digital Creativity",
    "Portafolio Visual": "Visual Portfolio",
    "Portfolio Digital": "Digital Portfolio",
    "Mi portafolio visual reúne proyectos de identidad, diseño editorial, comunicación visual y piezas creativas desarrolladas en freelance desde 2022. Aquí muestro la esencia del trabajo gráfico que realizo y la forma en que aplico el diseño a la comunicación de marca.": "My visual portfolio brings together identity, editorial design, visual communication and creative work developed as a freelancer since 2022. It shows the essence of my graphic design practice and how I use design to shape brand communication.",
    "Ver detalles": "View details",
    "Trayectoria & Experiencias": "Background & Experience",
    "Experiencia profesional": "Professional experience",
    "Mi recorrido como diseñador freelance desde 2022 y mi formación actual en desarrollo web.": "My journey as a freelance designer since 2022, alongside my current studies in web development.",
    "Ver formato imprimible / PDF": "View printable / PDF version",
    "Granada / Remoto": "Granada / Remote",
    "Diseñador Gráfico Freelance": "Freelance Graphic Designer",
    "Trabajo Independiente / Estudio Personal": "Independent / Personal Studio",
    "Branding, diseño gráfico y experiencia visual": "Branding, graphic design and visual experience",
    "Diseño de identidad visual, piezas gráficas, campañas digitales y recursos de marca para clientes que necesitan una presencia visual sólida y coherente.": "Created visual identities, graphic assets, digital campaigns and brand materials for clients seeking a strong, consistent visual presence.",
    "He trabajado en branding, diseño editorial, piezas publicitarias y recursos visuales para marcas y proyectos con identidad propia.": "Worked on branding, editorial design, advertising and visual assets for distinctive brands and projects.",
    "He ido incorporando la parte de diseño de interfaces y web aplicando la misma lógica visual y estratégica del diseño gráfico a experiencias digitales.": "Expanded into interface and web design, applying the visual and strategic principles of graphic design to digital experiences.",
    "Mi trabajo se centra en la claridad visual, la coherencia de marca y la calidad estética tanto en soportes impresos como digitales.": "Focused on visual clarity, brand consistency and high-quality design across print and digital media.",
    "Formación Académica": "Education",
    "Grado Superior en Desarrollo de Aplicaciones Web": "Higher Diploma in Web Application Development",
    "Granada, España": "Granada, Spain",
    "Formación técnica enfocada en frontend, backend, bases de datos, APIs y diseño de interfaces orientadas al usuario.": "Technical training in front-end, back-end, databases, APIs and user-focused interface design.",
    "¿Necesitas el currículum en PDF?": "Need my CV as a PDF?",
    "Consulta la versión estructurada, lista para imprimir, con el detalle de mi formación, herramientas y experiencia.": "View the print-ready version with details about my education, tools and experience.",
    "Abrir Curriculum Vitae": "Open CV",
    "Contacto Directo": "Get in Touch",
    "¿Tienes una idea o proyecto en mente?": "Have an idea or project in mind?",
    "Hablemos.": "Let's talk.",
    "Estoy disponible para proyectos de branding, diseño gráfico, identidad visual y creatividad digital, así como para aplicar ese mismo criterio al diseño de páginas web y propuestas visuales para la presencia online.": "I'm available for branding, graphic design, visual identity and digital creativity projects, as well as web design and visual concepts for online presence.",
    "Correo electrónico directo:": "Direct email:",
    "Copiar": "Copy",
    "Suelo responder en menos de 24 horas laborables.": "I usually reply within one business day.",
    "Tu nombre *": "Your name *",
    "Correo electrónico *": "Email address *",
    "Tipo de colaboración": "Project type",
    "Branding & Diseño Gráfico": "Branding & Graphic Design",
    "Diseño Web / Maquetación visual": "Web Design / Visual Layout",
    "Identidad Visual & Comunicación": "Visual Identity & Communication",
    "Proyecto Creativo Completo": "Full Creative Project",
    "Otra consulta / Charla": "Other / Just saying hello",
    "Cuéntame sobre el proyecto o idea *": "Tell me about your project or idea *",
    "Enviar mensaje": "Send message",
    "Portfolio & CV Personal": "Portfolio & Personal CV",
    "Diseñador gráfico freelance. Branding, identidad visual, creatividad digital y diseño web con mirada estética y estratégica.": "Freelance graphic designer. Branding, visual identity, digital creativity and web design with a thoughtful, strategic approach.",
    "Volver arriba": "Back to top",
    "Granada, ES (UTC+1)": "Granada, Spain (UTC+1)",
    "Diseño independiente, sin plantillas genéricas.": "Independent design, no generic templates.",
    "Diseño, código & dirección creativa": "Design, code & creative direction",
    "No rellenar este campo:": "Leave this field empty:",
    "Logo de la herramienta": "Tool logo",
    "Proyecto destacado del portfolio de Diseñador Gráfico Freelance": "Featured project from the freelance graphic design portfolio"
  }));

  const textNodes = new Map();
  const attributes = new Map();
  const normalize = (value) => value.replace(/\s+/g, " ").trim();
  const metadata = [
    {
      selector: "title",
      es: "Gonzalo Morales — Portfolio de Diseño Gráfico y creatividad digital",
      en: "Gonzalo Morales — Graphic Design & Digital Creativity Portfolio"
    },
    {
      selector: 'meta[name="description"]',
      es: "Portfolio personal y CV de Gonzalo Morales. Especializado en branding, identidad visual, diseño gráfico y creatividad digital con una mirada progresiva hacia la web.",
      en: "Personal portfolio and CV of Gonzalo Morales, specializing in branding, visual identity, graphic design and digital creativity with a growing focus on the web."
    },
    {
      selector: 'meta[property="og:title"]',
      es: "Gonzalo Morales — Portfolio de Diseño Gráfico y creatividad digital",
      en: "Gonzalo Morales — Graphic Design & Digital Creativity Portfolio",
      attribute: "content"
    },
    {
      selector: 'meta[property="og:description"]',
      es: "Portfolio personal y CV de Gonzalo Morales. Especializado en branding, identidad visual, diseño gráfico y creatividad digital con una mirada progresiva hacia la web.",
      en: "Personal portfolio and CV of Gonzalo Morales, specializing in branding, visual identity, graphic design and digital creativity with a growing focus on the web.",
      attribute: "content"
    },
    {
      selector: 'meta[name="twitter:title"]',
      es: "Gonzalo Morales — Portfolio de Diseño Gráfico y creatividad digital",
      en: "Gonzalo Morales — Graphic Design & Digital Creativity Portfolio",
      attribute: "content"
    },
    {
      selector: 'meta[name="twitter:description"]',
      es: "Portfolio personal y CV de Gonzalo Morales. Especializado en branding, identidad visual, diseño gráfico y creatividad digital con una mirada progresiva hacia la web.",
      en: "Personal portfolio and CV of Gonzalo Morales, specializing in branding, visual identity, graphic design and digital creativity with a growing focus on the web.",
      attribute: "content"
    }
  ];

  function setLanguage(language) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let node;

    while ((node = walker.nextNode())) {
      if (!textNodes.has(node)) textNodes.set(node, node.nodeValue);
      const original = textNodes.get(node);
      const key = normalize(original);
      if (!key) continue;
      const translated = language === "en" ? englishText.get(key) : null;
      if (translated) {
        const leading = original.match(/^\s*/)[0];
        const trailing = original.match(/\s*$/)[0];
        node.nodeValue = `${leading}${translated}${trailing}`;
      } else if (language === "es") {
        node.nodeValue = original;
      }
    }

    const attributeTranslations = {
      placeholder: {
        "Ej. Sofía Morales": "e.g. Sofia Morales",
        "nombre@empresa.com": "name@company.com",
        "Objetivos, plazos aproximados, enlaces o cualquier detalle relevante...": "Goals, approximate timelines, links or any other relevant details..."
      },
      title: {
        "Copiar dirección de correo": "Copy email address",
        "Ver en Behance": "View on Behance"
      },
      alt: {
        "Logo de la herramienta": "Tool logo",
        "Proyecto destacado del portfolio de Diseñador Gráfico Freelance": "Featured project from the freelance graphic design portfolio"
      }
    };

    for (const [attribute, translations] of Object.entries(attributeTranslations)) {
      document.querySelectorAll(`[${attribute}]`).forEach((element) => {
        const originalKey = `${attribute}:${element.dataset.originalValue ?? element.getAttribute(attribute)}`;
        if (!attributes.has(originalKey)) attributes.set(originalKey, element.getAttribute(attribute));
        const original = attributes.get(originalKey);
        element.dataset.originalValue = original;
        const translated = language === "en" ? translations[original] : null;
        element.setAttribute(attribute, translated || original);
      });
    }

    document.documentElement.lang = language;
    for (const item of metadata) {
      const element = document.querySelector(item.selector);
      if (!element) continue;
      if (item.attribute) {
        element.setAttribute(item.attribute, language === "en" ? item.en : item.es);
      } else {
        element.textContent = language === "en" ? item.en : item.es;
      }
    }
    document.querySelector('[aria-label="Español"]').setAttribute("aria-pressed", String(language === "es"));
    document.querySelector('[aria-label="English"]').setAttribute("aria-pressed", String(language === "en"));

    try {
      localStorage.setItem("portfolio-language", language);
    } catch {
      // Local files may not allow storage; the language switch still works for this visit.
    }
  }

  document.querySelector('[aria-label="Español"]').addEventListener("click", () => setLanguage("es"));
  document.querySelector('[aria-label="English"]').addEventListener("click", () => setLanguage("en"));

  let initialLanguage = "es";
  try {
    initialLanguage = localStorage.getItem("portfolio-language") || initialLanguage;
  } catch {
    // Keep Spanish as the default when storage is unavailable.
  }
  setLanguage(initialLanguage);
})();
