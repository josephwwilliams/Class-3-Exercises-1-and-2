const infoInput = document.querySelector(".info-input");
const form = document.querySelector("#info-form");
const infoList = document.querySelector('.info-list');
const allInfo = JSON.parse(localStorage.getItem("info")) || [];

function storeUserInfo (e) {
  e.preventDefault();
  let info = infoInput.value;
  allInfo.push(info);
  saveInfoLocal(allInfo);
  populateInfoList(allInfo)
  form.reset();
}
function populateInfoList(info = []) {
  infoList.innerHTML = info
    .map(
      (info, idx) => `
      <li data-index=${idx}>
        ${info}
        <button class="close-btn">&times;</button>
      </li>`
    )
  .join("");
}

function removeInfo (e) {
  if (!e.target.matches(".close-btn")) return;
  const idx = e.target.parentNode.dataset.index;
  allInfo.splice(idx, 1);
  populateInfoList(allInfo);
  saveInfoLocal(allInfo);
}

function saveInfoLocal (information = []) {
  localStorage.setItem("info", JSON.stringify(information));
}

form.addEventListener("submit", storeUserInfo);
infoList.addEventListener("click", removeInfo);
populateInfoList(allInfo);