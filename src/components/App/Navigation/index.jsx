import React from "react"
import styled from "styled-components"

import Header from "./Header"
import Tabs from "./Tabs"
import Links from "./Links"

const NavigationElement = styled.div`
	position: relative;
	min-width: 400px;
`

function Navigation() {
	return (
		<NavigationElement>
			<Header />
			<Tabs />
			<Links />
		</NavigationElement>
	)
}

export default Navigation

export {
	NavigationElement,
}