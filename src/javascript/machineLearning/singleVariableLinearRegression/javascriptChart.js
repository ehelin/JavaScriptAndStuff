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

    return tableData;
}

module.exports.getChart = getChart;