var chart = LightweightCharts.createChart(document.body, {
	width: 600,
  height: 300,
	layout: {
		backgroundColor: '#fff',
		textColor: 'rgba(0, 0, 0, 0.9)',
	},
	grid: {
		vertLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
		horzLines: {
			color: 'rgba(197, 203, 206, 0.5)',
		},
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 0.8)',
	},
});

var candleSeries = chart.addCandlestickSeries({
  upColor: '#ffffff',
  downColor: '#000000',
  borderDownColor: '#000000',
  borderUpColor: '#000000',
  wickDownColor: '#000000',
  wickUpColor: '#000000',
});
fetch('Stock List.json').then(response => response.json())
.then(result => {
  
  var test=result.filter(d => {
    console.log(d.key);
    if(d.key=='AAPL'){
      console.log("true");
      return true;
    }
    else{
      console.log("false");
      return false;
    }
  })
  console.log(test);
  const cdata=test.map(d => {
    console.log(d.date);
    return {time:d.date, open: d.open, high: d.high, low: d.low, close: d.close};
  })
  candleSeries.setData(cdata);
}).catch(err => {
  console.log(err);
})
