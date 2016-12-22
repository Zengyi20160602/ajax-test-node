function ajaxGet(){
	var url = "http://localhost:5000/";
	var http = new XMLHttpRequest();
	
	http.onreadystatechange = function() {
		if(http.readState == 4) {
			if (http.status = 200) {
				
				console.log("所以是有返回的");
				var ajaxRes = document.getElementById("ajaxRes");
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
