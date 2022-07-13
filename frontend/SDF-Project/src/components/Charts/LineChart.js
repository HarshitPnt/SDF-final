import React from 'react'
import {Line} from 'react-chartjs-2'
import {Chart as Chartjs} from 'chart.js/auto'

function LineChart({title}) {

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right'
      },
      title: {
        display: true,
        //text: 'Chart.js Line Chart',
      },
    },
  }
  const data={
    labels: ["January","February","March","April","May","June","July","August"],
    datasets:[
      {
        label: title,
        data: [1,2,3,4,5,6,7,8],
        borderColor:'black',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        // borderWidth: '10px'
      },
      
    ]
   
  }
  return (
    <Line  data={data} options={options} />
  )
}

export default LineChart
