const buttons = document.querySelectorAll(".dropdown_btn");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    content.classList.toggle("show");
  });
});
