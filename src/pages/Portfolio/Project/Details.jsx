import React from "react"
import styled from "styled-components"

import colors from "/src/presets/colors"

import Breadcrumbs from "./Breadcrumbs"

const DetailsElement = styled.div`
	display: flex;
	flex-direction: column;
`

const NameElement = styled.span`
	color: ${colors.accent};
	font-size: 44px;
	font-weight: 700;
	margin: 14px 0 10px;
`

const DescriptionElement = styled.p`
	max-width: calc(100% - 100px);
	font-size: 22px;
	font-weight: 300;
	line-height: 32px;
	margin: 0;
`

function Details({ name, description, source, role, starred }) {
	return (
		<DetailsElement>
			<Breadcrumbs source={source} role={role} />
			<NameElement>{name}</NameElement>
			<DescriptionElement>{description}</DescriptionElement>
		</DetailsElement>
	)
}

export default Details

export {
	DetailsElement,
	NameElement,
	DescriptionElement,
}