

 initMap()
     
        var trafficElement= $("#traffic")
        traffic.on('click', function(event) {
          traffic();
        });

        function trafficDisplay() {
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 13,
          center: {lat: 39.7420, lng: -104.9}
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }
    
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCoHyB5pTrRekau2_Kb9aOlYIwjLwXkOBY&callback=initMap">
   