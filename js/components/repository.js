import React from 'react';
import StarRating from './star-rater';

class Repository extends React.Component {
	constructor(props) {
		super(props);
		this.changeRating = this.changeRating.bind(this);
	}

	changeRating(rating) {
		// TODO: Change the rating
	}

	render() {
		return (
			<div className="repository">
				{this.props.repository.name}
				&nbsp;
				<StarRater rating{this.props.repository.rating} onChange={this.changeRating} />
			</div>
		)
	}
}

export default Repository;