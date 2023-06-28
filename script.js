// Fechar menu responsivo qual scroll no link
let menuLinksContainer = document.getElementById("menu-links");

menuLinksContainer.addEventListener("click", function(event) {
  let target = event.target;
  if (target.tagName === "A") {
    let burgerCheckbox = document.getElementById("burger");
    burgerCheckbox.checked = false;
  }
});
