function handelClick(data) {
  const nameList = getId("nameList");
  const li = document.createElement("li");
  li.innerText = data.childNodes[3].childNodes[3].innerText;
  console.log(nameList.appendChild(li));
}

function getId(id) {
  return document.getElementById(id);
}
