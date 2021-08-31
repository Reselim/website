import React from "react"
import styled from "styled-components"

import Page from "/src/components/Page"

import colors from "/src/presets/colors"

const CharactersPageElement = styled(Page)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

const NoticeTextElement = styled.span`
	color: ${colors.accent};
	font-size: 32px;
	font-weight: 700;
`

const NoticeSubtextElement = styled.span`
	color: rgba(0, 0, 0, 50%);
	font-size: 18px;
	font-weight: 400;
	margin-top: 10px;
`

function CharactersPage() {
	return (
		<CharactersPageElement path="/characters">
			<NoticeTextElement>I haven't actually finished this page yet</NoticeTextElement>
			<NoticeSubtextElement>...and I don't know if I ever will.</NoticeSubtextElement>
		</CharactersPageElement>
	)
}

export default CharactersPage