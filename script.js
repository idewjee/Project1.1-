// Constants - Data that doesn't change 
const BASE_URL = ' https://api.twelvedata.com/time_series?'

const API_URL = '0091044c6c0c411283120de387ceacc1'

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

   const $buyOrSell = $('#buyOrSell');
   const $stockChange = $('#stockChange');
   const $percent= $('#perentageChange');

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

    // Changing value to currency 
    let curreny = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[0].low);

    
    let curreny1 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[1].low);


    let curreny2 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[2].low);

    let curreny3 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[3].low);

    let curreny4 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[4].low);

    let curreny5 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[5].low);

    let curreny6 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[6].low);

    let curreny7 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[7].low);

    let curreny8 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[8].low);

    let curreny9 = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (data.values[9].low);









   

    // Getting the data to show on the screen in the graph 
    $amount1.text (curreny);
    $amount2.text (curreny1);
    $amount3.text (curreny2);
    $amount4.text (curreny3);
    $amount5.text (curreny4);
    $amount6.text (curreny5);
    $amount7.text (curreny6);
    $amount8.text (curreny7);
    $amount9.text (curreny8);
    $amount10.text (curreny9);
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

    // difference in price from starting value to ending value based on interval and stock choosen
    const diff = (data.values[0].low) - (data.values[9].low);

    let final = new Intl.NumberFormat ("en-US", {

        style: 'currency',
        currency: 'USD'
    }).format (diff);

    $stockChange.text (final);
    // change color based on price change (green for postive and red for negative )
    const div = document.getElementById("stockChange");

    if (diff > 0){
        div.style.color = "green"
    } else {
        div.style.color = "red"
    }

 // difference in percentage from starting value to ending value based on interval and stock choosen
    const divdiff = ((data.values[0].low) - (data.values[9].low))/ (data.values[9].low)

    $percent.text ((divdiff* 100).toFixed(2) +"%");

// change color based on percentage change (green for postive and red for negative )

    const div1 = document.getElementById("perentageChange");



    if (divdiff > 0){
        div1.style.color = "green"
    } else {
        div1.style.color = "red"
    }

// Reiterates what the user is looking at based off stock and time period 
    
    if (stockInterval === '1min'){
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 10 minutes was:  ")
    } else if (stockInterval === "5min") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 10 minutes was:  ");
    } else if (stockInterval === "15min") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 2 and a half hours was:  ");
    } else if (stockInterval === "30min") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 5 hours was:  ");
    } else if (stockInterval === "1h") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 10 hours was:  ");
    } else if (stockInterval === "2h") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 20 hours was:  ");
    } else if (stockInterval === "1day") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 10 days was:  ");
    } else if (stockInterval === "1week") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 10 weeks was:  ");
    } else if (stockInterval === "1month") {
        $buyOrSell.text ("The return for " +stockSymbol+  " in the last 10 months was:  ");
    } 




    // if ajax function doesn't work 

}, function(error){
    console.log ('promise failed')
    console.log (error)
})
    

}

