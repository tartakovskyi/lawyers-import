import React, { useState }  from 'react'
import LawyersTable from './LawyersTable'
import InfoBlock from './InfoBlock'
import { statesData } from '../states'


const App = () => {

	const [lawyers, setLawyers] = useState([])
	const [error, setError] = useState('')

	const onImportChange = ({ target }) => {

		const file = target.files[0]
		
		if (file.name.split('.').pop() === 'csv') {
			setError(null)
			let reader = new FileReader()
			reader.readAsText(file)
			reader.onload = () => {
				parseLawyers(reader.result);
			}
		} else {
			setError('File format is not correct')
		}
	}

	const parseLawyers = data => {

		const lawyerStrings = data.split(/\r?\n|\r/)
		let lawyersArr = []
		const keys = lawyerStrings.shift().split(',')

		if (!checkRequiredFields(keys)) {
			setError('File format is not correct')
			return false
		}

		for (var i = 0; i < lawyerStrings.length; i++) {
			const lawyerStringsItem = lawyerStrings[i].split(',')
			lawyersArr[i] = {ID: i+1}
			for (var j = 0; j < lawyerStringsItem.length; j++) {
				const key = keys[j].replace(/([a-z])\s([a-zA-Z])/, `$1_$2`)
				lawyersArr[i][key] = (key === 'License_states') ? convertStateNames(lawyerStringsItem[j].trim()) : lawyerStringsItem[j].trim()
			}
		}

		lawyersArr.map(lawyer => {			
			const duplicateData = lawyersArr.find(l => (l.Email.toLowerCase() === lawyer.Email.toLowerCase() || l.Phone === lawyer.Phone ) && l.ID !== lawyer.ID)
			lawyer.Duplicate = (duplicateData === undefined) ? '' : duplicateData.ID		
			return lawyer
		})

		setLawyers(lawyersArr)
	}

	const convertStateNames = stateString => {

		const licenseStates = stateString.split('|')

		return licenseStates.map(stateName => {
			if (statesData[stateName] === undefined) {
				return stateName
			} else {
				return statesData[stateName].code
			}
		}).join('|')
	} 

	const checkRequiredFields = keys => {

		const formattedKeys = keys.map(key => key.toLowerCase())

		if (formattedKeys.indexOf('full name') === -1 || formattedKeys.indexOf('phone') === -1 || formattedKeys.indexOf('email') === -1) {
			return false
		} else {
			return true
		}
	}

	return (
		<main className="main">
			<div className="container">
				<h1 className="text-center mb-3">Lawyers List</h1>
				<form action="" className="d-flex justify-content-end mb-3">
					<input 
						type="file" 
						name="list" id="list" 
						className="d-none"
						onChange={onImportChange}
					/>
					<label htmlFor="list" className="btn btn-success">Import users</label>
				</form>
				{error ? <InfoBlock blockStyle='text-center error' text={error} /> : (lawyers.length > 0) ? <LawyersTable lawyers={lawyers} /> : <InfoBlock blockStyle='text-center info' text='Please, upload your file' />}				
			</div>
		</main>
	)
}


export default App
