import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'
import {Line} from 'react-chartjs-2';

let ki_json = {
    "candidateState": "Alabama",
    "name": "Kay Ivey",
    "party": "R",
    "sentimentScores": [
        {
            "datetime": "2018-10-19 16:58:11",
            "sentiment_score": 0.6249
        },
        {
            "datetime": "2018-10-19 13:02:19",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 23:40:16",
            "sentiment_score": -0.1691
        },
        {
            "datetime": "2018-10-18 12:36:04",
            "sentiment_score": 0.2144
        },
        {
            "datetime": "2018-10-17 17:18:41",
            "sentiment_score": 0.4019
        },
        {
            "datetime": "2018-10-17 12:18:51",
            "sentiment_score": 0.3612
        },
        {
            "datetime": "2018-10-17 02:20:57",
            "sentiment_score": 0.743
        },
        {
            "datetime": "2018-10-16 21:38:23",
            "sentiment_score": -0.7227
        },
        {
            "datetime": "2018-10-16 14:00:52",
            "sentiment_score": 0.5994
        },
        {
            "datetime": "2018-10-15 21:49:42",
            "sentiment_score": 0.5719
        },
        {
            "datetime": "2018-10-15 16:05:09",
            "sentiment_score": 0.6369
        },
        {
            "datetime": "2018-10-15 02:51:52",
            "sentiment_score": 0.7178
        },
        {
            "datetime": "2018-10-15 01:05:17",
            "sentiment_score": 0.842
        },
        {
            "datetime": "2018-10-14 23:16:50",
            "sentiment_score": 0.842
        },
        {
            "datetime": "2018-10-14 00:46:48",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-12 17:08:07",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-11 20:24:45",
            "sentiment_score": -0.3818
        },
        {
            "datetime": "2018-10-11 12:53:45",
            "sentiment_score": -0.4215
        },
        {
            "datetime": "2018-10-11 02:38:13",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-11 01:15:52",
            "sentiment_score": 0.7579
        },
        {
            "datetime": "2018-10-10 23:30:29",
            "sentiment_score": -0.7184
        },
        {
            "datetime": "2018-10-10 20:51:18",
            "sentiment_score": -0.7184
        },
        {
            "datetime": "2018-10-10 20:01:53",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-10 18:43:18",
            "sentiment_score": -0.7184
        },
        {
            "datetime": "2018-10-10 18:10:49",
            "sentiment_score": 0.4588
        },
        {
            "datetime": "2018-10-10 17:27:33",
            "sentiment_score": 0.1779
        },
        {
            "datetime": "2018-10-10 15:28:05",
            "sentiment_score": -0.5106
        },
        {
            "datetime": "2018-10-10 13:28:00",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-10 03:25:33",
            "sentiment_score": 0.0772
        },
        {
            "datetime": "2018-10-09 20:17:09",
            "sentiment_score": 0.0
        }
    ],
    "twitter_handle": "kayiveyforgov",
    "twitter_link": "https://www.twitter.com/kayiveyforgov"
}

let walt_json = {
    "candidateState": "Alabama",
    "name": "Walt Maddox",
    "party": "D",
    "sentimentScores": [
        {
            "datetime": "2018-10-19 19:02:36",
            "sentiment_score": 0.5859
        },
        {
            "datetime": "2018-10-19 18:10:29",
            "sentiment_score": 0.3818
        },
        {
            "datetime": "2018-10-19 17:09:51",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-19 16:31:37",
            "sentiment_score": -0.7506
        },
        {
            "datetime": "2018-10-19 15:47:23",
            "sentiment_score": 0.5423
        },
        {
            "datetime": "2018-10-19 14:53:16",
            "sentiment_score": 0.7964
        },
        {
            "datetime": "2018-10-19 14:13:13",
            "sentiment_score": 0.7506
        },
        {
            "datetime": "2018-10-19 13:41:49",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-19 13:12:48",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-19 12:36:15",
            "sentiment_score": 0.7506
        },
        {
            "datetime": "2018-10-19 11:19:43",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-19 05:58:58",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-19 02:57:36",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-19 01:58:55",
            "sentiment_score": 0.8885
        },
        {
            "datetime": "2018-10-19 01:27:50",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-19 00:19:18",
            "sentiment_score": 0.5423
        },
        {
            "datetime": "2018-10-18 23:31:38",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 22:53:12",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 22:31:22",
            "sentiment_score": -0.5267
        },
        {
            "datetime": "2018-10-18 21:46:07",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 21:05:30",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 20:35:32",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 19:48:54",
            "sentiment_score": -0.5719
        },
        {
            "datetime": "2018-10-18 19:11:27",
            "sentiment_score": 0.3818
        },
        {
            "datetime": "2018-10-18 18:46:27",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 18:06:42",
            "sentiment_score": 0.5267
        },
        {
            "datetime": "2018-10-18 16:48:43",
            "sentiment_score": 0.0
        },
        {
            "datetime": "2018-10-18 15:24:45",
            "sentiment_score": -0.3818
        },
        {
            "datetime": "2018-10-18 12:39:02",
            "sentiment_score": -0.4019
        },
        {
            "datetime": "2018-10-18 08:06:15",
            "sentiment_score": 0.5267
        },
        {
            "datetime": "2018-10-18 03:10:19",
            "sentiment_score": 0.5267
        },
        {
            "datetime": "2018-10-18 02:01:41",
            "sentiment_score": 0.5267
        },
        {
            "datetime": "2018-10-18 00:30:50",
            "sentiment_score": 0.7645
        }
    ],
    "twitter_handle": "waltmaddox",
    "twitter_link": "https://www.twitter.com/waltmaddox"
}

function obj_to_data(ar){
	return ar.map( x => x["sentiment_score"])
}

const data = {
	labels: [
		...Array(30).keys()
	],
	datasets: [{
			label: ki_json["name"],
			fillColor: 'rgba(220,220,220,.2)',
			strokeColor: 'rgba(220,220,220,1)',
			pointColor: 'rgba(220,220,220,1)',
			pointStrokeColor: '#fff',
			pointHighlightFill: '#fff',
			pointHighlightStroke: 'rgba(220,220,220,1)',
			data: obj_to_data(ki_json["sentimentScores"]),
		},
		{
			label: walt_json["name"],
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
			data: obj_to_data(walt_json["sentimentScores"]),
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
