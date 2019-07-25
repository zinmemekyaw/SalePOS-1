$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8000/SaleDetails/"
    }).then(function(data) {
        console.log(data.results);
var chrtdata = [];
var labeldata = [];
var total_quantity;
var basket_size;
for(var i =0; i < data.results.length; i++)
{
  total_quantity+=data.results[i].quantity;
  basket_size=total_quantity/data.results.length;
  labeldata.push(data.results[i].transaction_date);

  chrtdata.push(data.results[i].quantity)
}
var ctx = document.getElementById("basket_size").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labeldata,
    datasets: [{
      label: 'Basket Size',
      data: chrtdata,
      backgroundColor: '#82B1FF',
    }]
  }
});
});
  });
