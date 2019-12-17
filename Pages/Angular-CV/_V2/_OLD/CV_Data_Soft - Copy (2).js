function subTitle(text){
	return " <small><small><i>("+text+")</i></small></small>";
}


function myTilesLeft_Soft(){
	
	var myTiles = [
	  	  
	  {"title": "Projects of Interest",  //Pertinent  //Valid  //Candidate
		"style": {
			  // "background-color" : "#"+config.skillBackColor.toString(16),
			},
			"subDivs": [
			  {
				"title": "",
				"subDivs": [
				  {"subSkills": [
				  
						{"title":"CONTRACT Min"  // ► Scope & Perf-Based Contract
								+ subTitle("Mobility Contract, Perf Scope-Contract"),  //Appt Location
							"checked" : expandMode>0,
							"expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "3+ Months Scope"  
										+ subTitle("150% Load Capacity"),  
								},
								{
									"title" : "Telework / FlexTime (50%)",  //(6D-Weeks, Evening/Night Shifts...)
								},
																
								{
									"title" : "AGILE Team Struct"  //AUTO/Startup
										+ subTitle("≤6 Devs  ●  2W-Sprint"),
									"checked" : expandMode>1,
									"expandMe": true,
									"hiddenSkills" : [	
										{
											"title" : "Manager = Product Owner"  //Business Owner,  Scrum Master (N+1), Sprint Support
												+ subTitle("Client, Resources & Risks Mgt"), 
											"hiddenSkills" : [],
										},										
										
										{
											"title" : "Meetings = Standups"
												+ subTitle("+Sprint Plan, Review & Retro"),
										},
										
										{
											"title" : "Schedule = LT & Public",
										},
										{
											"title" : "Core Scope Stability"
												+ subTitle("Change Request Limit"),
										},	

										{
											"title" : "TEST 1", 
											"hiddenSkills" : [	
												{"title" : "TEST 1.1", },		
											],
										},											
											
									]
								},
								
							]
						},
						
						{"title":"CONTRACT LT ► Time Mgt & Training",
							// "checked" : expandMode>0,
							// "expandMe": true,
							"hiddenSkills" : [				
									
								{
									"title" : "Critical Periods Mgt" 
										+ subTitle("Hi/Lo Workload, Reduced Team …"),  //(XMas & Co)
								},
								{
									"title" : "Non-Prod Time Mgt"
										+ subTitle("Commute, Breaks, Meetings …"),
								},
								{
									"title" : "Seasonal Team Training"
										+ subTitle("Dev & Mgt Skills"),
								},
								
								
							]
						},
						
						{"title":"AGILE Proj [Min] ► Hi-Tech & Agile-Team",
							// "checked" : expandMode>0,
							// "expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "Hi-Tech Backlog",
									"checked" : expandMode>1,
									"expandMe": true,
									"hiddenSkills" : [				
										{
											"title" : "Core Objectives & Perf Methods",
										},
										{
											"title" : "Dual Task Backlog"
												+ subTitle("Hi Added-Val Sorted Backlog & Hi Innov Devs Backlog"),  //Ultra-Sorted Core/Client
										},
									
										{
											"title" : "Lo-Tech Tasks Mgt"
												+ subTitle("Proactivity & Automation"),
										},										
											
									]
								},
								{
									"title" : "Hi-Tech",
									"checked" : expandMode>1,
									"expandMe": true,
									"hiddenSkills" : [				
										{
											"title" : "Innov",
										},
										{
											"title" : "Added-Val",
										},	
										{
											"title" : "Lo-Tech Tasks Mgt"
												+ subTitle("Proactivity & Automation"),
										},										
											
									]
								},
								{
									"title" : "AGILE Team Mgt",
									"checked" : expandMode>1,
									"expandMe": true,
									"hiddenSkills" : [				
										{
											"title" : "Deep Task Backlog",
										},
										{
											"title" : "Pair Commits"
												+ subTitle("Pair/XP Prog…"),
										},
										{
											"title" : "Mentoring",
										},								
											
									]
								},
								
							]
						},
						
						{"title":"AGILE Proj [Advanced] ► Prod/Qual Optim",
							// "checked" : expandMode>0,
							// "expandMe": true,
							"hiddenSkills" : [				
								{"title" : "Sprint Feedback & Optim",
									// "checked" : expandMode>1,
									// "expandMe": true,
									"hiddenSkills" : []
								},
								{"title" : "Proj. Metrics",
								},
								{
									"title" : "Lo-Interrupt",
								},
								{"title" : "Custom Tasks",
									// "checked" : true,
									// "expandMe": true,
									"hiddenSkills" : []
								},
								
									
							]
						},
												
						{"title":"AGILE Proj [Ultra-Advanced]",
							// "checked" : true,
							// "expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "Telework ≥ 50%",
									"hiddenSkills" : []
								},
								{
									"title" : "Proj Wiki, Beginner's Tasks",
									"hiddenSkills" : []
								},
								{
									"title" : "ROI",
									"hiddenSkills" : []
								},
								{
									"title" : "Pro-Bono Missions",
									"hiddenSkills" : []
								},
								
								{
									"title" : "Advanced Team-Building",
									"hiddenSkills" : [				
										{
											"title" : "CoWorking In-Days/Offices",
										},
										{
											"title" : "Casual Friday & Co.",
										},								
											
									]
								},	


								{"title":"KEYWORDS ► Proj Quality Optim / Durable Proj",
									// "checked" : expandMode>0,
									// "expandMe": true,
									"hiddenSkills" : [				
										{"title" : "Agile-Team / Agile-Prod",
											"checked" : expandMode>1,
											"expandMe": true,
											"hiddenSkills" : []
										},	
											
									]
								},								
									
							]
						},
						
						
						
					 
					],
				  },
				  ],
			  },
		],
	  },
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  
	  {"title": "Projects of Interest 2",  //Pertinent  //Valid  //Candidate
		"style": {
			  // "background-color" : "#"+config.skillBackColor.toString(16),
			},
			"subDivs": [
			  {
				"title": "",
				"subDivs": [
				  {"subSkills": [
				  
						{"title":"CONTRACT Basics"  
								+ subTitle("Mobility, Flex & DeepScope"),  
							"checked" : expandMode>0,
							"expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "Mobility Contract"
										+ subTitle("Rent Assist"),									
								},
								{
									"title" : "3+ Months Core Scope"  
										+ subTitle("Public Schedule, Lo-ChangeReq"),  
								},
								{
									"title" : "Work Continuity"
										+ subTitle("Non-Working Days Limit"),  
								},
								{
									"title" : "Telework / FlexTime (50%)",  //(6D-Weeks, Evening/Night Shifts...)
								},
							],
						},
						
						{"title":"Hi-Autonomy"
							+ subTitle("AgiStruct, LoInterrupt & CustomTasks"),
							// "checked" : expandMode>0,
							// "expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "Pseudo-Agile Struct"
										+ subTitle("MiniTeam + TeamLead + THE Manager"),								
								},
								{
									"title" : "Lo-Interrupt"
										+ subTitle("Msg, Meetings, Breaks, Commute…"),									
								},
								{
									"title" : "Custom Tasks",								
								},
								
							],
						},
						
						{"title":"Hi-Tech"
							+ subTitle("Innov, AddVal & Training"),
							// "checked" : expandMode>0,
							// "expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "Innovation"
										+ subTitle("Innov Feature/Tech..."),									
								},
								{
									"title" : "Added-Value"							
										+ subTitle("End-User Feedback, ROI..."),		
								},
								{
									"title" : "Lo-Tech Tasks Mgt"
										+ subTitle("Proactivity & Automation"),
								},
								{
									"title" : "Seasonal Team Training"
										+ subTitle("Dev & Mgt Skills"),
								},
								
							],
						},
						
						{"title":"AGILE / SCRUM",  
							"checked" : expandMode>0,
							// "expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "Min"
										+ subTitle("AutoMgt, PairCommits & Mentoring"),
									"hiddenSkills" : [	
										{
											"title" : "THE Manager = Product Owner", 
										},
										{
											"title" : "SCRUM Master = All Team Volunteers", 
										},
										{
											"title" : "Pair Commits", 
										},											
										{
											"title" : "Mentoring", 
										},
									],									
								},
								{
									"title" : "Advanced"
										+ subTitle("SprintOptim & ProjMetrics"),									
									"hiddenSkills" : [	
										{
											"title" : "Sprint Feedback & Optim",
										},
										{
											"title" : "Proj. Metrics",
										},
									],
								},
								{
									"title" : "Ultra-Advanced"
										+ subTitle("Telework++, TeamBuilding, ProjWiki"),
									"hiddenSkills" : [	
										{
											"title" : "Telework ≥ 50%",
										},
										{
											"title" : "Proj Wiki ● Beginner's Tasks",
										},
										{
											"title" : "Pro-Bono Missions",
										},
										{
											"title" : "HQ Offices/Desks"
												+ subTitle("ISO-2020 & Co."),
										},
										{
											"title" : "Advanced Team-Building"
												+ subTitle("CoWorking & CasualDays"),
											"hiddenSkills" : [				
												{
													"title" : "CoWorking In-Days/Offices",
												},												
												{
													"title" : "Casual Friday & Co.",
												},								
													
											]
										},
								
										{
											"title":"Other KEYWORDS",
											"hiddenSkills" : [				
												{
													"title" : "Durable Proj",
													"hiddenSkills" : []
												},
												{
													"title" : "SUB_DIV_TEST",
													"hiddenSkills" : [
														{
															"title" : "SUB_SUB_DIV_TEST",
															"hiddenSkills" : []
														},
													]
												},
												
													
											]
										},			
									],
								},
								
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