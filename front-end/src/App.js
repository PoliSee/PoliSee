import React, { Component } from "react";
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'whatwg-fetch'
import {Line} from 'react-chartjs-2';

function obj_to_data(ar){
	return ar.map( x => x["sentiment_score"])
}

function wrappingtodata(array){
	return {
		labels: [
			...Array(30).keys()
		],
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
				data: array,
		}]
	};


}




class App extends Component {

  constructor (props){
    super(props);



    this.state = {data:[]};

    this.componentDidMount = this.componentDidMount.bind(this);

  }
  // addParameter = () => {
  //   this.setState({
  //     data: null
  //   })
  // };
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

  handleDelete = event => {
    var newHomework = [...this.state.homework];
    var index = newHomework.indexOf(event.target.value);
    newHomework.splice(index, 1);
    this.setState({homework: newHomework});
  };

  handleChange = event => {
    var newHomework = [...this.state.homework];
    var tempHomework = [...this.state.storage];
    var index = newHomework.indexOf(event.target.value);
    var temp = tempHomework[index][0]
    tempHomework[index][0] = tempHomework[index][1];
    tempHomework[index][1] = temp;
    newHomework[index] = tempHomework[index][0];
    this.setState({homework: newHomework});
    this.setState({storage: tempHomework});
  }

  render() {
    return (
      <div className="container">
        <h1 className="jumbotron">
        </h1>
          {this.state.data.map(candidateInfo => (
            <div class="card">
              <div class="card-body">
                <b>{candidateInfo.name} - ( {candidateInfo.party})<br></br> </b>
								{candidateInfo.candidateState}
                <button value={candidateInfo.candidateState} className="btn btn-default" onClick={this.handleChange}>Change</button>
                <div className="col-md-12"><Line data={wrappingtodata(obj_to_data(candidateInfo.sentimentScores))}
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
