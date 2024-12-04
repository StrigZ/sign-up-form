const form = document.querySelector("form");
const passwordInput = document.querySelector("#password");
const passwordConfirmInput = document.querySelector("#confirm-password");
const passwordMatchParagraph = document.querySelector("#password-match");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e);
});

passwordConfirmInput.addEventListener("change", (e) => {
  if (passwordInput.value === e.target.value) {
    passwordMatchParagraph.classList.add("hidden");
  } else {
    passwordMatchParagraph.classList.remove("hidden");
  }
});
