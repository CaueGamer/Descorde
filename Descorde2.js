const firebaseConfig = {
    apiKey: "AIzaSyCjvo5-C1OAL_pKakECW-bvWCan2w1_OoM",
    authDomain: "descorde-7fc25.firebaseapp.com",
    databaseURL: "https://descorde-7fc25-default-rtdb.firebaseio.com",
    projectId: "descorde-7fc25",
    storageBucket: "descorde-7fc25.appspot.com",
    messagingSenderId: "829022634467",
    appId: "1:829022634467:web:86e19abb6743e2bda320d6"
  };

  firebase.initializeApp(firebaseConfig);

  var UserName = localStorage.getItem("PersonName");

document.getElementById("userName").innerHTML= "Seja bem vindo ao Descorde, " + PersonName + "!"

function addRoom()
{
room_name = document.getElementById("roomName").value;

firebase.database().ref("/").child(room_name).update({
  purpose: "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "index3.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       roomNames = childKey;
       console.log("Nome da Sala - " + roomNames);
      row = "<div class='roomName' id="+roomNames+" onclick='redirectToRoomName(this.id)' >#"+ roomNames +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name);
 window.location = "index3.html";
}

function logout(){
  localStorage.removeItem("PersonName");
  localStorage.removeItem("room_name");
  window.location = "index..html";
}
