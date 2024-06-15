let changeColorBtn = document.getElementById("changeColorBtn");
let colorCode = document.getElementById("colorCode");

const changeColor = () => {
  let randomColor = generateRandomColor().toUpperCase();

  colorCode.innerHTML = `<em>${randomColor}</em>`;
  document.body.style.backgroundColor = `${randomColor}`;
};

const generateRandomColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return "#" + randomColor;
};

changeColorBtn.addEventListener("click", () => changeColor());

changeColor();
