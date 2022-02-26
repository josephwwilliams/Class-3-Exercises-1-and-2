function numToBool (array) {
  let number = 0;
  for(let bools of array) {
    if (bools === true) {
      number+=1;
  }
}
  console.log(number);
}

numToBool([true, true, false, true])
numToBool([true, true, true])
numToBool([])