const container = document.querySelector("#finalDoor");
const materialsContainer = document.querySelector("#imageContainer");
const materialsContainerSelectContainer = document.querySelector(
  "#materialsContainerSelect"
);
const colorSelect = document.querySelector("#colorSelect");
const modelSelect = document.querySelector("#modelSelect");
const buttonSelectDoor = document.querySelector("#buttonParamDoor");
const carouselLeft = document.querySelector("#carousel_left");
const carouselRight = document.querySelector("#carousel_right");

const main = new MainDoor(container);

const mainMaterials = new MainMaterials(materialsContainer);

const mainMaterialsSelect = new MainMaterialsSelect(
  materialsContainerSelectContainer
);

const colorSelectModel = new MainProfileSelect(colorSelect);
const modelSelectModel = new MainProfileSelect(modelSelect);

document.addEventListener("DOMContentLoaded", () => {
  doorControl(5);
  mainMaterialsSelect.render();
  mainMaterials.render();
  modelSelectModel.render();
  colorSelectModel.render();
  buttonSelectDoor.addEventListener("click", changeParameterDoor);
  carouselLeft.addEventListener("click", scrollCarousel);
  carouselRight.addEventListener("click", scrollCarousel);
  drop();
});
