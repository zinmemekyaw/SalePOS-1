 
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.2.2/Chart.min.js"></script>
 <div>
    <canvas id="myChart"></canvas>
  </div>
var cdata = [{
    "_id": "585b544f5c86b6c8537c34d6",
    "topic": "Humidity",
    "message": 23,
    "when": "2016-12-22T04:19:27.000Z"
}, {
    "_id": "585b54505c86b6c8537c34d7",
    "topic": "Humidity",
    "message": 23,
    "when": "2016-12-22T04:19:28.000Z"
}, {
    "_id": "585b54515c86b6c8537c34d8",
    "topic": "Humidity",
    "message": 23,
    "when": "2016-12-22T04:19:29.000Z"
}, {
    "_id": "585b54525c86b6c8537c34d9",
    "topic": "Humidity",
    "message": 23,
    "when": "2016-12-22T04:19:30.000Z"
}, {
    "_id": "585b54535c86b6c8537c34da",
    "topic": "Humidity",
    "message": 23,
    "when": "2016-12-22T04:19:31.000Z"
}]

var labeldata = [];

var chrtdata = [];

for(var i =0; i < cdata.length; i++)
{
  labeldata.push(cdata[i].when);
  chrtdata.push(cdata[i].message)
}




var ctx = document.getElementById("myChart").getContext("2d");
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labeldata,
    datasets: [{
      label: 'Humidity',
      data: chrtdata,
      backgroundColor: "rgba(153,255,51,0.6)"
    }]
  }
});