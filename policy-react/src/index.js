import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import {Line} from 'react-chartjs-2';
const data = {
	xAxisID: 'Time',
	labels: [
		'6 Days Ago',
		'5 Days Ago',
		'4 Days Ago',
		'3 Days Ago',
		'2 Days Ago',
		'1 Day Ago',
		'Today'
	],
	datasets: [
		{
			label: 'ChuChu',
			backgroundColor: '#ff6666',
			borderColor: '#09518c',
			borderWidth: '3',
			pointBackgroundColor: '#008cff',
			pointBorderColor: '#09518c',
			pointBorderWidth: '3',
			pointRadius: '10',
			pointStyle: 'rectRot',
			pointRotation: '20',
			pointHitRadius: '0',
			pointHoverBackgroundColor: '#6bb9f9',
			pointHoverBorderColor: '#914ad3',
			pointHoverRadius: '15',
			data: [28, 48, 40, 19, 86, 27, 90],
	}]
};

ReactDOM.render(
  <div className="col-md-4"><Line data={data}
height = {400}
	options={
		{
        maintainAspectRatio: false
    }
	}


	 /></div>,
  document.getElementById('root')
);
