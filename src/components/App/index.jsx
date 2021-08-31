import React from "react"
import styled from "styled-components"
import { BrowserRouter, useLocation } from "react-router-dom"
import { Globals } from "react-spring"
import { useReduceMotion } from "react-reduce-motion"

import Navigation from "./Navigation"
import Pages from "./Pages"
import Luna from "./Luna"

const SpacerElement = styled.div`
	flex-grow: 1;
`

const AppElement = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	overflow: hidden;
`

function App() {
	const location = useLocation();

	return (
		<AppElement>
			<Navigation />
			<SpacerElement />
			<Pages />
			
			<Luna active={location.pathname === "/"} />
		</AppElement>
	)
}

function AppContainer() {
	const reducedMotion = useReduceMotion()

	React.useEffect(() => {
		Globals.assign({
			skipAnimation: reducedMotion,
		})
	}, [ reducedMotion ])

	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

export default AppContainer

export {
	SpacerElement,
	AppElement,
}