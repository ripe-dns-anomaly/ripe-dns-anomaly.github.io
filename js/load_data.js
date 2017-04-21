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
            name: 'RTT',
            zIndex: 6
        },
        {
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.7,
            zIndex: 5
        },
        {
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 4
        },
        {
            type: 'scatter',
            name: 'Anomalies',
            marker: {
                radius: 7,
                fillColor: '#fc0905'
            },
            zIndex: 7
        }
        ]
    };

    var options_reachability_site = {
        chart: {
            renderTo: 'reachability-site'
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

    var options_rtt_site = {
        chart: {
            renderTo: 'rtt-site'
           
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
            name: 'RTT',
            zIndex: 6
        },
        {
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[1],
            fillOpacity: 0.7,
            zIndex: 5
        },
        {
            type: 'arearange',
            lineWidth: 0,
            linkedTo: ':previous',
            color: Highcharts.getOptions().colors[0],
            fillOpacity: 0.3,
            zIndex: 4
        },
        {
            type: 'scatter',
            name: 'Anomalies',
            marker: {
                radius: 7,
                fillColor: '#fc0905'
            },
            zIndex: 7
        }
        ]
    };

// Overall Reachability

    $.getJSON('./data/reachability.json', function(data) {
        options_reachability.series[0].data = data
    });

    $.getJSON('./data/reachability_anom.json', function(data) {
        options_reachability.series[1].data = data
        var chart = new Highcharts.Chart(options_reachability);
    });

// Overall Performance
    
    $.getJSON('./data/rtt.json', function(data) {
        options_rtt.series[0].data = data;

    });

    $.getJSON('./data/rtt_ranges.json', function(data) {
        options_rtt.series[1].data = data;

    });

    $.getJSON('./data/rtt_ranges_90.json', function(data) {
        options_rtt.series[2].data = data;

    });

    $.getJSON('./data/rtt_anom.json', function(data) {
        options_rtt.series[3].data = data;
        var chart = new Highcharts.Chart(options_rtt);
    });

// Site Reachability

    $.getJSON('./data/lhr_reachability.json', function(data) {
        options_reachability_site.series[0].data = data
    });

    $.getJSON('./data/lhr_reachability_anom.json', function(data) {
        options_reachability_site.series[1].data = data
        var chart = new Highcharts.Chart(options_reachability_site);
    });

// Site Performance

    $.getJSON('./data/lhr_rtt.json', function(data) {
        options_rtt_site.series[0].data = data;
        
    });

    $.getJSON('./data/lhr_rtt_ranges.json', function(data) {
        options_rtt_site.series[1].data = data;
        
    });

    $.getJSON('./data/lhr_rtt_ranges_90.json', function(data) {
        options_rtt_site.series[2].data = data;

    });

    $.getJSON('./data/lhr_rtt_anom.json', function(data) {
        options_rtt_site.series[3].data = data;
        var chart = new Highcharts.Chart(options_rtt_site);

    });

});
