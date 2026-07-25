const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    const faqItem = this.closest(".faq-item");

    if (faqItem) {
      faqItem.classList.toggle("active");
    }
  });
});
/* ------------------------------
   Scroll Fade Animation
------------------------------ */

const fadeElements = document.querySelectorAll(
  ".fade-in:not(.hero)"
);

fadeElements.forEach((element) => {
  element.classList.add("fade-ready");
});

const fadeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");

        // 一度表示したら監視を終了
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  }
);

fadeElements.forEach((element) => {
  fadeObserver.observe(element);
});