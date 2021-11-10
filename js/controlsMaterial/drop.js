function drop() {
  const dropImg = document.getElementById("imageContainer");
  const container = document.querySelector("#finalDoor");
  const dropProfile = document.getElementById("dropProfile");

  const reciclyContainer = document.querySelector(".recycled_img");

  container.addEventListener("dragover", (ev) => {
    ev.preventDefault();
  });

  reciclyContainer.addEventListener("dragover", (ev) => {
    ev.preventDefault();
  });

  dropProfile.addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData("profile", [
      ev.target.parentElement.id,
      ev.target.src,
    ]);
  });

  dropImg.addEventListener("dragstart", (ev) => {
    ev.dataTransfer.setData("img", ev.target.src);
  });

  container.addEventListener("drop", (ev) => {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("img");
    let profile = ev.dataTransfer.getData("profile").split(",");
    if (ev.target.className == "imgBackDoor") {
      if (data) {
        ev.target.style.backgroundImage = `url(${data})`;
        ev.target.id = Date.now();
        ev.target.ondragstart = (ev) => {
          ev.dataTransfer.setData("imgBackDoor", ev.target.id);
        };
      } else if (profile[0] == "horDrop") {
        let div = document.createElement("div");
        div.classList.add("horizontal_profile");
        div.classList.add("control_profile");
        div.id = Date.now();
        div.style.backgroundImage = `url(${profile[1]})`;
        div.style.position = "absolute";
        div.style.height = "10px";
        div.style.width = "100%";
        div.style.top = ev.offsetY + "px";
        div.draggable = true;
        div.ondragstart = (ev) => {
          ev.dataTransfer.setData("recProf", ev.target.id);
        };
        ev.target.prepend(div);
      } else if (profile[0] == "vertDrop") {
        let div = document.createElement("div");
        div.classList.add("vertical_profile");
        div.classList.add("control_profile");
        div.id = Date.now();
        div.style.backgroundImage = `url(${profile[1]})`;
        div.style.position = "absolute";
        div.style.height = "100%";
        div.style.width = "10px";
        div.style.left = ev.offsetX + "px";
        div.draggable = true;
        div.ondragstart = (ev) => {
          ev.dataTransfer.setData("recProf", ev.target.id);
        };
        ev.target.prepend(div);
      }
    }
  });

  reciclyContainer.addEventListener("drop", (ev) => {
    let recProf = ev.dataTransfer.getData("recProf");
    let imgBackDoor = ev.dataTransfer.getData("imgBackDoor");
    if (recProf) {
      document.getElementById(recProf).remove();
    } else {
      document.getElementById(imgBackDoor).style.backgroundImage = null;
      document.getElementById(imgBackDoor).removeAttribute("id");
    }
  });
}
