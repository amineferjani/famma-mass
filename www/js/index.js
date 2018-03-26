function rad(x) {
  return x * Math.PI / 180;
};
function fn1(){
$("#vader").ProgressBarWars({porcentaje:100,
color:"",
tiempo:2000,
alto:"6px",
 estilo:"vader",
});
setTimeout(fn2, 2000);
}
function fn2(){
window.location.replace("maps.html");
}
function getDistance(l1,l2,t1,t2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(l2 - l1);
  var dLong = rad(t2 - t1);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(l1)) * Math.cos(rad(l2)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d/1000; // returns the distance in meter
};
var markerslon=new Array();
var markerslal=new Array();
var markers=new Array();
var marker;
var nb,lat,long;
var map;
var di;
var myMenu = '<div>\
							<a href="#"><i id="home"  class="material-icons">map</i></a>\
							<a href="#"><i id="boutique" class="material-icons">store</i></a>\
							<a href="#"><i id="cloud" class="material-icons">cloud</i></a>\
							<a href="#"><i id="annonces" class="material-icons">shopping_cart</i></a>\
							<a href="#"><i id="car" class="material-icons">directions_car</i></a>\
							<a href="#"><i id="camera" class="material-icons">camera_alt</i></a>\
							<a href="#"><i id="gesture" class="material-icons">local_library</i></a>\
							<a href="#"><i id="astuce" class="material-icons">feedback</i></a>\
						   </div>';
						   var myMenu1 = '<div>\
							<a href="#"><i id="home" class="material-icons">person</i></a>\
							<a href="#"><i class="material-icons">shopping_cart</i></a>\
							<a href="#"><i id="cloud" class="material-icons">directions_car</i></a>\
							<a href="#"><i id="call" class="material-icons">camera_alt</i></a>\
							<a href="#"><i id="mail" class="material-icons">mail_outline</i></a>\
							<a href="#"><i id="chat" class="material-icons">input</i></a>\
						   </div>';
						   
	
	$('[name="demo"]').popup({

  content: myMenu,
  position: "right",
  			popItemClick: function() {

				switch ($(event.target).attr('id')) {
					case "home":
						    document.getElementById('id01').style.display='block';
						break;
					case "boutique":
						window.location.href = "annonce.html";
						break;
					case "cloud":
						$("#googleMap").load("page/splash.html");
						break;
						break;
					case "annonces":
						  $("#googleMap").load("page/annonce.html");
						break;
						case "car":
						window.location.href = "covoiturage.html";
						break;
					case "camera":
					window.location.href = "capture.html";
						
						break;
					case "gesture":
						alert("You chose the Bus!");
						break;
					case "astuce":
						alert("You chose the Bike!");
						break;
					default:
						alert("Error!");
				}
			}

});
$('[name="demo1"]').popup({

  content: myMenu1,
  position: "left"

});
function redirection(b){
idb=b;
window.location.href = "shop.html";
}
function init(){
       var url = "http://192.168.43.127/projects/app1/maps.php";
        $.getJSON(url, function(result) {
            console.log(result);
			    var infowindow = new google.maps.InfoWindow({
          maxWidth: 250
        });
            $.each(result, function(i, field) {
	
			var loc = new google.maps.LatLng(field.Laltitude, field.Longitude);
			      di=field.ID_Boutique;
                var id = field.Longitude;
                var title = field.Nom_Boutique;
                var duration = field.appat;
                var price = field.Laltitude;
	//field.Nom_Boutique +'</b><br>' +field.Adresse +'<br>'+ duration +'<br><b>'+getDistance(field.Longitude,long,field.Laltitude,lat).toFixed(2)			
 var contentString = ' <div onclick="redirection('+"'"+di+"'"+')"><img src="'+field.Url_Logo+'" style="max-width: 35%; height: auto;"></a><br><b>'+field.Nom_Boutique +'</b><br>' +field.Adresse +'<br>'+ duration +'<br><b>'+getDistance(field.Longitude,long,field.Laltitude,lat).toFixed(2)+' Km </b></div>';
 var currWindow =false;
    
				
		markers[i] = new google.maps.Marker({
        position: new google.maps.LatLng(field.Laltitude, field.Longitude),		
    });   
    // MAP - Place markers
	   markers[i].setIcon("img/iconn.png");
       markers[i].setMap(map);			
	   markers[i].addListener('click', function() {
	   infowindow.setContent(contentString);
          infowindow.open(map, markers[i]);
        });			
				nb=i;
            });
			
        });
}
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(36.735766,10.201111),
    zoom:12,
	mapTypeControl : false,
	zoomControl : false,
	streetViewControl : false,
	fullscreenControl : false
};
map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
function getPosition() {
    navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}

//called when the position is successfully determined
function successPosition(position) {
    long = position.coords.longitude;
    lat = position.coords.latitude;
    var current = new google.maps.LatLng(lat, long);
    setloc(current, 12);
}

function failPosition(err) {
    alert('ERROR(' + err.code + '): ' + err.message);
    console.warn('ERROR(' + err.code + '): ' + err.message);
}

function setloc(loc, zoom) {
    map.setCenter(loc);
    map.setZoom(zoom);
}
