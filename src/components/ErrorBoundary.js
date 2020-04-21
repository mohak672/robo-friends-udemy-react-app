import React ,{ Component } from 'react';


class ErrorBoundary extends Component{

constructor(props){
	super(props)
	this.state={
		hasError: false
	}
}

componentDidCatch(error,info){
	this.setState(
		{ hasError: true }
		)
}

render(){

	const {hasError} = this.state;

	if(hasError){
		return (
			<h1>Ooops!!! There Is Some Error!!! </h1>
			);
	}
	else{
		return( this.props.children ); //in class method this.props is required only props is not enough
	}
}

}

export default ErrorBoundary;