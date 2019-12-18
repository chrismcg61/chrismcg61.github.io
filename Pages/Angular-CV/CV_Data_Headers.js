const dateGraduation = 2006;
var age = Math.floor( getAge(1983 + 310/365) );  //6 nov = 310th day
var xp = Math.floor( getAge(2007 + 1/365) );
const xpAdjust = 2;
xp -= xpAdjust;

function getAge( birthDateYearDecimal ){
  const msByYear = 365.2422 * 24 * 60 * 60 * 1000;
  const curYearDecimal = 1970 + Date.now() / msByYear;
  
  var age = curYearDecimal - birthDateYearDecimal;
  return age;
}

function hlSpan(txt){
	return "<span class='dates'>"+txt+"</span> ";
}

function myTilesLeft_Header(){
	
	var myTiles = [
  {
    "title": "Christopher McGARRY",
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
				"title": "<i class='fa fa-address-card fa-fw'></i> About Me ►"
					+" FR"
					+" | <small>Age:</small>"+age
					+" | <small>XP:</small>"+xp,
				"hiddenSkills" : [
					{"title": "Entrepreneur"
						+subTitle("Commitment, Challenge/Opportunities Seeker"),
					},
					{"title": "Perceiving Introvert"
						+subTitle("Self-Critical, Curious & Passionate"),
					},
					{"title": "Hi-Focus/Workload Capacity"
						+subTitle("No-Interrupt Days"),
						"hiddenSkills" : [
							{"title": hlSpan("12h-D") + hlSpan("70h-W"), },
						],
					},
				
				],
			  },
			  {
				"title": "<i class='fa fa-graduation-cap fa-fw'></i> "
					+dateGraduation
					+" ► IT-Engineer"  //Master
					+subTitle("+Maths/Elec/Robotics"),
				"hiddenSkills" : [
					{"title": "BAC+5 ► "+hlSpan("LAVAL")+" ESIEA Engineer",
						"hiddenSkills" : [
							{"title": "MAJOR ► VR, HMI & Robotics Dev", },
							{"title": "<i>Minor ► Electronics / Networking</i>", },
						],
					},
					{"title": "BAC+2 ► "+hlSpan("CAEN_")+" Maths Sup/Spé", },
					{"title": "Other", 
						"hiddenSkills" : [
							{"title": "BAFA ► Summer Camp Animator", },
							{"title": "BIA_ ► Civilian Aircraft Pilot"
								+subTitle("Test-Flight"),
							},
							{"title": "Electrical Accreditation", },
							{"title": "Security Clearance"
								+subTitle("Confidential ► Secret"),
							},
						],
					},
				],
			  },
			  {
				"title": "<i class='fa fa-internet-explorer fa-fw'></i>"
					+" <small><i>chrismcg61.wixsite.com/home1</i></small>"
					+subTitle("WebCV & Portfolio"),
				"hiddenSkills" : [
					{"title": "<i class='fa fa-envelope fa-fw'></i>"
						+" my.email@fai.com",
						"hiddenSkills" : [
							{"title": "<i class='fa fa-phone-square fa-fw'></i>"
								+" 0123456789"
								+subTitle("10am ► 7pm"),
							},
						],
					},
				],
			  },
			  {
				"title": "<i class='fa fa-globe fa-fw'></i> Mobility ► Global"
					+subTitle("Hi-Tech Cities"),
				"hiddenSkills" : [
					{"title": hlSpan("LYON") + hlSpan("LILLE") + hlSpan("BORDEAUX") + hlSpan("NICE") + hlSpan("TOULOUSE") + hlSpan("NANTES/RENNES"), },
					{"title": "Extended ► " + hlSpan("LONDON") + " ● " + hlSpan("EUROPE") + " ● " + hlSpan("WORLD"), },
				],
			  },
			 ],
		  },
		],
	  },
	],
  },
  
 ];
	
	return myTiles;
};

function myTilesRight_Header(){
	
	var myTiles = [
  {
    "title": "Senior Versatile Programmer",
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
				"title": "Tech-Expert / Team-Lead"
					+subTitle("Scrum Master"),
				"hiddenSkills" : [],
			  },
			  {
				"title": "Junior Proj Manager"
					+subTitle("Product Owner"),
				"hiddenSkills" : [],
			  },
			  {
				"title": "Junior Teacher"
					+subTitle("Prog, Maths, FR/ENG"),
				"hiddenSkills" : [],
			  },
			  
			 ],
		  },
		],
	  },
	],
  },
  
 ];
	
	return myTiles;
};