//Modal Box
const modal = document.getElementById("myModal");
const btn = document.querySelector("button");
const span = document.getElementsByClassName("close")[0];
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// Scroll to top button
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}
window.onscroll = function() {
  scrollFunction();
};
function scrollFunction() {
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (document.documentElement.scrollTop > 20) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
}
// Hover Effect
const imageOfCreator = document.getElementById("my-image");
const text = document.querySelector(".image-text");
imageOfCreator.addEventListener("mouseenter", () => {
	text.style.opacity = 1;
	imageOfCreator.style.opacity = 0;
});
imageOfCreator.addEventListener("mouseleave", () => {
	text.style.opacity = 0;
	imageOfCreator.style.opacity = 1;
});