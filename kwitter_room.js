// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCn6CY1MZo81ywjG1D1JR5SUQcn86iQHBE",
  authDomain: "kwitter-66066.firebaseapp.com",
  databaseURL: "https://kwitter-66066-default-rtdb.firebaseio.com",
  projectId: "kwitter-66066",
  storageBucket: "kwitter-66066.appspot.com",
  messagingSenderId: "744366542058",
  appId: "1:744366542058:web:c2d41b2e06deddada55b93"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("nameroom", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
