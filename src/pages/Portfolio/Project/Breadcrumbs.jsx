import React from "react"
import styled from "styled-components"

import colors from "/src/presets/colors"

import RobloxIcon from "./sources/roblox.svg"
import WebIcon from "./sources/web.svg"

const sources = {
	roblox: {
		name: "Roblox",
		icon: RobloxIcon,
	},
	web: {
		name: "Web",
		icon: WebIcon,
	},
}

const BreadcrumbsElement = styled.div`
	color: ${colors.accent};
	display: flex;
	flex-direction: row;

	svg {
		height: 20px;
		margin-right: 11px;
	}

	span {
		transform: translateY(1px);
	}
`

const SourceElement = styled.span`
	color: ${colors.accent};
	font-size: 16px;
	font-weight: 700;
`

const RoleElement = styled.span`
	color: rgba(0, 0, 0, 50%);
	font-weight: 400;

	::before {
		content: "·";
		margin: 0 10px;
	}
`

function Breadcrumbs({ source, role }) {
	const { name, icon: ProjectSourceIconElement } = sources[source]

	return (
		<BreadcrumbsElement>
			<ProjectSourceIconElement />
			<SourceElement>{name}</SourceElement>
			<RoleElement>{role}</RoleElement>
		</BreadcrumbsElement>
	)
}

export default Breadcrumbs

export {
	BreadcrumbsElement,
	SourceElement,
	RoleElement,
}