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

    var options_path = {
        chart: {
            renderTo: 'path_stability',
            type: 'line'
        },
        title: {
            text: 'Number of path changes'
        },
        xAxis: [{
            type:'datetime'
        }],
        yAxis: [{
                min: 0,
                title: {
                    text: 'Switches'
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

    $.getJSON('./data/path.json', function(data) {
        options_reachability.series[0].data = data;
        options_reachability.series[0].name = 'Path stability'
        var chart = new Highcharts.Chart(options_path);
    });

});
