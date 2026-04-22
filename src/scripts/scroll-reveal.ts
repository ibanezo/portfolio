const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");

        // Stagger children with data-stagger attribute
        const children = entry.target.querySelectorAll("[data-stagger]");
        children.forEach((child, i) => {
          (child as HTMLElement).style.animationDelay = `${i * 0.08}s`;
        });

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

document
  .querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale")
  .forEach((el) => observer.observe(el));
