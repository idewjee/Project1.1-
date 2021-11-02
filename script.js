// Constants - Data that doesn't change 
//const BASE_URL = ' https://api.twelvedata.com/time_series?'

//const API_URL = '0091044c6c0c411283120de387ceacc1'

// Variables - Data that changes 

   const $symbol = $('#symbol');
   const $currency = $('#currency');
   const $interval = $('#interval');
   const $meta = $('#meta');
   const $amount1 = $('#amount1');
   const $amount2 = $('#amount2');
   const $amount3 = $('#amount3');
   const $amount4 = $('#amount4');
   const $amount5 = $('#amount5');
   const $amount6 = $('#amount6');
   const $amount7 = $('#amount7');
   const $amount8 = $('#amount8');
   const $amount9 = $('#amount9');
   const $amount10 = $('#amount10');
   const $timeframe1 = $('#timeframe1');
   const $timeframe2 = $('#timeframe2');
   const $timeframe3 = $('#timeframe3');
   const $timeframe4 = $('#timeframe4');
   const $timeframe5 = $('#timeframe5');
   const $timeframe6 = $('#timeframe6');
   const $timeframe7 = $('#timeframe7');
   const $timeframe8 = $('#timeframe8');
   const $timeframe9 = $('#timeframe9');
   const $timeframe10 = $('#timeframe10');

   let return1;
   let value1;

   const $buyOrSell = $('#buyOrSell');
   const $stockChange = $('#stockChange');

   const $fomr = $('form');
   const $input = $('input[type="text"]');
   const $input2 = $('input[type="text2"]');

  




//Cached Element References


// Event Listeners 

$fomr.on('submit', handleSubmit);

// Functions

function handleSubmit (evt) {
    evt.preventDefault();
    const stockSymbol = $input.val();
    const stockInterval = $input2.val();

    console.log (stockSymbol);
    console.log (stockInterval);


// ajax

$.ajax('https://api.twelvedata.com/time_series?apikey=0091044c6c0c411283120de387ceacc1&symbol='+stockSymbol+'&interval='+stockInterval)
.then(function (data){
    console.log ('promise fulfield')
    console.log (data)

    console.log (data.meta.currency)

    console.log (data.values[0].low)

    // Changing value to currency 
    for (let i = 0; i <= 10; i++){
        return1 = (data.values[i].low)

    value1 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (return1);

    }






   

    // Getting the data to show on the screen 
    $amount1.text (data.values[0].low);
    $amount2.text (data.values[1].low);
    $amount3.text (data.values[2].low);
    $amount4.text (data.values[3].low);
    $amount5.text (data.values[4].low);
    $amount6.text (data.values[5].low);
    $amount7.text (data.values[6].low);
    $amount8.text (data.values[7].low);
    $amount9.text (data.values[8].low);
    $amount10.text (data.values[9].low);
    $timeframe1.text (data.values[0].datetime);
    $timeframe2.text (data.values[1].datetime);
    $timeframe3.text (data.values[2].datetime);
    $timeframe4.text (data.values[3].datetime);
    $timeframe5.text (data.values[4].datetime);
    $timeframe6.text (data.values[5].datetime);
    $timeframe7.text (data.values[6].datetime);
    $timeframe8.text (data.values[7].datetime);
    $timeframe9.text (data.values[8].datetime);
    $timeframe10.text (data.values[9].datetime);

    // Should you buy or sell the stock base on the intervals and show either green or red to buy or not buy the stock
    const diff = (data.values[0].low) - (data.values[9].low);
    console.log (diff); 

    let final = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (diff);



    console.log (stockInterval);

    
    if (stockInterval === '1min'){
        $buyOrSell.text ("The return for the stock in the last 10 minutes was:  ")
    } else if (stockInterval === "5min") {
        $buyOrSell.text ("The return for the stock in the last 10 minutes was:  ");
    } else if (stockInterval === "15min") {
        $buyOrSell.text ("The return for the stock in the last 2 and a half hours was:  ");
    } else if (stockInterval === "30min") {
        $buyOrSell.text ("The return for the stock in the last 5 hours was:  ");
    } else if (stockInterval === "1hr") {
        $buyOrSell.text ("The return for the stock in the last 10 hours was:  ");
    } else if (stockInterval === "2hr") {
        $buyOrSell.text ("The return for the stock in the last 20 hours was:  ");
    } else if (stockInterval === "1day") {
        $buyOrSell.text ("The return for the stock in the last 10 days was:  ");
    } else if (stockInterval === "1week") {
        $buyOrSell.text ("The return for the stock in the last 10 weeks was:  ");
    } else if (stockInterval === "1month") {
        $buyOrSell.text ("The return for the stock in the last 10 months was:  ");
    } 

    


    $stockChange.text (final);

    const div = document.getElementById("stockChange");


    if (diff > 0){
        div.style.color = "green"
    } else {
        div.style.color = "red"
    }


    // Trying to get certain variables from my data 

    console.log ((data.$currency));

}, function(error){
    console.log ('promise failed')
    console.log (error)
})
    

}

