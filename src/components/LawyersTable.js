import React  from 'react'
import PropTypes from 'prop-types'
import LawyersList from './LawyersList'


const LawyersTable = ({ lawyers }) => {

	
	return (
		<div className="lawyers-table-wrap">
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
				{lawyers.length > 0 && <LawyersList lawyersList={lawyers} />}
			</table>
		</div>
	)
}


LawyersTable.propTypes = {
	lawyers: PropTypes.array
}


export default LawyersTable