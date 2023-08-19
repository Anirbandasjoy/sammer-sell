let itemCount = 0;
let totalAmout = 0;
function handelClick(data) {
  itemCount++;
  const nameList = getId("nameList");
  const li = document.createElement("li");
  li.innerText = `${itemCount}  . ${data.childNodes[3].childNodes[3].innerText}`;
  li.classList.add("font-bold");
  nameList.appendChild(li);
  const price = Number(
    data.childNodes[3].childNodes[5].innerText.split(" ")[0]
  );
  const totalPrice =
    data.parentNode.parentNode.parentNode.parentNode.childNodes[3].childNodes[3]
      .childNodes[3].childNodes[1].childNodes[1];
  console.log(totalPrice);
  totalAmout = totalAmout + price;
  totalPrice.innerText = totalAmout.toFixed(2);
}

// getId
function getId(id) {
  return document.getElementById(id);
}
