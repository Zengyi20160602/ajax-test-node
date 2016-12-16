function ajaxGet(){
	var url = "http://localhost:5000";
	var http = new XMLHttpRequest();
	
	http.onload = function() {
		if (http.status = 200) {
			alert("data received!");
			var ajaxRes = document.getElementById("ajaxRes");
			ajaxRes.innerHTML = http.responseText;
		}
	};
	http.open("get",url);
	http.send(null);
}
function ajaxClick() {
	var submit = document.getElementById("submit");
	submit.onclick = ajaxGet;
}

window.onload = ajaxClick;