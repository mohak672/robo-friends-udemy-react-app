import React from 'react';

const Scroll=(props) => {

	return(
			<div style={ {overflowY: 'scroll', border: '3px solid black', height: '800px'} }>
				{props.children}
			</div>
		);
}

export default Scroll;
//in const function mehtod this.props is not required only props is enough