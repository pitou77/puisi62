var urlStandar = window.location.href;
var uriDcd = urlStandar.replace(/http.+#/,"");
var urlHDcd = decodeURIComponent(uriDcd);

if (uriDcd != urlStandar) {

$(document).ready(function(){ 
	$('#user-submit').each(function(){ 
		$('#user-submit').attr("value", urlHDcd);
	});
	$("#agree-and-continue").click(function(){	
		      window.open(urlHDcd);
	});
});

} else {

$(document).ready(function(){ 
	$("#agree-and-continue").click(function(){	
			var linkpengguna = document.getElementById("user-submit").value;
			if (linkpengguna != ''){
		    window.open(linkpengguna);}
			else {alert('Empty');}
	});
});

}
