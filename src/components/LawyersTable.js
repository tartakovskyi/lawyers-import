import React, {useEffect, useState}  from 'react'
import LawyersList from './LawyersList'


const LawyersTable = () => {

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
				const key = keys[j].replace(/([a-z])\s([a-zA-Z])/, `$1_$2`)
				lawyer[key] = lawyerStringsItem[j]
			}

			lawyersArr[i] = lawyer
		}

		setLawyers(lawyersArr)
	}

	return (

		<table className="table table-striped">
			<thead>
				<tr>
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
				</tr>
			</thead>
			{lawyers.length ? (
					<LawyersList lawyersList={lawyers} />
				) : (
					<p className="text-center">Not lawyers found</p>
				)
			}
		</table>
		

	)

}


export default LawyersTable