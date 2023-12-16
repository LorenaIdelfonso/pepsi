const root = document.documentElement;
const cans = document.querySelectorAll(".main-images img");
const mainImage = document.querySelector(".main-image img");

function activate(e) {
  const src = e.currentTarget.getAttribute("src");
  const newSrc = src.replace(/-sm/, "");
  mainImage.src = newSrc;

  if (src.includes("1")) {
    root.style.setProperty("--color-p1", "#1788cf");
    root.style.setProperty("--color-p2", "#0f7abd");
    root.style.setProperty("--color-p3", "#004E80");
    root.style.setProperty("--color-n1", "#F5F7FA");
    root.style.setProperty("--color-n8", "#F5F7FA");
  } else if (src.includes("2")) {
    root.style.setProperty("--color-p1", "#B4B7B9");
    root.style.setProperty("--color-p2", "#959A9D");
    root.style.setProperty("--color-p3", "#6F7477");
    root.style.setProperty("--color-n1", "#000000");
    root.style.setProperty("--color-n8", "#000000");
  } else {
    root.style.setProperty("--color-p1", "#BD0F0F");
    root.style.setProperty("--color-p2", "#910808");
    root.style.setProperty("--color-p3", "#1A0000");
    root.style.setProperty("--color-n1", "#F5F7FA");
    root.style.setProperty("--color-n8", "#F5F7FA");
  }
};

cans.forEach((can) => {
  can.addEventListener("click", activate);
});
