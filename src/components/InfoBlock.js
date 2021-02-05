import React from 'react'


const InfoBlock = ({ style, text }) => {

	const classes = `info-block card card-body ${style}` 

	return (
		<div className="row justify-content-center">
			<div className="col-6">
				<div className={classes}>{text}</div>
			</div>	
		</div>
	)
}


export default InfoBlock