var x=Math.floor((Math.random()*3)+ 1);
if(x=="1"){xxx="https://www.puisi62.eu.org/2020/07/patah-hati.html"}
if(x=="2"){xxx="https://www.puisi62.eu.org/2021/05/syair-penyesalan.html"}
if(x=="3"){xxx="https://www.puisi62.eu.org/2021/05/syair-jalan-panjang.html"}; 

//ini script untuk ambil parameter
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}

function getUrlParam(parameter, defaultvalue){
    var urlparameter = defaultvalue;
    if(window.location.href.indexOf(parameter) > -1){
        urlparameter = getUrlVars()[parameter];
        }
    return urlparameter;
}

var konten = getUrlParam('article',null);

var urlStandar = window.location.href;

if (konten != null) {


function start() {
  var duration = 15000; // it should finish in 15 seconds !
  $("#box").stop().css("width", 30).animate({
    width: 200
  }, {
    duration: duration,
    progress: function(promise, progress, ms) {
      $(this).text(Math.round(progress * 100) + '%');
    }
  });
}
start();

setTimeout(function(){
document.getElementById("Linknya").style.display="block"; 
document.getElementById("box").style.display="none"; 
document.getElementById('Lanjut').innerHTML = "<a href='"+xxx+"#"+konten+"'>SELANJUTNYA</a>";
},15000);

}
