/* 
Il codice contenuto in questo file garantisce
le seguenti funzionalità:
	- Individuare le coordinate gps del device;
*/

window.onload = () => {
	getLocation()
}

const x = document.getElementById("demo");

function getLocation() {
	//Verifica se il browser gestisce la geolocalizzazione
	if (navigator.geolocation) {
		//Restituisce una funzione che ha come parametro la posizione del device.
		//Sta allo sviluppatore definire come questa funzione gestisca l'informazione.
		navigator.geolocation.getCurrentPosition(showPokemon); 
	} else {
		x.innerHTML = "La geolocalizzazione non è supportata da questo browser"
	}
}

/*
function showPosition(position){
	x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude
}
*/

function showPokemon(position) {
	let scene = document.querySelector('a-scene');
	
	let model = document.createElement('a-entity');
	model.setAttribute('gps-entity-place', 'latitude: ${position.coords.latitude}; longitude: ${position.coords.longitude};');
	model.setAttribute('gltf-model','.assets/magnemite/scene.gltf');
	model.setAttribute('rotation', '0 180 0');
	model.setAttribute('distance','3')
	model.setAttribute('scale','0.15 0.15 0.15');
	model.setAttribute('animation-mixer', '');
	model.addEventListener('loaded', () => {window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))});
	
	scene.appendChild(model);
	
}
