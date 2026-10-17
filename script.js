
const joinButtons = document.querySelectorAll(".join-button");

joinButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const plan = button.dataset.plan;

    alert(
      "You selected the " + plan +
      " membership!\n\nContact the gym to complete your registration."
    );
  });
});

// Smooth navigation to website sections
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener("click", function (event) {
    const target = document.querySelector(link.getAttribute("href"));

    if (target) {
      event.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
