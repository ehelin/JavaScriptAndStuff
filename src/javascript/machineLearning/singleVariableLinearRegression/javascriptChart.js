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
        + ' <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script> '
        + '    <script type="text/javascript"> '
        + '     google.charts.load(\'current\', {\'packages\':[\'corechart\']}); '
        + '     google.charts.setOnLoadCallback(drawChart); '
        + '  '
        + ' function drawChart() { '
        + '     var data = google.visualization.arrayToDataTable( '
        + tableData
        + ' ); '
        + '  '
        + '     var options = { '
        + '         title: \'' + x + '  vs. ' + y + ' comparison\', '
        + '         hAxis: {title: \'' + xyValues[0].x + '\', minValue: ' + pMinXValue + ', maxValue: ' + pMaxXValue + '}, '
        + '         vAxis: {title: \'' + xyValues[0].y + '\', minValue: ' + pMinYValue + ', maxValue: ' + pMaxYValue + '}, '
        + '         legend: \'none\' '
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
        + '     </body> '
        + '     </html> ';

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
            tableData += '[\'' + xy.x + '\', \'' + xy.y + '\'],';

        } else {
            tableData += '[' + xy.x + ', ' + xy.y + '],';
        }

        ctr++;
    });

    tableData += tableDataSuffix;

    console.log('tableData: ', tableData);

    return tableData;
}

module.exports.getChart = getChart;