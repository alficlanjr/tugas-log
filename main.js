document.getElementById("LoginForm").addEventListener
("submit", function(event){
    event.preventDefault();


var username = document.getElementById('username').value;
var password = document.getElementById('password').value;

if(username === 'user' && password ==='123'){
    alert('login.berhasil 👈😊👉');
    window.location ="index.html";

}else {
    alert("login.gagal");
}

});