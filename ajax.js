function ajaxGet(){
	var url = "http://localhost:5000/";
	var http = new XMLHttpRequest();
	
	http.onreadystatechange = function() {
		if(http.readyState == 4) {
			console.log("发送没有问题");
			if (http.status == 200) {
				
				console.log("所以是有返回的");
				var ajaxRes = document.getElementById("ajaxResponse");
				ajaxRes.innerHTML = http.responseText;
			}
		}
	}
	http.open("get",url,true);
	http.send(null);
}
function ajaxClick() {
	var submit = document.getElementById("submit");
	submit.onclick = ajaxGet;
}

window.onload = ajaxClick;
