
// ----------------------------------------------
window.onload = function(){
	altTableRowColor();
	if (typeof SortableTable == 'function') { 
		SortableTable.initAll(); //added to initiate the table sort see sortabletable.js and includes/javascript.asp - tjb 1/28/2015
		altTableSortAltRowColor(); //added to initiate alternating table row color for table sort see sortabletable.js and includes/javascript.asp- tjb 1/28/2015
	}
}
// ----------------------------------------------



// ----------------------------------------------
// Alternates table row colors when the "AltTableRows" class is applied to a table by Contribute user. (added 04/08/2008 - tjb).
function altTableRowColor () {
	var el = document.getElementsByTagName("tr");
		for(var i=0; i<el.length; i++){
			if(el[i].childNodes[0].tagName != "th" && el[i].parentNode.parentNode.className.indexOf("AltTableRows") != -1){
				if(i%2 == 0){
					  el[i].className = "shadow";
				}
			}
		}
	}
// ----------------------------------------------

// End Javascript