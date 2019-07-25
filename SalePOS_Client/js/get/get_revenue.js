$(document).ready(function() {
    $.ajax({
        url: "http://localhost:8000/Register/"
    }).then(function(data) {
        console.log(data.results);
var chrtdata = [];
var labeldata = [];

for(var i =0; i < data.results.length; i++)
{
  labeldata.push(data.results[i].transaction_date);
  chrtdata.push(data.results[i].difference)
}




var ctx = document.getElementById("revenue").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labeldata,
    datasets: [{
      label: 'Revenue',
      data: chrtdata,
      backgroundColor: '#82B1FF',
    }]
  }
});
});
  });
