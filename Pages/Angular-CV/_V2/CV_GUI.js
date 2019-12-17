/* DAT GUI CONFIG */
var config = {
  // func: function(){ alert("Gui Button"); }
  lightOnOff: lightOnOff,  
  
  color: 0xFFFFFF,
  txtColor: 0xFFFFFF,
  applyColor: applyColor,
  
};

var gui = new dat.GUI();
{
  guiFolder1 = gui.addFolder('Global Params');
  guiFolder1.open();
  
  // guiFolder1.add(config, "Listener", 0, 10).listen();
  // guiFolder1.add(config, "select", {one: "Un", two: "Deux"}).onChange( changeConfig );
  guiFolder1.add(config, "lightOnOff"); 
  
  guiFolder2 = gui.addFolder('Colors');
  guiFolder2.addColor(config, "color"); //.onChange( changeConfig );
  guiFolder2.addColor(config, "txtColor");
  guiFolder2.add(config, "applyColor"); 
  
  
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
function applyColor(){
	var backColor = config.color;
	var txtColor = config.txtColor;

	catStyles[0]["background-color"] = backColor;
	catStyles[0]["color"] = txtColor;
	if(backColor[0]!="#") catStyles[0]["background-color"] = "#"+backColor.toString(16);
	if(txtColor[0]!="#") catStyles[0]["color"] = "#"+txtColor.toString(16);
	
	//alert(config.txtColor);
	console.log(backColor, txtColor);
	
	needRefresh = true;	
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