document.getElementById("stockForm").onsubmit = function(e) {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target));
  let stockList = JSON.parse(localStorage.getItem("stockList") || "[]");
  stockList.push(data);
  localStorage.setItem("stockList", JSON.stringify(stockList));
  e.target.reset();
  renderList();
};

function renderList() {
  const stockList = JSON.parse(localStorage.getItem("stockList") || "[]");
  const list = document.getElementById("stockList");
  list.innerHTML = "";
  stockList.forEach((s, i) => {
    const item = document.createElement("li");
    item.className = "list-group-item";
    item.innerText = `${s.date} | ${s.type} | Qty: ${s.quantity} | Inv: ${s.invoice}`;
    list.appendChild(item);
  });
}
renderList();
