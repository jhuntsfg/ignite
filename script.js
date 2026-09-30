(function () {
  var S = window.SITE || {};
  var E = S.event || {};

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

  function isExternal(url) { return /^https?:\/\//.test(url || ""); }
  function openNew(a) { if (isExternal(a.href)) { a.target = "_blank"; a.rel = "noopener"; } }

  // Shared text
  document.querySelectorAll("[data-agency]").forEach(function (n) { n.textContent = S.agencyName || n.textContent; });
  document.querySelectorAll("[data-event]").forEach(function (n) {
    var v = E[n.getAttribute("data-event")];
    if (v) n.textContent = v;
  });
  document.querySelectorAll("[data-event-site]").forEach(function (a) {
    if (!E.website) { a.remove(); return; }
    a.href = E.website;
    a.textContent = E.website.replace(/^https?:\/\//, "").replace(/\/$/, "");
    openNew(a);
  });
  document.getElementById("year").textContent = new Date().getFullYear();

  // Optional official banner image replaces the text banner
  if (E.bannerImage) {
    var banner = document.getElementById("banner");
    banner.classList.add("has-image");
    banner.innerHTML = "";
    var img = el("img", {
      src: E.bannerImage,
      alt: [E.name, E.theme, E.dates, E.location].filter(Boolean).join(" · "),
    });
    if (E.website) {
      var bl = el("a", { href: E.website }, [img]);
      openNew(bl);
      banner.appendChild(bl);
    } else {
      banner.appendChild(img);
    }
  }

  // Pricing cards
  var cards = document.getElementById("cards");
  (S.cards || []).forEach(function (c) {
    var ul = el("ul");
    (c.features || []).forEach(function (f) { ul.appendChild(el("li", { text: f })); });
    var price = el("p", { class: "price", text: c.price });
    if (c.priceSuffix) price.appendChild(el("span", { text: c.priceSuffix }));
    var a, msg = null;
    if (c.url && c.url !== "#") {
      a = el("a", { class: "btn", href: c.url, text: c.cta });
      openNew(a);
    } else {
      // No link yet: show a short note instead of going anywhere
      a = el("button", { class: "btn", type: "button", text: c.cta });
      msg = el("p", { class: "soon", role: "status", "aria-live": "polite" });
      a.addEventListener("click", function () {
        msg.textContent = c.comingSoon || "Coming soon!";
      });
    }
    cards.appendChild(el("article", { class: "card" }, [
      el("h3", { text: c.title }),
      price,
      el("p", { class: "note", text: c.note || "" }),
      ul,
      a,
      msg,
    ]));
  });

  // FAQ
  var list = document.getElementById("faq-list");
  (S.faq || []).forEach(function (f) {
    list.appendChild(el("details", {}, [el("summary", { text: f.q }), el("p", { text: f.a })]));
  });
  var toggle = document.getElementById("faq-toggle");
  toggle.addEventListener("click", function () {
    var open = list.hidden;
    list.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Hide the FAQs" : "Check Out the FAQs";
  });

  // Video
  var video = document.getElementById("video");
  var v = S.video;
  // A bare Wistia ID (10 lowercase letters/digits) becomes its embed URL
  if (v && /^[a-z0-9]{10}$/.test(v)) v = "https://fast.wistia.net/embed/iframe/" + v + "?videoFoam=true";
  if (!v) {
    video.appendChild(el("div", { class: "video-placeholder" }, [
      el("span", { class: "play", "aria-hidden": "true" }),
      el("span", { text: "Video coming soon" }),
    ]));
  } else if (/\.(mp4|webm|mov)$/i.test(v)) {
    video.appendChild(el("video", { src: v, controls: "", playsinline: "", preload: "metadata" }));
  } else {
    video.appendChild(el("iframe", {
      src: v, title: "Message from " + (S.agencyName || "the agency"), loading: "lazy",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: "",
    }));
  }
})();
