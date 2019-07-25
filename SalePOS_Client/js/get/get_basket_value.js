$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8000/SaleDetails/"
    }).then(function(data) {
        //console.log(data.results);
var chrtdata = [];
var labeldata = [];
var total_quantity=0;
var basket_size=0;
for(var i =0; i < data.results.length; i++)
{
  total_quantity+=data.results[i].quantity;
  basket_size=total_quantity/data.results.length;

  labeldata.push(data.results[i].transaction_date);
  chrtdata.push(total_quantity)
}




var ctx = document.getElementById("basket_value").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labeldata,
    datasets: [{
      label: 'Basket Value',
      data: chrtdata,
      backgroundColor: '#82B1FF',
    }]
  }
});
});


//TTZ testing for Busket List
$.ajax({
        url: "http://localhost:8000/Sales/"
    }).then(function(data) {
      //start filtering
      var startDate = new Date("2019-07-15");
      var endDate = new Date("2019-07-18");

      var resultProductData = data.results.filter(new Date(data.results.transaction_date)
        // function (a) {
        //     var hitDates = new Date(a.transaction_date) || {};
        //     // extract all date strings
        //     hitDates = Object.keys(hitDates);
        //     hitDateMatchExists = hitDates.some(function(dateStr) {
        //         var date = new Date(dateStr);
        //         return date >= startDate && date <= endDate
        //     });
        //     return hitDateMatchExists;
        // }

        );
        console.log(resultProductData);
      //end filtering
    });
  });
