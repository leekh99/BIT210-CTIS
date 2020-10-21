const elements = {
  piechart : document.getElementById('piechart'),
  linechart : document.getElementById('linechart'),
  barchart : document.getElementById('barchart')
}


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
     var piechart = new google.visualization.PieChart(elements.piechart);
     var linechart = new google.charts.Line(elements.linechart);
     var barchart = new google.charts.Bar(elements.barchart);
     piechart.draw(data, options);
     linechart.draw(data, options);
     barchart.draw(data,options);
   }

   


const removeElement = ()=> {
    let el = true;
    do {
        el = document.querySelector(`.analysis .row`);
        if (el) el.parentElement.removeChild(el);
    } while (el);
}

document.getElementById('table-tab').addEventListener('click', removeElement);



const markup = `
<table class="table">
    <thead class="thead-dark">
        <tr>
        <th scope="col">#</th>
        <th scope="col">First</th>
        <th scope="col">Last</th>
        <th scope="col">Handle</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th scope="row">1</th>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        </tr>
        <tr>
        <th scope="row">2</th>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
        </tr>
        <tr>
        <th scope="row">3</th>
        <td>Larry</td>
        <td>the Bird</td>
        <td>@twitter</td>
        </tr>
    </tbody>
  </table>`;


