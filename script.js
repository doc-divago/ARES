/* 
Il codice contenuto in questo file garantisce
le seguenti funzionalità:
	- Individuare le coordinate gps del device;
*/

const x = document.getElementById("demo");

function getLocation() {
	//Verifica se il browser gestisce la geolocalizzazione
	if (navigator.geolocation) {
		//Restituisce una funzione che ha come parametro la posizione del device.
		//Sta allo sviluppatore definire come questa funzione gestisca l'informazione.
		navigator.geolocation.getCurrentPosition(showPosition); 
	} else {
		x.innerHTML = "La geolocalizzazione non è supportata da questo browser"
	}
}

function showPosition(position){
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}
