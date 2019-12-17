/* Custom DATA: */
var separator = "&nbsp<i class='fa fa-ellipsis-v fa-fw'></i>&nbsp";

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
