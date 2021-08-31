import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import { Link, useLocation } from "react-router-dom"

import colors from "/src/presets/colors"
import springs from "/src/presets/springs"

const tabs = [
	{ "path": "/", "name": "home" },
	{ "path": "/portfolio", "name": "portfolio" },
	{ "path": "/characters", "name": "characters" }
]
const tabHeight = 32
const tabSpacing = 8

const TabElement = styled(Link)`
	display: block;
	height: 32px;
	font-size: 28px;
	font-weight: 300;
	font-style: italic;

	& + & {
		margin-top: 8px;
	}
`

function Tab(props) {
	const location = useLocation();
	
	const active = location.pathname === props.to
	const { color, weight } = useSpring({
		to: {
			color: active ? colors.accent : "#7c7c7c",
			weight: active ? 700 : 300,
		},
		config: springs.tabSwitch,
	});

	return (
		<TabElement to={props.to} replace>
			<animated.span
				style={{
					color: color,
					fontVariationSettings: weight.to(value => `"wght" ${value}`),
				}}
			>
				{props.text}
			</animated.span>
		</TabElement>
	)
}

const TabsContainerElement = styled.div`
	position: absolute;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-left: 80px;
	user-select: none;
`

const TabsElement = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
`

const TabsSelectorContainerElement = styled.div`
	position: relative;
	width: 16px;
	height: ${(tabs.length * tabHeight) + ((tabs.length - 1) * tabSpacing)}px;
	margin-right: 20px;
`

const TabsSelectorElement = styled(animated.div)`
	position: relative;
	width: 100%;
	height: ${tabHeight}px;
	display: flex;
	align-items: center;
	justify-content: center;
`

const TabsSelectorIconElement = styled(animated.div)`
	width: 12px;
	height: 12px;
	background: ${colors.accent};
	transform: rotate(45deg);
`

function Tabs() {
	const location = useLocation()
	const index = tabs.findIndex(tabData => tabData.path == location.pathname)

	const { offset } = useSpring({
		to: {
			offset: index * (tabHeight + tabSpacing),
		},
		config: springs.tabSwitch,
	})

	const { rotation } = useSpring({
		from: { rotation: 0 + 45 },
		to: { rotation: 90 + 45 },
		loop: true,
		config: {
			duration: 500,
			easing: time => time,
		},
	})

	return (
		<TabsContainerElement>
			<TabsSelectorContainerElement>
				<TabsSelectorElement
					style={{
						transform: offset.to(value => `translateY(${value}px)`),
					}}
				>
					<TabsSelectorIconElement
						style={{
							transform: rotation.to(value => `rotate(${value}deg)`),
						}}
					/>
				</TabsSelectorElement>
			</TabsSelectorContainerElement>
			<TabsElement>
				<Tab to="/" text="home" />
				<Tab to="/portfolio" text="portfolio" />
				<Tab to="/characters" text="characters" />
			</TabsElement>
		</TabsContainerElement>
	)
}

export default Tabs