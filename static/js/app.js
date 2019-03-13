// from data.js
var tableData = data;








// Filtering input dates
// select input value
var submit = d3.select("#filter-btn");

submit.on("click", function() {
	// prevent page from refreshing
	d3.event.preventDefault();

	// Select the input element and get the raw HTML node
	var inputElement = d3.select("#datetime");

	// Get the value property of the input element
	var inputValue = inputElement.property("value");

	console.log(inputValue);

	// filter the date
	var filteredData = tableData.filter(ufo=>ufo.datetime ===inputValue);
	console.log(filteredData);	
	

	d3.select("#ufo-table-body")
	  .selectAll("td")
	  .remove();

	var tbody = d3.select("#ufo-table-body");


	// Add new data
	// Step 1: Loop Through `data` and console.log each UFO sighting object
	filteredData.forEach(function(ufoSighting){
		console.log(ufoSighting);
		// Step 2:  Use d3 to append one table row `tr` for each UFO sighting object
		//  appending the `tr` elements.
		var row = tbody.append("tr");
		// Step 3:  Use `Object.entries` to console.log each UFO sighting value
		Object.entries(ufoSighting).forEach(function([key, value]) {
			// Step 4: Use d3 to append 1 cell per UFO sighting)
			console.log(key,value);
			// Append a cell to the row for each value
	    	// in the weather report object
			var cell = tbody.append("td");
			cell.text(value);
		});

	});


});





