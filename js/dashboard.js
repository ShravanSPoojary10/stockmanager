document.addEventListener("DOMContentLoaded", () => {
  const stockData = JSON.parse(localStorage.getItem("stockList") || "[]");
  let count = 0;
  stockData.forEach(item => {
    if (item.type === "IN") count += parseInt(item.quantity || 0);
    else count -= parseInt(item.quantity || 0);
  });
  document.getElementById("stock-count").innerText = count;
});
