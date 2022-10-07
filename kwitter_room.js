const firebaseConfig = {
      apiKey: "AIzaSyBtASjuqNjPnuMdRTiCMsa37DxloOFwEFc",
      authDomain: "project-chatapp-58fe1.firebaseapp.com",
      databaseURL: "https://project-chatapp-58fe1-default-rtdb.firebaseio.com",
      projectId: "project-chatapp-58fe1",
      storageBucket: "project-chatapp-58fe1.appspot.com",
      messagingSenderId: "911654624286",
      appId: "1:911654624286:web:5a462159c6c6ab27b6620f"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("MyUser_Name")
    document.getElementById("get_name").innerHTML="Welcome  "+user_name+"😊"


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      var row="<div class='room_name' id="+Room_names+ " onclick='redirect_to_room(this.id)'>"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML+=row
      //End code
      });});}
getData();

function addroom()
{
      var room_name=document.getElementById("room_input").value;
      localStorage.setItem("SaveRoom_name", room_name)

      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      }) 
      window.location="chatpage.html"         
}

function redirect_to_room(r_name)
{
      localStorage.setItem("SaveRoom_name", r_name)
      window.location="chatpage.html"
}
