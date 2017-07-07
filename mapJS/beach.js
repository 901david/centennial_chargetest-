
function initMap() {

   var jerseyShore = {
     info: "Jersey Shore is a Beach in Lycoming County, Pennsylvania. It has an elevation of 189 meters, or 620 feet",
    lat: 41.202017,
    long: -77.264415
   };
 
   var veniceBeach  = {
     info: "Venice Beach is a Beach in Los Angeles County, California. It has an elevation of 1 meters, or 3 feet.",
     lat: 33.9844444444,
     long: -118.471666667
   };
 
   var sunsetBeach = {
     info: "Sunset Beach Treasure Island, FL, USA",
     lat: 27.745003,
     long: -82.759659
   };
 
   var beaches = [
       [jerseyShore .info, jerseyShore .lat, jerseyShore .long, 0],
       [veniceBeach.info, veniceBeach.lat, veniceBeach.long, 1],
       [sunsetBeach.info, sunsetBeach.lat, sunsetBeach.long, 2],
     ];
 
   var map = new google.maps.Map(document.getElementById("mapBox"), {
     zoom: 3,
     center: new google.maps.LatLng(36.778259, -119.417931),
     mapTypeId: google.maps.MapTypeId.ROADMAP
   });
 
   var marker, i;
 
   for (i = 0; i < beaches.length; i++) {
    console.log(beaches[i]);
    marker = new google.maps.Marker({
      position: new google.maps.LatLng(beaches[i][1], beaches[i][2]),
      map: map
    });

    (function(marker, i) {
        // add click event
        google.maps.event.addListener(marker, 'click', function() {
            infowindow = new google.maps.InfoWindow({
                content: beaches[i][0]
            });
            infowindow.open(map, marker);
        });
    })(marker, i);
   }
 }
