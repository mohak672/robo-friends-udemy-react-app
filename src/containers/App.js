import React,{ Component } from 'react';
import './App.css';
import SearchBox from '../components/SearchBox';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll';
import ErrorBoundary from '../components/ErrorBoundary';

class App extends Component{

	constructor(){
		super()
		this.state={
			robots: [],
			searchField: ''
		}
	}

	//first constructor will run then render then componentdidmount will run
	//and in componentdidmount we update the state the render will also run again

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>{
			return response.json();	//here return statement is neccessary  bcoz its return the response to the users in next .then
		})
		.then(users => {
			this.setState({robots: users})
		});
	}

	onInputChange = (event) => {
		this.setState({
			searchField: event.target.value
		})
		
	}

	render(){

		const {robots,searchField} = this.state;

		const filteredRobots= robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase());
		})

			if(robots.length===0){ //we can also use !robots.length bcoz 0 is false and other than 0 is true
				return(
						<h1>Loading</h1>
					);
			}else{

				return(

			<div className='tc'>
				<h1 className='f1'> RoboFriends </h1>
				<SearchBox searchChange={this.onInputChange} />
				<Scroll>
					<ErrorBoundary>
						<Cardlist robots={filteredRobots} />
					</ErrorBoundary>
				</Scroll>
			</div>

		);
			}

	}
	
}

export default App;