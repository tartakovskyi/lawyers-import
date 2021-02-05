import React, { useState }  from 'react'
import LawyersTable from './LawyersTable'
import InfoBlock from './InfoBlock'


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
		const keys = lawyerStrings[0].split(';')

		for (var i = 1; i < lawyerStrings.length; i++) {
			const lawyerStringsItem = lawyerStrings[i].split(';')
			let lawyer = {}
			for (var j = 0; j < lawyerStringsItem.length; j++) {
				const key = keys[j].replace(/([a-z])\s([a-zA-Z])/, `$1_$2`)
				lawyer[key] = lawyerStringsItem[j]
			}

			lawyersArr[i] = lawyer
		}

		setLawyers(lawyersArr)
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
				{error ? <InfoBlock style='text-center error' text={error} /> : <LawyersTable lawyers={lawyers} /> }				
			</div>
		</main>
	)
}


export default App
