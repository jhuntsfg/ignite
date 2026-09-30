(function () {
  var S = window.SITE || {};
  var STORAGE_KEY = "ignite-roadmap-progress";

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") node.textContent = attrs[k];
      else if (k === "class") node.className = attrs[k];
      else node.setAttribute(k, attrs[k]);
    });
    (children || []).forEach(function (c) { if (c) node.appendChild(c); });
    return node;
  }

  function isExternal(url) { return /^https?:\/\//.test(url); }

  function link(label, url, cls) {
    var a = el("a", { href: url || "#", text: label, class: cls || "" });
    if (url && isExternal(url)) { a.target = "_blank"; a.rel = "noopener"; }
    return a;
  }

  function videoEmbed(url, title) {
    if (!url) {
      return el("div", { class: "video-placeholder" }, [
        el("span", { class: "play", "aria-hidden": "true" }),
        el("span", { text: "Video coming soon" }),
      ]);
    }
    return el("iframe", {
      src: url, title: title || "Video", loading: "lazy",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: "",
    });
  }

  // Shared text
  document.querySelectorAll("[data-agency]").forEach(function (n) { n.textContent = S.agencyName || n.textContent; });
  document.querySelectorAll("[data-owner]").forEach(function (n) { n.textContent = S.ownerName || n.textContent; });
  var mg = S.meetAndGreet || {};
  document.querySelectorAll("[data-seats]").forEach(function (n) { n.textContent = mg.maxSeats || n.textContent; });
  document.querySelectorAll("[data-booking]").forEach(function (a) {
    a.href = mg.bookingUrl || "#qa";
    if (isExternal(a.href)) { a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll("[data-email]").forEach(function (a) {
    a.href = "mailto:" + S.contactEmail;
    a.textContent = S.contactEmail;
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  // Welcome video
  var welcome = document.querySelector('[data-video="welcome"]');
  if (welcome) welcome.appendChild(videoEmbed(S.welcomeVideo, "Welcome message"));

  // Roadmap with saved progress
  var done = {};
  try { done = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (e) { done = {}; }
  var steps = S.roadmap || [];
  var list = document.getElementById("roadmap-list");

  function updateProgress() {
    var count = steps.filter(function (_, i) { return done[i]; }).length;
    var pct = steps.length ? Math.round((count / steps.length) * 100) : 0;
    document.getElementById("progress-bar").style.width = pct + "%";
    document.getElementById("progress-label").textContent =
      count === steps.length && count > 0
        ? "All steps complete. Congratulations, writer!"
        : count + " of " + steps.length + " steps complete";
  }

  steps.forEach(function (step, i) {
    var id = "step-" + i;
    var box = el("input", { type: "checkbox", id: id });
    box.checked = !!done[i];
    var li = el("li", { class: "step" + (done[i] ? " is-done" : "") }, [
      el("span", { class: "step-num", text: String(i + 1) }),
      el("div", { class: "step-body" }, [
        el("h3", { text: step.title }),
        el("p", { text: step.text }),
        step.link ? link(step.link.label + " →", step.link.url, "step-link") : null,
      ]),
      el("label", { class: "step-check", for: id }, [box, el("span", { text: "Done" })]),
    ]);
    box.addEventListener("change", function () {
      done[i] = box.checked;
      li.classList.toggle("is-done", box.checked);
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); } catch (e) {}
      updateProgress();
    });
    list.appendChild(li);
  });
  updateProgress();

  // Sessions
  var grid = document.getElementById("session-grid");
  (S.sessions || []).forEach(function (s) {
    grid.appendChild(el("article", { class: "session-card" }, [
      el("div", { class: "video-frame" }, [videoEmbed(s.video, s.title)]),
      el("div", { class: "session-meta" }, [
        el("h3", { text: s.title }),
        el("p", { class: "muted", text: [s.speaker, s.length].filter(Boolean).join(" · ") }),
      ]),
    ]));
  });

  // Schedule
  var sched = document.getElementById("schedule");
  (mg.days || []).forEach(function (d) {
    sched.appendChild(el("li", {}, [
      el("span", { class: "day", text: d }),
      el("span", { class: "time", text: mg.time }),
    ]));
  });

  // Resources
  var rg = document.getElementById("resource-grid");
  (S.resources || []).forEach(function (g) {
    var ul = el("ul");
    g.items.forEach(function (it) { ul.appendChild(el("li", {}, [link(it.label, it.url)])); });
    rg.appendChild(el("div", { class: "resource-card" }, [el("h3", { text: g.group }), ul]));
  });

  // FAQ
  var faq = document.getElementById("faq-list");
  (S.faq || []).forEach(function (f) {
    faq.appendChild(el("details", {}, [el("summary", { text: f.q }), el("p", { text: f.a })]));
  });

  // Mobile nav
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("nav-links");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") { nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); }
  });
})();
