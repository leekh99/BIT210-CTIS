
   // Load the Visualization API and the corechart package.
   google.charts.load('current', {'packages':['corechart']});
   google.charts.load("current", {packages: ["bar"]});
   google.charts.load("current", {packages: ["line"]});



   // Set a callback to run when the Google Visualization API is loaded.
   google.charts.setOnLoadCallback(drawChart);

   // Callback that creates and populates a data table,
   // instantiates the pie chart, passes in the data and
   // draws it.
   function drawChart() {

     // Create the data table.
     var data = new google.visualization.DataTable();
     data.addColumn('string', 'Topping');
     data.addColumn('number', 'Slices');
     data.addRows([
       ['Mushrooms', 3],
       ['Onions', 1],
       ['Olives', 1],
       ['Zucchini', 1],
       ['Pepperoni', 2]
     ]);

     // Set chart options
     var options = {'title':'How Much Pizza I Ate Last Night'};

     // Instantiate and draw our chart, passing in some options.
     var piechart = new google.visualization.PieChart(document.getElementById('piechart'));
     var linechart = new google.charts.Line(document.getElementById('linechart'));
     var barchart = new google.charts.Bar(document.getElementById('barchart'));
     piechart.draw(data, options);
     linechart.draw(data, options);
     barchart.draw(data,options);

   }

   


var removeElement = function(){
    console.log("hello");
    
    let el = true;
    do {
        el = document.querySelector(`.analysis .row`);
        if (el) el.parentElement.removeChild(el);
    } while (el);
}

document.getElementById('table-tab').addEventListener('click', removeElement);






