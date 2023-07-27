const firebaseConfig = {
    apiKey: "AIzaSyALBcGiHk9RE0NSaFjH2Cfr67RJ98QacG8",
    authDomain: "chatbook-f94a6.firebaseapp.com",
    databaseURL: "https://chatbook-f94a6-default-rtdb.firebaseio.com",
    projectId: "chatbook-f94a6",
    storageBucket: "chatbook-f94a6.appspot.com",
    messagingSenderId: "254305563075",
    appId: "1:254305563075:web:d17913ff0a7fc71f550d76"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="¡bienvenido "+user_name+"!";
function addRoom() {
    room_name =document.getElementById("room_name").value;
    localStorage.setItem("room_name",room_name);
    firebase.database().ref("/").child(room_name).update({
        proposito:"agregando nombre de cuarto"
    });
    window.location="chatbook_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    //Inicia código
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML+=row;
    //Termina código
    });});}
    getData();
function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name",name)
    window.location= "chatbook_page.html";
}
function logout()
{
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location= "index.html";
    
}
