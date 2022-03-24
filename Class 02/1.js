const fruits = [
  { name: "oranges", price: 2 },
  { name: "bananas", price: 1 },
  { name: "grapes", price: 3}
];

const foodList = document.querySelector(".food-list")

for(let food of fruits) {
  const foodListItem = document.createElement("li");
  foodListItem.innerText = food.name;
  foodList.appendChild(foodListItem);
}