class ProfileSelect {
  constructor(id, data) {
    this.data = data;
    this.id = id;
  }

  render(container) {
    let option = document.createElement("option");
    option.innerHTML = this.data;
    option.value = this.id;
    container.append(option);
    container.onchange = (event) => {
      this.profileChange(event.target.value, event.target.id);
    };
  }

  profileChange(id, cntID) {
    let doorProfileVer = Array.from(
      document.getElementsByClassName("vertical_profile")
    );
    let doorProfileHor = Array.from(
      document.getElementsByClassName("horizontal_profile")
    );

    if (cntID === "modelSelect") {
      colorSelectModel.remove();
      document.getElementById("colorSelect").innerHTML = "";
      profileData.forEach((item) => {
        if (item.id == id) {
          item.color.forEach((item) => {
            colorSelectModel.addChildren(
              new ProfileSelect(item.id, item.name, doorControl)
            );
          });
          this.profileChange(item.color[0].id, "colorSelect");
        }
      });
      colorSelectModel.render();
    } else if (cntID === "colorSelect") {
      profileData.forEach((item) => {
        item.color.forEach((item) => {
          if (item.id == id) {
            document.getElementById(
              "horDrop"
            ).innerHTML = `<img src="${item.src.hor}">`;
            document.getElementById(
              "vertDrop"
            ).innerHTML = `<img src="${item.src.vert}">`;
            doorProfileVer.forEach((container) => {
              container.style.backgroundImage = `url(${item.src.vert})`;
            });
            doorProfileHor.forEach((container) => {
              container.style.backgroundImage = `url(${item.src.hor})`;
            });
          }
        });
      });
    }
  }
}
