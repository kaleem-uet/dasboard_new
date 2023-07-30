
const ctx = document.getElementById("myChart");
const options = {
  scales: {
    y: {
      beginAtZero: true,
      title: {
        display: true,
        text: "Price",
      },
      ticks: {
        // Include a dollar sign before the price value
        callback: function (value, index, values) {
          return "$" + value;
        },
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
  },
  plugins: {
    annotation: {
      annotations: {
        background: {
          type: "box",
          xMin: "Jan",
          xMax: "Dec",
          backgroundColor: "rgba(124, 121, 255, 0.33)",
          borderColor: "rgba(0, 255, 72, 0.33)",
          borderWidth: 1,
        },
      },
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
];

new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Line Chart",
        data: [
          100, 200, 150, 300, 250, 400, 350, 500, 450, 600, 550, 700,
        ],
        fill: true,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(0, 255, 72, 0.13)",
        borderWidth: 2,
        pointHoverBackgroundColor: 'rgba(0, 255, 72, 0.13)',
        tension: 0.4, // This makes the line smoother
      },
    ],
  },
  options: {
    scales: {
      y: {
        grid: {
          color: '#263548' // Set the color for the horizontal grid lines
      },
        beginAtZero: true,
        title: {
          display: true,
        },
        ticks: {
          // Include a dollar sign before the price value
          callback: function (value, index, values) {
            return "$" + value;
          },
        },
      },
    },
    responsive: true,
    tension: 0.3,
    plugins: {
      annotation: {
        annotations: {
          background: {
            type: "box",
            xMin: "Jan",
            xMax: "Dec",
            backgroundColor: "rgba(124, 121, 255, 0.33)",
            borderColor: "rgba(0, 255, 72, 0.33)",
            borderWidth: 2,

          },
        },
      },
    },
  },
});