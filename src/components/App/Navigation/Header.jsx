import React from "react"
import styled from "styled-components"

import colors from "/src/presets/colors"

const HeaderElement = styled.div`
	position: absolute;
	top: 80px;
	left: 80px;
	display: flex;
	flex-direction: column;
	z-index: 10;

	> * + * {
		margin-top: 14px;
	}
`

const HeaderTextElement = styled.span`
	color: ${colors.accent};
	font-size: 40px;
	font-weight: 800;
`

const HeaderSubtextElement = styled.span`
	color: #646464;
	font-size: 18px;
	font-weight: 400;
	line-height: 24px;
`

const HeaderPronounsElement = styled.span`
	color: #8F8F8F;
	font-size: 14px;
	font-weight: 500;
`

function Header() {
	return (
		<HeaderElement>
			<HeaderTextElement>hey! I'm nicole.</HeaderTextElement>
			<HeaderSubtextElement>programmer, designer, and a couple other neat things</HeaderSubtextElement>
			<HeaderPronounsElement>she/her</HeaderPronounsElement>
		</HeaderElement>
	)
}

export default Header