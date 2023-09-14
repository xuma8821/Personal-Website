const navList = document.querySelector(".navigation-items-list");
const homeSection = document.querySelector(".home-section");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#message");
const submitBtn = document.querySelector(".contact-msg-btn");
const contactForm = document.querySelector("form");
const navToggleBtn = document.querySelector(".nav-toggle-btn");
const allSections = document.querySelectorAll("section");
const revealSection = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section-hidden");
  if (entry.target.classList.contains("skills-section")) {
    const progressBars = document.querySelectorAll(".progress-bar");
    progressBars.forEach(function (progressBar) {
      const targetPercent = Number(progressBar.dataset.target);
      let initialWidth = 0;
      while (targetPercent > initialWidth) {
        initialWidth++;
        progressBar.style.width = `${initialWidth}%`;
      }
    });
  }
  observer.unobserve(entry.target);
};
const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});
allSections.forEach(function (section) {
  section.classList.add("section-hidden");
  sectionObserver.observe(section);
});

const slideToView = function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav-page-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};
function submitForm(event) {
  event.preventDefault();
  nameInput.value = "";
  emailInput.value = "";
  msgInput.value = "";
  submitBtn.textContent = "MESSAGE SENT";
  setTimeout(() => (submitBtn.textContent = "SEND MESSAGE"), 3000);
}

navList.addEventListener("click", slideToView);
homeSection.addEventListener("click", slideToView);
contactForm.addEventListener("submit", submitForm);
navToggleBtn.addEventListener("click", function () {
  navList.classList.toggle("inactive");
  navList.classList.toggle("active");
});
