import React  from 'react'
import PropTypes from 'prop-types'
import { Validate } from '../validate'


const Lawyer = ({ lawyerData, columnKeys }) => {

	const formatPhone = number => {

		return number.replace(/^(1|\+1)?(\d{10})$/, (match,p1,p2) => {
			return '+1' + p2
		})
	}

	const setClassNames = columnKey => {
		switch (columnKey.toLowerCase()) {

			case 'phone':
			return Validate.phone(lawyerData[columnKey]) ? 'ok' : 'error'

			case 'age':
			return Validate.age(lawyerData[columnKey]) ? 'ok' : 'error'

			case 'experience':
			return Validate.experience(lawyerData[columnKey], lawyerData.Age) ? 'ok' : 'error'

			case 'yearly income':
			return Validate.yearlyIncome(lawyerData[columnKey]) ? 'ok' : 'error'

			case 'has children':
			return Validate.hasChildren(lawyerData[columnKey]) ? 'ok' : 'error'

			case 'license states':
			return Validate.licenseStates(lawyerData[columnKey]) ? 'ok' : 'error'

			case 'expiration date':
			return Validate.expirationDate(lawyerData[columnKey]) ? 'ok' : 'error'

			case 'license number':
			return Validate.licenseNumber(lawyerData[columnKey]) ? 'ok' : 'error'

			case 'duplicate':
			return lawyerData.Duplicate ? 'ok' : 'error'

			default:
			return ''
		}	
	}

	const displayValue = columnKey => {
		switch (columnKey.toLowerCase()) {

			case 'phone':
			return formatPhone(lawyerData[columnKey])

			case 'yearly income':
			return Number(lawyerData[columnKey]).toFixed(2)

			default:
			return lawyerData[columnKey]
		}
	}

	return (
		<tr>
			{columnKeys.map(columnKey => <td  className={setClassNames(columnKey)} >{displayValue(columnKey)}</td>)}
		</tr>
	)
}


Lawyer.propTypes = {
	lawyerData: PropTypes.object,
	columnKeys: PropTypes.array
}


export default Lawyer
