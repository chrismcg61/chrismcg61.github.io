var rating = 95;
var mgtSkills = [];
addSkill( "AUTO", mgtSkills,
   {"title" : "AUTO-Mgt",
	"rating" : rating,
	"hiddenSkills" : [
	  {
		"title" : "Tasks Planning",
		"rating" : rating,
		"hiddenSkills" : [
			{
				"title" : "Important User-Tasks Selection"
					+ subTitle("Hi-ROI"),
				"rating" : rating,
			},
			{
				"title" : "Impt-Urgent Dev Tasks"
					+ subTitle("Schedule Prio Optim"),
				"rating" : rating,
			},
			{
				"title" : "Multi-Task"
					+ subTitle("Core Task + ER MiniTasks"),
				"rating" : rating,
			},
			{
				"title" : "Daily Re-Eval"
					+ subTitle("Proactive Change-Req Mgt"),
				"rating" : rating,
			},
		
		],
	  },
	  
	  {
		"title" : "CODE Mgt",
		"rating" : rating,
		"hiddenSkills" : [
			{
				"title" : "Test-Driven Dev"
					+ subTitle("User Feedback, Lib-API UTs"),  //Client-User
				"rating" : rating,
			},
			{"title" : "Inter-Modules Refactoring"
				+ subTitle("Eval & Exec"),
				"rating" : rating,
				"hiddenSkills" : [ ],    
			},
			{"title" : "Code Guidelines"
				+ subTitle("Understanding, Exec & Optim"),
				"rating" : rating,
				"hiddenSkills" : [ ],    
			},
		
		],
	  },
	],    
  }
);

rating = rating - 10;
addSkill( "AGILE", mgtSkills,
   {"title" : "AGILE",
	"rating" : rating,
	"hiddenSkills" : [
	  {
		"title" : "SCRUM ► Pair-Prog ► X-Prog",
		"rating" : rating,
	  },
	  
	  {
		"title" : "Methods",
		"rating" : rating,
		"hiddenSkills" : [
			{
				"title" : "Scrum Master Mobility"
					+ subTitle("Tools/Resources Distrib."),
				"rating" : rating,
			},		  
			{
				"title" : "Sprint Review"
					+ subTitle("Methods Analysis & Optim"),
				"rating" : rating,
			},
			{
				"title" : "Inter-Team Sync", //Inter-Proj
				"rating" : rating,
			},
		
		],
	  },
	  
	  
	  
	  {
		"title" : "CODE Mgt",
		"rating" : rating,
		"hiddenSkills" : [
			{"title" : "Retro-Engineering",
				"rating" : rating,
			},
			{"title" : "API Learning"
					+ subTitle("Complex App Deciphering"),
				"rating" : rating,
			},	
			{"title" : "API Sharing"
				+ subTitle("Documenting, Harmonization, Demo"),
				"rating" : rating,
				"hiddenSkills" : [ ],    
			},
			{
				"title" : "Code Review"
					+ subTitle("Critical API Team Review"),
				"rating" : rating,
			},	
			{
				"title" : "Perf Monitoring Libs"
					+ subTitle("CPU/GPU Data, Hi-Load Warnings"),
				"rating" : rating,
			},
			{
				"title" : "Quality/Regression Analytics",
				"rating" : rating,
			},
			
			
					
		],
	  },
	  
	  
	],    
  }
);

rating = rating - 10;
addSkill( "AUTO_CODE", mgtSkills,
   {"title" : "Code Auto-Analysis",
	"rating" : rating,
	"hiddenSkills" : [
		{
			"title" : "UT Maintenance"
				+ subTitle("+API/Libs Refactoring"),
			"rating" : rating,
		},
		{
			"title" : "UT Auto-Release"
				+ subTitle("+Regression Alert"),
			"rating" : rating,
		},	
		{
			"title" : "Code Quality Auto-Analysis",
			"rating" : rating,
		},		
		
		
	],    
  }
);



