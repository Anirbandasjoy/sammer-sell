let itemCount = 0;
let totalAmout = 0;
let disCountTotal = 0;

const parchase = getId("purchaseBtn");
const applybtn = getId("applyBtn");
const discountAdd = getId("discount");
const totalAdd = getId("total");
const goHomeBtn = getId("goHome");
const nameList = getId("nameList");
const discountTotalAdd = getId("discountTotal");
applybtn.disabled = true;
parchase.disabled = true;

function handelClick(data) {
  itemCount++;

  const li = document.createElement("li");
  li.innerText = `${itemCount}  . ${data.childNodes[3].childNodes[3].innerText}`;
  li.classList.add("font-bold");
  nameList.appendChild(li);
  priceCalculation(data.childNodes[3].childNodes[5].innerText.split(" ")[0]);
  totalAdd.innerText = totalAmout.toFixed(2);
}

applybtn.addEventListener("click", function () {
  const inputCoupon = getId("inputCoupon").value;
  if (inputCoupon == "SELL200") {
    const discount = 0.2;
    const totaldiscount = totalAmout * discount;
    const totalDiscoutPrice = totalAmout - totaldiscount;
    discountAdd.innerText = totaldiscount.toFixed(2);
    discountTotalAdd.innerText = totalDiscoutPrice;
  }
});

goHomeBtn.addEventListener("click", function () {
  getId("inputCoupon").value = "";
  totalAdd.innerText = "00";
  discountAdd.innerText = "00";
  discountTotalAdd.innerText = "00";

  // Remove all child elements from the nameList
  while (nameList.firstChild) {
    nameList.removeChild(nameList.firstChild);
  }
  itemCount = 0;
  parchase.disabled = true;
  applybtn.disabled = true;
});

function priceCalculation(p) {
  const price = Number(p);
  const total = (totalAmout = totalAmout + price);
  if (total >= 200) {
    applybtn.disabled = false;
  }
  if (total !== 0) {
    parchase.disabled = false;
  }
  console.log(total);
  return total;
}

function getId(id) {
  return document.getElementById(id);
}
