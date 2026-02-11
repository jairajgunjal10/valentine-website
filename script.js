const noBtn = document.querySelector(".no");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 300 - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

const yesBtn = document.querySelector(".yes");
const roseContainer = document.getElementById("roseContainer");

yesBtn.addEventListener("click", () => {
  roseContainer.classList.remove("hidden");
});

