const root = document.documentElement;
const cans = document.querySelectorAll(".main-images img");
const mainImage = document.querySelector(".main-image img");

function activate(e) {
  const src = e.currentTarget.getAttribute("src");
  const newSrc = src.replace(/-sm/, "");
  mainImage.src = newSrc;

  if (src.includes("1")) {
    root.style.setProperty("--color-p1", "#1788cf")
    root.style.setProperty("--color-p2", "#0f7abd")
    root.style.setProperty("--color-p3", "#004E80")
    root.style.setProperty("--color-n1", "#ffffff");
    root.style.setProperty("--color-n8", "#000000");
  } else if (src.includes("2")) {
    root.style.setProperty("--color-p1", "#B4B7B9")
    root.style.setProperty("--color-p2", "#959A9D")
    root.style.setProperty("--color-p3", "#6F7477")
    root.style.setProperty("--color-n1", "#000000");
    root.style.setProperty("--color-n8", "#000000");
  } else {
    root.style.setProperty("--color-p1", "#E60C2C");
    root.style.setProperty("--color-p2", "#C70522");
    root.style.setProperty("--color-p3", "#330007");
    root.style.setProperty("--color-n1", "#ffffff");
    root.style.setProperty("--color-n8", "#ffffff");
  }
}

cans.forEach((can) => {
  can.addEventListener("click", activate);
});
