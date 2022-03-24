let crazyButton = document.querySelector(".random")

function changeColors() {
  const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor
  crazyButton.style.color = randomColor
}

crazyButton.addEventListener('click', changeColors)