var ING = "<sup>ŋ</sup>";

/*** Tags ***/
var roleTags = [];
roleTags["LEAD"] = "Team-Lead";
roleTags["MGR"] = "Proj-Mgr";
roleTags["EXPERT"] = "Tech-Expert";
var processTags = [];
processTags["AGILE"] = "AGILE";
processTags["AUTO"] = "Auto-Mgt";
processTags["CodeQual"] = "Code-Quality";



/*** PERS DATA ***/
var contracts = [];
{
addTableTag( contracts, "MAIN", {
      tagDiv:{title:"", tags:[
          "CVar",
      ]},
      subDivs:[
        {
          hidden:true,
          subDivs:[ 
            {
              tagDiv:{title:"Overtime++: ", tags:[
                "80-140h./2W", "Bonuses"+small("(FlexTime, Team+Pers Benefits)"),
              ]},
            },
			{
              tagDiv:{title:"Proj: ", tags:[
                "Strong Scope",  "Clear Needs"+small(" (Expertise/Time)"),
              ]},
            },
            
            
          ],
        },
      ],    
    }
  );
}





















/*** SKILLS ***/
var techList = [];
{
addTableTag( techList, "TOOLS", {
    rating:89,
    tagDiv:{title:"Sys/Tools: ", alternateBg:true, tags:[ "Win/Linux","Unity","VStudio","Git", ]},
	url:"http:/a/SVN/Perforce",
	subDivs:[
		{
		  expandPrio:1,
		  hidden:true,
		  subDivs:[
		    {
				rating:85,
				tagDiv:{title:"", alternateBg:true, tags:[ 
				  "Jira/Bugzilla", "Eclipse", "Unreal", "VMware", ]},
				url:"http:/a/VirtualBox_/Virtools_/Codepen/SO",
			},
			
		  ]
		}
	]
	
});
addTableTag( techList, "LANG", {
    rating:89,
	// Prog-Languages
    tagDiv:{title:"Lang: ", alternateBg:true, tags:[ "C,C++,C#", "JS", "HTML/CSS3D", "Lua", ]},   
	subDivs:[
		{
		  expandPrio:1,
		  hidden:true,
		  subDivs:[			
			{
				rating:70,
				tagDiv:{title:"", alternateBg:true, tags:[ "TypeScript", "Dart", "Java", "Python", "Assembly", "Bash", ]},
				url:"http:/a/Batch/PowerShell",
				subDivs:[
					{
					  // expandPrio:0,
					  hidden:true,
					  subDivs:[
						{
							rating:50,
							tagDiv:{title:"", tags:[ "Swift", "Objective-C", small("Flash-")+"AS", "Other"+small("(VBA,SQL...)"), ]},
						},
					  ],
					},
				],
			},
			/*{
				rating:85,
				tagDiv:{title:"C-family: ", alternateBg:true, tags:[       ]},
				subDivs:[
					{
					  expandPrio:0,
					  hidden:true,
					  subDivs:[
						{
							rating:50,
							tagDiv:{title:"", tags:[             ]},
						},
					  ],
					},
				],
			},*/
			
		  ],
		},
	],
});
addTableTag( techList, "LIBS", {
    rating:80,
	// Libs/Frameworks
    tagDiv:{title:"Libs: ", alternateBg:true, tags:[ "WebGL"+small("(OpenGL/DX)"), "WebCL/GLSL", "AngularJS", ]},
	url:"http:/a/OpenCL/Cuda_/Wii/PS3/Xbox",
	subDivs:[
		{
		  expandPrio:1,
		  hidden:true,
		  subDivs:[
			{
				rating:60,
				tagDiv:{title:"", alternateBg:true, tags:[ "React/VueJS", "NodeJS/WebWorkers",  ]},
				// url:"http:/a/JasmineUT/WebExt",
				subDivs:[
					{
					  // expandPrio:1,
					  hidden:true,
					  subDivs:[
						{
							rating:50,
							tagDiv:{title:"",  tags:[ "BullseyeUT", "Tk,Qt", small("Asp.Net"), ]},
							url:"http:/a/JasmineUT/WebExt",											
						},						
					  ],
					},
				],								
			},
			
		  ],
		},
	],
});
}
//
var aiSkills = [];
{
addTableTag( aiSkills, "Generic", {
	rating:85,
	tagDiv:{title:"AI-Generic"+small(" (Bots Behaviour/Sync)"), tags:[ ]},
	subDivs:[
		{
			hidden:true,
			subDivs:[
				{
					rating:85,
					tagDiv:{title:"Bots: ", tags:[ "Idle/Aggro Behaviour", "Team Sync AI" ]},
				},				
			]
		}
	]
});
addTableTag( aiSkills, "FLEX", {
    rating:85,
    tagDiv:{title:"AI-Advanced"+small(" (Neural-Net. + Machine-Learning)"), tags:[ ]},  
	subDivs:[
		{
			hidden:true,
			subDivs:[
				{
					rating:85,
					tagDiv:{title:"", tags:[ "Distrib Robots AI", "Neural Network", "Machine-Learning" ]},
				},				
			]
		}
	]
});
addTableTag( aiSkills, "GAME", {
	rating:85,
	tagDiv:{title:"AI-Game"+small(" (World-Sim + User-Act°/Assist)"), tags:[ ]},
	subDivs:[
		{
			hidden:true,
			subDivs:[
				{
					rating:85,
					tagDiv:{title:"", tags:[ "Player Assist", "World Simulation", "Player Interaction", ]},
				},				
			]
		}
	]
});
}
//
var webAppSkills = [];
{
addTableTag( webAppSkills, "Generic", {
    rating:85,
    tagDiv:{title:"WebApp-Generic"+small(" (Modular & 3D/GPU)"), tags:[ ]},
	subDivs:[
		{
			hidden:true,
			subDivs:[
				{
					rating:85,
					tagDiv:{title:"", tags:[ "Modular", "3D (CPU-GPU)",  ]},
				},
			]
		}
	]	
});
addTableTag( webAppSkills, "Std", {
    rating:85,
    tagDiv:{title:"WebApp-Advanced"+small(" (MultiProc & Gamif°)"), tags:[ ]},  
	subDivs:[
		{
		  hidden:true,
		  subDivs:[
			{
				rating:85,
				tagDiv:{title:"", tags:[ "Multithreads", "Gamification", ]},
			},
		  ],
		},
	],
});
addTableTag( webAppSkills, "STB", {
    rating:85,
    tagDiv:{title:"WebApp-STB"+small(" (Perf & GridUI)"), tags:[ ]},
	subDivs:[
		{
			hidden:true,
			subDivs:[
				{
					rating:85,
					tagDiv:{title:"", tags:[ "Perf/Stability", "Grid UI",  ]},
				},
			]
		}
	]
});
}
//
var techSkills = [];
{
addTableTag( techSkills, "WebAPP",  {
  rating:89,
  tagDiv:{title:"WebApp"+small(""), tags:[ ]},
  subDivs:[
    {
	  expandPrio:0,
      hidden:true,
      subDivs:webAppSkills,
    },
  ],  
});
addTableTag( techSkills, "AI",  {
  rating:89,
  tagDiv:{title:"AI/M-Learning", tags:[ ]},
  subDivs:[
    {
      expandPrio:0,
	  hidden:true,
      subDivs:aiSkills,
    },
  ],
  
});

addTableTag( techSkills, "3D", {
	rating:89,
	tagDiv:{title:"3D/GPU Dev", tags:[ ]},
	subDivs:[
	{
	  //expandPrio:1,
	  hidden:true,
	  subDivs:[
		{
			rating:85,
			tagDiv:{title:"CPU-GPU: ", tags:[ "3D-Mesh Anim", "Physics",  ]},
		},
		{
			rating:85,
			tagDiv:{title:"GPU-Prog: ", tags:[ "Shaders", "Script Accelerat°", "M-Learning++" ]},   // Parallel-Prog
		},			
	  ],
	},
	],
});
addTableTag( techSkills, "GameDev", {
    rating:89,
    tagDiv:{title:"GameDev/Design", tags:[ ]},
	subDivs:[
		{
		  //expandPrio:1,
		  hidden:true,
		  subDivs:[
			{
				subDivs:[
					{
						rating:85,
						tagDiv:{title:"", tags:[ 
						  "Controls++", "EditorUI++", "Dynamic HUD/GridUI",  ]},
					},
					{
						rating:85,
						tagDiv:{title:"Scene: ", tags:[ 
						  "Procedural", "Stream", "Integrity",  "Scripted Evts",   ]},
					},
				]
			}
		  ],
		},
	],
});
  
addTableTag( techSkills, "MW", {
    rating:89,
    tagDiv:{title:"MiddleWare", tags:[ ]},
	subDivs:[
		{
		  //expandPrio:1,
		  hidden:true,
		  subDivs:[
			{
				rating:85,
				tagDiv:{title:"", tags:[ 
				  "Engine"+small("(Game/TV/Video)"), "Embedded Modular App", "Drivers", ]},
				subDivs:[
					{
					  hidden:true,
					  subDivs:[
						{
							rating:85,
							tagDiv:{title:"", tags:[   "End-User API", "User-Tools", ]},
						},
					  ]
					}
				]
					  
			},		
		  ],
		},
	],
});

addTableTag( techSkills, "Tools", {
    rating:89,
    tagDiv:{title:"Tools", tags:[ ]},
	subDivs:[
		{
		  //expandPrio:1,
		  hidden:true,
		  subDivs:[
			{
				rating:85,
				tagDiv:{title:"", tags:[  "Perf/Qual Monitor", "Auto-Docs", "Resource Proc",  ]},
				subDivs:[
					{
					  hidden:true,
					  subDivs:[
						  {
							rating:85,
							tagDiv:{title:"", tags:[ "UT+Stress",  "Distrib Process",   ]},
						},
					  ]
					}
				]				
			},						
		  ],
		},
	],
});
addTableTag( techSkills, "Embed", {
	rating:75,
	tagDiv:{title:"Embedded"+small(" (Security/Drivers...)"), tags:[ ]},
	subDivs:[
		{
		  hidden:true,
		  subDivs:[
			{
				rating:75,
				tagDiv:{title:"", tags:[  "Debug Bench", "Security/Encryption", "Drivers",  ]},
			},		
		  ],
		},
	],
});
addTableTag( techSkills, "Misc", {
	rating:50,
	showRatingVal:true,
	tagDiv:{title:"Other"+small(" (Network/Elec...)"), tags:[ ]},
	subDivs:[
		{
		  hidden:true,
		  subDivs:[
			{
				rating:50,
				tagDiv:{title:"", tags:[ "Network/Elec", ".Net", "Data Processing",     ]},
			},		
		  ],
		},
	],
});
}
//
var mgtSkills = [];
{
addTableTag( mgtSkills, "AUTO", {
    rating:90,
	showRatingVal:true,
    tagDiv:{title:processTags["AUTO"]+": ", tags:[ small("Guidelines"), small("Scope Correct°"), ]},
	subDivs:[
		{
		  expandPrio:1,
		  hidden:true,
		  subDivs:[
			{
				rating:89,
				tagDiv:{title:"", tags:[ "RetroEng"+ING, "API Refactor"+ING, "Perf-Monitor Lib",    ]},
				subDivs:[
					{
					  hidden:true,
					  subDivs:[
					    {
							rating:89,
							tagDiv:{title:"Tasks: ", tags:[ "Important/Urgent", "Feature/Tech", ]},
						},
						{
							rating:89,
							tagDiv:{title:"Code: ", tags:[ "Test-Driven", "API Sharing",  ]},
						},	
						
					  ]
					}
				]					  
			},						
		  ],
		},
	],
  });
addTableTag( mgtSkills, "AGILE", {
    rating:90,
    tagDiv:{title:processTags["AGILE"]+": ", tags:[ 
	  small("SCRUM"), small("PairCommit"), small("SprintReview"), ]},
	subDivs:[
		{
		  expandPrio:0,
		  hidden:true,
		  subDivs:[
			  {
				  subDivs:[
				    {
						rating:89,
						tagDiv:{title:"", tags:[  "CodeReview", "Inter-Team Sync", ]},
					},			
				  ]
			  }		
		  ],
		},
	],
  });
addTableTag( mgtSkills, "CodeQual", {
    rating:75,
	showRatingVal:true,
    tagDiv:{title:processTags["CodeQual"]+": ", tags:[ small("Strong UTs"), small("Qual/Regr° Monitor"), ]},
	subDivs:[
		{
		  expandPrio:0,
		  hidden:true,
		  subDivs:[
			{
				rating:75,
				tagDiv:{title:"", tags:[ "UT Maintenance", "UT Auto-Alerts", "API-Docs Monitor", ]},
			},		
		  ],
		},
	],
  });
}
//
var skillMgtData = {  
  // subDivs:[
    // {
      subDivs:[
        {
          title:{txt:"Skills [Management]", classes:["maintTitle"]},
          subDivs:mgtSkills,
        },
      ],
    // }
  // ]
}
//
var skillData = {  
  // subDivs:[
    // {
      subDivs:[
		{
          title:{txt:"Skills [Tech]", classes:["maintTitle"]},
          subDivs:techSkills,
        },		
		{
          title:{txt:"Techs", classes:["maintTitle"]},
          subDivs:techList,
        },
      ],
    // }
  // ]
}




















/*** JOB TITLES ***/
var rootData_JobTitles = {
  // subDivs:[
    // {
      // classes:["separateDiv"],
      subDivs:[
        {
          title:{txt:"Senior Versatile Programmer", txtFR:"░ Développeur Senior", classes:["maintTitle"]},
        },
		{
          classes:["titleTags"],
		  tagDiv:{title:"", alternateBg:true, tags:[			
			small( techSkills["GameDev"].tagDiv.title ),
			small( techSkills["3D"].tagDiv.title ),
			small( techSkills["AI"].tagDiv.title ),
			small( techSkills["WebAPP"].tagDiv.title ),
			small( techSkills["MW"].tagDiv.title ),
			// small( techSkills["Tools"].tagDiv.title ),
          ]},
        },
        {
          tagDiv:{title:"Roles : ", titleFR:"Rôles : ",  tags:[
            ("Tech Expert"),
            ("Team Lead"),
            small("Scrum Master"),
          ]},
        },
        {
          tagDiv:{title:"", tags:[
            "Junior Proj-Manager",
            small("Product-Owner"),
          ]},
        },
        {
          tagDiv:{title:"Teacher : ", titleFR:"Professeur : ", tags:[                        
		    {ENG:small("Beginner"), FR:small("Débutant")},
			{ENG:small("Maths/Physics"), FR:small("Maths/Phys.")},
			{ENG:small("Programming"), FR:small("Programmat°"),},			
            small("FR/ENG"),
          ]},
        },  
      ],
    // },    
  // ],
};




/*** LANG ***/
var langData = {
  subDivs:[
    {
      subDivs:[
        {
          title:{txt:"Languages", txtFR:"Langues",  classes:["maintTitle"]},
        },
        {
          rating:95,
          showRatingVal:true,
		  tagDiv:{title:"English / French", titleFR:"Français / Anglais",  tags:[ ]},
        },
        {
          rating:75,    
          tagDiv:{title:"German / Spanish", titleFR:"Allemand / Espagnol",  tags:[ ]},
        },
        {
          rating:50,    
          tagDiv:{title:"Chinese", titleFR:"Chinois",  tags:[ ]},
        },        
      ],
    },    
  ]
};













/*** HOBBIES ***/
var hobbiesTechData = {
  // subDivs:[
    // {
      subDivs:[
		  {
			subDivs:[  
	  
			{
			  title:{txt:"Hobbies, MiniJobs & Volunteer", txtFR:"Hobbies, MiniJobs & Volontariat",  classes:["maintTitle"]},
			},		
			
			/* {
			  title:{txt:"Hobbies [Other]", classes:["maintTitle"]},
			}, */
			{
			  tagDiv:{title:"Hobbies : ", tags:[ small("Piano"), small("Running/Bike"), small("TV-Series/Books" +small(" (SF/Fantasy/Thriller)") ),  ]},
			  subDivs:[
				{
				  expandPrio:1,
				  hidden:true,
				  subDivs:[
						{
						  tagDiv:{title:"Music/Instruments: ", tags:[ "Piano++", "Guitar", "Singing/Musicals", ]},
						},
						{
						  tagDiv:{title:"Sports: ", tags:[ "Semi-Marathon", "Mountain-Bike", "Racket Sports", "Football", ]},
						  subDivs:[
							{
							  hidden:true,
							  subDivs:[                        
								{  
								  tagDiv:{title:"", tags:[
									  "Ski/Snowboard"  ]},
								},
							  ]
							}
						  ]
						},
						{
						  tagDiv:{title:"Culture: ", tags:[ 
							"TV-Series"+small("(Books)"), "SF/Fantasy/Thriller", "BritPop"+small("/WorldMusic"),   ]},
						},
						{
						  tagDiv:{title:"Events: ", tags:[ 
							"EU-Football", "ATP-Tennis", "Olympics", "Cycling"+small("(TdF…)"),  "E-Sports",  ]},
						},
					]
				}
			  ]
			},
			
			{
			  tagDiv:{title:"Tech Hobbies : ", tags:[ small("Tech Survey"), small("Gaming/DevTest"), small("Documentaries") ]},
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[
						{
						  //rating:95,    
						  tagDiv:{title:"Tech Survey: ", tags:[ "Coding++"+small("(Techs/Concepts)"), "Mgt++"+small("(Tools/Methods)"), ]},			  
						},
						{
						  tagDiv:{title:"Gaming/DevTest: ", tags:[ "Early-Access", "Competitive", "Indie", "Retro"+small("(80-90's)"),  ]},
						},
						{
						  tagDiv:{title:"Documentaries: ", tags:[ "Techs/Science", "History/Politics", "Psycho/Mgt", ]},
						},
					]
				}
			  ]
			},
			
			{
			  tagDiv:{title:"MiniJobs"+small(" (PC-Repair, Teaching, Translator, Animator)"), titleFR:"MiniJobs"+small(" (Répar°-PC, Professeur, Traducteur, Animateur)"),  tags:[  ]},
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[                        
					{  
					  tagDiv:{title:"Computer/Robot/Electronics Install/Repair", tags:[]},
					},
					{  
					  tagDiv:{title:"Teaching (Maths, Prog)", tags:[]},
					},
					
					{  
					  tagDiv:{title:"Translator (ENG/FR)", tags:[]},
					},
					{  
					  tagDiv:{title:"Teen Summer Camp Animator", tags:[]},
					},			
					
				]				  
				}
			  ]
			},
			{
			  tagDiv:{title:"Volunteer"+small(" (Caregiver, Event-Org°...)"), titleFR:"Volontariat"+small(" (Aidant, Org°-Evt...)"),  tags:[  ]},
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[                        					
					{  
					  tagDiv:{title:"Elder/Family Caregiver", tags:[]},
					},                
					{  
					  tagDiv:{title:"Event Org°", tags:[]},
					},
					{  
					  tagDiv:{title:"Gardening/Construction", tags:[]},
					},
				]
				  
				}
			  ]
			},			
			
			]
		 }
      ],
    // },    
  // ],
};










/*** MiniJobs ***/
var miniJobsData = {
  subDivs:[
    {
      subDivs:[
	  {
		  subDivs:[
		  
			{
			  title:{txt:"MiniJobs & Volunteer", classes:["maintTitle"]},
			},
			
			{
			  tagDiv:{title:"Skill+"+small(" (PC/Elec-ER & Teaching)"), tags:[]},
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[                        
					/*{  
					  tagDiv:{title:"Computer/Robot/Electronics Install/Repair", tags:[]},
					},
					{  
					  tagDiv:{title:"Teaching (Maths, Prog)", tags:[]},
					},*/                					
				  ],
				},
			  ],
			},
			
			{
			  tagDiv:{title:"Skill"+small(" (Translator & Animator)"), tags:[]},   // Proficient
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[                        
					/*{  
					  tagDiv:{title:"Translator (ENG/FR)", tags:[]},
					},
					{  
					  tagDiv:{title:"Teen Summer Camp Animator", tags:[]},
					},*/					
				  ],
				},
			  ],
			},
			
			{
			  tagDiv:{title:"Other"+small(" (Caregiver, Event Org°...)"), tags:[]},
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[   
					/*{  
					  tagDiv:{title:"Elder/Family Caregiver", tags:[]},
					},                
					{  
					  tagDiv:{title:"Event Org°", tags:[]},
					},
					{  
					  tagDiv:{title:"Gardening/Construction", tags:[]},
					},*/					
				  ],
				},
			  ],
			},
		  ]
	  }
      ],
    },    
  ],
};
	




















/*** LIVE PROJs ***/
var liveProjsData = {
	subDivs:[
    {
      subDivs:[
        {
          title:{txt:"Projects [Live]", classes:["maintTitle"]},
        },
        {
          tagDiv:{title:"GPU-AI++"+small(" (M-Learning++, Traffic/Pathing++, Image-AI)"), tags:[ ]},
		  subDivs:[
			{
			  hidden:true,
			  subDivs:[                        
				{  
				  tagDiv:{title:"Machine-Learning: ", tags:[
				    "GPU M-Learning", "Bots Optim"+small(" (Act°/Strat)"),]},
				},
				{  
				  tagDiv:{title:"PathFinding: ", tags:[ "Traffic Sim", "GPU-PathFinding", ]},
				},
				{  
				  tagDiv:{title:"Image Analysis AI: ", tags:[
				    "Face Detect°", "Auto-Optim", ]},
				},
			  ],
			},
		  ],
		  
        },
        {
          tagDiv:{title:"Mgt++"+small(" (Tools/Metrics++, Objectives++, WorkForce++)"), tags:[ ]},
		  subDivs:[
			{
			  hidden:true,
			  subDivs:[   
				{  
				  tagDiv:{title:"", tags:[ "Async Tools", "Metrics++", "WorkForce Correct°" ]},
				},				
				{  
				  tagDiv:{title:"Bonus Objectives", tags:[]},
				  subDivs:[
					{
					  hidden:true,
					  subDivs:[                        
						{  
						  tagDiv:{title:"Tech: ", tags:[ 
						    "AI"+small(" (Assist+DataProc)"), "Gamificat°", "Energy...",  ]},
						},
						{  
						  tagDiv:{title:"Soft: ", tags:[ 
						    "Mentoring++", "RiskPrevent°++", "Ecology/Social...",  ]},
						},
					  ],
					},
				  ],
				},
			  ],
			},
		  ],
        },                
      ],
    },    
  ]
}





































/*** Fav Projs ***/
/*
var favProjsData = {
	subDivs:[
		{
		  title:{txt:"Projects of Interest", classes:["maintTitle"]},
		},
		
		{
			subDivs:[	
				
			]
		},				
	]
}
*/




var subDivs_ProjTargets =  [				
	{
	  tagDiv:{title:"AGILE++ Projects"+small(" (AgiStruct & Scope/Sprint++ & Pair/XP)"), tags:[ ],  },  // Mgt-Skills
	  subRatings:{title:"", S:85},
	  subDivs:[
		{
		  hidden:true,
		  subDivs:[ 
			//contracts["MAIN"],
			mgtSkills["AUTO"],  
			mgtSkills["AGILE"],
			{
			  tagDiv:{title:"AGILE++: ", tags:[ "Agile-Struct"+small("(MgtDuo|Sprint)"), "Sprint Correct°", "XP-Prog", ]},
			},
		  ],
		},
	  ],
	},
	
	{
	  tagDiv:{title:"Ambitious Projects"+small(" (Hi-Productivity & Hi-Quality)"), tags:[ ],  },
	  subRatings:{title:"", S:85},
	  subDivs:[
		{
		  hidden:true,
		  subDivs:[ 
			{
			  tagDiv:{title:"Hi-Productivity Projs"+small(" (Tasks/Tools++, WorkLoad/ChangeReq)"), tags:[ ],  },
			  subRatings:{title:"", S:85},
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[ 
					{
					  tagDiv:{title:"Tasks++ : ", tags:[ "Automation", "Bonus Dev-Tasks" ]},   // Lo-Tech Tasks Automation
					},
					{
					  tagDiv:{title:"Tools++ : ", tags:[ "Async CoWorking", "Prod/Qual Metrics" ]},
					},	
					{
					  tagDiv:{title:"WorkLoad++ : ", tags:[ "Holiday-Season Continuity", "Hi-Workload Mgt" ]},
					  // tagDiv:{title:"WorkLoad"+small(" (Continuity++, Hi-Workload++)"), tags:[  ]},
					  // subDivs:[
						// {
						  // hidden:true,
						  // subDivs:[ 
							// {
							  // tagDiv:{title:"Continuity (Holiday-Season Mgt)", tags:[  ]},
							// },
							// {
							  // tagDiv:{title:"Hi-Workload Mgt", tags:[  ]},
							// },				
						  // ],
						// },
					  // ],
					},
					{
					  tagDiv:{title:"", tags:[ "Lo-ChangeReq", "Release Freq" ]},
					},
				  ],
				},
			  ],
			}, 
			
			{
			  tagDiv:{title:"Hi-Quality Projs"+small(" (Success/Risk Mgt)"), tags:[ ]},
			  subRatings:{title:"", S:65},
			  subDivs:[
				{
				  hidden:true,
				  subDivs:[ 
					{
					  tagDiv:{title:"Quality: ", tags:[ "Value Features", "ROI(Tech...)", "Regression Prevent°", ]},
					},	
					{
					  tagDiv:{title:"Success Scopes: ", tags:[ "Corporate", "Product", "Project", small("Future-Project"),  ]},
					},
					{
					  tagDiv:{title:"Corrections: ", tags:[ "Lo-Workload Mgt", "Corp Issue Escalat°",  ]},
					},	
					{
					  tagDiv:{title:"Prevent°: ", tags:[ "Risk-Plan"+small("(Proj/Corp)"), "Risk-Limit", "Risk-Mgr", "StressTest", ]},
					},	
				  ],
				},
			  ],
			},
		  ],
		},
	  ],
	},
	
					
	
	{
	  tagDiv:{title:"Team-Building"+small(" (Training, Research, ProBono...)"), tags:[ ]},
	  subRatings:{title:"", S:75},
	  subDivs:[
		{
		  hidden:true,
		  subDivs:[ 
			{
			  tagDiv:{title:"", tags:[ "Agile Training/Mentoring", ]},
			},
			{
			  tagDiv:{title:"", tags:[ "CoWorking-Days & Offices++", ]},
			},
			{
			  tagDiv:{title:"", tags:[ "Research/PhD", "ProBono-Missions", "Instructor-Missions", ]},
			},							
		  ],
		},
	  ],
	},
];			
var projContractsData = {
	subDivs:[
		// {
			// subDivs:[ { title:{txt:"Availability [Contracts]", classes:["maintTitle"]}, } ]
		// },		
		{
			// tagDiv:{title:"AVAIL", tags:[ ]}, 
			subDivs:[				
				{
				  // title:{txt:"Contracts:", classes:["title2"]},
				  // classes:["title"],
				  tagDiv:{title:"Contracts : ", tags:[
					"AGILE++",
					"3-Months+",
					"PartTime"+small("[50-90%]"),
					"Flex-FullTime",
				  ]},  
				},	 
				// {
				  // tagDiv:{title:"", tags:[
					// "Mobility",  "TeleWork++", "PermaTraining",
				  // ]},  
				// },	 
				{
				  tagDiv:{title:"", tags:[
					"Mobility",  "Auto-Mgt",  "TeleWork++", "Training++",		  
				  ]},    
				  subDivs:[
					{
					  expandPrio:1,
					  hidden:true,
					  subDivs:[ 			
						// {
						  // tagDiv:{title:"Proj: ", tags:[
							// "Purpose++", "Strong Scope",  
						  // ]},
						// },				
						{
						  tagDiv:{title:"", tags:[
							  "Productivity"+small(" (Holiday,Overtime,Bonuses)"),
							  "Proj-Vision",
							  "Partnerships",						  
						  ]},
						  subDivs:[
							{
							  hidden:true,
							  subDivs:[ 			
								// {
								  // tagDiv:{title:"Prod: ", tags:[
									// "Overtime++"+small("(150%)"),   "Bonuses",						
								  // ]},
								// },
								{
								  tagDiv:{title:"Perma-Optims: ", tags:[
									"Updated Techs",  "Mgt Roles/Resources", "Sprint Schedule",
								  ]},
								},
								{
								  tagDiv:{title:"Partnerships: ", tags:[						
									"Educat°", "Research", "Security", "Social", "Medic", "Leisure",				
								  ]},   
								  //url:"http:/a/Educat°/Leisure/ER",
								},
								{
								  tagDiv:{title:"Proj: ", tags:[
									"Purpose++", "Strong Scope",  "Clear Needs"+small(" (Expertise/Time)"),
								  ]},
								},	
							  ]
							}
						  ]
						},	
						
						
						
						//contracts["MAIN"],
						
					  ],
					},
				  ],	  
				},				
			]
		},
		
		
		{		  
		  subDivs:[ { 
				// title:{txt:"Availability [Projects]", classes:["maintTitle"]},   // Projects of Interest
			} ]
		},
		{
			subDivs:[				
				{
				  tagDiv:{title:"Proj-Targets : ", tags:[ "AGILE++ Projs", "Ambitious Projs", "Team-Building", ]},  
				  subDivs:[{
					  hidden:true,
					  subDivs: subDivs_ProjTargets,					  
				  }]
				},
			],
		},				
		// {
			// subDivs: subDivs_ProjTargets,
		// },
	]
}















var rootData_Pers = {
  subDivs:[
    {
      title:{txt:"<span style='font-size:105%;'> ░ Christopher McGARRY</span>", classes:["maintTitle"]},
      // classes:["maintTitle"],
    },
    {
      tagDiv:{title:"", tags:[
        "FR",
        small("Age: ")+getAge(1983+310/365),
        small("XP: ")+getAge(2008+1/365),        
		{ENG:small("Visionary-Mediator-Entrepreneur"), FR:small("Visionnaire-Médiateur-Entrepreneur")},
      ]},
    },
    {
      tagDiv:{title:"✎🎓 Degrees: ", titleFR:"✎🎓 Diplômes: ",
		  tags:[			        
			{ENG:"IT-Engineer"+small("(2006)"), FR:"Ingénieur-IT"+small("(2006)"),},
			{ENG:small("HMI-Robotics"), FR:small("IHM-Robotique"),},
		  ]},
      subDivs:[
        {
          hidden:true,
          subDivs:[
			{  
              tagDiv:{title:"BAC+2: Maths-Sup/Spé"+small("(2003)"), tags:[]},
            }, 		  
            {  
              tagDiv:{title:"BAFA "+small("(Summer-Camp Animator)"), tags:[]},
            },
            {  
              tagDiv:{title:"BIA "+small("(Small Aircraft Pilot)"), tags:[]},
            },
            {  
              tagDiv:{title:"Security Accreditations "+small("(Secret & Elec)"), tags:[]},
            },
          ],
        },
      ],
    },
    {
      tagDiv:{title:"✈🌍 Mobility: ", titleFR:"✈🌍 Mobilité: ",  tags:[  //"LYON",          
		  {ENG:"Global", FR:"Globale"}, small(small("HiTech-Cities")),
      ]},
	  url:"http:/a/HiTech/LoAdmin Regions",
      subDivs:[
        {
          hidden:true,
          subDivs:[                        
            {  
              tagDiv:{title:"", tags:[ "EU"+small("-West"), "Americas",  "Asia"+small("-S.East"), ]},
            },
          ],
        },
      ],
    },    
    {
      tagDiv:{title:"✉🌐 Full-WebCV: ", alternateBg:true,  tags:[    // 🌌
        "chrismcg61.wixsite.com/home"
      ]},
      subDivs:[
        {
		  expandPrio:1,
          hidden:true,
          subDivs:[                        
            {  
              tagDiv:{title:"✉📞 Mail" +small("(Pro)")+ " & Tel: ", alternateBg:true, tags:[ "mcgarrychristopher<b>@</b>"+small("yahoo.fr") ]},   // Mail(Pro)
              subDivs:[
                {
                  hidden:true,
                  subDivs:[                        
                    {  
                      tagDiv:{title:"Tel: ", alternateBg:true, tags:[ "0635915517", small("10am-7pm"+small(" (CET)")),  ]},
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
	
	/*
	{
      title:{txt:" &nbsp ",   classes:["interDiv"]},
      // classes:["maintTitle"],
    },	
	{
      // tagDiv:{title:"", tags:[ ]},
      subDivs:projContractsData.subDivs,
	  classes:["title2"],
    },
	*/
	
  ],
};



var projContractsData_Container = {
  subDivs:[{
	  subDivs:[
		{
		  title:{txt:"Preferred Missions", classes:["maintTitle"]},  //Bonus Info
		  // classes:["maintTitle"],
		},
			
		{
		  // tagDiv:{title:"", tags:[ ]},
		  subDivs:projContractsData.subDivs,
		  classes:["title2"],
		},
		
	  ],
  }]
};

















var subDivsSTB = [ { hidden:true,
			subDivs:[
				{tagDiv:{title:"TV-Num STB Dev (Middleware Drivers, WebApp...)", tags:[ ]},},
				{tagDiv:{title:"", tags:[ roleTags["EXPERT"], processTags["AGILE"], ]},},
				{tagDiv:{title:"", alternateBg:true, tags:[ "Linux","C,C++,JS,Dart","Git&Co", "Jira,Bugzilla", "VStudio,VMware,Eclipse",  ]},},
				{tagDiv:{title:"", tags:[ techSkills["WebAPP"].tagDiv.title, techSkills["MW"].tagDiv.title,techSkills["Tools"].tagDiv.title, ]},
					subDivs:[{ hidden:true,
						subDivs:[ techSkills["MW"],techSkills["Tools"],  webAppSkills["Generic"],webAppSkills["STB"], ]
					}]
				},
			],},];
var subDivsEmbed = [ { hidden:true,
			subDivs:[
				{tagDiv:{title:"Embedded Dev (Automation/Security/Drivers...)", tags:[ ]},},
				{tagDiv:{title:"", tags:[ "API/UTs", processTags["CodeQual"] ]},},
				{tagDiv:{title:"", alternateBg:true, tags:[ 
					"Linux", "C,JS,Java"+small(",Assembly"), "Git&Co", "Jira,Bugzilla", small("VStudio,VMware,Eclipse"),  ]},},
				// techSkills["Embed"],
			],},];
var subDivsGamedev = [ { hidden:true,
			subDivs:[
				{tagDiv:{title:"GameDev (GamePlay Scripts, Engine, Tools)", tags:[ ]},},
				{tagDiv:{title:"", tags:[ roleTags["LEAD"],roleTags["EXPERT"],   processTags["AUTO"], processTags["AGILE"], ]},},
				{tagDiv:{title:"", alternateBg:true, tags:[ 
					"Linux","C,C++,C#,Lua,JS","Git&Co", "Jira,Bugzilla", "VStudio",  ]},},
				{tagDiv:{title:"", tags:[ techSkills["3D"].tagDiv.title, techSkills["GameDev"].tagDiv.title, techSkills["AI"].tagDiv.title, techSkills["MW"].tagDiv.title,techSkills["Tools"].tagDiv.title, ]},
					subDivs:[{ hidden:true,
						subDivs:[ techSkills["GameDev"],techSkills["3D"],techSkills["MW"],techSkills["Tools"], aiSkills["Generic"],aiSkills["GAME"], ]
					}]
				},
			],},];



/*** MISSIONS ***/
var ParisESN = ""+small("Paris-ESN");
START_DATE = 2004.5;
var missionsByDate = {
  subDivs:[
    {
      type:"OTHER",
	  skippable:true,
      dates:getDate(2),
	  region:"London",
      tagDiv:{title:"Holomatix"+small("  (Internship) [WebAds]"), tags:[ ]},
	  classesBis:["expTitle0"],
    },
	{
      dates:getDate(7),
	  tagDiv:{title:"", tags:[ ]},
    },
	
    { 
      type:"Embed",
      dates:getDate(3),
	  region:"Istres",
      tagDiv:{title:"Dassault"+small(" (Avionics) [EMBED]"), tags:[ ]},
	  subDivs: createPrioDivs(subDivsEmbed),
	  classesBis:["expTitle1"],
    },
    { 
	  //classes:["hilightHi"],
      type:"GameDev",
      dates:getDate(4),
	  region:"Lyon",  // +"&nbsp&nbsp"
      tagDiv:{title:"Ubisoft/Etranges-Lib"+"<sup><i>ul</i></sup>", tags:[ ]},
	  url:"https://en.wikipedia.org/wiki/%C3%89tranges_Libellules",
	  subDivs: createPrioDivs(subDivsGamedev),
	  classesBis:["expTitle3"],
    },
	{ 
      type:"GameDev",
      dates:getDate(8),
	  region:"Lyon",
      tagDiv:{title:"Ubisoft/Phoenix-Studio", tags:[ ]},
	  url:"https://fr.wikipedia.org/wiki/Phoenix_Studio",
	  subDivs: subDivsGamedev,
	  classesBis:["expTitle3"],
    },
	{
      type:"OTHER",
	  skippable:true,
      dates:getDate(1),
	  region:"Lyon",
      tagDiv:{title:"Sword"+small(" (HealthServices) [WEB]"), tags:[ ]},
	  classesBis:["expTitle0"],
    },
	{
      type:"Embed",
      dates:getDate(4),
	  region:ParisESN,
      tagDiv:{title:"NeoPost/Nagra"+small(" [EMBED]"+small(" (StampBot/Secu)")), tags:[ ]},   // Canal+
	  subDivs: subDivsEmbed,
	  classesBis:["expTitle1"],
    },
	{
      type:"STB",
      dates:getDate(5),
	  region:ParisESN,
      tagDiv:{title:"Orange/Soft@Home"+small(" [TV-STB]"), tags:[ ]},
	  subDivs: createPrioDivs(subDivsSTB),
	  classesBis:["expTitle2"],
    },
	{
      type:"OTHER",
      dates:getDate(2),
	  region:ParisESN,
      tagDiv:{title:"Technicolor/SagemCom"+small(" [Net/VoIP]"), tags:[ ]},
	  classesBis:["expTitle0"],
    },
	{
      type:"STB",
      dates:getDate(4),
	  region:ParisESN,
      tagDiv:{title:"Bouygues"+small(" [TV-STB]"), tags:[ ]},
	  subDivs: subDivsSTB,
	  classesBis:["expTitle2"],
    },
	{
      type:"OTHER",
	  skippable:true,
      dates:getDate(1),
	  region:ParisESN,
      tagDiv:{title:"Parrot"+small(" [Drones/TestBench]"), tags:[ ]},
	  classesBis:["expTitle0"],
    },
	{
      type:"STB",
      dates:getDate(4),
	  region:ParisESN,
      tagDiv:{title:"Cisco"+small(" (WebApp-3D) [TV-STB]"), tags:[ ]},
	  subDivs: subDivsSTB,
	  classesBis:["expTitle2"],
    },	
	{
      dates:getDate(1),
	  tagDiv:{title:"", tags:[ ]},
    },
	{
      type:"GameDev",
      dates:getDate(9),
	  region:"Paris",
      tagDiv:{title:"Indie-Project"+small(" [Game-Proto]"), tags:[ ]},  // MyProj
	  subDivs:[ { hidden:true,
			expandPrio:1,
			subDivs:[
				{tagDiv:{title:"3D-WebApp Prototype & Tech Survey"+small(" (GPU-Prog & Gamification)"), tags:[ ]},},
				{tagDiv:{title:"Unity3D Game Prototype"+small(" (Procedural Design & AI/M-Learning)"), tags:[ ]},},
				{tagDiv:{title:"", tags:[ roleTags["MGR"],roleTags["EXPERT"], processTags["AUTO"], ]},},
				{tagDiv:{title:"", alternateBg:true, tags:[ "Unity"+small("(Unreal)"), "C#","JS","Lua","WebGL/Shaders", "AngularJS","CSS3D", "Git/SVN",  ],  },},
				{tagDiv:{title:"", tags:[ techSkills["3D"].tagDiv.title, techSkills["GameDev"].tagDiv.title, techSkills["AI"].tagDiv.title, techSkills["WebAPP"].tagDiv.title, ]},
					subDivs:[{ hidden:true,
						subDivs:[ techSkills["GameDev"],techSkills["3D"], aiSkills["Generic"],aiSkills["GAME"], ]
					}]
				},
			],},],
	  classesBis:["expTitle3"],
    },
	{
      type:"OTHER",
      dates:getDate(8),
	  region:"Normandy",
      tagDiv:{title:"Family Caregiver"+small(" + Teaching & Co"), titleFR:"Aidant Familial"+small(" + Professeur & Co"),  tags:[ ]},
	  classesBis:["expTitle0"],
    },
	{
      type:"WebApp++",
      dates:getDate(10),
	  region:"France",
      tagDiv:{title:"Indie-Project"+small(" [WebApp-Proto]"), tags:[ ]},
	  subDivs:[ { hidden:true,
			// classes:["expTitle2"],
			// expandPrio:1,
			subDivs:[
				{tagDiv:{title:"3D WebApp & Tech Survey (GPU-Prog, AI/M-Learning & Gamification)", tags:[ ]},},
				{tagDiv:{title:"", tags:[ roleTags["MGR"],roleTags["EXPERT"], processTags["AUTO"], ]},},
				{tagDiv:{title:"", alternateBg:true, tags:[ 
					"JS", "C#", "AngularJS"+small("(React/Vue)"), "GitHub", "Lua,WebGL/Shaders","CSS3D" ]},},
				{tagDiv:{title:"", tags:[ techSkills["3D"].tagDiv.title, techSkills["WebAPP"].tagDiv.title, techSkills["AI"].tagDiv.title, techSkills["GameDev"].tagDiv.title, ]},
					subDivs:[{ hidden:true,
						subDivs:[ techSkills["3D"], webAppSkills["Generic"],webAppSkills["Std"], aiSkills["Generic"],aiSkills["FLEX"], techSkills["GameDev"], ]
					}]
				},
			],},],
	  // classes:["backColHi3"],  //backColHi3  //expTitle2
	  classesBis:["expTitle3"],
    },
	{
      dates:getDate(1),
	  tagDiv:{title:"", tags:[ ]},
    },	
  ],  
}





var missionsByDate2 = {
	subDivs:[
		{
		  title:{txt:"Experience", txtFR:"Expériences",  classes:["maintTitle"]},
		  // classes:["maintTitle"],
		},
		{
			// classes:["hilightHi"],
			title:{txt:"", classes:["title"]},
			subDivs:[
				{
				  // classes:["backColHi3"],
				  // classes:["expTitle"],
				  subDivs:getMissionsByDateInv(missionsByDate.subDivs),
				  // subDivs: missionsByDate.subDivs,
				},        
			],
		},
	]
}





var missionsByType = {
  subDivs:[
    {
      title:{txt:"Projects [History]", classes:["maintTitle"]},
      // classes:["maintTitle"],
    },
    
    {
      classes:["hilightHi"],
	  title:{txt:"WebApp++", classes:["title"]},
      subDivs:[
        {
		  classes:["backColHi3"],
          subDivs:getMissionsByType("WebApp++", missionsByDate.subDivs),
        },
		{
		  subDivs:[
			{
			  subDivs:[
				{
					tagDiv:{title:"", tags:[ roleTags["MGR"], roleTags["EXPERT"],   processTags["AUTO"], ]},
				},
			  ]
			},
		  ]
		},	
        {
          subDivs:[
            {
              subDivs:[ 
			    techSkills["3D"], 
				webAppSkills["Generic"], webAppSkills["Std"], 			    
				aiSkills["Generic"], aiSkills["FLEX"], 
			  ],
            },
          ],          
        },        
      ],
    },
    {
      classes:["hilightHi"],
	  title:{txt:"GameDev", classes:["title"]},
      subDivs:[
        {
		  classes:["backColHi2"],
          subDivs:getMissionsByType("GameDev", missionsByDate.subDivs),
        },
		{
		  subDivs:[
			{
			  subDivs:[
				{
					tagDiv:{title:"", tags:[ 
					  roleTags["MGR"], roleTags["LEAD"], roleTags["EXPERT"],   
					  processTags["AUTO"], processTags["AGILE"], 
					]},
				},
			  ]
			},
		  ]
		},
        {
          subDivs:[
            {
              subDivs:[  
			    techSkills["GameDev"],  techSkills["3D"],  
				techSkills["MW"],techSkills["Tools"],
				aiSkills["Generic"], aiSkills["GAME"],   
			  ],
            },
          ],          
        },
      ],
    },
	{
      classes:["hilightHi"],
	  title:{txt:"SetTopBox Dev", classes:["title"]},
      subDivs:[
        {
		  classes:["backColHi"],
          subDivs:getMissionsByType("STB", missionsByDate.subDivs),
        },
		{
		  subDivs:[
			{
			  subDivs:[
				{
					tagDiv:{title:"", tags:[  roleTags["EXPERT"],   
						processTags["AGILE"], ]},
				},
			  ]
			},
		  ]
		},
        {
          subDivs:[
            {
              subDivs:[  			    
			    techSkills["MW"],techSkills["Tools"],   
				webAppSkills["Generic"], webAppSkills["STB"], 
				],
            },
          ],          
        },        
      ],
    },
	
	{
	  classes:["hilightLo"],
      title:{txt:"Embedded Dev", classes:["title"]},
      subDivs:[
        {
		  classes:["backColLo2"],
          subDivs:getMissionsByType("Embed", missionsByDate.subDivs),
        },
		{
		  subDivs:[
			{
			  subDivs:[
				{
					tagDiv:{title:"", tags:[  "API/UTs", processTags["CodeQual"] ]},
				},
			  ]
			},
		  ]
		},
        {
          subDivs:[
            {
              subDivs:[ techSkills["Embed"],   ],
            },
          ],          
        },        
      ],
    },
	{
	  classes:["hilightLo"],
      subDivs:[
	  {
		  subDivs:[
		  {
			
		  title:{txt:"Other", classes:["title", ]},
		  // classes:["hilightLo"],
		  subDivs:[
			{
			  classes:["backColLo"],
			  subDivs:getMissionsByType("OTHER", missionsByDate.subDivs),
			},
			
			{
			  subDivs:[
				{
				  subDivs:[
					{
						tagDiv:{title:"", tags:[  ]},
					},
				  ]
				},
			  ]
			},
			{
			  subDivs:[
				{
				  subDivs:[ techSkills["Misc"],   ],
				},
			  ],          
			},
		  ],
		  }
		  ]
		},
	]
	}
  ],
};


