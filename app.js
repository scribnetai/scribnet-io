// scribnet.io — tiny interactions: footer year + scroll reveal.
document.getElementById("year").textContent = new Date().getFullYear();

const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Animated stat counters: count up when scrolled into view (skips non-numeric like ∞).
(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var els = document.querySelectorAll(".stat strong");
  if (!els.length) return;
  var cio = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target;
      cio.unobserve(el);
      var target = parseInt(el.textContent.replace(/[^0-9]/g, ""), 10);
      if (isNaN(target) || reduce) return;
      var dur = 1300, t0 = null;
      function tick(t) {
        if (!t0) t0 = t;
        var p = Math.min((t - t0) / dur, 1);
        el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.4 });
  els.forEach(function (el) { cio.observe(el); });
})();

// Rotating hero word: typewriter cycles AI → agents → code → in public.
(function () {
  var el = document.getElementById("rotator");
  if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  var words = ["AI", "GitHub", "Terraform", "JavaScript", "Python", "YAML", "Bash", "Sparky"];
  var wi = 0, ci = words[0].length, deleting = true;
  function tick() {
    if (deleting) {
      ci -= 1;
      el.textContent = words[wi].slice(0, ci);
      if (ci <= 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(tick, 380); }
      else setTimeout(tick, 36);
    } else {
      ci += 1;
      var w = words[wi];
      el.textContent = w.slice(0, ci);
      if (ci >= w.length) { deleting = true; setTimeout(tick, 2200); }
      else setTimeout(tick, 72);
    }
  }
  setTimeout(tick, 2400);
})();
