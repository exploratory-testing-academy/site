
function myMap() {
    const betterCenter = {lat: 41.015137, lng: 28.979530}
    const helsinkiFinland = {lat: 60.192059, lng: 24.945831 };
    const rotterdamNetherlands = {lat: 51.905445, lng: 4.466637}
    const sydneyAustralia = {lat: -33.865143, lng: 151.209900}
    const oregonUSA = {lat: 43.804134, lng: -120.554199}
    const somewhereGermany = {lat: 51.165691, lng: 10.451526}
    const somewhereUK = {lat: 51.509865, lng: -0.118092}
    const somewhereCroatia = {lat: 43.508133, lng: 16.440193}
    const somewherePortugal = {lat: 41.145821, lng: -8.613985}
    const somewhereBelgium = {lat: 51.260197 , lng: 4.402771}
    var mapProp= {
      center: betterCenter,
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

    var markerRu = new google.maps.Marker({
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

    var markerCarol = new google.maps.Marker({
      position: oregonUSA,
      icon:'img/pin20x.png'
        });

    var markerAlex = new google.maps.Marker({
      position: somewhereGermany,
      icon:'img/pin20x.png'
        });

    var markerAngela = new google.maps.Marker({
      position: oregonUSA,
      icon:'img/pin20x.png'
        });

    var markerParveen = new google.maps.Marker({
      position: somewhereUK,
      icon:'img/pin20x.png'
        });

    var markerIrja = new google.maps.Marker({
      position: somewhereCroatia,
      icon:'img/pin20x.png'
        });

    var markerSergio = new google.maps.Marker({
      position: somewherePortugal,
      icon:'img/pin20x.png'
        });

    var markerZeger = new google.maps.Marker({
      position: somewhereBelgium,
      icon:'img/pin20x.png'
        });

    markerMaaret.setMap(map);
    markerMirja.setMap(map);
    markerElizabeth.setMap(map);
    markerAnneMarie.setMap(map);
    markerCarol.setMap(map);
    markerAlex.setMap(map);
    markerRu.setMap(map);
    markerAngela.setMap(map);
    markerParveen.setMap(map);
    markerIrja.setMap(map);
    markerSergio.setMap(map);
    markerZeger.setMap(map);

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
