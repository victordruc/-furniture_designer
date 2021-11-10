class Door {
  constructor(qty, pos, imgBack, vertProfile, horProfile, height, width) {
    this.qty = qty;
    this.imgBack = imgBack;
    this.vertProfile = vertProfile;
    this.horProfile = horProfile;
    this.pos = pos;
    this.height = height;
    this.width = width;
  }

  render(container) {
    let divDoor = document.createElement("div");
    divDoor.classList.add("divDoor");
    divDoor.style.width = 100 / this.qty + "%";
    divDoor.style.height = "100%";
    divDoor.style.backgroundImage = `url(${this.imgBack})`;
    divDoor.style.position = "absolute";
    divDoor.style.left = (100 / this.qty) * this.pos + "%";
    divDoor.style.zIndex = 1300;
    if (Math.round(this.qty / 2) == this.pos + 1) {
      divDoor.style.zIndex = 1400;
    }

    divDoor.onmouseenter = () => {
      let topInfo = document.createElement("div");
      topInfo.id = "topInfo";
      let p = document.createElement("p");
      p.innerText = this.width / this.qty;
      topInfo.append(p);
      divDoor.prepend(topInfo);

      let heightInfo = document.createElement("div");
      heightInfo.id = "heightInfo";
      let pHeight = document.createElement("p");
      pHeight.innerText = this.height;
      heightInfo.append(pHeight);
      container.append(heightInfo);
    };
    divDoor.onmouseleave = () => {
      divDoor.removeChild(document.getElementById("topInfo"));
      container.removeChild(document.getElementById("heightInfo"));
    };

    let backgroundDiv = document.createElement("div");
    backgroundDiv.classList.add("imgBackDoor");
    backgroundDiv.draggable = true;
    backgroundDiv.style.width = "100%";
    backgroundDiv.style.height = "100%";

    let leftProfileDoor = document.createElement("div");
    leftProfileDoor.classList.add("vertical_profile");
    leftProfileDoor.style.position = "absolute";
    leftProfileDoor.style.left = 0;
    leftProfileDoor.style.top = 0;
    leftProfileDoor.style.zIndex = 1000;
    leftProfileDoor.style.height = "100%";
    leftProfileDoor.style.width = "10px";
    leftProfileDoor.style.backgroundImage = `url(${this.vertProfile})`;

    let rightProfileDoor = leftProfileDoor.cloneNode(true);
    rightProfileDoor.style.right = 0;
    rightProfileDoor.style.left = null;

    let bottomProfileDoor = document.createElement("div");
    bottomProfileDoor.classList.add("horizontal_profile");
    bottomProfileDoor.style.position = "absolute";
    bottomProfileDoor.style.left = 0;
    bottomProfileDoor.style.bottom = 0;
    bottomProfileDoor.style.height = "10px";
    bottomProfileDoor.style.width = "100%";
    bottomProfileDoor.style.backgroundImage = `url(${this.horProfile})`;

    let topProfileDoor = bottomProfileDoor.cloneNode(true);
    topProfileDoor.style.left = 0;
    topProfileDoor.style.bottom = null;
    topProfileDoor.style.top = 0;
    topProfileDoor.style.zIndex = 1500;

    divDoor.append(
      leftProfileDoor,
      rightProfileDoor,
      bottomProfileDoor,
      backgroundDiv
    );

    !container.firstElementChild && container.prepend(topProfileDoor);
    container.append(divDoor);
  }
}
