import React from "react"
import styled from "styled-components"

import colors from "/src/presets/colors"

import Links from "./Links"
import Details from "./Details"

import Star from "./star.svg"

const ProjectElement = styled.div`
	position: relative;
	padding: 28px;
	border: 1px solid #c7c7c7;
	border-radius: 16px;
	background: rgba(216, 216, 216, 35%);
`

const ProjectStarElement = styled(Star)`
	position: absolute;
	top: -16px;
	right: -16px;
	width: 36px;
	color: ${colors.accent};
`

function Project({ name, description, source, role, starred, links }) {
	return (
		<ProjectElement>
			<Details
				name={name}
				description={description}
				source={source}
				role={role}
				starred={starred}
			/>
			<Links links={links} />
			{
				starred ? <ProjectStarElement /> : null
			}
		</ProjectElement>
	)
}

export default Project

export {
	ProjectElement,
	ProjectStarElement,
}