import React, { Component } from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'whatwg-fetch'
import {Line} from 'react-chartjs-2';

function sdata_to_scores(ar){
	return ar.map( x => x["sentiment_score"])
}
function sdata_to_labs(ar){
	console.log(ar.map( x => x["date"]))
	return ar.map( x => x["date"])
}

function party(s) {
	var s  = s.trim()
	if (s == 'R') {
		return <span class="text-danger">R</span>
	} else if (s == 'D') {
		return <span class="text-primary">D</span>
	} else {
		console.log(s)
	}
}

function wrappingtodata(sData){
	return {
		labels: sdata_to_labs(sData),
		datasets: [
			{
				label: 'Can write anything here',
				backgroundColor: '#ff6666',
				borderColor: '#09518c',
				borderWidth: '2',
				pointBackgroundColor: '#008cff',
				pointBorderColor: '#09518c',
				pointBorderWidth: '3',
				pointRadius: '5',
				pointStyle: 'rectRot',
				pointRotation: '20',
				pointHitRadius: '0',
				pointHoverBackgroundColor: '#6bb9f9',
				pointHoverBorderColor: '#914ad3',
				pointHoverRadius: '9',
				data: sdata_to_scores(sData),
		}]
	};
}


class App extends Component {

  constructor (props){
    super(props);
    this.state = {data:[]};
    this.componentDidMount = this.componentDidMount.bind(this);

  }

  componentDidMount(){
    let that = this
    fetch('http://127.0.0.1:5000', {mode: 'cors'})
      .then(function(response) {
        console.log(response)
        return response.json()
     }).then(function(body) {
       console.log(body)
       that.setState({data: Object.values(body)})
     })
  }



  render() {
    return (
      <div className="container">
        <h1 className="jumbotron">
				PoliSee - Sentiment Analysis on Gubernatorial Candidates
        </h1>
          {this.state.data.map(candidateInfo => (
            <div class="card">
							<div class="card-header">
							<b>{candidateInfo.name} - ({party(candidateInfo.party)})<br></br> </b>
							{candidateInfo.candidateState}
							</div>
              <div class="card-body">
                <div className="col-md-12"><Line data={wrappingtodata(candidateInfo.sentimentScores)}
              height = {400}
              	options={
              		{
                      maintainAspectRatio: false
                  }
              	}
              /></div>
              </div>
            </div>
      ))}
      </div>
    );
  }
}

export default App;
