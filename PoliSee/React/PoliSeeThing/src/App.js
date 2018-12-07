import React, { Component } from "react";
import ReactDOM from 'react-dom';
import ToDoListItem from "./components/toDoListItem";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'whatwg-fetch'
import {Line} from 'react-chartjs-2';

function obj_to_data(ar){
	return ar.map( x => x["sentiment_score"])
}


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
       console.log(body.map( x => 1))
       that.setState({data: Object.values(body)})
       console.log('hi', body)
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
          {this.state.data.map(x => (
            <div class="card">
              <div class="card-body">
								<div class="card-header"
                {x.name}
								</div>
                <button value={x.candidateState} className="btn btn-default" data-target="#collapsething">Visibility</button>
								<div class="collapse" id="collapsething">
								<div class="card-body">
                <div className="col-md-12"><Line data={data}
              height = {400}
              	options={
              		{
                      maintainAspectRatio: false
                  }
              	}
              /></div>
							</div>
              </div>
            </div>
      ))}
      </div>
    );
  }
}

export default App;
