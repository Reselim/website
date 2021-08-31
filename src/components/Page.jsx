import React from "react"
import styled from "styled-components"
import { useLocation } from "react-router-dom"
import { useSpring, animated } from "react-spring"

import springs from "../presets/springs"

const PageElement = styled(animated.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	box-sizing: border-box;
	height: 100%;
	overflow: hidden auto;
	display: flex;
	flex-direction: column;
	padding: 80px;
`

function Page({ path, children, ...props }) {
	const location = useLocation()

	const open = location.pathname === path
	const { zIndex, opacity, offset } = useSpring({
		to: {
			zIndex: open ? 100 : 0,
			opacity: open ? 1 : 0,
			offset: open ? 0 : 30,
		},
		config: springs.tabSwitch,
	})

	return (
		<PageElement
			style={{
				zIndex,
				opacity,
				transform: offset.to(value => `translateX(${value}px)`),
				visibility: opacity.to(value => value > 0.025 ? "visible" : "hidden"),
			}}
			{...props}
		>
			{children}
		</PageElement>
	)
}

export default Page

export {
	PageElement,
}