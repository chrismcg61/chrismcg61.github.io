function addSkill( id, skillList, skill ){
	skillList.push( skill );
	skillList[id] = skill;
};

var rating = 85;
var ratingMin = 50;

var gpuSkills = [];
addSkill( "GPU_3D", gpuSkills,
   {"title" : "3D/GPU",
	"rating" : rating,
	"hiddenSkills" : [	
		{"title" : "Dynamic 3D-Mesh Mgt (CPU/GPU)",
			"rating" : rating,
		},
		{"title" : "Physics (CPU/GPU)",
			"rating" : rating,
		},
		{"title" : "2D/3D GPU Shaders",
			"rating" : rating,
		},
		{"title" : "GPU Parallel Prog"
			+ subTitle("GPU-Accelerated Hi-Recursion Scripts"),
			"rating" : rating,
		},
		
	],    
  }
);

var aiSkills = [];
addSkill( "AI_GAME", aiSkills,
   {"title" : "AI [Game]",
	"rating" : rating,
	"hiddenSkills" : [
		{
			"title" : "User Assist",
			"rating" : rating,
		},
		{
			"title" : "Environment Simulation",
			"rating" : rating,
		},
		{
			"title" : "Player-Environment Reactivity",
			"rating" : rating,
		},
	],    
  }
);
addSkill( "AI_OTHER", aiSkills,
   {"title" : "AI [Multi-Purpose]",  //Cross-Platform
	"rating" : rating,
	"hiddenSkills" : [	
		{
			"title" : "Robots AI"
				+ subTitle("Env Reactivity, Distrib AI"),
			"rating" : rating,
			"hiddenSkills" : [	],    
		},
		{
			"title" : "Neural Network"
				+ subTitle("User-Adapt"),
			"rating" : rating,
			"hiddenSkills" : [	],    
		},
		{
			"title" : "Machine Learning"
				+ subTitle("Auto-Optim, GPU-Accelerated"),
			"rating" : rating,
			"hiddenSkills" : [	],    
		},
	],    
  }
);

var genericAppSkills = [];
addSkill( "APP_GENERIC", genericAppSkills,
	{
		"title" : "WebApp [Generic]",
		"rating" : rating,
		"hiddenSkills" : [ 
			{
				"title" : "Modular",
				"rating" : rating,
			},
			{
				"title" : "3D (CPU/GPU)",
				"rating" : rating,
			},
		],    
	}
);
var appSkills = [];
addSkill( "APP_STB", appSkills,
	{"title" : "WebApp [STB]",
		"rating" : rating,		
		"hiddenSkills" : [ 
			genericAppSkills[0],
			{
				"title" : "Perf / Stability",
				"rating" : rating,
			},
			{
				"title" : "Grid UI",
				"rating" : rating,
			},
		],    
	}
);
addSkill( "APP_ADVANCED", appSkills,
   {"title" : "WebApp [Std++]",
	"rating" : rating,
	"hiddenSkills" : [
		genericAppSkills[0],
		{
			"title" : "MultiThreads",
			"rating" : rating,
		},
		{
			"title" : "Gamification",
			"rating" : rating,
		},
	],    
  }
);

var mwToolSkills = [];
addSkill( "MW", mwToolSkills,
   {"title" : "MW",
	"rating" : rating,
	"hiddenSkills" : [
	  {
		"title" : "Game Engine / Video Engine",
		"rating" : rating,
	  },
	  {
		"title" : "Embedded Modular App [BackEnd]",
		"rating" : rating,
	  },
	  {
		"title" : "Hi-End Interface (Main App & Tools)",
		"rating" : rating,
	  },
	  {
		"title" : "Drivers",
		"rating" : rating,
	  },
	],    
  }
);
addSkill( "TOOLS", mwToolSkills,
	{"title" : "Tools",
	"rating" : rating,
	"hiddenSkills" : [
	  {
		"title" : "Resource Mgt",
		"rating" : rating,
	  },
	  {
		"title" : "Perf Monitor",
		"rating" : rating,
	  },
	  {
		"title" : "Stress/Unit Test",
		"rating" : rating,
	  },
	  {
		"title" : "Distrib Process",
		"rating" : rating,
	  },
	  {
		"title" : "Docs Compilation",
		"rating" : rating,
	  },
	],    
	}
);


var techSkills = [];
addSkill( "WEBAPP", techSkills,
	{"title" : "WebApp"
		+ subTitle("Modular, 3D/GPU, MultiThreads"),
	"rating" : rating,
	"checked" : expandMode>0,
	"expandMe": true,
	// "expandMode": 0,
	"hiddenSkills" : appSkills,    
	}
);
addSkill( "GAME", techSkills,
	{"title" : "Game Dev/Design",
	"rating" : rating,
	"hiddenSkills" : [	
		{
			"title" : "3D Editor App Extension",
			"rating" : rating,
			"hiddenSkills" : [  ],
		},
		
		{
			"title" : "Gameplay Scripts",
			"rating" : rating,
			"hiddenSkills" : [					
				{
					"title" : "Controls"
						+ subTitle("Ergonomy, User Assist/AI"),
					"rating" : rating,
				},
				{
					"title" : "Scripted Events",
					"rating" : rating,
				},
				{
					"title" : "3D RealTime Interactivity",
					"rating" : rating,
				},
			],
		},
		
		{
			"title" : "3D World Design",
			"rating" : rating,
			"hiddenSkills" : [	
				{
					"title" : "Streamable Area Sequence",
					"rating" : rating,
				},
				{
					"title" : "Area Integrity",
					"rating" : rating,
				},
				{
					"title" : "Procedural Design",
					"rating" : rating,
				},
			],
		},
		
		{
			"title" : "UI"
				+ subTitle("Design & Integration"),
			"rating" : rating,
			"hiddenSkills" : [	
				{
					"title" : "Dynamic HUD",
					"rating" : rating,
				},
				{
					"title" : "Grid Menus",
					"rating" : rating,
				},
			],
		},
		
		 
	  
	],    
	}
);
addSkill( "MW_TOOLS", techSkills,
   {"title" : "MW & Tools",
	"rating" : rating,
	"hiddenSkills" : mwToolSkills,    
  }
);
/*
addSkill( "MW", techSkills,
   {"title" : "MW",
	"rating" : rating,
	"hiddenSkills" : [
	  {
		"title" : "Embedded Modular App [BackEnd]",
		"rating" : rating,
	  },
	  {
		"title" : "Hi-End Interface (Main App & Tools)",
		"rating" : rating,
	  },
	  {
		"title" : "Drivers",
		"rating" : rating,
	  },
	],    
  }
);
// techSkills["GAMEDEV"] = techSkills[n];  
addSkill( "TOOLS", techSkills,
	{"title" : "Tools",
	"rating" : rating,
	"hiddenSkills" : [
	  {
		"title" : "Resource Mgt",
		"rating" : rating,
	  },
	  {
		"title" : "Perf Monitor",
		"rating" : rating,
	  },
	  {
		"title" : "Stress/Unit Test",
		"rating" : rating,
	  },
	  {
		"title" : "Distrib Process",
		"rating" : rating,
	  },
	  {
		"title" : "Docs Compilation",
		"rating" : rating,
	  },
	],    
	}
);
*/
addSkill( "3D", techSkills,
	{"title" : "3D/GPU"
			+ subTitle("Meshes/Shaders, Parallel-Prog"),
		"rating" : rating,
		"hiddenSkills" : gpuSkills,    
	}
);
addSkill( "AI", techSkills,
	{"title" : "AI"
		+ subTitle("Game, Robots, Network, M-Learning"),
	"rating" : rating,
	"hiddenSkills" : aiSkills,    
	}
);



rating = rating-10;
addSkill( "EMBED", techSkills,
	{"title" : "Embedded Dev",
	"rating" : rating,
	"hiddenSkills" : [
		{
			"title" : "Drivers",
			"rating" : rating,
		},
		{
			"title" : "Debug Bench",
			"rating" : rating,
		},
	],    
	}
);
rating = ratingMin;
addSkill( "OTHER", techSkills,
	{"title" : "Misc Dev"
			+ subTitle("Network, Elec, Secu, .Net, DataMgt"),
		"rating" : rating,
		"hiddenSkills" : [
		  
		],    
	}
);


