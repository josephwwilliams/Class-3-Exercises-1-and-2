function parent(x) {
  function closure() {
    return x;
  };
  return closure;
}
const remember = parent("remembers me");
remember();
console.log(remember())