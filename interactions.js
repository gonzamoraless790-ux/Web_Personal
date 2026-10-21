(() => {
  const toolCategories = new Map([
    ["Adobe Photoshop", ["design"]],
    ["Adobe After Effects", ["design"]],
    ["Cinema 4D", ["design"]],
    ["WordPress & Divi", ["web"]],
    ["HTML5, CSS3 & JavaScript", ["web"]],
    ["PHP, Java & SQL", ["web"]],
    ["Diseño de interfaces web", ["web"]],
    ["HTML5 Canvas & WebGL", ["workflow"]],
    ["Git, GitHub & CI/CD", ["workflow"]]
  ]);

  const filterConfigurations = [
    {
      group: "tools",
      grid: "#herramientas .max-w-6xl > .grid",
      categories: toolCategories,
      emptyMessage: {
        es: "No hay herramientas en esta categoría.",
        en: "There are no tools in this category."
      }
    },
    {
      group: "projects",
      grid: "#proyectos .max-w-6xl > .grid",
      categories: new Map([["Portfolio Digital", ["design", "creative"]]]),
      emptyMessage: {
        es: "Todavía no hay proyectos en esta categoría.",
        en: "There are no projects in this category yet."
      }
    }
  ];

  function normalize(value) {
    return value.replace(/\s+/g, " ").trim();
  }

  function isEnglish() {
    return document.documentElement.lang === "en";
  }

  function setupNameTypewriter() {
    const firstName = document.querySelector(".hero-name__first");
    const lastName = document.querySelector(".hero-name__last");
    if (!firstName || !lastName) return;

    const firstText = firstName.textContent;
    const lastText = lastName.textContent;
    const fullName = firstText + lastText;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    lastName.classList.add("is-typing");
    let position = 0;
    let typing = true;

    function renderName() {
      firstName.textContent = fullName.slice(0, position).slice(0, firstText.length);
      lastName.textContent = fullName.slice(firstText.length, position);
    }

    function tick() {
      if (typing && position < fullName.length) {
        position += 1;
        renderName();
        window.setTimeout(tick, position === fullName.length ? 1300 : 105);
        return;
      }

      if (typing) {
        typing = false;
        window.setTimeout(tick, 500);
        return;
      }

      if (position > 0) {
        position -= 1;
        renderName();
        window.setTimeout(tick, 48);
        return;
      }

      typing = true;
      window.setTimeout(tick, 420);
    }

    renderName();
    window.setTimeout(tick, 450);
  }

  setupNameTypewriter();

  function setupCustomCursor() {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    const cursor = document.createElement("div");
    cursor.className = "studio-cursor";
    cursor.setAttribute("aria-hidden", "true");
    const ring = document.createElement("span");
    ring.className = "studio-cursor__ring";
    const spark = document.createElement("span");
    spark.className = "studio-cursor__spark";
    cursor.append(ring, spark);
    document.body.append(cursor);
    document.body.classList.add("custom-cursor-active");

    document.addEventListener("pointermove", (event) => {
      cursor.style.setProperty("--cursor-x", `${event.clientX}px`);
      cursor.style.setProperty("--cursor-y", `${event.clientY}px`);
      cursor.classList.add("is-visible");
      const interactive = event.target.closest("a, button, input, select, textarea, [role='button']");
      cursor.classList.toggle("is-hovering", Boolean(interactive));
    }, { passive: true });

    document.addEventListener("pointerdown", () => cursor.classList.add("is-pressed"));
    document.addEventListener("pointerup", () => cursor.classList.remove("is-pressed"));
    document.documentElement.addEventListener("pointerleave", () => cursor.classList.remove("is-visible"));
    document.documentElement.addEventListener("pointerenter", () => cursor.classList.add("is-visible"));
  }

  function setupScrollReveals() {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion || !("IntersectionObserver" in window)) return;

    const revealItems = document.querySelectorAll(
      "#inicio .max-w-6xl > .grid > div, #sobre-mi .grid > div:nth-child(2) > .grid > div, #herramientas .max-w-6xl > .grid > div, #proyectos .max-w-6xl > .grid > div, .experience-entry, .experience-sidebar > div, #contacto .grid > div:last-child > div"
    );
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -24px 0px" });

    revealItems.forEach((item, index) => {
      item.classList.add("motion-reveal");
      item.style.setProperty("--reveal-delay", `${(index % 4) * 75}ms`);
      observer.observe(item);
    });
    document.body.classList.add("motion-ready");
  }

  setupCustomCursor();
  setupScrollReveals();

  function setupFilter({ group, grid: gridSelector, categories, emptyMessage }) {
    const buttons = [...document.querySelectorAll(`[data-filter-group="${group}"]`)];
    const grid = document.querySelector(gridSelector);
    if (!buttons.length || !grid) return;

    const cards = [...grid.children];
    const emptyState = document.createElement("p");
    emptyState.className = "filter-empty";
    emptyState.setAttribute("role", "status");
    emptyState.textContent = emptyMessage.es;
    emptyState.hidden = true;
    grid.insertAdjacentElement("afterend", emptyState);

    cards.forEach((card) => {
      const title = normalize(card.querySelector("h3")?.textContent || "");
      card.dataset.categories = (categories.get(title) || []).join(" ");
    });

    function applyFilter(filter) {
      const visibleCount = cards.reduce((count, card) => {
        const visible = filter === "all" || card.dataset.categories.split(" ").includes(filter);
        card.hidden = !visible;
        return count + Number(visible);
      }, 0);

      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button.dataset.filter === filter));
      });
      emptyState.textContent = isEnglish() ? emptyMessage.en : emptyMessage.es;
      emptyState.hidden = visibleCount > 0;
      grid.setAttribute("aria-busy", "false");
    }

    buttons.forEach((button) => {
      button.addEventListener("click", () => applyFilter(button.dataset.filter));
    });
    applyFilter(buttons.find((button) => button.dataset.filter === "all")?.dataset.filter || "all");
  }

  filterConfigurations.forEach(setupFilter);

  async function copyEmail(button) {
    const email = "moccapsd@gmail.com";
    let copied = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
        copied = true;
      }
    } catch {
      copied = false;
    }

    if (!copied) {
      const temporary = document.createElement("textarea");
      temporary.value = email;
      temporary.setAttribute("readonly", "");
      temporary.style.position = "fixed";
      temporary.style.opacity = "0";
      document.body.append(temporary);
      temporary.select();
      try {
        copied = document.execCommand("copy");
      } catch {
        copied = false;
      }
      temporary.remove();
    }

    const label = button.querySelector("span");
    if (!label) return;
    const originalLabel = label.textContent;
    label.textContent = copied ? (isEnglish() ? "Copied" : "Copiado") : email;
    button.setAttribute("aria-live", "polite");
    window.setTimeout(() => {
      label.textContent = originalLabel;
      button.removeAttribute("aria-live");
    }, 1800);
  }

  function addText(parent, tag, text, className) {
    const element = document.createElement(tag);
    element.textContent = text;
    if (className) element.className = className;
    parent.append(element);
    return element;
  }

  function createDialog(className, heading) {
    const dialog = document.createElement("dialog");
    dialog.className = `portfolio-dialog ${className}`;
    dialog.setAttribute("aria-labelledby", `${className}-title`);

    const panel = document.createElement("div");
    panel.className = "portfolio-dialog__panel";
    const header = document.createElement("div");
    header.className = "portfolio-dialog__header";
    addText(header, "h2", heading, "portfolio-dialog__title").id = `${className}-title`;

    const close = document.createElement("button");
    close.type = "button";
    close.className = "portfolio-dialog__close";
    close.setAttribute("aria-label", isEnglish() ? "Close dialog" : "Cerrar ventana");
    close.textContent = "×";
    close.addEventListener("click", () => dialog.close());
    header.append(close);

    panel.append(header);
    dialog.append(panel);
    dialog.addEventListener("click", (event) => {
      if (event.target === dialog) dialog.close();
    });
    document.body.append(dialog);
    return { dialog, panel };
  }

  function getCvData() {
    const experience = document.querySelector("#experiencia .relative h3")?.textContent.trim() || "Diseñador Gráfico Freelance";
    const experienceDescription = document.querySelector("#experiencia .relative p")?.textContent.trim() || "";
    const education = document.querySelector("#experiencia h4")?.textContent.trim() || "";
    const educationDescription = document.querySelector("#experiencia h4 + p")?.textContent.trim() || "";
    const summary = [...document.querySelectorAll("#sobre-mi .grid > div:nth-child(2) > div:first-child p")]
      .map((paragraph) => paragraph.textContent.trim())
      .join(" ");
    const skills = [...document.querySelectorAll("#herramientas .max-w-6xl > .grid h3")]
      .map((heading) => heading.textContent.trim());

    return {
      name: normalize(document.querySelector("#inicio h1")?.textContent || "Gonzalo Morales"),
      role: isEnglish() ? "Graphic designer · Branding · Web design" : "Diseñador gráfico · Branding · Diseño web",
      email: "moccapsd@gmail.com",
      summary,
      experience,
      experienceDescription,
      education,
      educationDescription,
      skills
    };
  }

  function buildCvContent(parent) {
    const data = getCvData();
    addText(parent, "p", data.role, "print-cv__eyebrow");
    addText(parent, "h1", data.name, "print-cv__name");
    addText(parent, "p", data.email, "print-cv__contact");
    addText(parent, "h2", isEnglish() ? "Profile" : "Perfil", "print-cv__section-title");
    addText(parent, "p", data.summary, "print-cv__copy");
    addText(parent, "h2", isEnglish() ? "Experience" : "Experiencia", "print-cv__section-title");
    addText(parent, "h3", data.experience, "print-cv__item-title");
    addText(parent, "p", data.experienceDescription, "print-cv__copy");
    addText(parent, "h2", isEnglish() ? "Education" : "Formación", "print-cv__section-title");
    addText(parent, "h3", data.education, "print-cv__item-title");
    addText(parent, "p", data.educationDescription, "print-cv__copy");
    addText(parent, "h2", isEnglish() ? "Tools" : "Herramientas", "print-cv__section-title");
    addText(parent, "p", data.skills.join(" · "), "print-cv__copy");
  }

  let cvDialog;
  let printSheet;

  function ensureCvDialog() {
    if (cvDialog) {
      cvDialog.querySelector(".portfolio-dialog__title").textContent = isEnglish() ? "Resume" : "Curriculum Vitae";
      cvDialog.querySelector(".portfolio-dialog__close").setAttribute("aria-label", isEnglish() ? "Close dialog" : "Cerrar ventana");
      const content = cvDialog.querySelector(".print-cv");
      content.replaceChildren();
      buildCvContent(content);
      cvDialog.querySelector(".portfolio-dialog__primary").textContent = isEnglish() ? "Print or save as PDF" : "Imprimir o guardar como PDF";
      return cvDialog;
    }
    const created = createDialog("cv-dialog", isEnglish() ? "Resume" : "Curriculum Vitae");
    cvDialog = created.dialog;
    const content = document.createElement("div");
    content.className = "print-cv portfolio-dialog__content";
    buildCvContent(content);
    created.panel.append(content);

    const printButton = document.createElement("button");
    printButton.type = "button";
    printButton.className = "portfolio-dialog__primary";
    printButton.textContent = isEnglish() ? "Print or save as PDF" : "Imprimir o guardar como PDF";
    printButton.addEventListener("click", printCv);
    created.panel.append(printButton);
    return cvDialog;
  }

  function ensurePrintSheet() {
    if (printSheet) return printSheet;
    printSheet = document.createElement("article");
    printSheet.className = "print-cv print-cv--sheet";
    printSheet.hidden = true;
    buildCvContent(printSheet);
    document.body.append(printSheet);
    return printSheet;
  }

  function printCv() {
    const sheet = ensurePrintSheet();
    sheet.replaceChildren();
    buildCvContent(sheet);
    sheet.hidden = false;
    window.addEventListener("afterprint", () => {
      if (printSheet) printSheet.hidden = true;
    }, { once: true });
    window.print();
  }

  function openProjectDetails(button) {
    const card = button.closest("#proyectos .group");
    if (!card) return;
    const dialog = createDialog("project-dialog", card.querySelector("h3")?.textContent.trim() || (isEnglish() ? "Project" : "Proyecto"));
    const image = card.querySelector("img");
    if (image) {
      const preview = document.createElement("img");
      preview.src = image.currentSrc || image.src;
      preview.alt = image.alt;
      preview.className = "project-dialog__image";
      dialog.panel.append(preview);
    }
    addText(dialog.panel, "p", card.querySelector("p")?.textContent.trim() || "", "portfolio-dialog__copy");
    const behance = card.querySelector('a[href*="behance.net"]');
    if (behance) {
      const link = document.createElement("a");
      link.href = behance.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.className = "portfolio-dialog__primary";
      link.textContent = isEnglish() ? "View project on Behance ↗" : "Ver proyecto en Behance ↗";
      dialog.panel.append(link);
    }
    dialog.dialog.showModal();
  }

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;

    switch (button.dataset.action) {
      case "copy-email":
        copyEmail(button);
        break;
      case "print-cv":
        if (button.dataset.cvMode === "print") printCv();
        else ensureCvDialog().showModal();
        break;
      case "project-details":
        openProjectDetails(button);
        break;
    }
  });

  const contactForm = document.querySelector('form[name="contact"]');
  contactForm?.addEventListener("submit", (event) => {
    if (location.protocol !== "file:") return;
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const fields = new FormData(contactForm);
    const subject = encodeURIComponent(`${isEnglish() ? "Inquiry from" : "Consulta de"} ${fields.get("name")}`);
    const body = encodeURIComponent([
      `${isEnglish() ? "Name" : "Nombre"}: ${fields.get("name")}`,
      `Email: ${fields.get("email")}`,
      `${isEnglish() ? "Project type" : "Tipo de colaboración"}: ${fields.get("project-type")}`,
      "",
      fields.get("message")
    ].join("\n"));
    location.href = `mailto:moccapsd@gmail.com?subject=${subject}&body=${body}`;
  });
})();
