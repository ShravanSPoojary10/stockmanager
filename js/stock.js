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
    item.className = "list-group-item small";
    item.innerHTML = `
      <strong>${s.slno}</strong> - ${s.productName}, ${s.brand}, HSN: ${s.hsn}, Qty: ${s.quantity}, ₹${s.netPrice} (${s.type})
      <br><small>Invoice: ${s.invoice}, Supplier: ${s.supplier}, Date: ${s.date}</small>
    `;
    list.appendChild(item);
  });
}
renderList();
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
    item.className = "list-group-item small";
    item.innerHTML = `
      <strong>${s.slno}</strong> - ${s.productName}, ${s.brand}, HSN: ${s.hsn}, Qty: ${s.quantity}, ₹${s.netPrice} (${s.type})
      <br><small>Invoice: ${s.invoice}, Supplier: ${s.supplier}, Date: ${s.date}</small>
    `;
    list.appendChild(item);
  });
}
renderList();
