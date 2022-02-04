import React from 'react';
import './page-title.css';
import PropTypes from 'prop-types';

const PageTitle = (props) => {


	return (
		<div className="title">
			<h1>{props.title}</h1>
		</div>
	)

}
PageTitle.propTypes = {
	title: PropTypes.string.isRequired
}

export default PageTitle;
