
/* DATA : */

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


function initItems(nb, delta, prefix){
	var skills = [];
	for(var i=0; i<=nb; i++){
	  var newSkill = {
		"title" : ""+prefix+i,
		"rating" : 90-(i*delta),
		"hiddenSkills" : [
		  {
			"title" : ""+prefix+i+".1",
			"rating" : 90-(i*delta),
		  },
		  {
			"title" : ""+prefix+i+".2",
			"rating" : 90-(i*delta),
		  },
		  {
			"title" : ""+prefix+i+".3",
			"rating" : 90-(i*delta),
		  },
		],    
	  };
	  // if(bRating) newSkill["rating"] = 90-(i*delta);
	  skills.push( newSkill );
	}
	return skills;
}

var techSkills = initItems(3, 5, "TS");
if (typeof myTechSkills !== 'undefined') techSkills = myTechSkills();
var techs = initItems(3, 5, "T");
if (typeof myTechs !== 'undefined') techs = myTechs();
var mgtSkills = initItems(3, 10, "M");
if (typeof myMgtSkills !== 'undefined') mgtSkills = myMgtSkills();
var projs = initItems(1, 10, "P");
if (typeof customProjs !== 'undefined') projs = customProjs;

var subJobs = initItems(1, 10, "J");
if (typeof mySubJobs !== 'undefined') subJobs = mySubJobs();
var languages = initItems(3, 10, "L");
if (typeof myLanguages !== 'undefined') languages = myLanguages();
var hobbiesTech = initItems(3, 10, "HT");
if (typeof myHobbiesTech !== 'undefined') hobbiesTech = myHobbiesTech();
var hobbiesOther = initItems(3, 10, "HH");
if (typeof myHobbiesOther !== 'undefined') hobbiesOther = myHobbiesOther();
var miniJobs = initItems(3, 10, "MJ");
if (typeof myMiniJobs !== 'undefined') miniJobs = myMiniJobs();

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




/* Custom DATA: */
if (typeof customCorps !== 'undefined')         defaultCorps = customCorps;
if (typeof customStudies !== 'undefined')       studies = customStudies;
if (typeof customOtherDegrees !== 'undefined')  otherDegrees = customOtherDegrees;
//if (typeof customVolunteeringTitles !== 'undefined')  volunteeringTitles = customVolunteeringTitles;




var defaultCategories = initDefaultCategories();
if (typeof customCategories !== 'undefined') customCategories();
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
		  "mgtSkills": [
            mgtSkills[0],
			mgtSkills[1],
          ],
          "subSkills": [
            mgtSkills[0],  //mgtSkills["Auto"],
            techSkills[0],             
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
    "title": "NAME_TITLE",
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
					"title":"<i class='fa fa-address-card fa-fw'></i> About Me ► ID & Co",
					"hiddenSkills" : [],
				  },
				  {
					"title":"<i class='fa fa-graduation-cap fa-fw'></i> 1999 ► Graduation & Co",
					"hiddenSkills" : [],
				  },
				  {
					"title":"<i class='fa fa-internet-explorer fa-fw'></i> Website ► Contacts & Co",
					"hiddenSkills" : [],
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

if (typeof myTilesLeft !== 'undefined') tilesLeft = myTilesLeft();


var tilesRight = [
  {
    "title": "JOB TITLE",
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
            "subSkills": techSkills,
          },
        ],
      },
    ],
  },
  
  {
    "title": "Techs",
    "subDivs": [
      {
        "title": "",
        //"catId": 0,
        "subDivs": [
          {
            "titles": [ ],
            "bSkillRating": true,
            "subSkills": techs,
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
            "subSkills": mgtSkills,
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