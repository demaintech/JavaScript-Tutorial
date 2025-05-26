function calculate(){

    var myinput = document.getElementById('input');
    var input = myinput.value;
    var txt = document.getElementById('grade');

    // Condition statements

    if (input >= 70){
        // Displays A if the value inputed is greater than or equal to 70
        txt.innerHTML = "A";
    }else if(input >= 50){
        // Displays B is the value inputed is greater than or equal to 50
        txt.innerHTML = "B";
    }else if(input >= 40){
        // Displays C is the value inputed is greater than or equal to 40
        txt.innerHTML = "C";
    }else if(input >= 30){
        // Displays D is the value inputed is greater than or equal to 30
        txt.innerHTML = "D";
    }else if(input >= 25){
        // Displays E is the value inputed is greater than or equal to 25
        txt.innerHTML = "E";
    }else{
        // Displays F is the value inputed is less than 25
        txt.innerHTML = "F";
    }
}




// Comparison Operator.


document.getElementById("userLogin").addEventListener('click', ()=>{ // Adding an event listener to the button using id

    var username = document.getElementById("usernameInput"); // Getting the input id

    var usernameinput = username.value; // Getting the input value

    var loginform = document.getElementById("userform"); // Getting the login form id

    var dahboard = document.getElementById("comparisonMain"); // Getting the user dashboard id (container)

    var errormsg = document.getElementById("errortxt"); // Error message

    if (usernameinput == 'johndoey'){ // Conditional statement checking if the user inputs the correct username thats johndoey

        loginform.style.display = 'none'; // Hide the login form if the user inputed the correct username

        dahboard.style.display = 'flex'; // Display the user dashboard

        document.getElementById("mainusername").innerHTML = usernameinput; // Displaying the value of the input

    } else{ // Executes if the user inputs the wrong username
        errormsg.style.display = 'block'; // The error message is displayed if the user inputs the wrong username
    }
});



