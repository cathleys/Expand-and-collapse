// only click the button not the document

document.addEventListener("click", (e) => {
  // if not the button, then just stop there.
  if (!e.target.matches(".expand-button")) return;

  // we want to access the body when we click the button (since e.target is the .expand-button)
  const card = e.target.closest(".card");
  const cardBody = card.querySelector(".card-body");

  // so toggle method makes it easier to access the class rather than the add/remove methd
  cardBody.classList.toggle("show");

  // next we want to change the button text based on its status
  e.target.innerText = e.target.innerText === "Expand" ? "Collapse" : "Expand";
});
