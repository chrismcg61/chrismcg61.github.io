
/* Custom DATA: */
var dynamicDate = 2006 + 2/4;
var ratingGranularity = 15;

var ratingA = 6*ratingGranularity;
var ratingB = 5*ratingGranularity;
var ratingC = 4*ratingGranularity;
var ratingD = 3*ratingGranularity;
var ratingE = 2*ratingGranularity;
var ratingF = 1*ratingGranularity;

function getRatingList(p0, p1, p2, p3, p4, p5){
  var defaultRatingList = [
	{
      "title": "AGIL",
	  "titleDesc": "Agility (Self-Mgt/Initiative)",
      "rating": ratingD,      
    },
	{
      "title": "TECH",
	  "titleDesc": "Tech Objectives/Tools",
      "rating": ratingD,      
    },
	{
      "title": "SCHD",
	  "titleDesc": "LT Schedule",
      "rating": ratingD,      
    },
	
  ];
  
  var ratingList = defaultRatingList;
  if(p0) ratingList[0].rating = p0;
  if(p1) ratingList[1].rating = p1;
  if(p2) ratingList[2].rating = p2;
  // if(p3) ratingList[3].rating = p3;
  // if(p4) ratingList[4].rating = p4;
  // if(p5) ratingList[4].rating = p5;
  return ratingList;
}

var altenType = {
	"title":"ALTEN-PARIS",
	"desc":"SSII Mission for 'Alten-Paris'"
};
var altenType_Rennes = {};
altenType_Rennes["desc"] = altenType["desc"];
altenType_Rennes["title"] = altenType["title"]+"(+RENNES)";

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
    "catId": 3,
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
    "catId": 0,
    "dates": getDates( 6 ),         
  },
  {
    "title" : "GPU/AI WebApps",
    "catId": 0,
    "dates": getDates( 6 ),         
  },

];

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
    "title" : "BAFA : Teen Summer Camp Animator",   //Activity Camp Coach
    //"rating" : 95,
  },
  {
    "title" : "BIA : Airplane Pilot Basics (Theory & Practice)",  //Aeronautics
  },
];

/*
var customVolunteeringTitles = [
  {
    "title" : "Teaching (Maths, Prog)",
    //"rating" : 95,
  },
  {
    "title" : "Computer Repair",
  },
  {
    "title" : "Organization Event Support (Waiter, Stage Setup...)",
  },
  {
    "title" : "Translator (ENG/FR)",
  },
  {
    "title" : "Elder/Dependent People Helper",
  },
];
*/



/*** LIGHTING ***/
var lightOn = false;
function lightOnOff(){
  if(lightOn){
    document.body.style.backgroundColor = "rgba(0,0,0,0.99)";
  }
  else document.body.style.backgroundColor = "rgba(0,0,0,0.1)";
  
  lightOn = !lightOn;
}

var expandMode = 0;
function expandNone(){
  expandMode = 0;  
  refreshExpand();
}
function expandMid(){
  expandMode = 1;  
  refreshExpand();
}
function expandAll(){
  expandMode = 2; 
  refreshExpand();
}
var saveTilesLeft;
function refreshExpand(){
  needRefresh = true;
  //tilesLeft[0].title = "NewTitle";
  //saveTilesLeft = tilesLeft;
  //tilesLeft[0].subSkills = [];
  //allExpanded = !allExpanded;
  //tilesLeft[0].subDivs[1].subDivs[0].subSkills[0].checked = true;
  
  for(var i=0; i<tilesLeft.length; i++){
    var tile = tilesLeft[i];
    for(var j=0; j<tile.subDivs.length; j++){
      var subDiv = tile.subDivs[j];
      for(var k=0; k<subDiv.subDivs.length; k++){
        var subSubDiv = subDiv.subDivs[k];
        for(var l=0; l<subSubDiv.subSkills.length; l++){
          var subSkill = subSubDiv.subSkills[l];
          
          if(expandMode==2  ||  (expandMode==1 && subSkill.expandMe)) subSkill.checked = true;
          else subSkill.checked = false;
          for(var m=0; m<subSkill.hiddenSkills.length; m++){
            if(expandMode==2  ||  (expandMode==1 && subSkill.hiddenSkills[m].expandMe)) subSkill.hiddenSkills[m].checked = true;
            else subSkill.hiddenSkills[m].checked = false;
          }
        }
      }
    }    
  }
}


/* DATA : */
//var dynamicDate = 2000;
function newDuration(lengthQ){
  var lengthY = lengthQ/4;
  dynamicDate += lengthY;

  var a = [];
  for(var i=1; i<lengthQ; i++)
  {
    a.push(i);        
  }

  return a;
}
function getY(date){
  return Math.floor(date);
}   
function getQ(date){
  var Q = date - getY(date);
  return Q*4 + 1;
}

function getDates( duration ){
  return {"start": 
          {"Y": getY(dynamicDate),
           "Q": getQ(dynamicDate),
          }, 
          "duration": newDuration( duration ),
          "end": 
          {"Y": getY(dynamicDate),
           "Q": getQ(dynamicDate),
          },  
         };
}

function getAge( birthDateYearDecimal ){
  const msByYear = 365.2422 * 24 * 60 * 60 * 1000;
  const curYearDecimal = 1970 + Date.now() / msByYear;
  
  var age = curYearDecimal - birthDateYearDecimal;
  return age;
}

function getCorpsByCategory(catId){
  var a = [];
  for(var i=0; i<defaultCorps.length; i++)
  {
    if(defaultCorps[i].catId == catId)
      a.push(defaultCorps[i]);        
  }

  return a;  
}



var catBaseColor = "#000000";  // "rgba(255, 0, 0,";
var catTextColor = "#ff2222";
var catStyles = [];
{
  var deepBlue0 = "#0044ff";
  var deepBlue1 = "#0077ff";
  var deepBlue2 = "#00aaff";

  var lightGrey = "#bbbbbb";
  var darkGrey = "#888888";

  var greyBlue = "#aaddff";
  var lightBlue = "#66bbbb";
  
  var lightOrange = "#ee9900";

  catBaseColor = deepBlue0;
  catStyles = [
    {
      "background-color" : catBaseColor+"ff",
      "color" : catTextColor+"ff",
      // "background-color" : catBaseColor+"0.9)",
      // "opacity" : "0.7",
      // "background-color" : "#"+config.skillBackColor.toString(16),
    },
    {
      "background-color" : deepBlue1+"ff",
      "color" : catTextColor+"ff",
      // "background-color" : catBaseColor+"0.9)",
      // "opacity" : "0.7",
      // "background-color" : "#"+config.skillBackColor.toString(16),
    },
    {
      "background-color" : deepBlue2+"ff",
      "color" : catTextColor+"ff",
      // "background-color" : catBaseColor+"0.9)",
      // "opacity" : "0.7",
      // "background-color" : "#"+config.skillBackColor.toString(16),
    },

    {
      "background-color" : greyBlue, //catBaseColor+"99", //"#88bbff",
      "color" : lightOrange, //catTextColor+"99", //"#ffcc44",
      // "opacity" : "0.5",
    },
    {
      "background-color" : lightGrey, //catBaseColor+"55", //"#bbccdd",
      "color" : darkGrey, //catBaseColor+"55",  //"#eeccaa",
      // "opacity" : "0.3",
    },

    {
      "background-color" : lightGrey, //catBaseColor+"55", //"#bbccdd",
      "color" : "#000000", //catBaseColor+"55",  //"#eeccaa",
      // "opacity" : "0.3",
    },

  ];
}



var projs = [];
for(var i=0; i<=1; i++){
  var newProj = {
    "title" : "Proj"+i,
    //"rating" : 50,
    "hiddenSkills" : [
      {
        "title" : "Proj"+i+".1",
        //"rating" : 50,
      },
      {
        "title" : "Proj"+i+".2",
      },
    ],    
  };
  projs.push( newProj );
}


var languages = [];
{
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
}

var hobbiesTech = [];
{
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
    "title" : "Versatile Gamer (Challenge & Innovation)",
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
    "title" : "Documentaries (Tech, Science, Mgt)",
    "rating" : 90,
    "hiddenSkills" : [ 
      {
        "title" : "A",
        "rating" : 90,
      },
    ],    
  }); 
}

var hobbiesOther = [];
{
  hobbiesOther.push( {
    "title" : "Music",
    "rating" : 90,
    "hiddenSkills" : [  ],    
  });  

  hobbiesOther.push( {
    "title" : "Sports",
    "rating" : 80,
    "hiddenSkills" : [  ],    
  }); 
  
  hobbiesOther.push( {
    "title" : "Culture/Arts",
    "rating" : 70,
    "hiddenSkills" : [  ],    
  }); 
}

var miniJobs = [];
{
  /*
  Teaching (Maths, Prog)
  Computer Repair
  Event Organization (Waiter, Stage Setup...)
  Translator (ENG/FR)
  Elder/Dependent People Helper
  */

  miniJobs.push( {
    "title" : "IT Internship ('Holomatix' <span class='dates'>LONDON</span>)",
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
    "title" : "Event Organization (Waiter, Stage Setup...)",
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
  
}


var mgtSkills = [];
{
  mgtSkills["Auto"] = {
    "title" : "Self-Managed Dev",
    "rating" : 95,
    "hiddenSkills" : [
      {
        "title" : "Important-Urgent Tasks Quantization",
        "rating" : 95,
      },
      {
        "title" : "Modular Programming & Code/Lib Sharing",
        "rating" : 95,
      },

      {
        "title" : "Productivity-Driven Dev Scheduling",
        "rating" : 90,
      },
    ],    
  };
  mgtSkills["Agile"] = {
    "title" : "Agile Multi-Proj (SCRUM, X-Prog)",
    "rating" : 95,
    "hiddenSkills" : [


      {
        "title" : "Inter-Proj & Inter-Team Sync",
        "rating" : 90,
      },
      {
        "title" : "Sprint Analysis & Schedule/Priority Optim",
        "rating" : 85,
      },

      {
        "title" : "Test-Driven Dev / Unit Testing",
        "rating" : 85,
      },


    ],    
  };
  mgtSkills["Code"] = {
    "title" : "Code Quality/Perf",
    "rating" : 90,
    "hiddenSkills" : [
      {
        "title" : "Code Review & Pair Prog (Commits)",
        "rating" : 95,
      },
      {
        "title" : "API Documenting / Harmonization / Demo",
        "rating" : 90,
      },  
      {
        "title" : "Inter-Modules Refactoring",
        "rating" : 90,
      },




    ],    
  };
  mgtSkills["Prod"] = {
    "title" : "Productivity Enhancement",
    "rating" : 80,
    "hiddenSkills" : [
      {
        "title" : "Perf/Warning Monitoring Libs Creation",
        "rating" : 90,
      },
      /*
      {
        "title" : "Dedicated Solo/Coop Schedule (Async Team Msg)",
        "rating" : 80,
      },
      */
      {
        "title" : "Auto-Release & Regression Analytics",
        "rating" : 80,
      },

    ],    
  };
}



var subJobs = [];
{
  subJobs.push( {"title" : "Tech Expert / Team Lead"} );
  subJobs.push( {"title" : "Junior Teacher (Prog, Maths)"} );
}

var myPersData = {
  name: "MY_NAME",
  id: "FR",
  dates: {
    graduation: 1999,
    age: Math.floor( getAge(2000 + 289/365) ),
    xp:  Math.floor( getAge(2000 + 364/365) ),
  },  
  mail: "my.email@fai.com",
  tel: "0123456789",
  website: "my.website.com <i>(Web-CV, Tech Demos & Co)</i>",
  
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


dynamicDate = 2000;
var defaultCorps = initDefaultCorps();
function initDefaultCorps(){
  var corps = [];
  for(var i=0; i<=8; i++){
    var newCorp = {
      "title" : "Corp"+i,
      "catId": Math.floor(i/2),
      "dates": getDates( Math.floor( 1 + Math.random()*3 ) ),         
    };
    corps.push( newCorp );
  }
  return corps;
}

var defaultSkills = [];
for(var i=0; i<=6; i++){
  var newSkill = {
    "title" : "Skill"+i,
    "rating" : 90-(i*5),
    "hiddenSkills" : [
      {
        "title" : "Skill"+i+".1",
        "rating" : 90-(i*5),
      },
      {
        "title" : "Skill"+i+".2",
        "rating" : 90-(i*5),
      },
      {
        "title" : "Skill"+i+".3",
        "rating" : 90-(i*5),
      },
    ],    
  };
  defaultSkills.push( newSkill );
}

var studies = [
  {
    "title" : "MAJORS",
    //"rating" : 95,
  },
  {
    "title" : "Minors",
  },
];

var otherDegrees = [
  {
    "title" : "Degree0",
    //"rating" : 95,
  },
  {
    "title" : "Degree1",
  },
];

/*
var volunteeringTitles = [
  {
    "title" : "Volunteer0",
    //"rating" : 95,
  },
  {
    "title" : "Volunteer1",
  },
];
*/



/* Custom DATA: */
if (typeof customCorps !== 'undefined')         defaultCorps = customCorps;
if (typeof customProjs !== 'undefined')         projs = customProjs;
if (typeof customStudies !== 'undefined')       studies = customStudies;
if (typeof customOtherDegrees !== 'undefined')  otherDegrees = customOtherDegrees;
//if (typeof customVolunteeringTitles !== 'undefined')  volunteeringTitles = customVolunteeringTitles;




var defaultCategories = initDefaultCategories();
function initDefaultCategories(){
  var categories = [];
  
  for(var i=0; i<=4; i++){
    var newCategory = {
      "title": "Categ"+i,
      "catId": i,
      "subDivs": [
        {
          "corps": getCorpsByCategory(i),
          "roles": [
            "Team Lead",
            "Tech Expert",
            "SCRUM Master",
          ],
          "subSkills": [
            mgtSkills["Auto"],
            //mgtSkills["Agile"],
            defaultSkills[0],             
            //skills["B"],
          ],
        },
      ],
    };
    
    categories.push( newCategory );    
  }
  return categories;  
}





var separator = "&nbsp<i class='fa fa-ellipsis-v fa-fw'></i>&nbsp";
var greaterThan = "<i class='fa fa-chevron-circle-right fa-fw'></i>";
var equalTo = "►";

var mailChar = "<i class='fa fa-envelope fa-fw'></i>";
var telChar = "<i class='fa fa-phone-square fa-fw'></i>";


var tilesLeft = [
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
								"title" : "Ethics, Strat/Tech, Process, Market/Hazards",
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

var tilesRight = [
  {
    "title": myPersData.jobTitle,
    "style": {
      // "background-color" : "rgba(200,200,200,0.9)",
      // "opacity" : "0.5",
    },
    "subDivs": [
      {
        "title": "",
        "subDivs": [
          {
            "titles": [ ],
            "subSkills": subJobs,
          },
        ],
      },
    ],
  },
    
  {
    "title": "Tech Skills",
    "subDivs": [
      {
        "title": "",
        //"catId": 0,
        "subDivs": [
          {
            "titles": [ ],
            "bSkillRating": true,
            "subSkills": defaultSkills,
          },
        ],
      },
    ],
  },

  {
    "title": "Management Skills (Proj/Team)",
    "subDivs": [
      {
        "title": "",
        //"catId": 0,
        "subDivs": [
          {
            "titles": [ ],
            "bSkillRating": true,
            "subSkills": [
              mgtSkills["Auto"],
              mgtSkills["Agile"],
              mgtSkills["Code"],
              mgtSkills["Prod"],
            ],
          },
        ],
      },
    ],
  },

  
  /*
  {
    "title": "Secondary Skills",
    "subDivs": [
      {
        "title": "",
        "catId": 2,
        "subDivs": [
          {
            "titles": [ ],
            "bSkillRating": true,
            "subSkills": [             
              skills["B"],
              skills["C"],              
            ],
          },
        ],
      },
    ],
  },
  */
  
  
  {
    "title": "Languages",
    "style": {
      // "background-color" : "rgba(200,200,200,0.9)",
      // "opacity" : "0.5",
    },
    "subDivs": [
      {
        "title": "",
        "catId": 5,
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


  {
    "title": "Hobbies [Tech]",
    "subDivs": [
      {
        "title": "",
        //"catId": 0,
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

  {
    "title": "Hobbies [Other]",
    "style": {
      // "opacity" : "0.5",
      // "background-color" : "rgba(200,200,200,0.9)",
    },
    "subDivs": [
      {
        "title": "",
        "catId": 4,
        "subDivs": [
          {
            "titles": [ ],
            "bSkillRating": true,
            "subSkills": hobbiesOther,
          },
        ],
      },
    ],
  },

  {
    "title": "Volunteering / Mini-Jobs",
    "style": {
      // "opacity" : "0.5",
      // "background-color" : "rgba(200,200,200,0.9)",
    },
    "subDivs": [
      {
        "title": "",
        // "catId": 4,
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









//var myTilesLeft = [];



/** ANGULAR APP **/
var app = angular.module('myApp', ['ngSanitize']);
/*
app.run(
  function($rootScope) {
    //$rootScope.myAge = myAge;
  }
)
*/

var needRefresh = false;
app.controller('mainCtrl', function($scope, $rootScope) {  

  // $scope.showHidden = function(evt){ 
  //   console.log(evt.srcElement);
  //   //if(hiddenElt.style.display != 'block')  //inline
  // };
  
  // $scope.columnStyle = {
  //       "right" : "0px",
  //     };
  //expandAll();
  $scope.columns = [
    {
      "style": {
        "left" : "0px",
      },
      "tiles": tilesLeft,      
    },
    {
      "style": {
        "right" : "0px",
      },
      "tiles": tilesRight,      
    },
  ];  
  // $scope.tilesLeft = tilesLeft;
  // $scope.tilesRight = tilesLeft;
  
  //if (typeof myTilesLeft !== 'undefined') $scope.columns[0].tiles = myTilesLeft;
  //if (typeof myTilesRight !== 'undefined') $scope.columns[1].tiles = myTilesRight;
  
  $scope.corps = defaultCorps;
  $scope.catStyles = catStyles;
  $scope.checkConfig = function()  {
    //$scope.columns[0].tiles = $scope.columns[1].tiles = [];    
    
    /*if(colIndex == 0) {
      colIndex = 1;
      colIndexBis = 0;
    }
    else {
      colIndex = 0;
      colIndexBis = 1;
    }*/
    //tilesLeft[0].title = "NewTitle";
    //$scope.columns[colIndex].tiles = tilesLeft;
    //$scope.columns[colIndexBis].tiles = tilesRight;
    if(needRefresh) {
      $scope.columns[0].tiles = [];
      needRefresh = false;
    }
    else $scope.columns[0].tiles = tilesLeft;
    
    // $scope.catStyles = catStyles;
    // $scope.$apply();
    // alert("Check Config");
    // $scope.dynamicStyle = dynamicStyle;
    // $scope.dynamicVal = dynamicVal;
    $scope.$applyAsync();
    
    setTimeout($scope.checkConfig, 2000);
  };
  $scope.checkConfig();
  
  // $scope.dynamicStyle = dynamicStyle;
  // $scope.dynamicVal = dynamicVal;
  
   
  $scope.openMyModal = openMyModal;
  $scope.closeModal = closeModal;
  
})











/* DAT GUI CONFIG */
var config = {
  skillTextColor: 0x000000,
  skillBackColor: 0xFFFFFF,
  // func: function(){ alert("Gui Button"); }
  lightOnOff: lightOnOff,  
  
  expandNone: expandNone,
  expandMid: expandMid,
  expandAll: expandAll,
};

var gui = new dat.GUI();
{
  guiFolder1 = gui.addFolder('Global Params');
  guiFolder1.open();
  // guiFolder1.add(config, "Listener", 0, 10).listen();
  // guiFolder1.add(config, "select", {one: "Un", two: "Deux"}).onChange( changeConfig );
  guiFolder1.addColor(config, "skillTextColor")
    .onChange( changeConfig );
   guiFolder1.addColor(config, "skillBackColor")
    .onChange( changeConfig );
  guiFolder1.add(config, "lightOnOff");
  
  guiFolder1.add(config, "expandNone");  
  guiFolder1.add(config, "expandMid");  
  guiFolder1.add(config, "expandAll");  
  
  
}


// changeConfig();
function changeConfig(){  
  // alert(config.skillBackColor.toString(16));
  catStyles[0] = {
    // "background-color" : "rgba(255, 0, 0, 0.7)",
    "background-color" : "#"+config.skillBackColor.toString(16),
    "color" : "#"+config.skillTextColor.toString(16),
  };
  
  // dynamicStyle.color = "#"+config.skillBackColor.toString(16);
  // dynamicVal++;
  //alert(dynamicStyle.color);
  
  // config.Listener = config.float;
}









/* Intro Modal */
function openModal(modalId){
   modalId.style.display = "block";
}
openModal(myModal1);

function closeModalId(modalId){
   modalId.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
/*window.onclick = function(event) {
    if (event.target == myModal1) {
      closeModalId(myModal1);
    }
}*/

var r = 0;
var g = 0;
var b = 128;
var a = 0.8;

var delta = 40;

/* BTN 1 */
//myFullDivBtn1.style.width = 50+"%";
myFullDivBtn1.onclick = function() { 
  expandNone();
  closeModalId(myModal1); 
}
myFullDivBtn1.innerHTML = "<h1>SIMPLE RESUME</h1>"
        + "<br/> <span>No Panels Expanded</span>";
myFullDivBtn1.style.backgroundColor = "rgba("+r+","+g+","+b+","+a+")";
b += delta;


/* BTN CLONE 1: */
var btnClone = myFullDivBtn1.cloneNode(true);
//btnClone.style.width = 25+"%";
btnClone.style.backgroundColor = "rgba("+r+","+g+","+b+","+a+")";
b += delta;
btnClone.onclick = function() { 
  expandMid();
  closeModalId(myModal1); 
}

btnClone.innerHTML = "<h1>INTERMEDIATE RESUME</h1>"
        + "<br/> <span>Important Tech Panels Expanded</span>";

btnGroup.appendChild(btnClone);


/* BTN CLONE 2: */
btnClone = myFullDivBtn1.cloneNode(true);
//btnClone.style.width = 25+"%";
btnClone.style.backgroundColor = "rgba("+r+","+g+","+b+","+a+")";
b += delta;
btnClone.onclick = function() { 
  expandAll();
  closeModalId(myModal1);  
}

btnClone.innerHTML = "<h1>FULL RESUME</h1>"
        + "<br/> <span>All Tech Panels Expanded</span>";

btnGroup.appendChild(btnClone);
















function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
firstTabBtn.click();