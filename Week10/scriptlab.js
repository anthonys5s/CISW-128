//change the heading text and style
const title = document.getElementById("title");
title.textContent = "Hello from JavaScript!";
title.style.color = "blue";
title.style.fontFamily = "Arial, sans-serif";

//select the main section and give it a gray background
const mainSection = document.querySelector(".main");
mainSection.style.backgroundColor = "#f0f0f0";

//update every paragraph and make them green
const paragraphs = document.querySelectorAll("p");
paragraphs.forEach((p, i) => {
  p.textContent = `Paragraph ${i + 1} updated by JS`;
  p.style.color = "green";
});

//toggle the highlight class when the button is clicked
const toggleButton = document.getElementById("toggle");
toggleButton.addEventListener("click", () => {
  document.body.classList.toggle("highlight");
});

//build the list of links
const resources = [
  { text: "CSI", href: "https://www.csi.edu" },
  { text: "MDN Web Docs", href: "https://developer.mozilla.org" },
  { text: "Eloquent JavaScript", href: "https://eloquentjavascript.net" }
];

const list = document.getElementById("links");
list.innerHTML = "";

for (const item of resources) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = item.text;
  a.href = item.href;
  a.target = "_blank";
  li.appendChild(a);
  list.appendChild(li);
}