function adding (mainArray) {
  let total = 0
  mainArray.forEach((i) => {
    total += i[0] * i[1]
  });
  console.log(total);
}

adding([[10,2],[5,0],[2,3]]);
