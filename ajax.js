function ajaxGet(){
	var url = "http://localhost:5000/";
	var http = new XMLHttpRequest();
	
	http.onreadystatechange = function() {
		if(http.readyState == 4) {
			if (http.status == 200) {
				var ajaxRes = document.getElementById("ajaxResponse");
				ajaxRes.innerHTML = http.responseText;
			}
		}
	}
	http.open("get",url);
	http.send(null);
}
function ajaxClick() {
	var submit = document.getElementById("submit");
	submit.onclick = ajaxGet;
}

window.onload = ajaxClick;
