function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload = func;
	} else {
		window.onload = function() {
			if (oldonload) {
				oldonload();
			}
			func();
		}
	}
}

function MoreShowHide() {
    var x = document.getElementById("btnMore").innerHTML;
	if (x == "More Recently Posted Items") {
		document.getElementById("btnMore").innerHTML = "Fewer Recently Posted Items";
		document.getElementById("btnMore").title = "Fewer Recently Posted Items";
	} else
	{
		document.getElementById("btnMore").innerHTML = "More Recently Posted Items";
		document.getElementById("btnMore").title = "More Recently Posted Items";
	}
}