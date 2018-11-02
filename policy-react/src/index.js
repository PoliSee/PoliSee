import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import {Line} from 'react-chartjs-2';
const data = {
	labels: [
		'7 Days Ago',
		'6 Days Ago',
		'5 Days Ago',
		'4 Days Ago',
		'3 Days Ago',
		'2 Days Ago',
		'1 Day Ago'
	],
	datasets: [{
			label: 'Canditate 1',
			fillColor: 'rgba(220,220,220,.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: [65, 59, 80, 81, 56, 55, 40],
		},
		{
			label: 'Candidate 2',
			backgroundColor: '#1be55e',
			borderColor: '#FF0000',
			borderWidth: '3',
			pointBackgroundColor: '#FFF600',
			pointBorderColor: '#A500FF',
			pointBorderWidth: '3',
			pointRadius: '10',
			pointStyle: 'rectRot',
			pointRotation: '20',
			pointHitRadius: '0',
			pointHoverBackgroundColor: '#00FFFA',
			pointHoverBorderColor: '#FF5900',
			pointHoverRadius: '15',
			data: [28, 48, 40, 19, 86, 27, 90],
	}]
};

ReactDOM.render(
  <div className="col-md-4"><Line data={data}
height = {300}
	options={
		{
        maintainAspectRatio: false
    }
	}


	 /></div>,
  document.getElementById('root')
);
