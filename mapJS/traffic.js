

 function initMap() {
        var map = new google.maps.Map(document.getElementById("mapBox"), {
          zoom: 13,
          center: {lat: 39.742043, lng: -104.991531}
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }