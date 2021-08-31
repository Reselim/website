import {
	mdiLinkVariant,
	mdiGithub,
	mdiChat,
} from "@mdi/js"

export default [
	{
		text: 2021,
		projects: [
			{
				id: "free-draw",
				starred: true,
				source: "roblox",
				role: "Creator",
				name: "Free Draw 2",
				description: "Relatively simple collaborative/multiplayer drawing application on Roblox.",
				links: [
					{
						id: "game",
						url: "https://www.roblox.com/games/1547610457/Free-Draw-2",
						icon: mdiLinkVariant,
						primary: true,
					},
					{
						id: "organization",
						url: "https://github.com/free-draw",
						icon: mdiGithub,
					},
					{
						id: "discord",
						url: "https://discord.gg/freedraw",
						icon: mdiChat,
					},
				],
			},
			{
				id: "base64",
				starred: false,
				source: "roblox",
				role: "Creator",
				name: "Base64",
				description: "Fastest Base64 implementation in Luau.",
				links: [
					{
						id: "repository",
						url: "https://github.com/Reselim/Base64",
						icon: mdiGithub,
						primary: true,
					},
				],
			},
		],
	},
	{
		text: 2020,
		projects: [
			{
				id: "flipper",
				starred: false,
				source: "roblox",
				role: "Creator, Maintainer",
				name: "Flipper",
				description: "Animation library for Roblox.",
				links: [
					{
						id: "repository",
						url: "https://github.com/Reselim/Flipper",
						icon: mdiGithub,
						primary: true,
					},
				],
			},
			{
				id: "vibe-station",
				starred: false,
				source: "roblox",
				role: "Programmer",
				name: "Vibe Station",
				description: "\"Vibe\" genre game set in a train station.",
				links: [
					{
						id: "game",
						url: "https://www.roblox.com/games/4743812019/Vibe-Station",
						icon: mdiLinkVariant,
						primary: true,
					},
				],
			},
		],
	},
	{
		text: 2018,
		projects: [
			{
				id: "beat-saber-overlay",
				starred: false,
				source: "web",
				role: "Creator",
				name: "Beat Saber Overlay",
				description: "A now-abandoned web-based overlay for Beat Saber, showing current map and basic stats.",
				links: [
					{
						id: "repository",
						url: "https://github.com/Reselim/beat-saber-overlay",
						icon: mdiGithub,
						primary: true,
					},
				],
			},
		],
	},
]