

// Logical Operators



// The function keyword is used because it was declared in the html file 

// All variables declared inside  a function is local
function userLogin(){
    var username = document.getElementById("usernameInput");
    var usernameinput = username.value;
    var userpassword = document.getElementById("userpasswordInput");
    var userpasswordinput = userpassword.value;
    var loginform = document.getElementById("userform"); // Getting the login form id

    var dahboard = document.getElementById("comparisonMain"); // Getting the user dashboard id (container)

    if (usernameinput == 'johndoey' && userpasswordinput == 'johndoey112'){

        loginform.style.display = 'none'; // Hide the login form if the user inputed the correct username

        dahboard.style.display = 'flex'; // Displaythe user dashboard

        document.getElementById("mainusername").innerHTML = usernameinput; // Displaying the value of the input
    } else{
         // Executes if the user inputs the wrong username or password
        document.getElementById("errortxt").style.display = 'block'; // The error message is displayed if the user inputs the wrong username or password
    }
}