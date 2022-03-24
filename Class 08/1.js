function makePlusFunction(a) {
  function PlusV2(b) {
    return  a + b
  }
  return PlusV2
}

const plusFive = makePlusFunction(5)
const plusTen = makePlusFunction(10)

console.log(plusTen(188))