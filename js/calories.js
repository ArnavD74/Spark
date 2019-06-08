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
        data: [0, 2, 5, 2, 20, 30, 45]
      }
    ]
  },

  // Configuration options go here
  options: {}
});

if (localStorage.getItem("day") == 1) {
  chart.data.datasets[0].data[0] = localStorage.getItem("calories");
}
if (localStorage.getItem("day") == 2) {
  chart.data.datasets[0].data[1] = localStorage.getItem("calories");
}
if (localStorage.getItem("day") == 3) {
  chart.data.datasets[0].data[2] = localStorage.getItem("calories");
}
if (localStorage.getItem("day") == 4) {
  chart.data.datasets[0].data[3] = localStorage.getItem("calories");
}
if (localStorage.getItem("day") == 5) {
  chart.data.datasets[0].data[4] = localStorage.getItem("calories");
}
if (localStorage.getItem("day") == 6) {
  chart.data.datasets[0].data[5] = localStorage.getItem("calories");
}
if (localStorage.getItem("day") == 7) {
  chart.data.datasets[0].data[6] = localStorage.getItem("calories");
}
