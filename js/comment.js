// Initialize Firebase
var config = {
  apiKey: "AIzaSyDsYb-UNzHdNFHVtXy5htkfh4Y4mWAJv4M",
  authDomain: "centennialcharge.firebaseapp.com",
  databaseURL: "https://centennialcharge.firebaseio.com",
  projectId: "centennialcharge",
  storageBucket: "centennialcharge.appspot.com",
  messagingSenderId: "284867902243"
};
firebase.initializeApp(config);
var databaseRef = firebase.database().ref(pageValue);
var userName;
var userComment;
$(document).ready(function(){

 $("#commentSubmission").click(function () {
  userName = $("#nameInput").val().trim();
  userComment = $("#commentInput").val().trim();
  if ((userName === "") || (userComment === "")) {
    // Insert modal here
    alert("You did not fill outt he fields");
  }
  else {
  $("#nameInput").val("");
  $("#commentInput").val("");
  databaseRef.push({
    name: userName,
    comment: userComment,
    likes: 0,
    dislikes: 0,
    score: 0
  });
}
});

 databaseRef.on("value", function (snapshot) {
    $("#commentSection").empty();
    console.log(snapshot.val());
    var sortedCommentsFromValueSnapshot = sortComments(snapshot.val());
      
    sortedCommentsFromValueSnapshot.forEach(child => createCommentSection(child));
  });

 function sortComments(snapshotObject)
 {
      var arrayToSort = [];

      Object.keys(snapshotObject).forEach(function(key)
      {
        var snapshotChildObject = snapshotObject[key];
        snapshotChildObject.key = key;
        arrayToSort.push(snapshotChildObject);
      });

      arrayToSort.sort(function(childOne, childTwo) {
        if (childOne.score < childTwo.score) {
          return 1;
        }
        if (childOne.score > childTwo.score) {
          return -1;
        }
        return 0;
      });

      return arrayToSort;
 }

 function createCommentSection(snapshot)
 {
    $("#commentSection").append("<div class='well col-lg-12 flipInX animated'><p><strong>" + snapshot.name + "</strong><em> has this to say about this page:</em></p><br><p>" + snapshot.comment + "</p><br/><br/><br/><div id='likeButt" + snapshot.key + "' class='btn btn-success likeButt' data-snapKey='" + snapshot.key + "'>Like</div>" + "   " + "<span class='someSpace'>" + snapshot.likes + "</span><div id='dislikeButt" + snapshot.key + "' class='btn btn-danger dislikeButt' data-snapKey='" + snapshot.key + "'>Dislike</div>" + "   " +  "<span class='someSpace'>" + snapshot.dislikes + "</span></div>");

      $("#likeButt" + snapshot.key).click(function()
      {
        var snapkey = snapshot.key;
        var updateRef = firebase.database().ref(pageValue + "/" + snapkey);
        var newLikes = snapshot.likes + 1;
        updateRef.update({likes: newLikes, score: newLikes - snapshot.dislikes});
      });
      $("#dislikeButt" + snapshot.key).click(function()
      {
        var snapkey = snapshot.key;
        var updateRef = firebase.database().ref(pageValue + "/" + snapkey);
        var newDislikes = snapshot.dislikes + 1;
        updateRef.update({dislikes: newDislikes, score: snapshot.likes - newDislikes});
      });
 }
});