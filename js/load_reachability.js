$(document).ready(function() {

$.get('data.csv', function(data) {
    // Split the lines
    var lines = data.split('\n');

    var options = {
    chart: {
        renderTo: 'reachability',
        defaultSeriesType: 'line'
    },
    title: {
        text: 'Reachability'
    },
    xAxis: {
        categories: []
    },
    yAxis: {
        title: {
            text: 'Units'
        }
    },
        series: []
    };
    
    // Iterate over the lines and add categories or series
    $.each(lines, function(lineNo, line) {
        var items = line.split(',');
        

        var name = '';
        // header line containes categories
        if (lineNo == 0) {
            $.each(items, function(itemNo, item) {
            //    if (itemNo > 0) options.xAxis.categories.push(item);
                if (itemNo == 1) {
                    name = item    
                }    
            });
        }
        
        // the rest of the lines contain data with their name in the first 
        // position
        else {
            var series = {
                data: []
            };
            series.name = name;
            $.each(items, function(itemNo, item) {
                var ts = [];
                if (itemNo == 0) {
                    ts[0] = time;
                }
                if (itemNo == 1) {
                    ts[1] = item;
                }
                series.data.push(ts)
            });
            
            options.series.push(series);
    
        }
        
    });
    
    // Create the chart
    var chart = new Highcharts.Chart(options);
});

});
