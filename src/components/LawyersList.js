import React  from 'react'
import PropTypes from 'prop-types'
import Lawyer from './Lawyer'


const LawyersList = ({ lawyersList }) => {


	return (
		<tbody>
			{lawyersList.map(lawyer => <Lawyer lawyerData={lawyer} key={lawyer.License_number} />)}
		</tbody>
	)
}


LawyersList.propTypes = {
	lawyersList: PropTypes.array
}


export default LawyersList