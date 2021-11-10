function doorControl(qty = 5, height = 2100, width = 3000) {
  container.innerHTML = "";
  let imgObj = { ...profileData[0].color[0].src };
  main.remove();
  for (let i = 0; i < qty; i++) {
    main.addChildren(
      new Door(qty, i, imgObj.back, imgObj.vert, imgObj.hor, height, width)
    );
  }
  document.getElementById(
    "vertDrop"
  ).innerHTML = `<img src="${imgObj.vert}" draggable="true">`;
  document.getElementById(
    "horDrop"
  ).innerHTML = `<img src="${imgObj.hor}" draggable="true">`;
  main.render();
}

data[0].img.forEach((item) => {
  mainMaterials.addChildren(new Materials(item));
});

data.forEach((item) => {
  mainMaterialsSelect.addChildren(new MaterialsSelect(item.id, item.name));
});

profileData.forEach((item) => {
  modelSelectModel.addChildren(
    new ProfileSelect(item.id, item.name, doorControl)
  );
});

profileData[0].color.forEach((item) => {
  colorSelectModel.addChildren(
    new ProfileSelect(item.id, item.name, doorControl)
  );
});

function changeParameterDoor() {
  let formParamInput = Array.from(
    document.querySelectorAll("#parametersDoor input")
  );

  let trueData =
    formParamInput[2].value &&
    formParamInput[2].value > 0 &&
    formParamInput[2].value < 8 &&
    formParamInput[0].value > 300 &&
    formParamInput[1].value > 350;
  if (trueData) {
    doorControl(
      formParamInput[2].value,
      formParamInput[0].value,
      formParamInput[1].value
    );
  }
}

function scrollCarousel() {
  const carousel = document.getElementById("materialsContainerSelect");
  !carousel.style.left ? (carousel.style.left = 0 + "px") : carousel.style.left;
  if (this.id == "carousel_right") {
    if (parseInt(carousel.style.left) >= 0) {
      return;
    }
    carousel.style.left = parseInt(carousel.style.left) + 20 + "px";
  } else if (this.id == "carousel_left") {
    let widthScroll = carousel.parentElement.offsetWidth - carousel.offsetWidth;
    if (parseInt(carousel.style.left) <= widthScroll) {
      return;
    }
    carousel.style.left = parseInt(carousel.style.left) - 20 + "px";
  }
}
