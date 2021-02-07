import { stateCodes } from './states'


export class Validate {

	static age(lawyerAgeString) {
		const lawyerAge = Number(lawyerAgeString);
		if (!Number.isInteger(lawyerAge)) return false;
		if (lawyerAge < 21) return false;
		return true;
	} 

	static experience(lawyerExperience, lawyerAge) {
		const exp = Number(lawyerExperience);
		if (!Number.isInteger(exp)) return false;
		if (exp < 0 || exp > (Number(lawyerAge) - 21)) return false;
		return true;
	}

	static yearlyIncome(income) {
		if (isNaN(income)) return false;
		if (income < 0 || income > 1000000) return false;
		return true;
	} 

	static licenseStates(statesString) {
		const states = statesString.split('|')
		for (var i = 0; i < states.length; i++) {
			if (stateCodes.indexOf( states[i] ) === -1) return false;
		}
		return true;
	} 

	static expirationDate(dateString) {
		const regExp1 = /^20[2-9][1-9]-(0[1-9]|1[0-2])-([0-2][0-9]|3[0-1])$/;
		const regExp2 = /^(0[1-9]|1[0-2])\/([0-2][0-9]|3[0-1])\/20[2-9][1-9]$/;
		if (!regExp1.test(dateString) && !regExp2.test(dateString)) return false;
		const currentDate = new Date();
		if (Date.parse(dateString) < currentDate) return false;
		return true;
	}

	static phone(number) {
		const regExp = /^(1|\+1)?\d{10}$/;
		if (!regExp.test(number)) return false;
		return true;
	}

	static hasChildren(string) {
		if (string.toLowerCase() === 'true' || string.toLowerCase() === 'false' || string.toLowerCase() === '') {
			return true;
		} else {
			return false;
		}
		
	}

	static licenseNumber(number) {
		const regExp = /^[0-9A-Za-z]{6}$/;
		if (!regExp.test(number)) return false;
		return true;
		
	}

}
