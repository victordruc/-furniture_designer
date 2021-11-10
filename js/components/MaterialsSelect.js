class MaterialsSelect {
  constructor(id, text) {
    this.id = id;
    this.text = text;
  }

  render(container) {
    let li = document.createElement("li");
    li.innerText = this.text;
    li.onclick = () => {
      Array.from(li.parentElement.children).forEach((item) => {
        item.className = "";
      });
      li.className = "select";
      this.select(this.id);
    };

    container.append(li);
  }

  select(id) {
    mainMaterials.remove();
    data.forEach((item) => {
      if (item.id == id) {
        item.img.forEach((item) => {
          mainMaterials.addChildren(new Materials(item));
        });
      }
    });
    materialsContainer.innerHTML = "";
    mainMaterials.render();
  }
}
