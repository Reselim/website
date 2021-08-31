import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Icon from "@mdi/react"

import colors from "/src/presets/colors"
import springs from "/src/presets/springs"

const PrimaryLinkElement = styled(animated.a)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	background: ${colors.accent};
	color: white;
	box-sizing: border-box;
	border: 3px solid ${colors.accent};
`

function PrimaryLink({ url, icon }) {
	const [ hovering, setHovering ] = React.useState(false)

	const { background, color } = useSpring({
		to: {
			background: hovering ? "white" : colors.accent,
			color: hovering ? colors.accent : "white",
		},
		config: springs.hover,
	})

	return (
		<PrimaryLinkElement
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			style={{ background, color }}
			href={url}
		>
			<Icon
				path={icon}
				size={1.5}
				color="currentcolor"
			/>
		</PrimaryLinkElement>
	)
}

const SecondaryLinkElement = styled(animated.a)`
	color: #646464;
	padding: 4px;
	opacity: 0.75;
`

function SecondaryLink({ url, icon }) {
	const [ hovering, setHovering ] = React.useState(false)

	const { opacity } = useSpring({
		to: {
			opacity: hovering ? 1 : 0.75,
		},
		config: springs.hover,
	})

	return (
		<SecondaryLinkElement
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			style={{ opacity }}
			href={url}
		>
			<Icon
				path={icon}
				size={1}
				color="currentcolor"
			/>
		</SecondaryLinkElement>
	)
}

const LinksElement = styled.div`
	position: absolute;
	top: 28px;
	right: 28px;
	display: flex;
	flex-direction: column;
	align-items: center;

	> ${PrimaryLinkElement} + ${SecondaryLinkElement} {
		margin-top: 12px;
	}

	> ${SecondaryLinkElement} + ${SecondaryLinkElement} {
		margin-top: 4px;
	}
`

function Links({ links }) {
	return (
		<LinksElement>
			{
				links.map(({ id, primary, ...data }) => {
					const Link = primary ? PrimaryLink : SecondaryLink
					return <Link key={id} {...data} />
				})
			}
		</LinksElement>
	)
}

export default Links

export {
	PrimaryLinkElement,
	SecondaryLinkElement,
	LinksElement,
}