var rating = 95;

var languages = [
	{"title" : "English / French",
		"rating" : 95,
		"hiddenSkills" : [],    
	},
	{"title" : "German",
		"rating" : 80,
		"hiddenSkills" : [],    
	},
	{"title" : "Spanish",
		"rating" : 70,
		"hiddenSkills" : [],    
	},
	{"title" : "Chinese",
		"rating" : 50,
		"hiddenSkills" : [],    
	},
];

var hobbiesTech = [
	{"title" : "Tech Research",
		"rating" : rating,
		"hiddenSkills" : [
		  {"title" : "Advanced Coding"
			+ subTitle("AI, GPU, Gam°"),
			"rating" : rating,
		  },
		  {"title" : "Advanced Mgt"
			+ subTitle("Autonomy & Perf Optim"),
			"rating" : rating,
		  },
		],    
	},
	{"title" : "Next-Gen Prog"
		+ subTitle("3D, Games, AI, WebApps"),
		"rating" : rating,
		"hiddenSkills" : [ ],    
	},
	{"title" : "Gaming & Dev/Test Community",  // 
		"rating" : rating,
		"hiddenSkills" : [		
			{"title" : "90's ► 2010's",
				"rating" : rating,
			},
			{"title" : "Solo ► Coop ► Competitive",    // Adventure ► Action   // Casual ► Competitive/Strat
				"rating" : rating,
			},
			{"title" : "Innov / Challenging"
				+ subTitle("Story/Gameplay"),
				"rating" : rating,
			},
			
			{"title" : "Early-Access"
				+ subTitle("Beta-Testing & Dev Feedback"),
				"rating" : rating,
			},
			
		],    
	},
	{"title" : "Documentaries"
		+ subTitle("Tech, Science, Mgt"),
		"rating" : rating,
		"hiddenSkills" : [ ],    
	},
];

var hobbies = [
	{"title" : "Music"
		+ subTitle("Piano, Guitar & Co"),
		"rating" : rating,
		"hiddenSkills" : [ 
			{"title" : "Piano",
				"rating" : rating,
			},
			{"title" : "Guitar",
				"rating" : rating,
			},
			{"title" : "Singing",
				"rating" : rating,
			},
		],    
	},
	{"title" : "Sports"
		+ subTitle("Running, Foot/Tennis, Ski..."),
		"rating" : rating,
		"hiddenSkills" : [ 
			{"title" : "Running",
				"rating" : rating,
			},
			{"title" : "Tennis/Foot",
				"rating" : rating,
			},
			{"title" : "Ski",
				"rating" : rating,
			},
		],    
	},
	{"title" : "Culture/Arts"
		+ subTitle("Series, Books, Events"),
		"rating" : rating,
		"hiddenSkills" : [ 
			{"title" : "TV Series / Books"
				+ subTitle("SF, Fantasy, Thriller"),
				"rating" : rating,
			},
			{"title" : "Concerts",
				"rating" : rating,
			},
			{"title" : "Misc"
				+ subTitle("FishTank, Garden"),
				"rating" : rating,
			},
			
		],    
	},
];

var miniJobs = [
	{"title" : "MiniJobs",
		"rating" : rating,
		"hiddenSkills" : [
		  {"title" : "Teen Summer Camp Animator",
			"rating" : rating,
		  },
		  {"title" : "Computer Install/Repair",
			"rating" : rating,
		  },
		  {"title" : "Teaching (Maths, Prog)",
			"rating" : rating,
		  },
		  
		],    
	},
	{"title" : "Volunteer",
		"rating" : rating,
		"hiddenSkills" : [
		  {"title" : "Event Org° (Stage/Tables/Buffet Setup)",
			"rating" : rating,
		  },
		  {"title" : "Elder/Dependent People Assist",
			"rating" : rating,
		  },
		  {"title" : "Translator (ENG/FR)",
			"rating" : rating,
		  },		  
		  
		],    
	},
];


function myTilesRight_LangHobbies(){
	
  var myTiles = [
		
		{"title": "Languages",
			"style": {
			  // "background-color" : "rgba(200,200,200,0.9)",
			  // "opacity" : "0.5",
			},
			"subDivs": [
			  {
				"title": "",
				"catId": "blackOnGrey",
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": languages,
				  },
				],
			  },
			],
		},
		
		{"title": "Hobbies [Tech]",
			"style": { },
			"subDivs": [
			  {
				"title": "",
				// "catId": "blackOnGrey",
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": hobbiesTech,
				  },
				],
			  },
			],
		},
		
		{"title": "Hobbies [Non-Tech]",
			"style": { },
			"subDivs": [
			  {
				"title": "",
				"catId": "greyOnGrey",
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": hobbies,
				  },
				],
			  },
			],
		},
		
		{"title": "MiniJobs",
			"style": { },
			"subDivs": [
			  {
				"title": "",
				// "catId": "greyOnGrey",
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": miniJobs,
				  },
				],
			  },
			],
		},
  
  ];
	
  return myTiles;
};