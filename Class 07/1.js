function redundantReturn (str) {
  function returnV2 () {
    return str
  }
  return returnV2
}
let V2 = redundantReturn('hello');

console.log(V2())