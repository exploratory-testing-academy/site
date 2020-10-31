
function myMap() {
    const helsinkiFinland = { lat: 60.192059, lng: 24.945831 };
    const rotterdamNetherlands = { lat: 51.905445, lng: 4.466637}
    const sydneyAustralia = {lat: -33.865143, lng: 151.209900}
    var mapProp= {
      center: helsinkiFinland, 
      zoom:2,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    
    var markerMaaret = new google.maps.Marker({
        position: helsinkiFinland,
        icon:'img/pin20x.png'
        });

    var markerMirja = new google.maps.Marker({
        position: helsinkiFinland, 
        icon:'img/pin20x.png'
        });

    var markerElizabeth = new google.maps.Marker({
      position: rotterdamNetherlands, 
      icon:'img/pin20x.png'
        });

    var markerAnneMarie = new google.maps.Marker({
      position: sydneyAustralia, 
      icon:'img/pin20x.png'
        });
    
    markerMaaret.setMap(map);
    markerMirja.setMap(map);
    markerElizabeth.setMap(map);
    marketAnneMarie.setMap(map);

    var infowindowMaaret = new google.maps.InfoWindow({
        content:"Maaret Pyhäjärvi"
      });
      
    /*var infowindowMirja = new google.maps.InfoWindow({
        content:"Mirja Pyhäjärvi"
      });

    var infowindowElizabeth = new google.maps.InfoWindow({
        content:"Elizabeth Zagroba"
      });
      */

    google.maps.event.addListener(markerMaaret, 'click', function() {
        infowindowMaaret.open(map,markerMaaret);
      });

/*
    google.maps.event.addListener(markerMirja, 'click', function() {
        infowindowMirja.open(map,markerMirja);
      }); 
    
    google.maps.event.addListener(markerElizabeth, 'click', function() {
        infowindowElizabeth.open(map,markerElizabeth);
      });
      */

    }



