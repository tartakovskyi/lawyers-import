import React, {useEffect, useState}  from 'react'


const App = () => {

	const [lawyers, setLawyers] = useState([])

	useEffect(() => {
		fetch('lawyers.csv')
		.then(response => response.text())
		.then(data => {
			parseLawyers(data)
		})
	},[])

	const parseLawyers = data => {
		const lawyerStrings = data.split(/\r?\n|\r/)
		let lawyersArr = []
		const keys = lawyerStrings[0].split(';')
		for (var i = 1; i < lawyerStrings.length; i++) {
			const lawyerStringsItem = lawyerStrings[i].split(';')
			let lawyer = {}
			for (var j = 0; j < lawyerStringsItem.length; j++) {
				lawyer[keys[j]] = lawyerStringsItem[j]
			}

			lawyersArr[i] = lawyer
		}
		setLawyers(lawyersArr)
	}

	

	return (
		<div className="container">
			<h1>Test</h1>
		</div>
	)
}

export default App;
