window.onload = function() {
	// var mapDiv = document.getElementById('map');	

	// var options = {

	// 	center: new google.maps.LatLng(41.652393,1.691895),
	// 	zoom: 15,
	// 	mapTypeId: google.maps.MapTypeId.HYBRID,
	// 	// noClear: Por defecto, cuando el mapa carga en la página HTML, éste borra cualquier otro contenido ubicado en el contenedor. 
	// 	// Si por alguna razón nos interesase mantener el contenido, podemos utilizar la propiedad “noClear” con el valor “true”.
	// 	noClear: false,
	// 	// Background color es para el color del tiempo de carga del contenedor del mapa
	// 	// Cuando cargamos la página HTML es posible ver durante el tiempo de carga el color de fondo seleccionado 
	// 	backgroundColor: '#208412',
	// 	// Con esta propiedad es posible controlar el cursor cuando se sitúa sobre algún objeto arrastable dentro del mapa.
	// 	draggableCursor: 'auto',
	// 	// La propiedad “draggingCursor” es similar a la anterior. La diferencia es que en este caso, el cursor sólo cambia cuando arrastramos un objeto en el mapa
	// 	draggingCursor: 'crosshair',
	// 	keyboardShortcuts: true,
	// 	disableDoubleClickZoom: false,
	// 	draggable: true,
	// 	scrollwheel: true,
	// 	//En este caso hemos optado por un controlador pequeño para el zoom		
	// 	zoomControl: true,
	// 	zoomControlOptions: {
	// 		style: google.maps.ZoomControlStyle.DEFAULT //LARGE //SMALL
	// 	},
	// 	//el valor true desactiva la interfaz, el valor false (por defecto) la activa
	// 	disableDefaultUI: false,
	// 	streetViewControl: true,
	//     streetViewControlOptions: {
	//         position: google.maps.ControlPosition.RIGHT_TOP
	//     },
	// 	//En este caso hemos ubicado el panControl en la esquina superior derecha
	// 	panControl: true,
	//     panControlOptions: {
	//         position: google.maps.ControlPosition.TOP_RIGHT
	//     },
	// 	//el valor false desactiva el mapTypeControl. Para mostrarlo debemos utilizar el valor true o no utilizar este atributo (por defecto el valor es true)
	// 	mapTypeControl: true,

	// 	mapTypeControlOptions: {
	// 		// Permitiremos al usuario escoger entre los siguientes dos tipos de mapa
	// 		mapTypeIds: [
	// 			google.maps.MapTypeId.ROADMAP,
	// 			//google.maps.MapTypeId.SATELLITE,
	// 			google.maps.MapTypeId.HYBRID				
	// 		],
	// 		style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,//DROPDOWN_MENU, //HORIZONTAL_BAR
	// 		//Definimos la posición del control en la parte inferior central del mapa
	// 		position: google.maps.ControlPosition.TOP_CENTER
	// 	}
	// };


 // 	var mapa = new google.maps.Map(mapDiv, options);

 // 	var marker = new google.maps.Marker({
	// 		position: new google.maps.LatLng(41.652393,1.691895),
	// 		map: mapa,
	// 		title: 'Luis Miguel te regala Boletos VIP ',
	// 	 	icon: 'iconos/Google_Maps_Icon_32.png'
	// 	});

	// var infowindow = new google.maps.InfoWindow({
	// 	content:'<h1>CONCURSO DE BOLETOS VIP - LUIS MIGUEL</h1>' +
	// 			'<p>Dirreccion: Carrer de Melcior de Palau, 140, 08014 Barcelona.</p>'+
	// 			'<p>Telefonos: 934 03 57 70.</p>' +
	// 			'<img src="http://fiestasmexicanas.info/wp-content/uploads/2015/02/luis-miguel.jpg" alt="Luis Miguel" />'});
	
	// /*
	// 	El objeto google.maps.Marker puede detectar los siguientes eventos de usuario:
	// 		‘click’
	// 		‘dblclick’
	// 		‘mouseup’
	// 		‘mousedown’
	// 		‘mouseover’
	// 		‘mouseout’

	// */
	// google.maps.event.addListener(marker, 'click', function() { 
	// 	infowindow.open(mapa,marker);
	// });

	// // Inicio de Marcador 1
	// var marker1 = new google.maps.Marker({		
	// 	position: new google.maps.LatLng(41.654493,1.692995),
	// 	map: mapa,
	// 	title: 'Servicio y Caridad en tu ciudad ',
	//  	icon: 'iconos/torture.png'	
	// });
		 
	// // InfoWindow para el marcador 1
	// var infowindow1 = new google.maps.InfoWindow({
	// 	content: '<h1> Ayuda a barrer el parque y encuentra el medallon escondido por la justicia!.</h1>' +
	// 			'<p>Parque de la ciudad de Las Choapas veracruz.</p>'+
	// 			'<p>Cuando lo encuentren publiquense con una foto en twitter con el hashtag #LasChoapas y llamen a Telefonos: 923 23 705 78.</p>'  +
	// 			'<a href="http://es.wikipedia.org/wiki/Barcelona" target="_blank">Wikipedia</a>'
	// });
		 
	// // Añadimos un evento de clic al marcador		 
	// google.maps.event.addListener(marker1, 'click', function() {			 
	// 	// Llamamos el método open del InfoWindow
	// 	infowindow1.open(mapa, marker1);
	// });
	// final del marcador 1


// Manejo del mapa con loop para posicionar markadores 
function initialize() {	 
	var latlng = new google.maps.LatLng(41.652393,1.691895);
	var mapOptions = {
		zoom: 8,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
	}
	var map = new google.maps.Map(document.getElementById('map'), mapOptions);
	setMarkers(map, marcadores);
}
	 
var marcadores = [
	//	Tooltip , coordenadas, descripcion de Lugar en el marcador
	['PREMIOS VIP',41.385064,2.173404,'<h1 id="titulo"> Ayuda a barrer el parque y encuentra el medallon escondido por la justicia!.</h1>' +
	 			'<p>Parque de la ciudad de Las Choapas veracruz.</p>'+
	 			'<p>Cuando lo encuentren publiquense con una foto en twitter con el hashtag #LasChoapas y llamen a Telefonos: 923 23 705 78.</p>'  +
	 			'<a href="http://es.wikipedia.org/wiki/Barcelona" target="_blank">Wikipedia</a>'],
	['Tarragona',41.119019,1.245212,'Tarragona'],
	['Girona',41.9794,2.821426,'Girona'],
	['Lleida',41.60034,0.609762,'Lleida'],
];
	 
var infowindow;
function setMarkers(map, marcadores) {
	for (var i = 0; i < marcadores.length; i++) {
		var myLatLng = new google.maps.LatLng(marcadores[i][1], marcadores[i][2]);
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: marcadores[i][0],
		});
		(function(i, marker) {
			google.maps.event.addListener(marker,'click',function() {
				if (!infowindow) {
					infowindow = new google.maps.InfoWindow();
				}
				infowindow.setContent(marcadores[i][3]);
				infowindow.open(map, marker);
			});
		})(i, marker);
	}
};

initialize();
}