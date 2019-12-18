dynamicDate = 2004 + 2/4;

var roles = [];
roles["PROJ_MGR"] = "Proj Mgr";
roles["LEAD"] = "Team-Lead";  //(Scrum-Master)
roles["EXPERT"] = "Tech Expert";

var altenType = {
	"title":"ALTEN-PARIS",
	"desc":"SSII Mission for 'Alten-Paris'"
};
var altenType_Rennes = {};
altenType_Rennes["desc"] = altenType["desc"];
altenType_Rennes["title"] = altenType["title"]+"(+RENNES)";

defaultCorps = [
	{
	  "title" : "Holomatix",
	  "catId": 4,
	  "dates": getDates(1),
	  "type":	{
		"title":"LONDON",
		"desc":"Foreign Internship [Pre-Master]"
	  },  
	},
	{
	  "title" : "_",
	  "catId": 99,
	  "dates": getDates(7),        
	},
	{
		"title" : "Dassault",
		"type":	{
			"title":"ISTRES",
			"desc":"Final Internship (South-FR AF-Base)"
		},
		"catId": 3,
		"dates": getDates( 3 ),      
		"ratings": getRatingList( getRating(-1), getRating(-1), getRating(-1), ),	    
	},	
	
	{
		"title" : "ELB",
		"type":	{
			"title":"LYON",
			"desc":"Project-Contract"
		},
		"catId": 1,
		"dates": getDates( 3 ),      
		"ratings": getRatingList( getRating(3), getRating(4), getRating(4),),	    
	},
	{
		"title" : "Phoenix",
		"type":	{
			"title":"LYON",
			"desc":"CDD ► CDI"
		},
		"catId": 1,
		"dates": getDates( 9 ),         
		"ratings": getRatingList( getRating(4), getRating(4), getRating(4), ),
	},
	
	
  {
    "title" : "Sword",
	"type":	{
		"title":"LYON-SSII",
		"desc":"Lyon SSII Mission"
	},
    "catId": 4,
    "dates": getDates( 1 ),       
    "ratings": getRatingList( getRating(-1), getRating(-1), getRating(-1),),
  },  

  {
    "title" : "NeoPost",
	"type":	altenType,
    "catId": 3,
    "dates": getDates( 2 ),  
	"ratings": getRatingList( getRating(3), getRating(3), getRating(3),),	
  },  
  
  {
    "title" : "Nagra",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),    
	"ratings": getRatingList( getRating(3), getRating(3), getRating(0),),
  }, 

  {
    "title" : "SAH",
	"type":	altenType_Rennes,
    "catId": 2,
    "dates": getDates( 5 ),   
	"ratings": getRatingList( getRating(2), getRating(2), getRating(0),),	
  },  

  {
    "title" : "Technicolor",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),   
  }, 
  {
    "title" : "SagemCom",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),         
  }, 

  {
    "title" : "Bouygues",
	"type":	altenType,
    "catId": 2,
    "dates": getDates( 4 ),     
  },  
    
  {
    "title" : "Parrot",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),    
  }, 

  {
    "title" : "Cisco",
	"type":	altenType,
    "catId": 2,
    "dates": getDates( 5 ),         
  },

  {
    "title" : "MyProj [Unity3D Game]",
    "catId": 1,
    "dates": getDates( 6 ),  
  },
  {
	  "title" : "_",
	  "catId": 99,
	  "dates": getDates(6),      
  },
  {
    "title" : "MyProj [WebApps++]",  // GPU/AI
    "catId": 0,
    "dates": getDates( 6 ),   
  },
  
  {
	  "title" : "_",
	  "catId": 99,
	  "dates": getDates(1),        
  },
	
];



function overloadCategories(){
	
	var categories = [];
	var catId = 0;
	categories.push(
		{
		  "title": "Advanced Webapps",
		  "catId": catId,
		  "subDivs": [
			{
			  "corps": getCorpsByCategory(catId),
			  "roles": [ roles["PROJ_MGR"], roles["EXPERT"],  ],
			  "mgtSkills": [ mgtSkills["AUTO"], ],
			  "subSkills": [ appSkills["APP_ADVANCED"], techSkills["3D"],  aiSkills["AI_OTHER"] ],
			},
		  ],
		}
	);		
	
	catId++;
	categories.push(
		{
		  "title": "Game Dev",
		  "catId": catId,
		  "subDivs": [
			{
			  "corps": getCorpsByCategory(catId),
			  "roles": [  roles["PROJ_MGR"], roles["LEAD"], roles["EXPERT"], ],
			  "mgtSkills": [ mgtSkills["AUTO"], mgtSkills["AGILE"], ],
			  "subSkills": [ techSkills["GAME"], techSkills["MW_TOOLS"], techSkills["3D"],  aiSkills["AI_GAME"] ],
			},
		  ],
		}
	);
	
	
	catId++;
	categories.push(
		{
		  "title": "STB Dev",
		  "catId": catId,
		  "subDivs": [
			{
			  "corps": getCorpsByCategory(catId),
			  "roles": [  roles["LEAD"], roles["EXPERT"], ],
			  "mgtSkills": [ mgtSkills["AUTO"], mgtSkills["AGILE"],   ],
			  "subSkills": [ appSkills["APP_STB"], techSkills["MW_TOOLS"],  ],
			},
		  ],
		}
	);
	
	
	catId++;
	categories.push(
		{
		  "title": "Embedded",
		  "catId": catId,
		  "subDivs": [
			{
			  "corps": getCorpsByCategory(catId),
			  "roles": [  ],
			  "mgtSkills": [ mgtSkills["AUTO_CODE"], ],
			  "subSkills": [ techSkills["EMBED"], ],
			},
		  ],
		}
	);
	
	catId++;
	categories.push(
		{
		  "title": "OTHER",
		  "catId": catId,
		  "subDivs": [
			{
			  "corps": getCorpsByCategory(catId),
			  "roles": [  ],
			  "mgtSkills": [  ],
			  "subSkills": [ techSkills["OTHER"], ],
			},
		  ],
		}
	);
	
	
	demoCategories = categories;
	
}