$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'reachability',
            type: 'line'
        },
        series: [{}]
    };

    $.getJSON('./data/reachability.json', function(data) {
        options.series[0].data = data;
        options.series[0].name = 'Reachability'
        var chart = new Highcharts.Chart(options);
    });

});
