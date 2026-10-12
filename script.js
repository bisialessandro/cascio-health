// WhatsApp number and prefilled message — change here to update every button on the page.
const WA_NUMBER = "393465203383";
const WA_TEXT = "Ciao Nicolas! Ho visto il tuo sito e vorrei iniziare il mio cambiamento con il cibo vero.";
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_TEXT)}`;

document.querySelectorAll("[data-wa]").forEach((a) => {
  a.href = waLink;
  a.target = "_blank";
  a.rel = "noopener";
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Hero: slide the headline in once the photo is ready (or after 1.2s at most).
const heroImg = document.querySelector(".hero__bg");
const startHero = () => document.body.classList.add("loaded");
if (heroImg.complete) startHero();
else { heroImg.addEventListener("load", startHero, { once: true }); setTimeout(startHero, 1200); }

// Items in a group appear one after the other.
document.querySelectorAll(".goals__list li, .steps li").forEach((el) => el.classList.add("reveal"));
document.querySelectorAll(".mosaic, .cards, .results, .goals__list, .steps").forEach((group) => {
  [...group.children].forEach((el, i) => el.style.setProperty("--d", `${i * 0.1}s`));
});

// Reveal text and unveil photos as they scroll into view.
const io = new IntersectionObserver(
  (entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }),
  { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
);
document.querySelectorAll(".reveal, .unveil").forEach((el) => io.observe(el));

// Nav background, floating WhatsApp button and a light parallax on the big photos.
const nav = document.querySelector(".nav");
const wa = document.querySelector(".wa-float");
const parallax = [heroImg, ...document.querySelectorAll("[data-parallax]")];
let ticking = false;
const onScroll = () => {
  const y = window.scrollY;
  nav.classList.toggle("scrolled", y > 10);
  wa.classList.toggle("show", y > window.innerHeight * 0.6);
  if (!reduceMotion) {
    parallax.forEach((img) => {
      const r = img.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > window.innerHeight) return;
      const offset = (r.top + r.height / 2 - window.innerHeight / 2) * -0.15;
      img.style.setProperty("--py", `${offset}px`);
    });
  }
  ticking = false;
};
window.addEventListener("scroll", () => {
  if (!ticking) { requestAnimationFrame(onScroll); ticking = true; }
}, { passive: true });
onScroll();

document.getElementById("year").textContent = new Date().getFullYear();
