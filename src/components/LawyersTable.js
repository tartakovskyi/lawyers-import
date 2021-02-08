import React  from 'react'
import PropTypes from 'prop-types'
import Lawyer from './Lawyer'


const LawyersTable = ({ lawyers }) => {

	
	return (
		<div className="lawyers-table-wrap">
		{lawyers.length > 0 && (
			<table className="lawyers-table table table-striped">
				<thead>
					<tr>
						<th scope="col">ID</th>
						<th scope="col">Full Name</th>
						<th scope="col">Phone</th>
						<th scope="col">Email</th>
						<th scope="col">Age</th>
						<th scope="col">Experience</th>
						<th scope="col">Yearly Income</th>
						<th scope="col">Has children</th>
						<th scope="col">License states</th>
						<th scope="col">Expiration date</th>
						<th scope="col">License number</th>
						<th scope="col">Duplicate</th>
					</tr>
				</thead>
				<tbody>
					{lawyers.map(lawyer => <Lawyer lawyerData={lawyer} key={lawyer.License_number} />)}
				</tbody>
				
			</table>
			)}
		</div>
	)
}


LawyersTable.propTypes = {
	lawyers: PropTypes.array
}


export default LawyersTable