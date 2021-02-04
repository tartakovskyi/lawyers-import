import React  from 'react'
import Lawyer from './Lawyer'


const LawyersList = ({ lawyersList }) => {


	return (
		<tbody>
			{lawyersList.map(lawyer => <Lawyer lawyerData={lawyer} key={lawyer.LicenseNumber} />)}
		</tbody>
	)
}


export default LawyersList