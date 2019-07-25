$(document).ready(function() {
if (localStorage.getItem("login")) {
  $('#login_btn').hide();
} else {
  $('#logout_btn').hide();
}
 
 $("#login").click(function() {
    localStorage.setItem("login", true);
    window.location.assign("index.html")
 });

 $('#logout_btn').click(function() {
    localStorage.removeItem("login");
    window.location.assign("customer.html")
 });

 $("#register").click(function() {
    localStorage.setItem("login", true);
    window.location.assign("login.html")
 });

// $("#login").click(function() {


// // var email = document.getElementById('email').value;

// // var password2 = document.getElementById('confirm_password').value;

// var form = new FormData();
// form.append("username",username );
// // form.append("email", email);
// form.append("password", password);
// // form.append("password2", password2);
// console.log(form);
// var settings = {
//   "async": true,
//   "crossDomain": true,
//   "url": "http://127.0.0.1:8000/api/v1/rest-auth/login/",
//   "method": "POST",
//   "processData": false,
//   "contentType": false,
//   "mimeType": "multipart/form-data",
//   "data": form
// }

// $.ajax(settings).done(function (response) {
//   alert(response);
//   console.log(response);
//   window.location.assign("brand.html")
// });
// });

});