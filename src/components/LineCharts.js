import React from "react";
const ReactHighcharts = require("react-highcharts");

// Refer the high charts "https://www.highcharts.com/demo/bar-basic" for more information

const LineCharts = (props) => {
  const config = {
    title: {
      text: props.title,
    },
    xAxis: {
      type: "category",
      labels: {
        rotation: -45,
        style: {
          fontSize: "13px",
          fontFamily: "Verdana, sans-serif",
        },
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "Issues",
      },
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },
    tooltip: {
      pointFormat: "Issues: <b>{point.y} </b>",
    },
    series: [
      {
        name: "Created Issues",
        data: props.createdData,
        // dataLabels: {
        //   enabled: true,
        //   rotation: -90,
        //   color: "#0085AD",
        //   align: "right",
        //   format: "{point.y}", // one decimal
        //   y: 10, // 10 pixels down from the top
        //   style: {
        //     fontSize: "13px",
        //     fontFamily: "Verdana, sans-serif",
        //   },
        // },
      },
      {
        name: "Closed Issues",
        data: props.closedData,
        // dataLabels: {
        //   enabled: true,
        //   rotation: -90,
        //   color: "#FFFFFF",
        //   align: "right",
        //   format: "{point.y}", // one decimal
        //   y: 10, // 10 pixels down from the top
        //   style: {
        //     fontSize: "13px",
        //     fontFamily: "Verdana, sans-serif",
        //   },
        // },
      },
    ],
  };
  return (
    <div>
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>
  );
};

export default LineCharts;
