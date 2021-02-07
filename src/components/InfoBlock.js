import React from 'react'
import PropTypes from 'prop-types'


const InfoBlock = ({ blockStyle, text }) => {

	const classes = `info-block card card-body ${blockStyle}` 

	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<div className={classes}>{text}</div>
			</div>	
		</div>
	)
}


InfoBlock.propTypes = {
	blockStyle: PropTypes.string,
	text: PropTypes.string
}


export default InfoBlock