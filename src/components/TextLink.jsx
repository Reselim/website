import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Color from "color"

import colors from "/src/presets/colors"
import springs from "/src/presets/springs"

const TextLinkElement = styled(animated.a)`
	color: ${colors.accent};
	font-weight: 700;
`

function TextLink({ url, newPage, ...props }) {
	const [ hovering, setHovering ] = React.useState(false)

	const { color } = useSpring({
		to: {
			color: hovering ? Color(colors.accent).lighten(0.1).hex() : colors.accent,
		},
		config: springs.hover,
	})

	return (
		<TextLinkElement
			href={url}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			style={{ color }}
			target={newPage ? "_blank" : null}
			{...props}
		/>
	)
}

export default TextLink

export {
	TextLinkElement,
}