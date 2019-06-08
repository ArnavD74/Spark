var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "line",
  // The data for our dataset
  data: {
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ],
  
    datasets: [
      {
        label: "Calories/Day over Time",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 1, 2, 3, 4, 5, 6]
      }
    ]
  },

  // Configuration options go here
  options: {}
});

if (parseInt(localStorage.getItem("day")) == 1) {
  chart.data.datasets[0].data[0] = parseInt(localStorage.getItem("calories1"));
  alert("Hello World");
}

if (parseInt(localStorage.getItem("day")) == 2) {
  chart.data.datasets[0].data[1] = parseInt(localStorage.getItem("calories2"));
  alert("Hello World");
}
  if (localStorage.getItem("day") == 3) {
    chart.data.datasets[0].data[2] = parseInt(localStorage.getItem("calories3"));
  }
  if (localStorage.getItem("day") == 4) {
    chart.data.datasets[0].data[3] = parseInt(localStorage.getItem("calories4"));
  }
  if (localStorage.getItem("day") == 5) {
    chart.data.datasets[0].data[4] = parseInt(localStorage.getItem("calories5"));
  }
  if (localStorage.getItem("day") == 6) {
    chart.data.datasets[0].data[5] = parseInt(localStorage.getItem("calories6"));
  }
if (localStorage.getItem("day") == 7) {
  chart.data.datasets[0].data[6] = parseInt(localStorage.getItem("calories7"));
}
