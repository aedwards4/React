import React from "react";
const ReactHighcharts = require("react-highcharts");


const StackedBar = (props) => {
  const config = {
    chart: {
      type: "bar",
    },
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
      enabled: false,
    },
    tooltip: {
      pointFormat: "Issues: <b>{point.y} </b>",
    },
    series: [
      {
        name: "Monthly Created Issues",
        data: props.createdData,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#0085AD",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
      },
      {
        name: "Monthly Closed Issues",
        data: props.closedData,
        dataLabels: {
          enabled: true,
          rotation: -90,
          color: "#00A0D0",
          align: "right",
          format: "{point.y}", // one decimal
          y: 10, // 10 pixels down from the top
          style: {
            fontSize: "13px",
            fontFamily: "Verdana, sans-serif",
          },
        },
    }
    ],
  };
  return (
    <div>
      <ReactHighcharts config={config}></ReactHighcharts>
    </div>
  );
};

export default StackedBar;
