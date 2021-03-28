import data from "./data.js";

const container = document.querySelector(".container");
const questions = data.map((item) => {
  return `
	<article class="question">
		<header>
			<h3 class="toggle hover">${item.question}</h3>
			<i class="fas fa-chevron-down arrow toggle"></i>
		</header>
		<p class='answer'>${item.answer}</p>
	</article>
	<div class="underline"></div>`;
});

container.innerHTML = `<h1>FAQ</h1> ${questions.join("")}`;

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((item) => {
  item.addEventListener("click", (e) => {
    const header = e.target.parentNode;
    const article = header.parentNode;
    const box = document.querySelector(".box-icon");
    article.classList.toggle("active");
    if (article.classList.contains("active")) {
      box.style.transform = "translateX(-45px)";
    } else {
      box.style.transform = "translateX(0px)";
    }
  });
});
