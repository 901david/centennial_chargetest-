 
    var locations = [
      ['pikesPeak', 38.84, -105.04, 1],
      ['vail', 41.939670, -87.655167, 2],
      ['flatirons', 42.002707, -87.661236, 3],
     
    ];
     
      function initMap(){
    var map = new google.maps.Map(document.getElementById('mapBox'), {
      zoom: 7,
      center: new google.maps.LatLng(38.84, -105.04),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
  }
