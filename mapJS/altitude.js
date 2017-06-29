initMap()

var altitudeElement = $("#altitudeMap")
 altitude.on('click', function(event) {
          altitude();
        });

 function altitude() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 8,
          center: {lat: 38.8409, lng: -105.0},  // Pikes Peak.
          left: {lat: 39.1178, lng: -106.4},  //Mount Elbert.
          right: {lat: 39.5883, lng: -105.6},  //mount Evans.
          mapTypeId: 'terrain'
        });
        var elevator = new google.maps.ElevationService;
        var infowindow = new google.maps.InfoWindow({map: altitude});

      function displayLocationElevation(location, elevator, infowindow) {
        // Initiate the location request
        elevator.getElevationForLocations({
          'locations': [location]
        }, function(results, status) {
          infowindow.setPosition(location);
          if (status === 'OK') {
            // Retrieve the first result
            if (results[0]) {
              // Open the infowindow indicating the elevation at the clicked position.
              infowindow.setContent('The elevation at this point <br>is ' +
                  results[0].elevation + ' meters.');
            } else {
              infowindow.setContent('No results found');
            }
          } else {
            infowindow.setContent('Elevation service failed due to: ' + status);
          }
        });
      }