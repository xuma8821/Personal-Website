const navList = document.querySelector(".navigation-items-list");
const homeSection = document.querySelector(".home-section");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msgInput = document.querySelector("#message");
const submitBtn = document.querySelector(".contact-msg-btn");
const contactForm = document.querySelector("form");
const slideToView = function (e) {
  e.preventDefault();
  console.log(e.target);
  if (e.target.classList.contains("nav-page-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
};
function submitForm(event) {
  event.preventDefault();
  console.log("a");
  nameInput.value = "";
  emailInput.value = "";
  msgInput.value = "";
  submitBtn.textContent = "MESSAGE SENT";
  setTimeout(() => (submitBtn.textContent = "SEND MESSAGE"), 3000);
}

navList.addEventListener("click", slideToView);
homeSection.addEventListener("click", slideToView);
contactForm.addEventListener("submit", submitForm);
