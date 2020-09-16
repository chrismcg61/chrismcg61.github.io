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
	  "branch" : "Data Mgt",
	  "catId": 4,
	  "dates": getDates(1),
	  "type":	{
		"title":"LONDON",
		"desc":"Foreign Internship [Pre-Master]"
	  },  
	  "ratings": getRatingList( getRating(0), getRating(1), getRating(1), ),	 
	},
	{
	  "title" : "_",
	  "catId": 99,
	  "dates": getDates(7),        
	},
	{
		"title" : "Dassault",
		"branch" : "Elec TestBench",
		"type":	{
			"title":"ISTRES",
			"desc":"Final Internship (South-FR AF-Base)"
		},
		"catId": 3,
		"dates": getDates( 3 ),      
		"ratings": getRatingList( getRating(-1), getRating(-1), getRating(-1), ),	    
	},	
	
	{
		"title" : "Etranges Libellules",
		"branch" : "Ubisoft",
		"type":	{
			"title":"LYON",
			"desc":"Project-Contract"
		},
		"catId": 1,
		"dates": getDates( 3 ),      
		"ratings": getRatingList( getRating(3), getRating(4), getRating(4),),	    
	},
	{
		"title" : "Phoenix Interactive",
		"branch" : "Ubisoft",
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
	"branch" : "WebPortal Service",
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
	"branch" : "Stamp-Machines/AI",
	"type":	altenType,
    "catId": 3,
    "dates": getDates( 2 ),  
	"ratings": getRatingList( getRating(3), getRating(3), getRating(4),),	
  },  
  
  {
    "title" : "Nagra[Canal+]",
	"branch" : "STB/Stream Secu",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),    
	"ratings": getRatingList( getRating(3), getRating(3), getRating(0),),
  }, 

  {
    "title" : "SAH",
	"branch" : "Orange",
	"type":	altenType_Rennes,
    "catId": 2,
    "dates": getDates( 5 ),   
	"ratings": getRatingList( getRating(2), getRating(2), getRating(0),),	
  },  

  {
    "title" : "Technicolor",
	"branch" : "STB Network Optim",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),   
	"ratings": getRatingList( getRating(1), getRating(1), getRating(2),),
  }, 
  {
    "title" : "SagemCom",
	"branch" : "STB Network Optim",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),      
	"ratings": getRatingList( getRating(-1), getRating(-1), getRating(-1),),	
  }, 

  {
    "title" : "Bouygues Tel",
	"branch" : "",
	"type":	altenType,
    "catId": 2,
    "dates": getDates( 4 ),    
	"ratings": getRatingList( getRating(4), getRating(3), getRating(2), ),
  },  
    
  {
    "title" : "Parrot",
	"branch" : "Drone TestBench",
	"type":	altenType,
    "catId": 4,
    "dates": getDates( 1 ),    
	"ratings": getRatingList( getRating(-1), getRating(-1), getRating(-1),),
  }, 

  {
    "title" : "Cisco",
	"branch" : "3D-TV",
	"type":	altenType,
    "catId": 2,
    "dates": getDates( 5 ),    
	"ratings": getRatingList( getRating(4), getRating(4), getRating(3), ),	
  },

  {
    "title" : "MyProj[GAME]",
	"branch" : "Unity3D Rogue-ARPG",
    "catId": 1,
    "dates": getDates( 6 ),  
	"ratings": getRatingList( getRating(4), getRating(4), getRating(3), ),	
  },
  {
	  "title" : "_",
	  "catId": 99,
	  "dates": getDates(6),      
  },
  {
    "title" : "MyProj[APP]",  // GPU/AI
	"branch" : "GPU/AI/Gam° WebApps",
    "catId": 0,
    "dates": getDates( 6 ),   
	"ratings": getRatingList( getRating(4), getRating(4), getRating(3), ),	
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
		  "title": "WebApp Dev",
		  "catId": catId,
		  "subDivs": [
			{
			  "corps": getCorpsByCategory(catId),
			  "roles": [ roles["PROJ_MGR"], roles["EXPERT"],  ],
			  "mgtSkills": [ mgtSkills["AUTO"],  mgtSkills["HQ_CODE"],],
			  "subSkills": [ appSkills["APP_ADVANCED"], gpuSkills["GPU_3D"],  aiSkills["AI_OTHER"] ],
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
			  "mgtSkills": [ mgtSkills["AUTO"], mgtSkills["AGILE"],  mgtSkills["HQ_CODE"], ],
			  "subSkills": [ techSkills["GAME"], techSkills["MW_TOOLS"], gpuSkills["GPU_3D"],  aiSkills["AI_GAME"] ],
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
			  "mgtSkills": [ mgtSkills["AUTO"], mgtSkills["AGILE"],  mgtSkills["HQ_CODE"],  ],
			  "subSkills": [ appSkills["APP_STB"], techSkills["MW_TOOLS"],  ],
			},
		  ],
		}
	);
	
	
	catId++;
	categories.push(
		{
		  "title": "Embedded Dev",
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
		  "title": "Other Dev",
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