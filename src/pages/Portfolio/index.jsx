import React from "react"
import styled from "styled-components"

import Page from "../../components/Page"

import Group, { GroupElement } from "./Group"
import Project, { ProjectElement } from "./Project"

import projects from "./projects"

const PortfolioPageElement = styled(Page)`
	display: flex;
	flex-direction: column;

	> * + ${GroupElement} {
		margin-top: 30px;
	}

	> * + ${ProjectElement} {
		margin-top: 15px;
	}
`

function PortfolioPage() {
	return (
		<PortfolioPageElement path="/portfolio">
			{
				projects.flatMap((section) => {
					return [
						<Group text={section.text} key={`Group(${section.text})`} />,
						...section.projects.map((project) => {
							return <Project {...project} key={`Project${project.id}`} />
						}),
					]
				})
			}
		</PortfolioPageElement>
	)
}

export default PortfolioPage

export {
	PortfolioPageElement,
}