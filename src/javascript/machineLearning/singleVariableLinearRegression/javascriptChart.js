function getChart(
    xyValues,
    pMinXValue,
    pMaxXValue,
    pMinYValue,
    pMaxYValue
) {
    var tableData = setUpTable(xyValues);
    var x = xyValues[0].x;
    var y = xyValues[0].y;

    var html = ' <html> '
        + ' <head> '
        + ' <meta charset="UTF-8" /> '
        + ' <script type="text/javascript" src="https://www.google.com/jsapi"></script> '
        + '    <script type="text/javascript"> '
        + '     google.load("visualization", "1", { packages: ["corechart"] }); '
        + '     google.setOnLoadCallback(drawChart); '
        + '  '
        + '     function drawChart() { '
        + '         var data = google.visualization.arrayToDataTable( '
        +                   tableData
        + '     ); '
        + '  '
        + '     var options = { '
        + '         title: \'' + x + '  vs. ' + y + ' comparison\', '
        + '         hAxis: {title: \'' + xyValues[0].x + '\', minValue: ' + pMinXValue + ', maxValue: ' + pMaxXValue + '}, '
        + '         vAxis: {title: \'' + xyValues[0].y + '\', minValue: ' + pMinYValue + ', maxValue: ' + pMaxYValue + '}, '
        + '         legend: \'none\', '


        + '         interpolateNulls: true, '
        + '         series: {    '
        + '             1: { lineWidth: 1, pointSize: 0 } '
        + '         } '


        + '     }; '
        + '  '
        + '     var chart = new google.visualization.ScatterChart(document.getElementById(\'chart_div\')); '
        + '  '
        + '     chart.draw(data, options); '
        + ' } '
        + ' </script> '
        + ' </head> '
        + ' <body> '
        + ' <div id="chart_div" style="width: 900px; height: 500px;"></div> '
        + ' </body> '
        + ' </html> ';

    //console.log('html; ', html);

    //var html = getIt();

    return html;
}

function getIt() {
    var html = '<!doctype html>      '
       + '  <html>      '
        + '   <head>      '
        + '  <title>Google Chart: Scatter Chart with a line</title>      '
        + '  <meta charset="UTF-8" />      '
        + '  <script type="text/javascript" src="https://www.google.com/jsapi"></script>      '
        + '  <script type="text/javascript">      '
        + '  google.load("visualization", "1", { packages: ["corechart"] });      '
        + '  google.setOnLoadCallback(drawChart);      '
        + '  function drawChart() {      '
            + '  var data = google.visualization.arrayToDataTable([      '
        + '  [\'X\', \'Points\', \'Line\'],      '
        + '  [3, 3.5, 1],      '
    + '      [4, 5.5, 2],      '
    + '        [4, 5, null],      '
    + '      [6.5, 7, 3],      '
    + '       [8, 12, 4],      '
    + '       [11, 14, 5]      '
    + '   ]);      '
    + '    var options = {      '
    + '         title: \'Scatter Chart with a line\',      '
    + '          hAxis: { title: \'X\', minValue: 0, maxValue: 15 },  '
    + '         vAxis: { title: \'Y\', minValue: 0, maxValue: 15 },      '
    + '          legend: \'none\',      '
    + '          interpolateNulls: true,      '
    + '          series: {      '
    + '              1: { lineWidth: 1, pointSize: 0 }      '
    + '          }      '
    + '      };      '
    + '      var chart = new google.visualization.ScatterChart(document.getElementById(\'chart_div\'));      '
    + '      chart.draw(data, options);      '
    + '  }      '
    + '  </script>      '
    + '  </head>      '
    + '  <body>      '
    + '  <div id="chart_div" style="width: 900px; height: 500px;"></div>      '
    + '      </body>      '
    + '      </html>       ';

    return html;
}

function setUpTable(xyValues) {
    var tableData = '';
    var tableDataPrefix = '[';
    var tableDataSuffix = ']';

    tableData += tableDataPrefix;

    var ctr = 0;
    xyValues.forEach((xy) => {
        if (ctr === 0) {
            tableData += '[\'' + xy.x + '\', \'' + xy.y + '\' , \'' + xy.line + '\'],';

        } else {
            tableData += '[' + xy.x + ', ' + xy.y + ', ' + xy.line + '],';
        }

        ctr++;
    });

    tableData += tableDataSuffix;

    console.log('tableData: ', tableData);

    return tableData;
}

module.exports.getChart = getChart;