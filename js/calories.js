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
        data: [
          localStorage.getItem("calories1"),
          localStorage.getItem("calories2"),
          localStorage.getItem("calories3"),
          localStorage.getItem("calories4"),
          localStorage.getItem("calories5"),
          localStorage.getItem("calories6"),
          localStorage.getItem("calories7")
        ]
      }
    ]
  },

  // Configuration options go here
  options: {}
});
