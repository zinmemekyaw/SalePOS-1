$(document).ready(function() {
var SearchString = window.location.search.substring(1);
    $.ajax({
        url: "http://localhost:8000/SaleDetails/"
    }).then(function(data) {
        console.log(data.results);
        var chrtdata = [];
var labeldata = [];

for(var i =0; i < data.results.length; i++)
{
  labeldata.push(data.results[i].transaction_date);
  chrtdata.push(data.results[i].sub_total)
}




var ctx = document.getElementById("sale_detail").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labeldata,
    datasets: [{
      label: 'Sale Count',
      data: chrtdata,
      backgroundColor: "#FF7043"
    }]
  }
});
            });

});