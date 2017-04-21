$(document).ready(function() {


    var options_reachability = {
        chart: {
            renderTo: 'reachability'
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
        series: [{
            type: 'line',
            name: 'Reachability',
        }, {
            type: 'scatter',
            name: 'Anomalies',
            marker: {
                radius: 7,
                fillColor: '#fc0905' 
            }
        }]
    };

    var options_rtt = {
        chart: {
            renderTo: 'rtt'
           
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
        series: [{
            type: 'line',
            name: 'RTT'
        },  
        {
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 0
        },
        {
            type: 'scatter',
            name: 'Anomalies',
            marker: {
                radius: 7,
                fillColor: '#fc0905' 
            }
        }
        ]
    };

    $.getJSON('./data/reachability.json', function(data) {
        options_reachability.series[0].data = data
    });


    $.getJSON('./data/reachability_anom.json', function(data) {
        options_reachability.series[1].data = data
        var chart = new Highcharts.Chart(options_reachability);
    });
    

    $.getJSON('./data/rtt.json', function(data) {
        options_rtt.series[0].data = data;
        
    });



    $.getJSON('./data/rtt_ranges.json', function(data) {
        options_rtt.series[1].data = data;
        
    });

    $.getJSON('./data/rtt_anom.json', function(data) {
        options_rtt.series[2].data = data;
        var chart = new Highcharts.Chart(options_rtt);
    });

});
