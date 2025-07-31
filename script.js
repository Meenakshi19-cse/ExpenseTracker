let expenses = [];

function addExpense() {
  const desc = document.getElementById("desc").value.trim();
  const amount = parseFloat(document.getElementById("amount").value);

  if (!desc || isNaN(amount)) {
    alert("Please enter valid description and amount.");
    return;
  }

  expenses.push({ desc, amount });
  updateExpenseList();
  updateTotal();

  document.getElementById("desc").value = "";
  document.getElementById("amount").value = "";
}

function updateExpenseList() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${item.desc} <span class="amount">₹${item.amount}</span>`;
    list.appendChild(li);
  });
}

function updateTotal() {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  document.getElementById("total").innerText = total.toFixed(2);
}
