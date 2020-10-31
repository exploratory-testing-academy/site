
function myMap() {
    const helsinkiFinland = { lat: 60.192059, lng: 24.945831 };
    var mapProp= {
      center: helsinkiFinland, 
      zoom:2,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker = new google.maps.Marker({
        position: helsinkiFinland,
        icon:'../pin20x.png'
        });
    
    marker.setMap(map);

    var infowindow = new google.maps.InfoWindow({
        content:"Maaret Pyhäjärvi"
      });
      
      google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
      });

    }



