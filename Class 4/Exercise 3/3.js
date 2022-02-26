let timeCurrent = document.querySelector('#clock');

setInterval(getTime, 1000)
function getTime () {
  let time = new Date()
  currentTime = time.toLocaleTimeString('en-US')
  timeCurrent.innerText = currentTime
}

getTime()