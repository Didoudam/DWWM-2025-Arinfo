// fluid appearance

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.5,
  }
);
const sections = document.querySelectorAll(".animation");
sections.forEach((section) => {
  observer.observe(section);
});

// scroll button

const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    scrollToTopBtn.classList.add("show");
  } else {
    scrollToTopBtn.classList.remove("show");
  }
};

scrollToTopBtn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// form validation
function validateForm(event) {
  const nom = document.getElementById("nom");
  const prenom = document.getElementById("prenom");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (nom.value.trim() === "") {
    alert('Le champ "Nom" est requis.');
    nom.focus();
    event.preventDefault();
    return false;
  }

  if (prenom.value.trim() === "") {
    alert('Le champ "Prénom" est requis.');
    prenom.focus();
    event.preventDefault();
    return false;
  }

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email.value)) {
    alert("L'email n'est pas valide.");
    email.focus();
    event.preventDefault();
    return false;
  }

  if (message.value.trim() === "") {
    alert('Le champ "Message" est requis.');
    message.focus();
    event.preventDefault();
    return false;
  }

  return true;
}

const form = document.querySelector("form");
if (form) {
  form.addEventListener("submit", function (event) {
    if (!validateForm(event)) {
      event.preventDefault();
    }
  });
}
