var customCorps = [
  {
    "title" : "Dassault",
	"type":	{
		"title":"ISTRES",
		"desc":"Istres (Marseille)"
	},
    "catId": 3,
    "dates": getDates( 3 ),      
    "ratings": getRatingList(ratingD,ratingD,ratingA), 
  },
  
  {
    "title" : "ELB",
	"type":	{
		"title":"LYON",
		"desc":"Lyon Contract"
	},
    "catId": 1,
    "dates": getDates( 3 ),  	
    "ratings": getRatingList(ratingD,ratingD,ratingD), 
  },  
  {
    "title" : "Phoenix",
	"type":	{
		"title":"LYON",
		"desc":"Lyon Contract"
	},
    "catId": 1,
    "dates": getDates( 9 ),         
    "ratings": getRatingList(ratingD,ratingD,ratingD), 
  },
  
  {
    "title" : "Sword",
	"type":	{
		"title":"LYON-SSII",
		"desc":"Lyon SSII Mission"
	},
    "catId": 4,
    "dates": getDates( 1 ),       
    "ratings": getRatingList(ratingD,ratingD,ratingD), 
  },  

  {
    "title" : "NeoPost",
	"type":	altenType,
    "catId": 3,
    "dates": getDates( 2 ),     
    "ratings": getRatingList(ratingD,ratingD,ratingD), 
  },  
  
  {
    "title" : "Nagra",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),    
    "ratings": getRatingList(ratingD,ratingD,ratingD), 
  }, 

  {
    "title" : "SAH",
	"type":	altenType_Rennes,
    "catId": 2,
    "dates": getDates( 5 ),         
    "ratings": getRatingList(ratingD,ratingD,ratingD), 
  },  

  {
    "title" : "Technicolor",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),   
	"ratings": getRatingList(ratingD,ratingD,ratingD), 
  }, 
  {
    "title" : "SagemCom",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),         
	"ratings": getRatingList(ratingD,ratingD,ratingD), 
  }, 

  {
    "title" : "Bouygues",
	"type":	altenType,
    "catId": 2,
    "dates": getDates( 4 ),     
	"ratings": getRatingList(ratingD,ratingD,ratingD), 
  },  
    
  {
    "title" : "Parrot",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),    
	"ratings": getRatingList(ratingD,ratingD,ratingD), 
  }, 

  {
    "title" : "Cisco",
	"type":	altenType,
    "catId": 2,
    "dates": getDates( 5 ),         
	"ratings": getRatingList(ratingD,ratingD,ratingD), 
  },

  {
    "title" : "Unity3D Proj",
    "catId": 1,
    "dates": getDates( 6 ),         
  },
  {
    "title" : "GPU/AI WebApps",
    "catId": 0,
    "dates": getDates( 6 ),         
  },

];

var customRoles = [];
customRoles["Mgr"] = "Proj Mgr";
customRoles["Tech"] = "Tech Expert";
customRoles["Lead"] = "Team Lead";
customRoles["Scrum"] = "SCRUM Master";

function customCategories(){
	var category = defaultCategories[0];
	category["title"] = "WebApps Dev";
	setCatProperty(category, "roles", [ customRoles["Mgr"], customRoles["Tech"], ]);
	setCatProperty(category, "mgtSkills", [ mgtSkills["SELF"] ]);
	setCatProperty(category, "subSkills", [ techSkills["APP"], techSkills["GAMIF"], techSkills["AI"], techSkills["3D"], techSkills["GPU"] ]);
  
	category = defaultCategories[1];
	category["title"] = "Game Dev";	
	setCatProperty(category, "roles", [  customRoles["Mgr"], customRoles["Lead"], customRoles["Tech"], customRoles["Scrum"], ]);
	setCatProperty(category, "mgtSkills", [ mgtSkills["SELF"],  mgtSkills["Agile"] ]);
	setCatProperty(category, "subSkills", [ techSkills["GAMEDEV"], techSkills["AI"], techSkills["3D"], techSkills["MW"] ]);
	
	category = defaultCategories[2];
	category["title"] = "STB Dev (TV Box)";	
	setCatProperty(category, "roles", [ customRoles["Lead"], customRoles["Tech"], customRoles["Scrum"], ]);
	setCatProperty(category, "mgtSkills", [ mgtSkills["SELF"],  mgtSkills["Agile"], mgtSkills["Code"] ]);
	setCatProperty(category, "subSkills", [ techSkills["MW"] ]);
	
	category = defaultCategories[3];
	category["title"] = "Embedded Dev";	
	setCatProperty(category, "roles", [ ]);
	setCatProperty(category, "mgtSkills", [ mgtSkills["AutoCode"], ]);
	setCatProperty(category, "subSkills", [ techSkills["EMBED"] ]);
	
	category = defaultCategories[4];
	category["title"] = "Other";	
	setCatProperty(category, "roles", [ ]);
	setCatProperty(category, "mgtSkills", [ ]);
	setCatProperty(category, "subSkills", [ techSkills["MISC"] ]);
}

function resetCatProperty(cat, key){
	cat["subDivs"][0][key] = [];
}
function addCatProperty(cat, key, value){
	cat["subDivs"][0][key].push( value );
}
function setCatProperty(cat, key, values){
	cat["subDivs"][0][key] = [];
	cat["subDivs"][0][key] = values;
}


var customProjs = [
  
  {
    "title" : "AI (GPU, Machine-Learning, Pathing, Image Data)",
    //"rating" : 50,
    "hiddenSkills" : [
		{
			"title" : "Machine-Learning",
			//"rating" : 50,
			"hiddenSkills" : [
			    /*
				Test Multiple Strats per GPU frame
				Testing All possible situations & Outcomes
				*/
				{
				"title" : "GPU-Accelerated Machine Learning",
				},	
				{
				"title" : "Game Strategies Optim",
				},
				{
				"title" : "Coop AIs Sync Optim",
				},
				{
				"title" : "Rating : Single Action -VS- Action Sequence",
				},			
			],
		},
		
		{
			"title" : "PathFinding / Traffic Simulation",
			"hiddenSkills" : [
				{
				"title" : "Hi-Precision Time-Based PathFinding",
				},	
				{
				"title" : "Dynamic PathFinding",
				},	
				{
				"title" : "Intersection Congestion Simulation & Optim",
				},
			],
		},
		{
			"title" : "Image Analysis ► Face Detection AI",
			"hiddenSkills" : [
				{
				"title" : "Contiguous Pixels Luminance Distrib Analysis",
				//"rating" : 50,
				},
				{
				"title" : "Refine Pattern Search Config w/ User Prompt",
				},
			],
		},
    ],    
  },
  

  {
    "title" : "Team Mgt ► Advanced Self-Optim Techniques",
    //"rating" : 50,
    "hiddenSkills" : [
      {
        "title" : "Async Team Coop Tools <i>(Solo Dev Time Preservation)</i>",
        //"rating" : 50,
      },
      {
        "title" : "WorkForce ► Expansion/Split/Cohesion <small>(Needs & Methods)</small>",
        //"rating" : 50,
      },
      {
        "title" : "Metrics ► Advanced Productivity/Quality <small>(Methods/Results)</small>",
      },

      {
        "title" : "HQ Tech Objectives <small>(AI, Global Brain, Energy, Gamification)</small>",
      },
      {
        "title" : "HQ Soft Objectives <small>(Mentoring, Anticipation, Ecology, Social)</small>",
      },
      // BONUS : Tech Innovation (AI, Energy, Teaching/Learning, Global Brain), Ecology, Social...

      /*
       {
        "title" : "Team-Based Targets <i>(Innovation, Tech, Larger Scope)</i>",
      },
      */
    ],    
  },
  
]

var customStudies = [
  {
    "title" : "MAJOR : VR, HMI & Robotics Dev",
    //"rating" : 95,
  },
  {
    "title" : "Minor : Electronics / Networking",
  },
];

var customOtherDegrees = [
  {
    "title" : "BAFA : Summer Camp Animator",   //Activity Camp Coach
    //"rating" : 95,
  },
  {
    "title" : "BIA : Airplane Pilot Basics (Theory & Practice)",  //Aeronautics
  },
];


















function myLanguages()
{
	var languages = [];
	
  languages.push( {
    "title" : "English / French",
    "rating" : 95,
    "hiddenSkills" : [ ],    
  });
  languages.push( {
    "title" : "German",
    "rating" : 85,
    "hiddenSkills" : [ ],    
  });
  languages.push( {
    "title" : "Spanish",
    "rating" : 75,
    "hiddenSkills" : [ ],    
  });
  languages.push( {
    "title" : "Chinese",
    "rating" : 50,
    "hiddenSkills" : [ ],    
  });
  
  return languages;
}


function myHobbiesTech()
{
	var hobbiesTech = [];
	
  hobbiesTech.push( {
    "title" : "Tech Research",
    "rating" : 95,
    "hiddenSkills" : [ 
      {
        "title" : "A",
        "rating" : 95,
      },
      {
        "title" : "B",
        "rating" : 95,
      },
    ],    
  });  

  hobbiesTech.push( {
    "title" : "3D Game / WebApp / AI Script Prog",
    "rating" : 95,
    "hiddenSkills" : [  ],    
  });  

  hobbiesTech.push( {
    "title" : "Versatile Gamer (Comp & Indie)",
    "rating" : 90,
    "hiddenSkills" : [ 
      {
        "title" : "Competitive / Challenging",
        "rating" : 90,
      },
      {
        "title" : "Innovative Story & Gameplay Mechanics",
        "rating" : 90,
      },
    ],    
  }); 

  hobbiesTech.push( {
    "title" : "Docs (Tech, Science, Mgt)",
    "rating" : 90,
    "hiddenSkills" : [ 
      {
        "title" : "A",
        "rating" : 90,
      },
    ],    
  }); 
  
  return hobbiesTech;
}


function myHobbiesOther()
{
	var hobbiesOther = [];
	var rating = 90;
	
	hobbiesOther.push( {
		"title" : "Musician",
		"rating" : rating,
		"hiddenSkills" : [ 
			{
			"title" : "Piano",
			"rating" : rating,
			"hiddenSkills" : [  ],    
			},	
			{
			"title" : "Guitar",
			"rating" : 70,
			"hiddenSkills" : [  ],    
			},	
			{
			"title" : "Singing",
			"rating" : 70,
			"hiddenSkills" : [  ],    
			},	
		],    
	});  

	rating = 80;
	hobbiesOther.push( {
		"title" : "Sports",
		"rating" : rating,
		"hiddenSkills" : [ 
			{
			"title" : "Bike Riding / Running <small>(Cross, Semi-Marathon)</small>",
			"rating" : rating,
			"hiddenSkills" : [  ],    
			},	
			{
			"title" : "Ski/Snowboard",
			"rating" : rating,
			"hiddenSkills" : [  ],    
			},
			{
			"title" : "Football, Tennis, Table Tennis, Badminton",
			"rating" : rating,
			"hiddenSkills" : [  ],    
			},			
		
		],    
		}); 

	rating = 70;
	hobbiesOther.push( {
		"title" : "Culture/Arts",
		"rating" : rating,
		"hiddenSkills" : [ 
			{
			"title" : "TV Shows / Books <small>(SF, Fantasy, Thriller)</small>",
			"rating" : rating,
			"hiddenSkills" : [  ],    
			},
			{
			"title" : "Concerts / Sports Events",
			"rating" : rating,
			"hiddenSkills" : [  ],    
			},
		],    
		}); 
		
	rating = 70;
	hobbiesOther.push( {
		"title" : "Other",
		"rating" : rating,
		"hiddenSkills" : [ 
			{
			"title" : "Fish Tank, Gardening",
			"rating" : rating,
			"hiddenSkills" : [  ],    
			},
			
		],    
		}); 

	return hobbiesOther;
}


function myMiniJobs()
{

  var miniJobs = [];

  miniJobs.push( {
    "title" : "IT Internship <small>('Holomatix' <span class='dates'>LONDON</span>)</small>",
    "rating" : 95,
    "hiddenSkills" : [  ],    
  }); 
  
  miniJobs.push( {
    "title" : "Teen Summer Camp Animator",
    "rating" : 95,
    "hiddenSkills" : [  ],    
  }); 
  
  miniJobs.push( {
    "title" : "Teaching (Maths, Prog)",
    "rating" : 95,
    "hiddenSkills" : [  ],    
  });  

  miniJobs.push( {
    "title" : "Computer Install/Repair",
    "rating" : 90,
    "hiddenSkills" : [  ],    
  }); 

  miniJobs.push( {
    "title" : "Event Org° (Tables, Stage Setup...)",
    "rating" : 80,
    "hiddenSkills" : [  ],    
  }); 

  miniJobs.push( {
    "title" : "Elder/Dependent People Helper",
    "rating" : 80,
    "hiddenSkills" : [  ],    
  }); 

  miniJobs.push( {
    "title" : "Translator (ENG/FR)",
    "rating" : 70,
    "hiddenSkills" : [  ],    
  }); 
  
  return miniJobs;
  
}

function myTechs()
{
	var techs = [];
	var n = -1;
	var rating = 95;

	n++;
	techs.push(
	   {
		"title" : "Prog Languages",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "JS",
			"rating" : rating,
			"hiddenSkills" : [
			  {
				"title" : "Three, Angular, Jasmine(UT), MultiThreadJS",
				"rating" : rating,
			  },
			  {
				"title" : "React, Node...",
				"rating" : 60,
			  },
			],
		  },
		  {
			"title" : "C, C++, C#",
			"rating" : rating,
			"hiddenSkills" : [
			  {
				"title" : "Qt",
				"rating" : 75,
			  },
			],
		  },
		  {
			"title" : "Shaders, GPU Prog & 3D Graphics SDKs",
			"rating" : rating,
			"hiddenSkills" : [
			  {
				"title" : "GLSL, WebGL, OpenGL, DX, Wii & PS2/3 SDKs",
				"rating" : rating,
			  },
			],
		  },
		  {
			"title" : "Lua",
			"rating" : 75,
		  },
		  {
			"title" : "Python",
			"rating" : 60,
		  },
		  
		  {
			"title" : "Dart, Flash AS, Java, SQL, PHP",
			"rating" : 50,
		  },
		  		  
		],    
	  });
	techs["PROG"] = techs[n];

	n++;
	techs.push(
	   {
		"title" : "Tools",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "Windows/Linux Env (VMs)",
			"rating" : rating,
			"hiddenSkills" : [ ],
		  },
		  
		  {
			"title" : "Versioning (Git & Co, SVN, MS SS, P4)",
			"rating" : rating,
			"hiddenSkills" : [ ],
		  },
		  {
			"title" : "Bug Trackers (Jira...)",
			"rating" : rating,
			"hiddenSkills" : [ ],
		  },
		  
		  {
			"title" : "SO & Co (Codepen...)",
			"rating" : rating,
			"hiddenSkills" : [ ],
		  },
		  		  
		],    
	  });
	techs["TOOLS"] = techs[n];  	
	
	return techs;
}
function myTechSkills()
{
	var techSkills = [];
	var n = -1;
	var rating = 95;

	n++;
	techSkills.push(
	   {
		"title" : "Game Dev / Design",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "Game Dev A",
			"rating" : rating,
		  },
		  {
			"title" : "Game Dev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["GAMEDEV"] = techSkills[n];  
	
	n++;
	techSkills.push(
	   {
		"title" : "Gamification",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "SubDev A",
			"rating" : rating,
		  },
		  {
			"title" : "SubDev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["GAMIF"] = techSkills[n]; 
	
	n++;
	techSkills.push(
	   {
		"title" : "AI <i><small>(Game, Robot, Machine Learning...)</small></i>",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "SubDev A",
			"rating" : rating,
		  },
		  {
			"title" : "SubDev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["AI"] = techSkills[n]; 
	
	n++;
	techSkills.push(
	   {
		"title" : "3D Dev <i><small>()</small></i>",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "SubDev A",
			"rating" : rating,
		  },
		  {
			"title" : "SubDev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["3D"] = techSkills[n]; 
	
	n++;
	techSkills.push(
	   {
		"title" : "GPU-Accelerated Dev <i><small>()</small></i>",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "SubDev A",
			"rating" : rating,
		  },
		  {
			"title" : "SubDev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["GPU"] = techSkills[n]; 
	
	n++;	
	techSkills.push(
	   {
		"title" : "MW Dev <i><small>(Drivers, Libs & MW WebApps)</small></i>",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "SubDev A",
			"rating" : rating,
		  },
		  {
			"title" : "SubDev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["MW"] = techSkills[n];  
	
	n++;	
	techSkills.push(
	   {
		"title" : "WebApps Dev <i><small>()</small></i>",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "SubDev A",
			"rating" : rating,
		  },
		  {
			"title" : "SubDev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["APP"] = techSkills[n]; 
		
	n++;	
	rating = 70;
	techSkills.push(
	   {
		"title" : "Embedded Dev",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "Custom Text UI",
			"rating" : rating,
		  },
		  {
			"title" : "Resource Mgt / Input Data Validation",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["EMBED"] = techSkills[n]; 
	
	n++;	
	rating = 50;
	techSkills.push(
	   {
		"title" : "Misc Dev <i><small>(Network, Elec, Secu., .Net)</small></i>",
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "SubDev A",
			"rating" : rating,
		  },
		  {
			"title" : "SubDev B",
			"rating" : rating,
		  },
		],    
	  });
	techSkills["MISC"] = techSkills[n]; 
  
	return techSkills;
}


function myMgtSkills()
{
	var mgtSkills = [];
	var n = -1;
	rating = 95;
	
	n++;
	mgtSkills.push(
	   {
		"title" : "Self-Mgt",
		// "style" : { "opacity" : "0.5", },
		"bMgt" : true,
		"rating" : rating,
		"hiddenSkills" : [
		  {
			"title" : "Important-Urgent Tasks Quantization",
			"rating" : rating,
		  },
		  {
			"title" : "Modular Programming & Code/Lib Sharing",
			"rating" : rating,
		  },

		  {
			"title" : "Productivity-Driven Dev Scheduling",
			"rating" : rating,
		  },
		],    
	  });
  mgtSkills["SELF"] = mgtSkills[n];
  
  n++;
  mgtSkills.push(
  {
    "title" : "AGILE",
	"bMgt" : true,
    "rating" : rating,
    "hiddenSkills" : [
	  {
        "title" : "SCRUM, X-Prog",
        "rating" : rating,
      },
      {
        "title" : "Inter-Proj & Inter-Team Sync",
        "rating" : rating,
      },
      {
        "title" : "Sprint Analysis & Schedule/Priority Optim",
        "rating" : rating,
      },

      {
        "title" : "Test-Driven Dev / Unit Testing",
        "rating" : rating,
      },


    ],    
  });
  mgtSkills["Agile"] = mgtSkills[n];
  
  n++;
  mgtSkills.push(
  {
    "title" : "HQ-Code",
	"bMgt" : true,
    "rating" : rating,
    "hiddenSkills" : [
      {
        "title" : "Code Review & Pair Prog (Commits)",
        "rating" : rating,
      },
      {
        "title" : "API Documenting / Harmonization / Demo",
        "rating" : rating,
      },  
      {
        "title" : "Inter-Modules Refactoring",
        "rating" : rating,
      },
	  
	  {
        "title" : "Perf/Warning Monitoring Libs Creation",
        "rating" : rating,
      },
      {
        "title" : "Quality/Regression Analytics",
        "rating" : rating,
      },

    ],    
  });
  mgtSkills["Code"] = mgtSkills[n];
  
  // n++;
  // rating = 80;
  // mgtSkills.push(
  // {
    // "title" : "Productivity Enhancement",
	// "bMgt" : true,
    // "rating" : rating,
    // "hiddenSkills" : [     
    // ],    
  // });
  // mgtSkills["Prod"] = mgtSkills[n];
  
  n++;
  rating = 75;
  mgtSkills.push(
  {
    "title" : "Code Auto-Analysis",
	"bMgt" : true,
    "rating" : rating,
    "hiddenSkills" : [
      {
        "title" : "Code Quality Analysis",
        "rating" : rating,
      },
	  {
        "title" : "Unit Testing (Main Modules)",
        "rating" : rating,
      },
      {
        "title" : "Auto-Release & Regression Alert (Commit Blame)",
        "rating" : rating,
      },

    ],    
  });
  mgtSkills["AutoCode"] = mgtSkills[n];
  
  return mgtSkills;
}





















function mySubJobs()
{
	var subJobs = [];
	
	// tilesRight.title = "Senior Versatile Progammer";
	
  subJobs.push( {"title" : "Tech Expert / Team Lead"} );
  subJobs.push( {"title" : "Junior Teacher (Prog, Maths)"} );
  
  return subJobs;
}

var myPersData = {
  name: "Christopher McGARRY",
  id: "FR",
  dates: {
    graduation: 2006,
    age: Math.floor( getAge(1983 + 310/365) ),  //6 nov = 310th day
    xp:  Math.floor( getAge(2007 + 1/365) ),
  },  
  mail: "my.email@fai.com",
  tel: "0123456789",
  website: "<small>chrismcg61.wixsite.com/home1 <i>(WebCV & Portfolio)</i></small>",  //my.website.com 
  
  regions: 
  {
	  current: "XXX",
	  fav: "YYY",
	  other: "ZZZ",
  },
  
  jobTitle: "Senior Versatile Programmer",
};
var myRegions = {
	current: ["CAEN", "LAVAL", "LE MANS", "RENNES"],
	fav: ["LYON", "NANTES", "BORDEAUX", "LILLE",  "▢",  "LONDON"],
	other: ["EUROPE",  "▢",  "WORLD"],  //"NA", "SEA"],
}

myPersData.regions.current = initRegions(myRegions.current);
myPersData.regions.fav = initRegions(myRegions.fav);
myPersData.regions.other = initRegions(myRegions.other);
function initRegions(regionList)
{
	var regionHtml = "";
	for (i = 0; i < regionList.length; i++) {
		regionHtml +=  "<span class='dates'>"+regionList[i]+"</span> "
	}	
	return regionHtml;	
}


































function myTilesLeft(){
	
	var myTilesLeft = [
	  {
		"title": myPersData.name,
		"style": {
		  // "background-color" : "#"+config.skillBackColor.toString(16),
		  // "color" : "rgba(100,100,100,0.9)",
		  // "opacity" : "0.5",
		},
		"subDivs": [
		  {
			"title": "",
			"subDivs": [
			  {
				"subSkills": [
				  {
					"title":"<i class='fa fa-address-card fa-fw'></i> About Me ► "+
					  myPersData.id + separator+"<small>Age:</small><big>"+
					  myPersData.dates.age+"</big>"+separator+"<small>XP:</small><big>"+
					  myPersData.dates.xp+"</big>",
					"hiddenSkills" : [
						  {
							"title" : "Entrepreneur <small>(Commitment, Challenge/Opportunities Seeker)</small>",  //Responsibility  //Opportunities
						  },   					  
						  {
							"title" : "Perceiving Introvert <small>(Self-Critical, Curious & Passionate)</small>",
						  },
							{
							"title" : "Hi-Focus/Workload Capacity <small>(Lo-Prio Messaging & Co)</small>",
						  },  				  
						
						  /*
						  {
							"title" : "Challenge-Driven <small>(HQ Scope, Hi-Workload, Innovation)</small>",
						  },
						  {
							"title" : "Agile-Driven <small>(Agility/Optim, Learning/Mentoring)</small>",
						  },
						  
						  {
							"title" : "Challenge"+greaterThan+"Mentorship"+greaterThan+"Commitment",  // /Responsibility   //+greaterThan+"<small><i> Salary </i></small>",
						  },
						  {
							"title" : "Max Focus/WorkLoad ► 6h <small>(Uninterrupted)</small> / 70h <small>(All Included)</small>",
						  },
						  */
						  // <i>(1-11pm)</i>
										  
						  /*
						  {
							"title" : "Motivation ► 'Team Empowerment & Challenge' Driven",
						  },   
						  {
							"title" : "AAA <i>(BBB)</i>",
						  },
						  */
					  
					],   
				  },
				  
				  {
					"title":"<i class='fa fa-graduation-cap fa-fw'></i> "+myPersData.dates.graduation+" ► Final Degree (BAC+5: IT Engineer...)",  //Final Degree
					"hiddenSkills" : [					
						{
							"title" : "BAC+5 ► ESIEA Engineer  <span class='dates'>LAVAL</span>",
							"hiddenSkills" : studies,
						},
						{
							"title" : "BAC+2 ► Maths Sup / Spé  <span class='dates'>CAEN</span>",
							//"hiddenSkills" : studies,
						},
						{
							"title": "Other Degrees",
							"hiddenSkills" : otherDegrees,    
						}, 
					],
				   },

				  {
					"title":" <i class='fa fa-internet-explorer fa-fw'></i>"+mailChar+" "+myPersData.website,
					"hiddenSkills" : [ 
						{
							"title" : ""+mailChar + telChar+" Contacts ► "+myPersData.mail,
							"hiddenSkills" : [ 
								{
								"title" : ""+telChar + myPersData.tel,
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
			"title": "Availability",
			"subDivs": [
			  {
				"subSkills": [
				  {
					"title":"<i class='fa fa-globe fa-fw'></i> Mobility ► Global <i>(Hi-Tech Cities)</i>",
					"hiddenSkills" : [
					  {
						"title" : "Region 1XL ► "+myPersData.regions.current,
						//"rating" : 95,
					  },
					  {
						"title" : "Region 2XL ► "+
						  myPersData.regions.fav,
						//"rating" : 80,
					  },
					  {
						"title" : "Region 3XL ► "+
						  myPersData.regions.other,  //+" "+greaterThan,
						//"rating" : 80,
					  },
					 
					],   
				  },
				  
				  {
					"title":"<i class='fa fa-file-text fa-fw'></i> Contracts ► All Agile Contracts",
					"checked" : true,
					"expandMe": true,
					"hiddenSkills" : [

						{
							"title" : "3+ Months Scope <small>(150% Load Capacity)</small>",  //(13w * 60h / Dev)   //Fulltime
						},
						
						{
							"title" : "Telework / FlexTime (50%)",  //Core Hours
						},
						{
							"title" : "CoWorking In-Days/Offices (Proactive Team-Building, Pair Prog)",
						},
						{
							"title" : "Lo-Interrupt <small>(Low Meetings, Breaks & Holidays Impact)</small>",  //No Forced Midday Breaks  //Stress Period (May, Summer, Christmas)  => Holiday Schedule
						}, 
						
						{
							"title" : "Agile/Startup Team <small>(Self-Mgt, Trust, 2W-Sprint Optim, Mentoring, Initiative)</small>",
						},				  
					  
					  
					  /*
					  {
						"title" : "Challenge / Competitivity / Innovation",
					  },
					  {
						"title" : "Mentorship / Team Empowerment / Flat Mgt",
					  },
					  {
						"title" : "Feedback Methods/Tools <i>(End-User & Team)</i>",
					  },
					  */                 

					  /*
					  {
						"title" : "Autonomy <i>(Continuous Team Empowerment & Feedback)</i>",
					  },
					  {
						"title" : "Specifics <i>(Competitive/Innovative Methods/Environment)</i>",
					  },
					  {
						"title" : "Success Metrics <i>(User/Team Quality Feedback, Risk Mgt)</i>",
					  },
					   {
						"title" : "Success Metrics <i>(Result/Method Quality, Risk Mgt)</i>",
					  },
					  */
									   
					],   
				  },
				  
				  {
					"title":"<i class='fa fa-file-text fa-fw'></i> Proj  ► Hi-Tech (Innov. & Added-Value)",  //
					"checked" : true,
					"expandMe": true,
					"hiddenSkills" : [				
						{
							"title" : "Relevant Techs",
						}, 
						{
							"title" : "Trending/Challenging Core Tasks",
						}, 				
						{
							"title" : "Optional Tasks Creation <small>(Tech Experts)</small>",
						},					
						
					]
				  },
				  
				  {
					"title":"<i class='fa fa-file-text fa-fw'></i> Prod ► HQ Schedule & Productivity",
					"checked" : true,
					"expandMe": true,
					"hiddenSkills" : [				
						{
							"title" : "Public LT Schedule",
						},	
						{
							"title" : "Productivity Monitoring",
						},						
						{
							"title" : "HQ Change Orders <small>(Limit Sprint Scope Change, Direct Client Feedback)</small>",
						},	
					]
				  },
				  
						   

				  /*
					   {
						"title" : "Risk Limit <i>(Min Quality, Min Team WorkLoad & Stress Limit)</i>", 
					  },  
								   {
						"title" : "Core/Extended Objectives & Macro-Schedule",
					  },
							 {
						"title" : "Opportunities <i>(New Tech)</i>", 
					  },

					  */

				  /** AUTONOMY/COOP,  AMBITION/PRODUCTIVITY,  EXPERTS/FEEDBACK **/

				  /** 
					  PROMOTE Team DEDICATION & ACCOUNTABILITY
					  Continuous AMBITION/METHODS Optim/Adapt
					  TEAM of Continuous Learning/Teaching Experts   

					  BONUS : Tech Innovation (AI, Energy, Teaching/Learning, Global Brain), Ecology, Social...
					  **/

				  /** Personnality :
					  Perceiving Introvert
					  Type (Myers-Briggs)  =  I N/s T/f P/j (Introvert, INtuitive/sensing, Thinking/feeling, Perceiving/judging)
					  Passionate Dreamer,  Continuous Self-Improvement (Self-Criticism,  Adventurous)

					  Worker Type = Entrepreneur (High Sense of Commitment, Responsibility & Mentorship)
					  ==> Innovator-Specialist

					  Challenge-Driven Motivation (& Team Responsibility Strengthening)
					  '6-day Week' Max WorkLoad  (Including Transports, Meal Breaks & Extra-Work Activities) = 70h
					  Max Uninterrupted Task Focus Capability = 6h (afternoon, evening, night)
					  **/


				  /** OTHER Keywords: 
					  Cohesion, Brainstorming, Paradigm shift, Anti-Obsolescence, Risk Absorption, Gamification 
					  Core Objectives & Talent Emulation
					  **/
					  
					{
						"title":"<i class='fa fa-cogs fa-fw'></i> Other",  
						"hiddenSkills" : [
							{
							"title" : "ROI",
							"hiddenSkills" : [
								{
									"title" : "Mgt Cost",
								},
								{
									"title" : "Team Struct",
								},
								{
									"title" : "Release Time",
								},							 
							]
							},
							
							{
							"title" : "Risks",
							"hiddenSkills" : [
								{
									"title" : "Regressions",
								},
								{
									"title" : "Cost/Scope Creep",
								},
								{
									"title" : "Schedule Delay",
								},
								{
									"title" : "Quality Risks",
								},
								
								{
									"title" : "Market/Hazards, Strategy/Process/Tech Relevance",
								},
								 
							]
							},
							
							{
							"title" : "Success Params",
							"hiddenSkills" : [
								{
									"title" : "Productivity Optim",
								},
								{
									"title" : "Satisfaction (Client & Dev Team)",
								},
								{
									"title" : "ISO Work Env (ISO-2020)",
								},
								{
									"title" : "Advanced Objectives (Social, Ecology, Energy...)",
								},    
							]
							},
							
							{
							"title" : "Multilateral Feedback",
							"hiddenSkills" : [
								{
									"title" : "Client Feedback",
								},
								{
									"title" : "End-User Feedback",
								},
								{
									"title" : "Schedule Feedback",
								}, 
								{
									"title" : "Team Feedback",
								}, 							
							]
							},	
							
							{
							"title" : "Code Guidelines / Libs Wiki / Task Automation",
							"hiddenSkills" : []
							},	
							
							{
							"title" : "Work Ethics / Pro Bono Missions",
							"hiddenSkills" : []
							},
							{
							"title" : "Critical Periods Mgt (Hi/Lo Workload, Reduced Team)",
							"hiddenSkills" : []
							},


	/*
					  {
						"title" : "Autonomous Structure <small>(HQ Env & Team, Flat Mgt)</small>",
						"hiddenSkills" : [
						  {
							"title" : "Telework & ISO-Ready Coworking Offices",
						  },
						  {
							"title" : "Quality & Productivity-Driven <i>(Flexi/Over-Time)</i>",
						  },
						  {
							"title" : "Team Structure Relevance <i>(Current Techs/Experts & Evolution)</i>",   //Relevant Team Size/Mgt & Tech
						  }, 
						],
					  },  
					  */

					  /*
					  {
						"title" : "Success Metrics <small>(HQ Feedback, Short & Long-Term)</small>",
						"hiddenSkills" : [
						  {
							"title" : "Continuous Goals Broadcast <i>(Global Schedule & Core Scope)</i>",
						  },

						  {
							"title" : "End-User Satisfaction <i>(Refine Change Orders & Quality Feedback)</i>",
						  },

						  {
							"title" : "Team Satisfaction <i>(HQ Objectives/Tech/Commitment & Change Orders)</i>",
						  },             
						  
						],
					  },  
					  */
					  
						   /*
					  {
						"title" : "Quality of Work (HQ Objectives/Tech, Limit Change Orders)",
					  },
					  {
						"title" : "Team Satisfaction (Meaningful Tasks & Expected Commitment)",
					  },

					  {
						"title" : "Budget/ROI",
					  },
					  */   
					  
						   /*
						  {
							"title" : "Limit Scope Change (Validate Priority w/ Mgt & Tech)",
						  },
						  {
							"title" : "Limit Team Member Reassessment (Limit Time/Budget Cost)",
						  },
						 

						  {
							"title" : "Reactive Team Feedback <i>(Scope Assign/Alleviate, Work Rating)</i>",
						  },
						 
						  {
							"title" : "Daily Task Tracking (Pb Solving Reactivity)",
						  },
						  {
							"title" : "Setting Team Member Responsibility",
						  },
						  */
				 
					  /*
					  {
						"title" : "Risk/ROI Optim",
						"hiddenSkills" : [
						  {
							"title" : "Realistic Deadlines (Core & Fix/Quality Tasks)",
						  },

						  {
							"title" : "Limit Scope & Assignment Changes <i>(Avoid Low Tech/Mgt ROI)</i>",
						  },     
					 

						]
					  }
					  */						
						]
					},
								  
				   
				],
			  },
			],
		  },
		  
		  
		],
	  },

	  {
		"title": "Live Projects/Research",
		// "modal": true,
		"subDivs": [
		  {
			"title": "",
			//"catId": 0,
			"subDivs": [
			  {
				// "corps": getCorpsByCategory(0),
				// "roles": [],
				"subSkills": projs,
			  },
			],
		  },

		],
	  },
	  
	  {
		"title": "Past Experiences",
		"modal": true,
		"subDivs": defaultCategories,
	  },
	  
	];

	return myTilesLeft;
};
