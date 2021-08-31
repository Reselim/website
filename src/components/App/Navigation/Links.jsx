import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"

import springs from "/src/presets/springs"

import GithubLogo from "/src/assets/logos/github.svg"
import TwitterLogo from "/src/assets/logos/twitter.svg"
import RobloxLogo from "/src/assets/logos/roblox.svg"

const LinkElement = styled(animated.a)`
	position: relative;

	svg {
		height: 50px;
	}

	& + & {
		margin-left: 30px;
	}
`

function Link({ logo, url, name }) {
	const LogoElement = logo

	const [ hovering, setHovering ] = React.useState(false)

	const { opacity, offset } = useSpring({
		to: {
			opacity: hovering ? 1 : 0.75,
			offset: hovering ? 5 : 0,
		},
		config: springs.hover,
	})

	return (
		<LinkElement
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
			href={url}
			style={{
				opacity,
				transform: offset.to(value => `translateY(-${value}px)`),
			}}
			title={name}
		>
			<LogoElement />
		</LinkElement>
	)
}

const LinksElement = styled.div`
	position: absolute;
	left: 80px;
	bottom: 80px;
	display: flex;
	flex-direction: row;
	z-index: 10;
`

function Links() {
	return (
		<LinksElement>
			<Link logo={GithubLogo} url="https://github.com/Reselim" name="Github" />
			<Link logo={TwitterLogo} url="https://twitter.com/Reselim_" name="Twitter" />
			<Link logo={RobloxLogo} url="https://www.roblox.com/users/24346602/profile" name="Roblox" />
		</LinksElement>
	)
}

export default Links

export {
	LinkElement,
	LinksElement,
}