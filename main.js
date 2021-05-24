function submit(){
    Username = document.getElementById("user_name").value;
    Email = document.getElementById("e-mail").value;
    Contact = document.getElementById("contact").value;
    Password= document.getElementById("Password").value;
    if(Username == "",Email== "",Contact=="",Password == ""){
        document.getElementById("if_blank").innerHTML = "First Enter Details";
        window.alert("Kindly enter details first!!");
    }
    else{
        localStorage.setItem("user_name",Username);
        localStorage.setItem("email",Email);
        localStorage.setItem("contact no",Contact);
        localStorage.setItem("password",Password);
        window.location = "login.html";
        window.alert("Thank You for Sign Up");
    }
}
function sub(){
    user = localStorage.getItem("user_name");
    passwrd = localStorage.getItem("password")
    username = document.getElementById("Username").value;
    pass = document.getElementById("pass").value;
    if(username == user,passwrd == pass){
        window.location = "oxygen.html";
    }
   else{
        document.getElementById("if_blank").innerHTML = "Incorrect password or username: ";
        window.alert("Incorrect password or username: ");
        document.getElementById("Username").value = "";
        document.getElementById("pass").value = "";
    }   
   if(username == "",pass == ""){
    document.getElementById("if_blank").innerHTML = "First Enter Details";
    window.alert("Kindly enter details first!!");   
    }
}
function logout(){
    window.location = "login.html";
}