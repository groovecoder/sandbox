module.exports = {
	name : "Endless Terrain",
	description : "An ever-repeating environment",
	order : 0,
	config : {
		camera : {
			x : -400,
			near : 0.1,
			fov : 40
		},
		renderer : {
			useEffects : true
		}
	},
	components : {
		endlessTerrain : {
			construct: require("../js/demos/EndlessTerrain"),
			properties: {
				positionY: -250
			}
		},
		swivelCamera : {
			construct: require("../js/components/cameras/Swivel"),
		},
		constantMove : {
			construct: require("../js/components/cameras/ConstantMove"),
			properties: {
				z: -2
			}
		},
		cloudsTop : {
			construct: require("../js/components/ambiance/Clouds"),
			properties: {
				height: 200,
				rotation: Math.PI / 2
			}
		},
		music : {
			construct: require("../js/sound/Music"),
			properties: {
				url: "https://soundcloud.com/synaptyx/mech-attack"
			}
		}
		// stats : {
		// 	construct: require("../js/components/utils/Stats")
		// }
	}
};