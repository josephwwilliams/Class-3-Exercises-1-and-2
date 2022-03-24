function sortDrinkByPrice(array) {
  return array.sort(function (a, b) {
    return(a.price - b.price);
  })
}
console.log(sortDrinkByPrice([
  { name: "lemonade", price: 50 },
  { name: "lime", price: 10 },
  { name: "Grape", price: 35}
]))