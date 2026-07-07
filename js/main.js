(function () {
  "use strict";

  var navToggle = document.getElementById("nav-toggle");
  var siteNav = document.getElementById("site-nav");
  var siteHeader = document.getElementById("site-header");

  function t(key) {
    return window.I18n ? window.I18n.t(key) : key;
  }

  if (navToggle && siteNav) {
    function closeNav() {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", t("nav.openMenu"));
    }

    function openNav() {
      siteNav.classList.add("is-open");
      navToggle.setAttribute("aria-expanded", "true");
      navToggle.setAttribute("aria-label", t("nav.closeMenu"));
    }

    navToggle.addEventListener("click", function () {
      if (siteNav.classList.contains("is-open")) closeNav();
      else openNav();
    });

    siteNav.querySelectorAll(".site-nav__link").forEach(function (link) {
      link.addEventListener("click", closeNav);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeNav();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth >= 768) closeNav();
    });

    if (window.I18n) {
      window.I18n.onChange(function () {
        if (!siteNav.classList.contains("is-open")) {
          navToggle.setAttribute("aria-label", t("nav.openMenu"));
        }
      });
    }
  }

  if (siteHeader) {
    window.addEventListener("scroll", function () {
      siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  var revealElements = document.querySelectorAll(".reveal");

  if (revealElements.length && "IntersectionObserver" in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    revealElements.forEach(function (el) {
      el.classList.add("is-visible");
    });
  }

  var sections = document.querySelectorAll("section[id]");
  var navLinks = document.querySelectorAll(".site-nav__link[href^='#']");

  if (sections.length && navLinks.length) {
    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (link) {
            link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
          });
        }
      });
    }, { threshold: 0.25, rootMargin: "-20% 0px -60% 0px" });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });
  }
})();
