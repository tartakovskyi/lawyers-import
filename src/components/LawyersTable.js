import React  from 'react'
import PropTypes from 'prop-types'
import Lawyer from './Lawyer'


const LawyersTable = ({ lawyers, keys }) => {

	
	return (
		<div className="lawyers-table-wrap">
		{lawyers.length > 0 && (
			<table className="lawyers-table table table-striped">
				<thead>
					<tr>
					{keys.map(columnKey => <th scope="col">{columnKey}</th>)}
					</tr>
				</thead>
				<tbody>
				{lawyers.map(lawyer => <Lawyer lawyerData={lawyer} key={lawyer.License_number} columnKeys={keys} />)}
				</tbody>
				
			</table>
			)}
		</div>
	)
}


LawyersTable.propTypes = {
	keys: PropTypes.array,
	lawyers: PropTypes.array
}


export default LawyersTable