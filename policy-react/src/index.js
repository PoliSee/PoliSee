import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import {Doughnut} from 'react-chartjs-2';
const data = {
	labels: [
		'Red',
		'Green',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
	}]
};

ReactDOM.render(
  <Doughnut data={data} />,
  document.getElementById('root')
);
