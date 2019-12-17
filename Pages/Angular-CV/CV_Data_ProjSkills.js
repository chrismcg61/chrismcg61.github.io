function initSkills(n, title){
  var skills = [];
  var rating = 95;
  
  for(var i=0; i<=n-1; i++){
    var newSkill = {
		"title" : title+"_"+i,
		"rating" : rating,
		"hiddenSkills" : [
		  {"title" : title+"_"+i+".1",
			"rating" : rating,
		  },
		  {"title" : title+"_"+i+".2",
			"rating" : rating,
		  },
		],    
	};
	rating -= 10;
    
    skills.push( newSkill );    
  }
  return skills;  
}
var demoTechSkills = initSkills(4, "TechSkill");
var demoTechs = initSkills(2, "Tech");
var demoMgtSkills = initSkills(4, "MgtSkill");


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
		  "mgtSkills": [ demoMgtSkills[i], demoMgtSkills[i+1], ],
		  "subSkills": [ demoTechSkills[i], demoTechSkills[i+1], ],
		},
      ],
    };
    
    categories.push( newCategory );    
  }
  return categories;  
}


function myTilesLeft_ProjSkills(){
	
  var myTiles = [
	{"title": "Experiences",
		"modal": true,
		"subDivs": demoCategories,
	},
  
  ];
	
  return myTiles;
};


function myTilesRight_ProjSkills(){
	
  var myTiles = [
				
		{"title": "Tech Skills",
			"subDivs": [
			  {
				"title": "",
				//"catId": 0,
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": demoTechSkills,
				  },
				],
			  },
			],
		},
		
		{"title": "Mgt Skills",
			"subDivs": [
			  {
				"title": "",
				//"catId": 0,
				"subDivs": [
				  {
					"titles": [ ],
					"bSkillRating": true,
					"subSkills": demoMgtSkills,
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
					"subSkills": demoTechs,
				  },
				],
			  },
			],
		},
		
		
  
  ];
	
  return myTiles;
};


setTimeout( function(){overloadProjSkills();}, 1500 );
