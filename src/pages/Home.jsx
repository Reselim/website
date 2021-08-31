import React from "react"
import styled from "styled-components"

import Page from "../components/Page"
import TextLink from "../components/TextLink"

const HomePageElement = styled(Page)`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`

const ArtCreditElement = styled.span`
	display: block;
	font-size: 22px;
`

function HomePage() {
	return (
		<HomePageElement path="/">
			<ArtCreditElement>
				art by <TextLink newPage url="https://twitter.com/Wyukov">Wukov</TextLink>
			</ArtCreditElement>
		</HomePageElement>
	)
}

export default HomePage

export {
	HomePageElement,
	ArtCreditElement,
}