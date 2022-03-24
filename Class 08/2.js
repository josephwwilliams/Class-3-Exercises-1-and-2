function coding(str) { 
  const arr = []
  for (i = 0; i < str.length; i++) {
    if ((str.charCodeAt(i) % 2) === 0) {
      arr.push(str[i].toUpperCase())
    } else arr.push(str[i].toLowerCase())
  }
  return arr.join('')
}

console.log(coding("Oh what a beautiful morning."))