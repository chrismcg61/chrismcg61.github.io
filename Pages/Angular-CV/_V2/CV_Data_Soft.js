
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
									"title" : "3+ Months Scope"  
										+ subTitle("150% Capacity, HQ Bonus-Scope"),  
								},
								{
									"title" : "Schedule Tool"  
										+ subTitle("Mgt-Client Feedback, Async Change-Req."),  
								},
								{
									"title" : "Work Continuity"
										+ subTitle("'No-Work' Days Limit, Lo/Hi Load Mgt"),  
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
										+ subTitle("Msg, Breaks/Commute, Non-Agile Meetings"),									
								},
								{
									"title" : "Custom Tasks"
										+ subTitle("Creation & Integration"),										
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
						
						{
							"title":"Agile Team Mgt"
								+ subTitle("SCRUM"),						
							"checked" : expandMode>0,
							// "expandMe": true,
							"hiddenSkills" : [				
								{
									"title" : "Min"
										+ subTitle("AutoMgt, PairCommits & Mentoring"),
									"hiddenSkills" : [	
										{
											"title" : "Optimal Struct"
												+ subTitle("≤6 Devs  ●  2W-Sprint"),
										},
										{
											"title" : "THE Manager = Product Owner", 
										},
										{
											"title" : "SCRUM Master = All Team Volunteers", 
										},
										{
											"title" : "Pair Commits"
												+ subTitle("Pair/XP Prog…"),
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
											"title" : "Async Msg Tool",
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