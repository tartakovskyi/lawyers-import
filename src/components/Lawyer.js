import React  from 'react'


const Lawyer = ({ lawyerData }) => {

	const {Full_Name, Phone, Email, Age, Experience, Yearly_Income, Has_children, License_states, Expiration_date, License_number} = lawyerData

	return (
		<tr>
			<td key='FullName'>{Full_Name}</td>
			<td key='Phone'>{Phone}</td>
			<td key='Email'>{Email}</td>
			<td key='Age'>{Age}</td>
			<td key='Experience'>{Experience}</td>
			<td key='YearlyIncome'>{Yearly_Income}</td>
			<td key='HasСhildren'>{Has_children}</td>
			<td key='LicenseStates'>{License_states}</td>
			<td key='ExpirationDate'>{Expiration_date}</td>
			<td key='LicenseNumber'>{License_number}</td>
		</tr>
	)
}


export default Lawyer
