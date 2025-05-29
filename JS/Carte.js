var map = L.map('zoneCarte').setView([10, 20], 2); // permet d'initialiser la carte et de la centrée ou on veut

// Fond de carte OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'// crédit
}).addTo(map);

// Pacifique Nord-Ouest
L.circle([33, 150], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 800000
}).addTo(map).bindPopup(
    "<strong>Pacifique Nord-Ouest</strong><br>" +
    "Espèces touchées :<br>" +
    "- Thon rouge<br>" +
    "- Sardines japonaises<br>" +
    "- Merlu du Pacifique<br>" +
    "- Encornets"
);

//Méditerranée
L.circle([40, 8], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 600000
}).addTo(map).bindPopup(
    "<strong>Méditerranée</strong><br>" +
    "Espèces touchées :<br>" +
    "- Thon rouge<br>" +
    "- Mérou<br>" +
    "- Sardines<br>" +
    "- Dorades"
);

//Océan Indien Ouest
L.circle([-7, 55], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 700000
}).addTo(map).bindPopup(
    "<strong>Océan Indien Ouest</strong><br>" +
    "Espèces touchées :<br>" +
    "- Thon albacore<br>" +
    "- Espadon<br>" +
    "- Mérou brun<br>" +
    "- Langoustes"
);

//Atlantique Nord-Est
L.circle([42, -30], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 900000
}).addTo(map).bindPopup(
    "<strong>Atlantique Nord-Est</strong><br>" +
    "Espèces touchées :<br>" +
    "- Morue<br>" +
    "- Hareng<br>" +
    "- Cabillaud<br>" +
    "- Raie"
);

//Pacifique Sud
L.circle([-30, 170], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 800000
}).addTo(map).bindPopup(
    "<strong>Pacifique Sud</strong><br>" +
    "Espèces touchées :<br>" +
    "- Thon jaune<br>" +
    "- Espadon<br>" +
    "- Espèces coralliennes<br>" +
    "- Calmars"
);
