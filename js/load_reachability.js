$(document).ready(function() {

    var options = {
        chart: {
            renderTo: 'reachability',
            type: 'line'
        },
        title: {
            text: 'Probe Reachability'
        },
        yAxis: [{
                min: 0,
                title: {
                    text: 'Probes'
                }
            }],
        series: [{}]
    };

    $.getJSON('./data/reachability.json', function(data) {
        options.series[0].data = data;
        options.series[0].name = 'Reachability'
        var chart = new Highcharts.Chart(options);
    });

});
