import React  from 'react'
import Lawyer from './Lawyer'


const LawyersList = ({ lawyersList }) => {


	return (
		<tbody>
			{lawyersList.map(lawyer => <Lawyer lawyerData={lawyer} key={lawyer.License_number} />)}
		</tbody>
	)
}


export default LawyersList