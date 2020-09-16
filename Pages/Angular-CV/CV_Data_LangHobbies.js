var rating = 85;
var ratingMin = rating-15;

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
	{"title" : "Tech Research"
			+ subTitle("Coding/Mgt Innov"),
		"rating" : rating,
		// "expandMode": 0,
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
		+ subTitle("Piano, Guitar, Singing"),
		"rating" : rating,
		"hiddenSkills" : [ 
			{"title" : "Piano",
				"rating" : rating,
			},
			{"title" : "Guitar, Singing, Show Org°",
				"rating" : rating-10,
			},
			
		],    
	},
	{"title" : "Sports"
		+ subTitle("Running, Football/Tennis, Ski…"),
		"rating" : rating,
		"hiddenSkills" : [ 
			{"title" : "Running/Bike",
				"rating" : rating,
			},
			{"title" : "Tennis/Football",
				"rating" : rating,
			},
			{"title" : "Ski/Snowboarding",
				"rating" : rating,
			},
		],    
	},
	{"title" : "Culture/Arts"
		+ subTitle("Series, Books, Evts"),
		"rating" : rating,
		"hiddenSkills" : [ 
			{"title" : "TV Series / Books"
				+ subTitle("SF, Fantasy, Thriller"),
				"rating" : rating-10,
			},
			{"title" : "Concerts",
				"rating" : rating-10,
			},
			{"title" : "Misc"
				+ subTitle("FishTank, Gardening"),
				"rating" : rating-10,
			},
			
		],    
	},
];

var miniJobs = [
	{"title" : "MiniJobs",
		"rating" : rating,
		"expandMode": 0,
		"hiddenSkills" : [
		  {"title" : "Teen Summer Camp Animator",
			"rating" : rating,
		  },
		  {"title" : "Computer Install/Repair",
			"rating" : rating,
		  },
		  {"title" : "Teaching (Maths, Prog)",
			"rating" : ratingMin,
		  },
		  
		],    
	},
	{"title" : "Volunteer",
		"rating" : ratingMin,
		"expandMode": 0,
		"hiddenSkills" : [
		  {"title" : "Event Org°"
			+ subTitle("Stage/Tables/Buffet Setup"),
			"rating" : ratingMin,
		  },
		  {"title" : "Elder/Dependent People Assist",
			"rating" : ratingMin,
		  },
		  {"title" : "Translator (ENG/FR)",
			"rating" : ratingMin,
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