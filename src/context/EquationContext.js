import React, { createContext, useState } from 'react';

// Initialize the Context
export const EquationContext = createContext({
	equation: '',
	setEquation: null
})

// Define and export the Context Provider
export default function EquationContextProvider(props) {
	const [equation, setEquation] = useState('')
	const equationContextValue = {
		equation: equation,
		setEquation: setEquation
	}

	return (
		<EquationContext.Provider value={equationContextValue}>
			{props.children}
		</EquationContext.Provider>
	)
}