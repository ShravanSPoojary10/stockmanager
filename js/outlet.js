document.getElementById("outletForm").onsubmit = function(e) {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(e.target));
      localStorage.setItem("outlet", JSON.stringify(data));
      loadOutlet();
    };

    function loadOutlet() {
      const data = JSON.parse(localStorage.getItem("outlet") || "{}");
      document.getElementById("outletInfo").innerText =
        `Outlet: ${data.outletName || 'N/A'}, Place: ${data.place || 'N/A'}`;
    }

    loadOutlet();