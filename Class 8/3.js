const max = [5, 5, 10, 10, 15, 15, 20, 20]
function qualify (arry, t) {
  let result = ""
  if (arry.length === max.length && t <= 120 &&
    arry.every(function (element, index) {
    return element <= max[index];
    })) {
    result = "qualified"
  } else result = "disqualified"
  console.log(result)
}
qualify([5, 5, 10, 10, 15, 15, 20, 20], 130)