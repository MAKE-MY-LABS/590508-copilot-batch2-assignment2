var users = [
    { username: "user1", password: "password1" },
    { username: "user2", password: "password2" },
    { username: "user3", password: "password3" }
];

function onRememberMeChange() {
    console.log('onRememberMeChange');
}

function login() {
    console.log('login');
    return false;
}

function resetForm() {
    console.log('resetForm');
}
// 
function validateUser() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var rememberMe = document.getElementById("rememberMe").checked;
    if (username == "" || password == "" || !rememberMe) {
        document.getElementById("message").innerHTML = "Please enter valid credentials";
        document.getElementById("message").style.color = "red";
    } else {
        document.getElementById("message").innerHTML = "";
        var user = users.find(function (user) {
            return user.username == username && user.password == password;
        });
        if (user) {
            document.getElementById("message").innerHTML = "Login successful! Welcome, " + username;
            document.getElementById("message").style.color = "green";
        } else if(!rememberMe){
            document.getElementById("message").innerHTML = "Please select remember me option to login.";
            document.getElementById("message").style.color = "red";
        } else {
            document.getElementById("message").innerHTML = "Invalid credentials. Please try again.";
            document.getElementById("message").style.color = "red";
        }
    }
}
