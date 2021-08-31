import React from "react"
import styled from "styled-components"

import HomePage from "/src/pages/Home"
import PortfolioPage from "/src/pages/Portfolio"
import CharactersPage from "/src/pages/Characters"

const PagesElement = styled.div`
	position: relative;
	width: 950px;
	max-width: 950px;
	overflow: hidden;
`

function Pages() {
	return (
		<PagesElement>
			<HomePage />
			<PortfolioPage />
			<CharactersPage />
		</PagesElement>
	)
}

export default Pages

export {
	PagesElement,
}