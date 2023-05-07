google.charts.load('current', {'packages':['line', 'corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

var chartDiv = document.getElementById('myChart');

var data = new google.visualization.DataTable();
data.addColumn('date', 'Time');
data.addColumn('number', "svrmqtt01");
data.addColumn('number', "svrmqtt02");

data.addRows([
  [new Date(2014, 0),  .5, .1],
  [new Date(2014, 1),   .4,  .4],
  [new Date(2014, 2),   .5,  .5],
  [new Date(2014, 3),  2.9,   9],
  [new Date(2014, 4),  6.3,   3],
  [new Date(2014, 5),    9,   9],
  [new Date(2014, 6), 10.6,  10],
  [new Date(2014, 7), 10.3,   6],
  [new Date(2014, 8),  7.4, 7.4],
  [new Date(2014, 9),  4.4, 4.4],
  [new Date(2014, 10), 1.1, 1.1],
  [new Date(2014, 11), .2, .2]
]);

var materialOptions = {
  chart: {
    title: 'Connections per Cluster Node'
  },
  // series: {
  //   // Gives each series an axis name that matches the Yaxis below.
  //   0: {axis: 'Temps'}
  // },
  axes: {
    // Adds labels to each axis; they don't have to match the axis names.
    y: {
      Temps: {label: 'Number of connections'}
    }
  }
};
var materialChart = new google.charts.Line(chartDiv);
materialChart.draw(data, materialOptions);

}


