//////////////////////////////////////////////////////////////
// MODAL:
/////////////////////////////////////////////////////////////
function openMyModal(){
  //alert("Open Modal");
  //myModal.style.display = "block";
  myModal.style.visibility = "visible";  
  myModal.style.opacity = 1.0;  
}
function closeModal() {
  //alert("Close Modal");
  //myModal.style.display = "none";  
  myModal.style.visibility = "hidden";  
  myModal.style.opacity = 0.0;  
}

var openedModal;
function openModal(modalId){
	//alert("Open Intro");
	openedModal = modalId;
	openedModal.style.visibility = "visible";  
	openedModal.style.opacity = 1.0;
}
function closeOpenedModal(){
	openedModal.style.visibility = "hidden";  
	openedModal.style.opacity = 0.0; 
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == myModal) {
    closeModal();
  }
  if (event.target == introModal) {
	  //alert("Closing introModal");
      closeOpenedModal();
  }
}












/* Modal Tabs Mgt : */
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








/* Intro Modal Display & Funcs : */
var deltaColor = 40;
var r = 0;
var g = 0;
var b = 128;
var a = 0.8;
function cloneModalBtn(mode, innerHTML){
	var btnClone = myFullDivBtn1.cloneNode(true);
	//btnClone.style.width = 25+"%";
	btnClone.style.display = "block"; 
	btnClone.style.backgroundColor = "rgba("+r+","+g+","+b+","+a+")";
	b += deltaColor;
	btnClone.onclick = function() { 
	  expandSetMode(mode);
	  closeOpenedModal(); 
	}

	btnClone.innerHTML = innerHTML;

	btnGroup.appendChild(btnClone);
}
function expandSetMode(mode){
  expandMode = mode;  
  //refreshExpand();
  needRefresh = true;
}

var modalBtnHTML = "<h1>SIMPLE RESUME</h1>"
        + "<br/> <span>No Panels Expanded</span>";
cloneModalBtn(0, modalBtnHTML);
		
modalBtnHTML = "<h1>DEFAULT RESUME</h1>"
			+ "<br/> <span>Important Tech Panels Expanded</span>";
cloneModalBtn(1, modalBtnHTML);

modalBtnHTML = "<h1>FULL RESUME</h1>"
        + "<br/> <span>All Tech Panels Expanded</span>";
cloneModalBtn(99, modalBtnHTML);


