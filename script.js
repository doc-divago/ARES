/* 
Il codice contenuto in questo file garantisce
le seguenti funzionalità:
	- Individuare le coordinate gps del device;
*/

const x = document.getElementById("demo");

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition);
	} else {
		x.innerHTML = "La geolocalizzazione non è supportata da questo browser"
	}
}

function showPosition(position){
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}
