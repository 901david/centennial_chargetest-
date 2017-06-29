function initMap() {
     // var trafficElement= $("#trafficMap")
     //    traffic.on('click', function(event) {
     //      traffic();
     //    });

        // function trafficDisplay() {
       var map = new google.maps.Map($("#trafficMap"), {
          zoom: 13,
          center: {lat: 39.7420, lng: -104.9}
        });

        var trafficLayer = new google.maps.TrafficLayer();
        trafficLayer.setMap(map);

        //  var uluru = {lat: -25.363, lng: 131.044};
        // var map = new google.maps.Map($("#trafficMap"), {
        //   zoom: 4,
        //   center: uluru
        // });
        // var marker = new google.maps.Marker({
        //   position: uluru,
        //   map: map
        // });
}
     
    
   