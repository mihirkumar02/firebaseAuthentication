firebase.auth.Auth.Persistence.SESSION;

firebase.auth().onAuthStateChanged(function(user) {
    if(user){
        window.location.href = "./dashboard.html";
    }
});



function login() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;


    firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error){
            var errorCode = error.code;
            var errorMessage = error.message;

            window.alert("Error: " + errorMessage);
        });
}


function signup() {
    
}