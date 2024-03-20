function calculateTotal(input) {
    let row = input.parentNode.parentNode;
    let count = row.querySelector('[name="count"]').value;
    let price = row.querySelector('[name="price"]').value;
    let total = row.querySelector('[name="total"]');
    total.value = count * price;
    calculateGrandTotal();
}

function calculateGrandTotal() {
    let table = document.getElementById('table');
    let rows = table.querySelectorAll('tbody tr');
    let grandTotal = 0;
    for (let row of rows){
        grandTotal += parseInt(row.querySelector('[name="total"]').value);
    }
    document.querySelector('[name="grandTotal"]').value = grandTotal;
}

function addRow() {
    let table = document.getElementById('table');
    let row = table.insertRow(-1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = '<input type="text" name="name"/>';
    cell2.innerHTML = '<input type="number" name="count" onchange="calculateTotal(this)"/>';
    cell3.innerHTML = '<input type="number" name="price" onchange="calculateTotal(this)"/>';
    cell4.innerHTML = '<input type="number" name="total" readonly/>';
}