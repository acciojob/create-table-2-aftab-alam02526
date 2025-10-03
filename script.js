function createTable() {
  // Ask user for rows and columns
  let rn = prompt("Input number of rows");
  let cn = prompt("Input number of columns");

  // If user pressed Cancel
  if (rn === null || cn === null) {
    return; // do nothing
  }

  // Convert inputs to numbers
  rn = Number(rn);
  cn = Number(cn);

  // Validate inputs
  if (isNaN(rn) || isNaN(cn)) {
    alert("Please enter valid numeric values!");
    return;
  }

  if (rn <= 0 || cn <= 0) {
    alert("Rows and columns must be greater than 0!");
    return;
  }

  // Get reference to table
  let table = document.getElementById("myTable");

  // Clear previous table if any
  table.innerHTML = "";

  // Create rows and columns
  for (let i = 0; i < rn; i++) {
    let row = table.insertRow();
    for (let j = 0; j < cn; j++) {
      let cell = row.insertCell();
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}

