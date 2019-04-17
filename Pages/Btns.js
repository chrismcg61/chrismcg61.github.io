var Btns = {};


//var r = 0;
//var g = 0;
//var b = 128;
//var a = 0.8;
//var delta = 40;

Btns.initBtns = function( defaultBtn, links ){
	var nbLinks = links.length;
	var width = 100/nbLinks;
	for(var i=0; i<nbLinks; i++){
		var btnClone = defaultBtn.cloneNode(true);
		btnClone.style.display = "block";
		btnClone.style.width = width+"%";
		//btnClone.style.backgroundColor = "rgba("+r+","+g+","+b+","+a+")";
		btnGroup.appendChild(btnClone);
		
		btnClone.innerHTML = links[i].title;		
		btnClone.onclick = clickHandler( links[i].url );				
		//b += delta;
	}
}	

function clickHandler( url ){
	//alert( i ); 
	return function(){ window.location.assign( url ); }
}