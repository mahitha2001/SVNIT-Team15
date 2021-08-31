var chart = LightweightCharts.createChart(document.body, {
	width: 1200,
  height: 300,
	layout: {
		backgroundColor: '#ffffff',
		textColor: 'rgba(33, 56, 77, 1)',
	},
	crosshair: {
		mode: LightweightCharts.CrosshairMode.Normal,
	},
	rightPriceScale: {
		borderColor: 'rgba(197, 203, 206, 1)',
	},
	timeScale: {
		borderColor: 'rgba(197, 203, 206, 1)',
	},
});

var barSeries = chart.addBarSeries({
  thinBars: true,
  downColor: '#000',
  upColor: '#000',
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
  barSeries.setData(cdata);
}).catch(err => {
  console.log(err);
})
