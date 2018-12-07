

import 'whatwg-fetch'
import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import {Line} from 'react-chartjs-2';

function obj_to_data(ar){
	return ar.map( x => x["sentiment_score"])
}
fetch('http://worldclockapi.com/api/json/est/now')
  .then(function(response) {
    return response.text()
  }).then(function(body) {
    document.body.innerHTML = body
  })

const data = {
	labels: [
		...Array(30).keys()
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
			data: [1, 2, 3],
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
