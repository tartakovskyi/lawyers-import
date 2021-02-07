import React  from 'react'
import { Validate } from '../validate'


const Lawyer = ({ lawyerData }) => {

	const {ID,Full_Name, Phone, Email, Age, Experience, Yearly_Income, Has_children, License_states, Expiration_date, License_number, Duplicate} = lawyerData

	const formatPhone = number => {

		return number.replace(/^(1|\+1)?(\d{10})$/, (match,p1,p2) => {
			return '+1' + p2
		})
	}

	return (
		<tr>
			<td key='ID'>{ID}</td>
			<td key='FullName'>{Full_Name}</td>
			<td key='Phone' className={Validate.phone(Phone) ? 'ok' : 'error'}>{formatPhone(Phone)}</td>
			<td key='Email'>{Email}</td>
			<td key='Age' className={Validate.age(Age) ? 'ok' : 'error'} >{Age}</td>
			<td key='Experience' className={Validate.experience(Experience, Age) ? 'ok' : 'error'} >{Experience}</td>
			<td key='YearlyIncome' className={Validate.yearlyIncome(Yearly_Income) ? 'ok' : 'error'} >{Number(Yearly_Income).toFixed(2)}</td>
			<td key='HasСhildren' className={Validate.hasChildren(Has_children) ? 'ok' : 'error'}>{Has_children}</td>
			<td key='LicenseStates' className={Validate.licenseStates(License_states) ? 'ok' : 'error'} >{License_states}</td>
			<td key='ExpirationDate' className={Validate.expirationDate(Expiration_date) ? 'ok' : 'error'} >{Expiration_date}</td>
			<td key='LicenseNumber' className={Validate.licenseNumber(License_number) ? 'ok' : 'error'} >{License_number}</td>
			<td key='Duplicate' className={Duplicate === '' ? 'ok' : 'error'}>{Duplicate}</td>
		</tr>
	)
}


export default Lawyer
