class Materials {
  constructor(imgSrc) {
    this.imgSrc = imgSrc;
  }

  render(container) {
    let imageContainer = document.createElement("div");
    imageContainer.style.marginRight = 5 + "px";
    imageContainer.style.marginBottom = 5 + "px";
    imageContainer.style.border = "1px solid black";
    let img = document.createElement("img");
    img.src = this.imgSrc;
    img.style.maxWidth = 70 + "px";
    img.style.maxHeight = 70 + "px";
    img.draggable = true;
    img.classList.add("dropImg");
    imageContainer.append(img);
    container.append(imageContainer);
  }
}
