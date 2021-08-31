import React from "react"
import styled from "styled-components"

import colors from "/src/presets/colors"

const GroupElement = styled.div`
	width: 100%;
	height: 30px;
	display: flex;
	flex-direction: row;
	align-items: center;
	user-select: none;
`

const GroupTextElement = styled.span`
	color: ${colors.accent};
	font-size: 24px;
	font-weight: 700;
	transform: translateY(-2px);
`

const GroupDividerElement = styled.div`
	height: 2px;
	flex-grow: 1;
	border-radius: 1px;
	margin-left: 20px;
	background: ${colors.accent};
`

function Group({ text }) {
	return (
		<GroupElement>
			<GroupTextElement>{text}</GroupTextElement>
			<GroupDividerElement />
		</GroupElement>
	)
}

export default Group

export {
	GroupElement,
	GroupTextElement,
	GroupDividerElement,
}