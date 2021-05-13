// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

//Clear any existing data
function buildTable(data) {
  tbody.html("");

  //Loop through each object in the data,
  //append a row and cells for each value in the row
  data.forEach((dataRow) => {
    //Append a row to the table body
    let row = tbody.append("tr");
    //loop through each field in the dataRow and add each cell
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
  })
})
}

function handleClick() {
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  //if-statement
  if(date) {
    filteredData = filteredData.filter(row => row.datetime === date);
  }
  //Rebuild the table using the filtered data
  buildTable(filteredData);
}

//listen for filter button click
d3.selectAll('#filter-btn').on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);
