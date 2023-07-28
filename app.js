(function () {
  function color() {
    let color = Math.round(Math.random() * 0xffffff).toString(16);
    return color.padStart(6, "0");
  }
  let copiedITem = [];
  let wrapper = document.querySelector(".wrapper");
  for (let count = 1; count <= 30; count++) {
    const box = document.createElement("div");
    const colorName = document.createElement("h3");
    box.classList.add("box");
    let JavaColor = "#" + color();
    box.style.backgroundColor = JavaColor;
    colorName.textContent = JavaColor;
    box.appendChild(colorName);
    wrapper.appendChild(box);
  }
  document.querySelectorAll(".wrapper .box").forEach((box) => {
    box.addEventListener("mouseover", () => {
      let color = box.style.backgroundColor;
      document.querySelector(".container").style.backgroundColor = color;
    });
    box.addEventListener("click", async (e) => {
      await navigator.clipboard.writeText(e.target.textContent).then(() => {
          console.log("copiedITem",e.target.textContent)
      }).catch((err) => {
        console.log(`can't copy to client`)
      })
    });
  });
})();
