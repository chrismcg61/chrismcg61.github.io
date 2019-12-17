var dynamicDate = 2000 + 0/4;
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


var catStyles = [
    {
      "background-color" : "#0000ffff",
      "color" : "#ff0000ff",
    },
	{
      "background-color" : "#00ff00ff",
      "color" : "#ffff00ff",
    },
];
catStyles["blackOnGrey"] = { 	
	"background-color" : "#bbbbbb",
	"color" : "#000000",
};
catStyles["greyOnGrey"] = { 	
	"background-color" : "#bbbbbb",
	"color" : "#888888",
};


var demoSkills = [
	{"title" : "SkillA",
		"rating" : 95,
		"hiddenSkills" : [
		  {"title" : "A.1",
			"rating" : 95,
		  },
		  {"title" : "A.2",
			"rating" : 95,
		  },
		],    
	},
	
	{"title" : "MgtSkillA",
		"rating" : 95,
		"hiddenSkills" : [
		  {"title" : "MgtA.1",
			"rating" : 95,
		  },
		  {"title" : "MgtA.2",
			"rating" : 95,
		  },
		],    
	},
	{"title" : "MgtSkillB",
		"rating" : 95,
		"hiddenSkills" : [
		  {"title" : "MgtB.1",
			"rating" : 95,
		  },
		  {"title" : "MgtB.2",
			"rating" : 95,
		  },
		],    
	},
];
demoSkills["A"] = demoSkills[0];
demoSkills["MgtA"] = demoSkills[1];
demoSkills["MgtB"] = demoSkills[2];

setTimeout( function(){overloadProjSkills(techSkills);}, 2000 );


var defaultCorps = [
	{
	  "title" : "Corp0",
	  "catId": 0,
	  "dates": getDates(1),         
	},
	{
	  "title" : "Corp1",
	  "catId": 1,
	  "dates": getDates(1),         
	},
];
function getCorpsByCategory(catId){
  var a = [];
  for(var i=0; i<defaultCorps.length; i++)
  {
    if(defaultCorps[i].catId == catId)
      a.push(defaultCorps[i]);        
  }

  return a;  
}  


// var catClone = JSON.parse(JSON.stringify( demoCategories[0] ));
// demoCategories.push( catClone );
var demoCategories = initDemoCategories(2);
function initDemoCategories(n){
  var categories = [];
  
  for(var i=0; i<=n-1; i++){
    var newCategory = {
      "title": "Categ"+i,
      "catId": i,
      "subDivs": [
        {
		  "corps": getCorpsByCategory(i),
		  "roles": [  "Role0", "Role1",  ],
		  "mgtSkills": [ demoSkills["MgtA"], demoSkills["MgtB"],],
		  "subSkills": [ demoSkills["A"], ],
		},
      ],
    };
    
    categories.push( newCategory );    
  }
  return categories;  
}


function myTilesLeft_ProjSkills(){
	
  var myTiles = [
	{"title": "XP",
		"modal": true,
		"subDivs": demoCategories,
	},
  
  ];
	
  return myTiles;
};


function myTilesRight_ProjSkills(){
	
  var myTiles = [
		
		{"title": "Mgt Skills",
			"subDivs": [
			  {
				"title": "",
				//"catId": 0,
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": demoSkills,
				  },
				],
			  },
			],
		},
		
		{"title": "Tech Skills",
			"subDivs": [
			  {
				"title": "",
				//"catId": 0,
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": demoSkills,
				  },
				],
			  },
			],
		},
		
		{"title": "Techs",
			"subDivs": [
			  {
				"title": "",
				//"catId": 0,
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": demoSkills,
				  },
				],
			  },
			],
		},
		
		
  
  ];
	
  return myTiles;
};



/////////////////////////////////////////////////////////////
// OVERLOAD:
/////////////////////////////////////////////////////////////
function overloadProjSkills( newSkills ){
	
	needRefresh = true;

	demoSkills = newSkills;
	// demoSkills["A"] = demoSkills[0];
	
	// demoCategories = initDemoCategories(2);
	// demoCategories = newCats;
	overloadCategories();
	
}