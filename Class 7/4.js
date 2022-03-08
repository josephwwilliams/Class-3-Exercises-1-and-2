function sums (arrs) {
  let total = 0
  for (let i = 0; i < arrs.length; i++)
    total += arrs[i].budget;
    return total;
}

console.log(sums([
  { name: "John", age: 21, budget: 23000 },
  { name: "Steve",  age: 32, budget: 40000 },
  { name: "Martin",  age: 16, budget: 2700 }
]))