function validate() {
  var username = document.getElementById("login").value;
  var password = document.getElementById("password").value;
  var result = document.getElementById("result");

  result.innerHTML = "";
  result.style.backgroundColor = "";

  if (username === "") {
    result.innerHTML = "Please enter your username.";
    result.style.color = "white";
    result.style.backgroundColor = "red";
    return false;
  }

  if (password === "") {
    result.innerHTML = "Please enter your password.";
    result.style.color = "white";
    result.style.backgroundColor = "red";
    return false;
  }
  if(username === "Admin" && password === "Admin"){

  result.innerHTML = "Login successful!";
  result.style.color = "white";
  result.style.backgroundColor = "green";}

  return true;
}
