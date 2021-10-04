import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import springs from "/src/presets/springs"

import luna from "url:../../assets/luna.png"

const LunaElement = styled(animated.img)`
	position: absolute;
	height: 170vh;
	right: -40vh;
	bottom: -60vh;
	z-index: -1;
`

function Luna({ active }) {
	const { opacity } = useSpring({
		to: {
			opacity: active ? 1 : 0.15,
		},
		config: springs.tabSwitch,
	})

	return (
		<LunaElement
			src={luna}
			style={{
				opacity: opacity,
			}}
		/>
	)
}

export default Luna

export {
	LunaElement,
}