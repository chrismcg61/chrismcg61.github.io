var tilesRight = [];
var tilesLeft = []; 
 
var urlParams = (new URL(document.location)).searchParams;
var expandMode = urlParams.get('expand');
var demoMode = urlParams.get('demo');
var headerMode = urlParams.get('header');
var softMode = urlParams.get('soft');
var techMode = urlParams.get('tech');
var techOnlyMode = urlParams.get('techOnly');
// alert(mode);

//if (expandMode)
rePopulateTiles();
function rePopulateTiles(){
	tilesRight = [];
	tilesLeft = []; 
			
	if (demoMode==1  &&  typeof myTilesLeft_Demo !== 'undefined')  tilesLeft = tilesLeft.concat( myTilesLeft_Demo() );
	
	if (headerMode==1){
		if (typeof myTilesLeft_Header !== 'undefined')  tilesLeft = tilesLeft.concat( myTilesLeft_Header() );
		if (typeof myTilesRight_Header !== 'undefined')  tilesRight = tilesRight.concat( myTilesRight_Header() );
	}	
	if (softMode==1  &&  typeof myTilesLeft_Soft !== 'undefined')  tilesLeft = tilesLeft.concat( myTilesLeft_Soft() );
	if (softMode==1  &&  typeof myTilesLeft_LiveProj !== 'undefined')  tilesLeft = tilesLeft.concat( myTilesLeft_LiveProj() );
	if (techMode==1){
		if (typeof myTilesLeft_ProjSkills !== 'undefined')  tilesLeft = tilesLeft.concat( myTilesLeft_ProjSkills() );
		if (typeof myTilesRight_ProjSkills !== 'undefined')  tilesRight = tilesRight.concat( myTilesRight_ProjSkills() );
	}
	if (techMode==1){
		if (typeof myTilesRight_LangHobbies !== 'undefined')  tilesRight = tilesRight.concat( myTilesRight_LangHobbies() );
	}
	
	if (techOnlyMode==1){
		if (typeof myTilesRight_Header !== 'undefined')  tilesLeft = tilesLeft.concat( myTilesRight_Header() );
		if (typeof myTilesRight_ProjSkills !== 'undefined')  tilesLeft = tilesLeft.concat( myTilesRight_ProjSkills() );
	}
	
}	


function subTitle(text){
	return " <small><small><i>("+text+")</i></small></small>";
	// return " <span style='font-size:60%;'>("+text+")</span>";
}
function subSubTitle(text){
	return "<small><small>"+subTitle(text)+"</small></small>";
	// return " <span style='font-size:60%;'>("+text+")</span>";
}



/** ANGULAR APP **/
var needRefresh = false;
var app = angular.module('myApp', ['ngSanitize']);

app.controller('mainCtrl', function($scope, $rootScope) {  

  $scope.corps = defaultCorps;
  $scope.catStyles = catStyles;
  
  
  $scope.initColumns = function()  {
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
  }
  $scope.initColumns();  
  
  $scope.checkConfig = function()  {
    
    if(needRefresh) {
		needRefresh = false;		
		$scope.columns = [];
		//$scope.expandMode = expandMode;
		
		rePopulateTiles();
		$scope.initColumns(); 
		//setTimeout($scope.initColumns, 1000);		
    }
    // else $scope.columns[0].tiles = tilesLeft;
	else
	{
		
	}
    
    $scope.$applyAsync();
    
    setTimeout($scope.checkConfig, 500);
  };
  setTimeout($scope.checkConfig, 1000);
  
  $scope.checkExpand = function(skillExpandMode)  {
	  var bExpand = expandMode > skillExpandMode;
	  bExpand = bExpand || expandMode>=99;
	  return bExpand;
  }
  
  //Modal Funcs:
  $scope.openMyModal = openMyModal;
  $scope.closeModal = closeModal;
  
  

})








/* Intro Modal */
//openModal(introModal);
/*
function openModal(modalId){
	modalId.style.visibility = "visible";  
	modalId.style.opacity = 1.0;
}
function closeModalId(modalId){
	modalId.style.visibility = "hidden";  
	modalId.style.opacity = 0.0; 
}
*/