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

function getCorpsByCategory(catId){
  var a = [];
  for(var i=0; i<defaultCorps.length; i++)
  {
    if(defaultCorps[i].catId == catId)
      a.push(defaultCorps[i]);        
  }

  return a;  
};

var catStyles = [
    {
      "background-color" : "#0077ff",
      "color" : "#ff0000",
    },
	{
      "background-color" : "#00bbff",
      "color" : "#ff4400",
    },
	{
      "background-color" : "#00ffff",
      "color" : "#ff8800",
    },
	
	
	{
      "background-color" : "#aaffaa",
      "color" : "#ff8800",
    },
	
	{
      "background-color" : "#dddddd",
      "color" : "#bbbbbb",
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


function getRating(id){
	const ratingAvg = 50;
	const ratingGranularity = 10;
	return ratingAvg+ratingGranularity*id;	
}
function getRatingList(p0, p1, p2, p3, p4, p5){
  const defaultRating = getRating(0);
  var ratingList = [
	{
      "title": "AUTO",
	  "titleDesc": "Auto-Mgt",
      "rating": defaultRating,      
    },
	{
      "title": "TECH",
	  "titleDesc": "Hi-Tech Tasks",
      "rating": defaultRating,     
    },
	
	{
      "title": "DURA",
	  "titleDesc": "Proj Durability",
      "rating": defaultRating,     
    },
		
  ];
  
  if(p0) ratingList[0].rating = p0;
  if(p1) ratingList[1].rating = p1;
  if(p2) ratingList[2].rating = p2;
  // if(p3) ratingList[3].rating = p3;
  // if(p4) ratingList[4].rating = p4;
  // if(p5) ratingList[4].rating = p5;
  return ratingList;
}


/////////////////////////////////////////////////////////////
// OVERLOAD:
/////////////////////////////////////////////////////////////
function overloadProjSkills(  ){
	
	needRefresh = true;

	demoTechSkills = techSkills;
	demoMgtSkills = mgtSkills;
	demoTechs = techs;
	// demoSkills["A"] = demoSkills[0];
	
	// demoCategories = initDemoCategories(2);
	// demoCategories = newCats;
	overloadCategories();
	
}