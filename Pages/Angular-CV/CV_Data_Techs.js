var rating = 95;
var ratingMin = 50;

var techs = [];
addSkill( "TOOLS", techs,
	{"title" : "Tools"
		+ subTitle("OS, Versᶦⁿᵍ, Social/3D DevEnv"),
		"rating" : rating,
		//"expandMode": 0,
		"hiddenSkills" : [	
			{"title" : "OS" 
				+ subTitle("WinXP+, RedHat/Ubuntu+, VMware/V.Box"),
				"rating" : rating,
			},
			{"title" : "Versioning"
				+ subTitle("SVN, Git, P4, MS-SS ..."),
				"rating" : rating,
			},
			{"title" : "Social/3D DevEnv",
				"rating" : rating,
				"hiddenSkills" : [	
					{"title" : "Unity3D",
						"rating" : rating,
					},
					{"title" : "Codepen/Github/SO, Jira, Bugzilla",
						"rating" : rating,
					},
					{"title" : "Eclipse/VStudio-2007+",
						"rating" : rating,
					},
					
					{"title" : "Unreal",
						"rating" : ratingMin,
					},
				],
			},
		],    
	}
);
addSkill( "PROG_LANG", techs,
	{"title" : "Prog Languages"
		+ subTitle("JS/C…/Lua"),
		"rating" : rating-10,
		"expandMode": 0,
		"hiddenSkills" : [	
			{"title" : "JS ● C,C++,C# ● Lua ● Batch",
				"rating" : rating-10,
			},
			{"title" : "Other"
				+ subTitle("Python, Java, Dart, Flash/AS"),
				"rating" : ratingMin,
			},
		],    
	}
);
addSkill( "LIBS", techs,
	{"title" : "Libs"
		+ subTitle("Web/UI/3D/GPU"),
		"rating" : rating-10,
		"expandMode": 0,
		"hiddenSkills" : [	
			{"title" : "AngularJS ● OpenGL/WebGL/DX ● GLSL",
				"rating" : rating-10,
			},
			{"title" : "OpenCL/WebCL, Wii/PS3-GL",
				"rating" : rating-20,
			},
						
			{"title" : "Other"
				+ subTitle("WebWorkers, React/NodeJS, UT-Libs"),
				"rating" : rating-20,
				"hiddenSkills" : [
					{"title" : "WebWorkers, JasmineUT, Bullseye",
						"rating" : rating-20,
					},
					{"title" : "ReactJS, NodeJS, Qt, WebExt, .Net",
						"rating" : ratingMin,
					},
				],
			},
		],    
	}
);




