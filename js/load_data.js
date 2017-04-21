$(document).ready(function() {

    var options_reachability = {
        chart: {
            renderTo: 'reachability',
            type: 'line'
        },
        title: {
            text: 'Probe Reachability'
        },
        xAxis: [{
            type:'datetime'
        }],
        yAxis: [{
                min: 0,
                title: {
                    text: 'Probes'
                }
            }],
        series: [{}]
    };

    var options_rtt = {
        chart: {
            renderTo: 'rtt',
            type: 'line'
        },
        title: {
            text: 'Median RTT'
        },
        xAxis: [{
            type:'datetime'
        }],
        yAxis: [{
                min: 0,
                title: {
                    text: 'RTT (ms)'
                }
            }],
        series: [{}]
    };

    $.getJSON('./data/reachability.json', function(data) {
        options_reachability.series[0].data = data;
        options_reachability.series[0].name = 'Reachability'
        var chart = new Highcharts.Chart(options_reachability);
    });

    $.getJSON('./data/rtt.json', function(data) {
        options_rtt.series[0].data = data;
        options_rtt.series[0].name = 'RTT'
        var chart = new Highcharts.Chart(options_rtt);
    });

});
