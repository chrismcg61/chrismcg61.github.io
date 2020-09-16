var rating = 95;
var ratingMin = 50;

var techs = [];
addSkill( "TOOLS", techs,
	{"title" : "Tools"
		+ subTitle("Unity3D, Std/Assembly OS, Versᶦⁿᵍ"),
		"rating" : rating,
		//"expandMode": 0,
		"hiddenSkills" : [	
			{"title" : "3D DevEnv" 
				+ subTitle("Unity3D & Co"),
				"rating" : rating,
				"hiddenSkills" : [	
					{"title" : "Unity3D",
						"rating" : rating,
					},
					{"title" : "Unreal, Virtools"
							+ subTitle("SolidWorks"),
						"rating" : ratingMin,
					},
				],
			},
			{"title" : "OS" 
				+ subTitle("Win/Linux-2000+, VMs, Assembly OS"),  //RedHat/Ubuntu
				"rating" : rating,
			},
			{"title" : "Versioning"
				+ subTitle("SVN, Git, P4, SS-2007+…"),
				"rating" : rating,
			},
			{"title" : "Social DevEnv",
				"rating" : rating,
				"hiddenSkills" : [	
					{"title" : "Codepen/Github/SO, Jira, Bugzilla",
						"rating" : rating,
					},
					{"title" : "Eclipse/VStudio-2007+",
						"rating" : rating,
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
				+ subTitle("Python, Java, UML, Dart, Flash/AS, SQL, Assembly"),
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
			{"title" : "AngularJS"
					+ subTitle("Bootstrap, ReactJS"),
				"rating" : rating-10,
			},
			{"title" : "OpenGL/WebGL/DX9+"
				+ subTitle("Wii/PS3/XBOX SDKs"),
				"rating" : rating-20,
			},
			{"title" : "GLSL, WebCL"
				+ subTitle("OpenCL/Cuda"),
				"rating" : rating-20,
			},
						
			{"title" : "Other"
				+ subTitle("WebWorkers, NodeJS, UT-Libs"),
				"rating" : rating-20,
				"hiddenSkills" : [
					{"title" : "WebWorkers, JasmineUT, Bullseye",
						"rating" : rating-20,
					},
					{"title" : "NodeJS, Qt, WebExt, .Net, Scaleform",
						"rating" : ratingMin,
					},
				],
			},
		],    
	}
);




