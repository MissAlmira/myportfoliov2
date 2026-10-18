(() => {
  "use strict";
  document.documentElement.classList.add("js-ready");
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const menuToggle = $(".menu-toggle");
  const navLinks = $("#nav-links");
  const toast = $(".toast");
  let toastTimer;

  const yearNode = $("#year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();

  function closeMenu() {
    if (!menuToggle || !navLinks) return;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    navLinks.classList.remove("is-open");
  }
  menuToggle?.addEventListener("click", () => {
    const open = menuToggle.getAttribute("aria-expanded") !== "true";
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    navLinks.classList.toggle("is-open", open);
  });
  $$("#nav-links a").forEach(link => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeMenu(); });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 2600);
  }

  const caseStudies = {
    delay: {
      number: "CASE 01 · DELIVERY UPDATE", title: "A delayed delivery", summary: "A fictional restaurant merchant wants an immediate update about a delayed delivery and is concerned about the customer experience.",
      concern: "The merchant needs an update but the support advisor has not verified live delivery details. The reply must acknowledge urgency without implying access to a system or promising an unconfirmed arrival time.",
      objective: "Acknowledge the concern, explain the review step, set a realistic expectation, and make the next step clear.",
      email: `Subject: Update Request for Delayed Delivery — Order DEMO-1048\n\nHello Jamie,\n\nThank you for reaching out about order DEMO-1048. I understand that a delay can be frustrating, especially when you’re concerned about keeping your customer informed.\n\nThe delivery details would need to be reviewed through the appropriate support process before a reliable update can be shared. If you have any recent status information available, please include it in your reply so it can be considered during the review.\n\nOnce the available details have been checked, the next step is to share any confirmed update and guidance. I don’t want to give you an arrival estimate before it has been verified.\n\nThank you for your patience.\n\nKind regards,\nSupport Team`,
      why: "The response acknowledges the business impact, avoids claiming to have checked a live system, and does not invent an ETA. It gives the merchant a useful action while setting an honest expectation.",
      principles: ["Empathy without over-apologizing", "No unverified ETA", "Clear next step", "Professional tone"],
      alternative: "If no delivery status can be confirmed, explain that the available information is insufficient for a reliable estimate and outline what additional order details are needed for review."
    },
    item: {
      number: "CASE 02 · ORDER CONCERN", title: "A missing item report", summary: "A fictional merchant reports that a customer says one item was missing from an order.",
      concern: "The issue needs review, but the cause is not yet established. The response should avoid blaming the merchant, courier, or customer before the available facts are checked.",
      objective: "Acknowledge the report, request relevant reference details, and explain a neutral review process.",
      email: `Subject: Follow-up on Reported Missing Item — Order DEMO-2216\n\nHello Alex,\n\nThank you for letting us know about the reported missing item in order DEMO-2216. I understand how important it is to make sure order concerns are reviewed carefully.\n\nTo help clarify the situation, please share the order reference and the name of the item reported missing, along with any relevant preparation or handoff notes you have available. Please avoid sending unnecessary customer personal information.\n\nThe details can then be reviewed through the applicable process to better understand what happened and determine the appropriate next step. At this stage, I wouldn’t want to assume where the issue occurred before the information has been checked.\n\nThank you for your cooperation.\n\nBest regards,\nSupport Team`,
      why: "The reply stays neutral, asks for focused information, and explains what the information will be used for. It does not assign blame or promise a refund or other outcome.",
      principles: ["Neutral fact-finding", "Relevant information only", "No premature blame", "Process transparency"],
      alternative: "If the order reference is already available, acknowledge it and ask only for the missing item name or relevant details still needed for review."
    },
    payout: {
      number: "CASE 03 · PAYOUT REVIEW", title: "A payout discrepancy", summary: "A fictional merchant notices a difference between an expected payout and the amount shown on a statement.",
      concern: "Financial discrepancies can be stressful. The response must take the concern seriously without inventing payout rules, processing timelines, or refund guarantees.",
      objective: "Acknowledge the difference, request appropriate references, and set expectations for a review.",
      email: `Subject: Review of Payout Difference — Reference DEMO-P572\n\nHello Morgan,\n\nThank you for contacting us about the difference you noticed between your expected payout and the amount shown on your statement. I understand why you’d want the figures clarified.\n\nTo help with a review, please provide the relevant payout or statement reference, the date shown on the statement, and the amount you expected to receive. Please do not include full bank account details or other sensitive financial information in your reply.\n\nThe relevant transaction details would need to be checked against the applicable records before the difference can be explained. Once the review has been completed, the available findings and next steps can be shared with you. I’m unable to confirm a cause or timeline before that review takes place.\n\nThank you for bringing this to our attention.\n\nKind regards,\nSupport Team`,
      why: "The message recognizes the concern, asks for limited reference information, discourages sharing sensitive details, and avoids unsupported financial promises.",
      principles: ["Care with financial information", "Specific reference request", "No invented timeline", "Clear expectations"],
      alternative: "If the merchant has already supplied the required references, confirm receipt and explain that the next step is to review the relevant transaction records."
    },
    listing: {
      number: "CASE 04 · LISTING CONCERN", title: "An unavailable business listing", summary: "A fictional business owner says their listing appears incorrect or unavailable.",
      concern: "The listing may affect discoverability, but the cause and eligibility for restoration are unknown. The response should avoid promising immediate correction.",
      objective: "Recognize the business impact, collect enough detail to identify the issue, and explain the review step.",
      email: `Subject: Review Request for Business Listing — Demo Business DEMO-88\n\nHello Taylor,\n\nThank you for letting us know that your business listing appears incorrect or unavailable. I understand that listing visibility is important for customers trying to find your business.\n\nTo help identify the issue, please confirm the business name as it appears on the platform, the relevant business or listing reference if available, and a brief description of what you see when you try to view it. A screenshot may also help if it does not contain customer or other sensitive information.\n\nThe details would need to be reviewed to determine what may be affecting the listing and what options are available. I can’t confirm a cause or promise immediate restoration before the review is complete, but the information you provide will help clarify the next step.\n\nThank you for your patience.\n\nBest regards,\nSupport Team`,
      why: "The reply acknowledges the business impact, asks for relevant identifiers and a concise description, and avoids promising a specific result or timeline.",
      principles: ["Acknowledges impact", "Useful troubleshooting details", "No guarantee of restoration", "Calm wording"],
      alternative: "If the listing reference is unavailable, ask for the business name and a description of the exact error or page state so the issue can be identified."
    }
  };

  const dialog = $("#case-dialog");
  const dialogContent = $("#dialog-content");
  function escapeHTML(value) {
    return value.replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
  }
  function openCase(key) {
    const item = caseStudies[key];
    if (!item || !dialog || !dialogContent) return;
    $("#dialog-kicker").textContent = item.number;
    dialogContent.innerHTML = `
      <h2 id="dialog-title">${escapeHTML(item.title)}</h2>
      <p class="case-summary">${escapeHTML(item.summary)}</p>
      <section class="dialog-section"><h3>The concern</h3><p>${escapeHTML(item.concern)}</p></section>
      <section class="dialog-section"><h3>Response objective</h3><p>${escapeHTML(item.objective)}</p></section>
      <section class="dialog-section"><h3>Sample email response</h3><div class="email-sample" id="email-sample">${escapeHTML(item.email)}</div><button class="copy-button" type="button" data-copy-case="${key}">Copy email response ↗</button></section>
      <section class="dialog-section"><h3>Why this response works</h3><p>${escapeHTML(item.why)}</p><div class="dialog-principles">${item.principles.map(p => `<span>${escapeHTML(p)}</span>`).join("")}</div></section>
      <section class="dialog-section"><h3>Alternative if the first path is unavailable</h3><p>${escapeHTML(item.alternative)}</p></section>
      <p class="demo-disclaimer">Fictional demonstration only. This is not a real customer conversation or a representation of a specific case handled by Almira.</p>`;
    dialog.showModal();
    document.body.classList.add("dialog-open");
    $(".dialog-close", dialog).focus();
  }
  $$(".case-open").forEach(button => button.addEventListener("click", () => openCase(button.dataset.case)));
  $(".dialog-close")?.addEventListener("click", () => dialog.close());
  dialog?.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
  dialog?.addEventListener("close", () => document.body.classList.remove("dialog-open"));
  dialogContent?.addEventListener("click", async event => {
    const button = event.target.closest("[data-copy-case]");
    if (!button) return;
    const email = caseStudies[button.dataset.copyCase]?.email;
    if (!email) return;
    try {
      await navigator.clipboard.writeText(email);
      showToast("Email response copied to clipboard.");
    } catch (_) {
      const textArea = document.createElement("textarea");
      textArea.value = email;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "absolute"; textArea.style.left = "-9999px";
      document.body.appendChild(textArea); textArea.select();
      const success = document.execCommand("copy"); textArea.remove();
      showToast(success ? "Email response copied to clipboard." : "Copy unavailable. Please select the email text.");
    }
  });

  const tabButtons = $$(".tab-button");
  function activateTab(name, moveFocus = false) {
    tabButtons.forEach(button => {
      const active = button.dataset.tab === name;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-selected", String(active));
      button.tabIndex = active ? 0 : -1;
      const panel = $(`[data-panel="${button.dataset.tab}"]`);
      if (panel) panel.hidden = !active;
      if (active && moveFocus) button.focus();
    });
  }
  tabButtons.forEach((button, index) => {
    button.addEventListener("click", () => activateTab(button.dataset.tab));
    button.addEventListener("keydown", event => {
      if (!["ArrowRight", "ArrowLeft", "Home", "End"].includes(event.key)) return;
      event.preventDefault();
      let next = index;
      if (event.key === "ArrowRight") next = (index + 1) % tabButtons.length;
      if (event.key === "ArrowLeft") next = (index - 1 + tabButtons.length) % tabButtons.length;
      if (event.key === "Home") next = 0;
      if (event.key === "End") next = tabButtons.length - 1;
      activateTab(tabButtons[next].dataset.tab, true);
    });
  });
  activateTab("h2h");

  const lightbox = $("#lightbox");
  const lightboxImg = lightbox ? $("img", lightbox) : null;
  const lightboxCaption = lightbox ? $(".lightbox-caption", lightbox) : null;
  $$(".photo-tile").forEach(tile => tile.addEventListener("click", () => {
    const path = tile.dataset.image;
    const alt = tile.dataset.alt || "Personal photography";
    const image = new Image();
    image.onload = () => {
      if (!lightbox || !lightboxImg || !lightboxCaption) return;
      lightboxImg.src = path;
      lightboxImg.alt = alt;
      lightboxCaption.textContent = alt;
      lightbox.showModal();
      document.body.classList.add("dialog-open");
      $(".lightbox-close", lightbox).focus();
    };
    image.onerror = () => showToast("Placeholder only — add your photo to assets/images to preview it.");
    image.src = path;
  }));
  $(".lightbox-close")?.addEventListener("click", () => lightbox.close());
  lightbox?.addEventListener("click", event => { if (event.target === lightbox) lightbox.close(); });
  lightbox?.addEventListener("close", () => document.body.classList.remove("dialog-open"));

  const resumeLink = $("[data-resume-download]");
  resumeLink?.addEventListener("click", event => {
    // Let the browser handle an existing file. If absent, show setup guidance.
    fetch(resumeLink.getAttribute("href"), { method: "HEAD" }).then(response => {
      if (!response.ok) showToast("Add assets/Almira-Bogayan-Resume.pdf to enable this download.");
    }).catch(() => {
      // file:// previews cannot check HEAD requests; the README explains setup.
    });
  });

  const backTop = $(".back-to-top");
  const updateScrollUI = () => {
    backTop?.classList.toggle("is-visible", window.scrollY > 500);
    const sections = $$("main section[id]");
    let current = "";
    sections.forEach(section => { if (window.scrollY >= section.offsetTop - 150) current = section.id; });
    $$("#nav-links a[href^='#']").forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${current}`));
  };
  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();
  backTop?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));

  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -25px 0px" });
    $$(".reveal").forEach(element => observer.observe(element));
  } else {
    $$(".reveal").forEach(element => element.classList.add("is-visible"));
  }
})();

// Hide Photography navigation everywhere when the gallery manifest is empty.
document.addEventListener('DOMContentLoaded', () => {
  const photographyLinks = document.querySelectorAll('.nav-links a[href="photography.html"]');
  if (!photographyLinks.length) return;
  fetch('assets/images/photography/photography.json')
    .then(response => { if (!response.ok) throw new Error('Gallery manifest unavailable'); return response.json(); })
    .then(data => {
      const hasPhotos = Array.isArray(data.photos) && data.photos.some(photo => photo && typeof photo.src === 'string' && photo.src.trim());
      if (!hasPhotos) photographyLinks.forEach(link => { link.hidden = true; });
    })
    .catch(() => photographyLinks.forEach(link => { link.hidden = true; }));
});
